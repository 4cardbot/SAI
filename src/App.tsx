import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BANK_VERSION, durationForQuestionCount, SECTION_LABELS } from "./constants";
import { completedCount, createAttempt, filterQuestions, isComplete, moveNext, pausePersisted, recordAnswer, recordSkip, scoreAttempt, setPaused, setRunning, subtopicsForSelection, topicsForSection, updateTimer } from "./quiz";
import { randomSeed } from "./random";
import { loadState, saveState } from "./storage";
import { downloadSummary } from "./summary";
import { QUESTION_BANK } from "./data/questionBank";
import { SOURCE_CATALOG_BY_ID } from "./data/sourceCatalog";
import { optionLabelForOptionIndex } from "./answerDisplay";
import type { ActiveAttempt, AttemptMode, PracticeQuestionCount, Question, Response, Section, TestResult, TestSelection } from "./types";

type Screen = "home" | "test" | "result";

function loadInitialState() {
  const state = loadState();
  if (state.activeAttempt?.status === "running") {
    const paused = pausePersisted(state.activeAttempt);
    const next = { ...state, activeAttempt: paused };
    saveState(next);
    return next;
  }
  return state;
}

function formatTime(milliseconds: number): string {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

function optionLabel(index: number): string {
  return String.fromCharCode(65 + index);
}

function displayedOptionLabel(item: { optionOrder: number[] }, optionIndex: number): string {
  return optionLabel(item.optionOrder.indexOf(optionIndex));
}

function modeTitle(mode: AttemptMode | undefined, selection?: TestSelection): string {
  if (!mode || mode === "full") return "Full CBT simulation";
  if (mode === "A1_FULL") return "A1-only · 100-question test";
  if (mode === "filtered") {
    if (!selection) return "Focused question test";
    const countLabel = selection.topic
      ? selection.questionCount === 100 ? "100-question test" : "all matching questions"
      : "100-question test";
    return `${selection.section} · ${selection.topic ?? "All topics"}${selection.subtopic ? ` · ${selection.subtopic}` : ""} · ${countLabel}`;
  }
  return `${mode} · ${SECTION_LABELS[mode].replace(/^Section [A-Z0-9]+ · /, "")}`;
}

function getQuestionMap(): Map<string, Question> {
  return new Map(QUESTION_BANK.map((question) => [question.id, question]));
}

function AppHeader({ onHome }: { onHome?: () => void }) {
  return <header className="site-header"><div className="brand-mark" aria-hidden="true">PA</div><div><p className="eyebrow">Independent preparation tool</p><h1>SAI Performance Analyst</h1></div>{onHome && <button className="icon-button" onClick={onHome} aria-label="Return to home">Home</button>}</header>;
}

function TestSetup({ onStart }: { onStart: (selection: TestSelection) => void }) {
  const [section, setSection] = useState<Section | "">("");
  const [topic, setTopic] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [questionCount, setQuestionCount] = useState<PracticeQuestionCount>(100);
  const availableTopics = useMemo(() => section ? topicsForSection(QUESTION_BANK, section) : [], [section]);
  const isCaseStudySection = section === "C";
  const availableSubtopics = useMemo(() => !isCaseStudySection && section && topic ? subtopicsForSelection(QUESTION_BANK, { section, topic }) : [], [isCaseStudySection, section, topic]);
  const matchingCount = section
    ? topic
      ? filterQuestions(QUESTION_BANK, { section, topic, subtopic: isCaseStudySection ? undefined : subtopic || undefined }).length
      : 100
    : 0;
  const effectiveQuestionCount: PracticeQuestionCount | undefined = topic
    ? matchingCount > 100 ? questionCount : "all"
    : undefined;
  const testCount = !topic
    ? 100
    : effectiveQuestionCount === "all"
      ? matchingCount
      : Math.min(100, matchingCount);

  const selectSection = (nextSection: Section | "") => {
    setSection(nextSection);
    setTopic("");
    setSubtopic("");
    setQuestionCount(100);
  };

  const selectTopic = (nextTopic: string) => {
    setTopic(nextTopic);
    setSubtopic("");
    setQuestionCount(100);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!section || matchingCount === 0) return;
    onStart({ section, topic: topic || undefined, subtopic: isCaseStudySection ? undefined : subtopic || undefined, questionCount: effectiveQuestionCount });
  };

  return <section className="test-setup" id="test-setup">
    <div><p className="eyebrow">New test</p><h3>Choose your question set</h3><p className="muted">A section-only test has 100 random questions. After choosing a topic or subtopic, choose 100 questions or all matching questions.</p></div>
    <form className="setup-form" onSubmit={submit}>
      <label><span>Section</span><select value={section} onChange={(event) => selectSection(event.target.value as Section | "")} required><option value="">Choose a section</option>{(["A1", "A2", "B", "C"] as Section[]).map((item) => <option key={item} value={item}>{item} · {SECTION_LABELS[item].replace(/^Section [A-Z0-9]+ · /, "")}</option>)}</select></label>
      <label><span>Topic <small>(optional)</small></span><select value={topic} onChange={(event) => selectTopic(event.target.value)} disabled={!section}><option value="">All topics · 100 random questions</option>{availableTopics.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      {!isCaseStudySection && <label><span>Subtopic <small>(optional)</small></span><select value={subtopic} onChange={(event) => setSubtopic(event.target.value)} disabled={!topic}><option value="">All subtopics</option>{availableSubtopics.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>}
      {topic && <label><span>Question count</span><select value={effectiveQuestionCount === "all" ? "all" : "100"} onChange={(event) => setQuestionCount(event.target.value === "all" ? "all" : 100)}><option value="100" disabled={matchingCount < 100}>100 random questions</option><option value="all">All {matchingCount} matching questions</option></select></label>}
      <div className="setup-summary" aria-live="polite">{matchingCount > 0 ? <><strong>{!topic ? "100 random questions" : effectiveQuestionCount === "all" ? `All ${matchingCount} questions` : "100 random questions"}</strong><span>{formatTime(durationForQuestionCount(testCount))} allocated at the standard pace</span></> : <span>Select a section to preview the test size and time.</span>}</div>
      <button className="primary-button" type="submit" disabled={matchingCount === 0}>Start test</button>
    </form>
  </section>;
}

function HomeScreen({ state, onStart, onStartFull, onResume, onPrepareNewTest, onDownload }: { state: ReturnType<typeof loadState>; onStart: (selection: TestSelection) => void; onStartFull: () => void; onResume: () => void; onPrepareNewTest: () => void; onDownload: () => void }) {
  const active = state.activeAttempt;
  const result = state.latestResult;
  return <main className="page-shell home-shell">
    <section className="hero-card">
      <div><p className="eyebrow">Physiotherapy · Performance Analyst</p><h2>Build confidence one topic at a time.</h2><p className="hero-copy">Choose a section for a 100-question random test, or select a topic and optionally narrow Sections A1, A2 or B to a subtopic. For a focused selection, choose 100 questions or all matching questions. Practice every selected question with immediate explanations and a saved attempt you can resume. Section C is organized as complete theme-based case studies.</p></div>
      <div className="hero-score"><span>All</span><small>matching</small><span>72s</span><small>per question</small></div>
    </section>
    <TestSetup onStart={onStart} />
    <div className="setup-alternative"><span>Prefer the official 100-question mix?</span><button className="secondary-button compact" onClick={onStartFull}>Start full CBT simulation</button></div>
    <section className="action-card">
      {active ? <><div><p className="eyebrow">Saved attempt · {modeTitle(active.mode, active.selection)}</p><h3>{completedCount(active)} of {active.questions.length} questions completed</h3><p className="muted">Your attempt is paused and will resume exactly where you left it. Starting a new test below will replace it after confirmation.</p></div><button className="primary-button" onClick={onResume}>Resume practice</button></> : result ? <><div><p className="eyebrow">Latest result · {modeTitle(result.mode, result.selection)}</p><h3>{result.score.toFixed(2)} / {result.total}</h3><p className="muted">{result.correctCount} correct · {result.wrongCount} wrong · {result.skippedCount} skipped</p></div><div className="button-row"><button className="secondary-button" onClick={onDownload}>Download summary</button><button className="primary-button" onClick={onPrepareNewTest}>Choose another bank</button></div></> : <><div><p className="eyebrow">Question bank · v{BANK_VERSION}</p><h3>Ready for a focused test?</h3><p className="muted">Use the selectors above to create a test from the exact questions you want to practice.</p></div></>}
    </section>
    <section className="disclaimer"><strong>Independent preparation tool.</strong> This is not an official Sports Authority of India application. Wrong answers carry −0.25 marks; skipped answers carry 0.</section>
    <div className="home-footer"><span>Progress is saved in this browser.</span></div>
  </main>;
}

function TestScreen({ attempt, questionMap, onPause, onResume, onAnswer, onSkip, onNext, onSubmit }: { attempt: ActiveAttempt; questionMap: Map<string, Question>; onPause: () => void; onResume: () => void; onAnswer: (selected: number) => void; onSkip: () => void; onNext: () => void; onSubmit: () => void }) {
  const item = attempt.questions[attempt.currentIndex];
  const question = questionMap.get(item.questionId);
  if (!question) return <main className="page-shell"><section className="error-card">This question is missing from the current bank. Return Home and start a new test.</section></main>;
  const response: Response = attempt.responses[question.id] ?? { status: "unanswered" };
  const source = SOURCE_CATALOG_BY_ID.get(question.sourceId);
  const revealed = response.status !== "unanswered";
  const completed = completedCount(attempt);
  const lastQuestion = attempt.currentIndex === attempt.questions.length - 1;
  const percent = Math.round((completed / attempt.questions.length) * 100);
  const timerWarning = attempt.remainingMs < 10 * 60 * 1000;
  return <main className="test-shell">
    <div className="test-topbar"><div><p className="eyebrow">{attempt.mode === "filtered" ? "Focused question test" : attempt.mode === "full" || !attempt.mode ? "Full CBT simulation" : attempt.mode === "A1_FULL" ? "A1-only full bank" : "Section bank practice"}</p><h2>{modeTitle(attempt.mode, attempt.selection)}</h2></div><div className="test-controls"><div className={`timer ${timerWarning ? "warning" : ""}`} aria-live="polite"><span className="timer-dot" />{formatTime(attempt.remainingMs)}</div>{attempt.status === "running" ? <button className="secondary-button compact" onClick={onPause}>Pause</button> : <button className="primary-button compact" onClick={onResume}>Resume</button>}</div></div>
    <div className="progress-row"><div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div><span>{completed}/{attempt.questions.length} completed</span></div>
    <section className="question-card">
      <div className="question-meta"><span>Question {attempt.currentIndex + 1} of {attempt.questions.length}</span><span className={`section-badge ${question.section.toLowerCase()}`}>{question.section}</span><span className={`difficulty ${question.difficulty}`}>{question.difficulty}</span></div>
      {question.passage && <div className="passage-box"><p className="eyebrow">Case study · {question.passageId}</p><p>{question.passage}</p></div>}
      <h3 className="question-text">{question.text}</h3>
      <div className="options" role="radiogroup" aria-label="Answer options">{item.optionOrder.map((optionIndex, displayedIndex) => {
        const isSelected = response.selected === optionIndex;
        const isCorrect = question.correct === optionIndex;
        const optionClass = revealed ? `${isCorrect ? "correct" : ""} ${isSelected && !isCorrect ? "incorrect" : ""}` : "";
        return <button key={optionIndex} className={`option-button ${optionClass}`} disabled={revealed || attempt.status === "paused"} onClick={() => onAnswer(optionIndex)} role="radio" aria-checked={isSelected}><span className="option-label">{optionLabel(displayedIndex)}</span><span>{question.options[optionIndex]}</span>{revealed && isCorrect && <span className="option-result">Correct</span>}{revealed && isSelected && !isCorrect && <span className="option-result">Your answer</span>}</button>;
      })}</div>
      {!revealed && <div className="question-actions"><button className="text-button" disabled={attempt.status === "paused"} onClick={onSkip}>Skip question</button><span className="muted">You cannot return to a previous question.</span></div>}
      {revealed && <div className={`feedback ${response.status === "skipped" ? "skipped" : response.selected === question.correct ? "positive" : "negative"}`}><div><strong>{response.status === "skipped" ? "Skipped" : response.selected === question.correct ? "Correct" : "Incorrect"}</strong><p><strong>Correct answer:</strong> {optionLabelForOptionIndex(item.optionOrder, question.correct)}. {question.options[question.correct]}</p><p>{question.explanation}</p>{source && <p className="source-note"><strong>Source:</strong> {source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a> : source.title}</p>}</div></div>}
      {revealed && <div className="next-row"><button className="primary-button" disabled={attempt.status === "paused"} onClick={lastQuestion && isComplete(attempt) ? onSubmit : onNext}>{lastQuestion && isComplete(attempt) ? "Submit test" : "Next question"}</button>{attempt.status === "paused" ? <span className="muted">Resume the timer to continue.</span> : lastQuestion && !isComplete(attempt) && <span className="muted">Complete the remaining questions before submitting.</span>}</div>}
    </section>
  </main>;
}

function ResultScreen({ result, onDownload, onStart }: { result: TestResult; onDownload: () => void; onStart: () => void }) {
  const items = result.items.filter((item) => item.status !== "correct");
  return <main className="page-shell result-shell"><section className="result-hero"><div><p className="eyebrow">{modeTitle(result.mode, result.selection)} complete</p><h2>Practice complete.</h2><p className="muted">Review the decisions that cost marks. Correctly answered questions are intentionally omitted from this review.</p></div><div className="big-score"><span>{result.score.toFixed(2)}</span><small>/ {result.total}</small></div></section><section className="result-stats"><div><strong>{result.correctCount}</strong><span>Correct</span></div><div><strong>{result.wrongCount}</strong><span>Wrong</span></div><div><strong>{result.skippedCount}</strong><span>Skipped</span></div><div><strong>−{result.negativeMarks.toFixed(2)}</strong><span>Negative marks</span></div></section><section className="section-results"><h3>Section performance</h3><div className="section-result-grid">{Object.entries(result.sectionScores).map(([section, score]) => <div key={section}><span className={`section-badge ${section.toLowerCase()}`}>{section}</span><strong>{score.score.toFixed(2)}</strong><small>{score.correct} correct · {score.wrong} wrong · {score.skipped} skipped</small></div>)}</div></section><div className="result-actions"><button className="secondary-button" onClick={onDownload}>Download summary</button><button className="primary-button" onClick={onStart}>Choose another bank</button></div><section className="review-list"><h3>Wrong and skipped questions ({items.length})</h3>{items.length === 0 ? <div className="empty-card">Perfect score. There are no review items.</div> : items.map((item) => <article className={`review-item ${item.status}`} key={item.questionId}>{item.passage && <div className="passage-box"><p className="eyebrow">Case study · {item.passageId}</p><p>{item.passage}</p></div>}<div className="review-heading"><span className="section-badge">{item.section}</span><strong>{item.status === "wrong" ? "Wrong" : "Skipped"}</strong></div><h4>{item.text}</h4><p><strong>Your answer:</strong> {item.selected === undefined ? "Skipped" : `${displayedOptionLabel(item, item.selected)}. ${item.options[item.selected]}`}</p><p><strong>Correct answer:</strong> {displayedOptionLabel(item, item.correct)}. {item.options[item.correct]}</p><p><strong>Explanation:</strong> {item.explanation}</p></article>)}</section><p className="disclaimer">Independent preparation tool; not an official SAI document.</p></main>;
}

export default function App() {
  const [state, setState] = useState(loadInitialState);
  const [screen, setScreen] = useState<Screen>(() => state.activeAttempt ? "home" : state.latestResult ? "result" : "home");
  const stateRef = useRef(state);
  const questionMap = useMemo(getQuestionMap, []);
  const attempt = state.activeAttempt;
  const result = state.latestResult;

  const commit = useCallback((next: ReturnType<typeof loadState>) => {
    stateRef.current = next;
    saveState(next);
    setState(next);
  }, []);

  useEffect(() => {
    if (screen !== "test" || !attempt || attempt.status !== "running") return;
    const timer = window.setInterval(() => {
      setState((current) => {
        if (!current.activeAttempt || current.activeAttempt.status !== "running") return current;
        const updated = updateTimer(current.activeAttempt);
        if (updated.remainingMs <= 0) {
          const expired = setPaused(updated);
          const submitted = scoreAttempt(expired, QUESTION_BANK);
          const next = { ...current, activeAttempt: null, latestResult: submitted };
          stateRef.current = next;
          saveState(next);
          window.setTimeout(() => setScreen("result"), 0);
          return next;
        }
        const next = { ...current, activeAttempt: updated };
        stateRef.current = next;
        saveState(next);
        return next;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [screen, attempt?.status]);

  const pauseCurrentAttempt = useCallback(() => {
    const current = stateRef.current;
    if (!current.activeAttempt || current.activeAttempt.status !== "running") return;
    const next = { ...current, activeAttempt: setPaused(current.activeAttempt) };
    stateRef.current = next;
    saveState(next);
    setState(next);
  }, []);

  useEffect(() => {
    const onVisibility = () => { if (document.visibilityState === "hidden") pauseCurrentAttempt(); };
    window.addEventListener("pagehide", pauseCurrentAttempt);
    window.addEventListener("beforeunload", pauseCurrentAttempt);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", pauseCurrentAttempt);
      window.removeEventListener("beforeunload", pauseCurrentAttempt);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [pauseCurrentAttempt]);

  useEffect(() => {
    if (screen !== "test") return;
    window.history.pushState({ saiMockTest: true }, "", window.location.href);
    const handleBack = () => {
      if (window.confirm("Leave this test? Your current attempt will be paused and saved.")) {
        pauseCurrentAttempt();
        setScreen("home");
      } else {
        window.history.pushState({ saiMockTest: true }, "", window.location.href);
      }
    };
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [pauseCurrentAttempt, screen]);

  const startTest = (selection: TestSelection) => {
    if (state.activeAttempt && !window.confirm("Starting a new test will permanently clear your saved attempt. Continue?")) return;
    const created = setRunning(createAttempt(QUESTION_BANK, new Date(), randomSeed(), "filtered", selection));
    commit({ ...state, activeAttempt: created, latestResult: null });
    setScreen("test");
  };

  const startFullTest = () => {
    if (state.activeAttempt && !window.confirm("Starting a new test will permanently clear your saved attempt. Continue?")) return;
    const created = setRunning(createAttempt(QUESTION_BANK, new Date(), randomSeed(), "full"));
    commit({ ...state, activeAttempt: created, latestResult: null });
    setScreen("test");
  };

  const prepareNewTest = () => {
    if (!state.latestResult) return;
    commit({ ...state, activeAttempt: null, latestResult: null });
    setScreen("home");
  };

  const resumeTest = () => {
    if (!attempt) return;
    commit({ ...state, activeAttempt: setRunning(attempt) });
    setScreen("test");
  };

  const updateAttempt = (nextAttempt: ActiveAttempt) => commit({ ...state, activeAttempt: nextAttempt });
  const pauseTest = () => { if (attempt) updateAttempt(setPaused(attempt)); };
  const answer = (selected: number) => { if (!attempt) return; const current = attempt.questions[attempt.currentIndex]; if (attempt.responses[current.questionId]?.status !== "unanswered") return; updateAttempt(recordAnswer(attempt, current.questionId, selected)); };
  const skip = () => { if (!attempt) return; const current = attempt.questions[attempt.currentIndex]; if (attempt.responses[current.questionId]?.status !== "unanswered") return; updateAttempt(recordSkip(attempt, current.questionId)); };
  const next = () => { if (attempt) updateAttempt(moveNext(attempt)); };
  const submit = () => {
    if (!attempt || !isComplete(attempt)) return;
    if (!window.confirm("Submit this test and calculate your final score?")) return;
    const submitted = scoreAttempt(attempt, QUESTION_BANK);
    commit({ ...state, activeAttempt: null, latestResult: submitted });
    setScreen("result");
  };
  const download = () => { if (result) downloadSummary(result); };

  const leaveTest = () => { pauseCurrentAttempt(); setScreen("home"); };
  return <div className="app"><AppHeader onHome={screen === "test" ? leaveTest : undefined} />{screen === "home" && <HomeScreen state={state} onStart={startTest} onStartFull={startFullTest} onResume={resumeTest} onPrepareNewTest={prepareNewTest} onDownload={download} />}{screen === "test" && attempt && <TestScreen attempt={attempt} questionMap={questionMap} onPause={pauseTest} onResume={resumeTest} onAnswer={answer} onSkip={skip} onNext={next} onSubmit={submit} />}{screen === "result" && result && <ResultScreen result={result} onDownload={download} onStart={prepareNewTest} />}</div>;
}
