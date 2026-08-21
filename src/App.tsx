import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BANK_VERSION, durationForQuestionCount, SECTION_LABELS } from "./constants";
import { completedCount, createAttempt, filterQuestions, isComplete, moveNext, pausePersisted, recordAnswer, recordSkip, scoreAttempt, setPaused, setRunning, subtopicsForSelection, topicsForSection, updateTimer } from "./quiz";
import { randomSeed } from "./random";
import { loadState, saveState } from "./storage";
import { downloadSummary } from "./summary";
import { FINAL_TEST_BANKS, QUESTION_BANK } from "./data/questionBank";
import { SOURCE_CATALOG_BY_ID } from "./data/sourceCatalog";
import { optionLabelForOptionIndex } from "./answerDisplay";
import type { ActiveAttempt, AttemptMode, FinalTestId, PersistedState, PracticeQuestionCount, Question, Response, Section, TestResult, TestSelection, TestSlot } from "./types";

type Screen = "home" | "test" | "result";

function attemptForSlot(state: PersistedState, slot: TestSlot): ActiveAttempt | null {
  return slot === "final" ? state.finalAttempt : state.practiceAttempt;
}

function resultForSlot(state: PersistedState, slot: TestSlot): TestResult | null {
  return slot === "final" ? state.finalTestResult : state.latestResult;
}

function withAttempt(state: PersistedState, slot: TestSlot, attempt: ActiveAttempt | null): PersistedState {
  if (slot === "final") return { ...state, finalAttempt: attempt, activeSlot: attempt ? "final" : state.activeSlot === "final" ? null : state.activeSlot };
  return { ...state, practiceAttempt: attempt, activeSlot: attempt ? "practice" : state.activeSlot === "practice" ? null : state.activeSlot };
}

function withResult(state: PersistedState, slot: TestSlot, result: TestResult | null): PersistedState {
  return slot === "final" ? { ...state, finalTestResult: result } : { ...state, latestResult: result };
}

function bankForSlot(slot: TestSlot, finalTestId: FinalTestId = 1): Question[] {
  return slot === "final" ? FINAL_TEST_BANKS[finalTestId] : QUESTION_BANK;
}

function loadInitialState(): PersistedState {
  const state = loadState();
  let next = state;
  (["practice", "final"] as TestSlot[]).forEach((slot) => {
    const attempt = attemptForSlot(next, slot);
    if (attempt?.status === "running") next = withAttempt(next, slot, pausePersisted(attempt));
  });
  if (next !== state) saveState(next);
  return next;
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

function modeTitle(mode: AttemptMode | undefined, selection?: TestSelection, finalTestId?: FinalTestId): string {
  if (!mode || mode === "full") return "Full CBT simulation";
  if (mode === "final") return `Final CBT Test ${finalTestId ?? 1}`;
  if (mode === "A1_FULL") return "A1-only · 100-question test";
  if (mode === "filtered") {
    if (!selection) return "Focused question test";
    const countLabel = selection.topic ? selection.questionCount === 100 ? "100-question test" : "all matching questions" : "100-question test";
    return selection.section + " · " + (selection.topic ?? "All topics") + (selection.subtopic ? " · " + selection.subtopic : "") + " · " + countLabel;
  }
  return mode + " · " + SECTION_LABELS[mode].replace(/^Section [A-Z0-9]+ · /, "");
}

function getQuestionMap(): Map<string, Question> {
  return new Map([...QUESTION_BANK, ...Object.values(FINAL_TEST_BANKS).flat()].map((question) => [question.id, question]));
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
  const matchingCount = section ? topic ? filterQuestions(QUESTION_BANK, { section, topic, subtopic: isCaseStudySection ? undefined : subtopic || undefined }).length : 100 : 0;
  const effectiveQuestionCount: PracticeQuestionCount | undefined = topic ? matchingCount > 100 ? questionCount : "all" : undefined;
  const testCount = !topic ? 100 : effectiveQuestionCount === "all" ? matchingCount : Math.min(100, matchingCount);
  const selectSection = (nextSection: Section | "") => { setSection(nextSection); setTopic(""); setSubtopic(""); setQuestionCount(100); };
  const selectTopic = (nextTopic: string) => { setTopic(nextTopic); setSubtopic(""); setQuestionCount(100); };
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); if (!section || matchingCount === 0) return; onStart({ section, topic: topic || undefined, subtopic: isCaseStudySection ? undefined : subtopic || undefined, questionCount: effectiveQuestionCount }); };
  return <section className="test-setup" id="test-setup">
    <div><p className="eyebrow">New practice test</p><h3>Choose your question set</h3><p className="muted">A section-only test has 100 random questions. After choosing a topic or subtopic, choose 100 questions or all matching questions.</p></div>
    <form className="setup-form" onSubmit={submit}>
      <label><span>Section</span><select value={section} onChange={(event) => selectSection(event.target.value as Section | "")} required><option value="">Choose a section</option>{(["A1", "A2", "B", "C"] as Section[]).map((item) => <option key={item} value={item}>{item} · {SECTION_LABELS[item].replace(/^Section [A-Z0-9]+ · /, "")}</option>)}</select></label>
      <label><span>Topic <small>(optional)</small></span><select value={topic} onChange={(event) => selectTopic(event.target.value)} disabled={!section}><option value="">All topics · 100 random questions</option>{availableTopics.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      {!isCaseStudySection && <label><span>Subtopic <small>(optional)</small></span><select value={subtopic} onChange={(event) => setSubtopic(event.target.value)} disabled={!topic}><option value="">All subtopics</option>{availableSubtopics.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>}
      {topic && <label><span>Question count</span><select value={effectiveQuestionCount === "all" ? "all" : "100"} onChange={(event) => setQuestionCount(event.target.value === "all" ? "all" : 100)}><option value="100" disabled={matchingCount < 100}>100 random questions</option><option value="all">All {matchingCount} matching questions</option></select></label>}
      <div className="setup-summary" aria-live="polite">{matchingCount > 0 ? <><strong>{!topic ? "100 random questions" : effectiveQuestionCount === "all" ? "All " + matchingCount + " questions" : "100 random questions"}</strong><span>{formatTime(durationForQuestionCount(testCount))} allocated at the standard pace</span></> : <span>Select a section to preview the test size and time.</span>}</div>
      <button className="primary-button" type="submit" disabled={matchingCount === 0}>Start practice test</button>
    </form>
  </section>;
}

function SavedAttemptCard({ slot, attempt, onResume }: { slot: TestSlot; attempt: ActiveAttempt; onResume: (slot: TestSlot) => void }) {
  return <section className="action-card"><div><p className="eyebrow">Saved {slot === "final" ? "final" : "practice"} attempt · {modeTitle(attempt.mode, attempt.selection, attempt.finalTestId)}</p><h3>{completedCount(attempt)} of {attempt.questions.length} questions completed</h3><p className="muted">This attempt is paused and can be resumed without affecting the other test slot.</p></div><button className="primary-button" onClick={() => onResume(slot)}>Resume {slot === "final" ? "final test" : "practice"}</button></section>;
}

function ResultCard({ slot, result, onDownload, onPrepare }: { slot: TestSlot; result: TestResult; onDownload: (result: TestResult) => void; onPrepare: (slot: TestSlot) => void }) {
  return <section className="action-card"><div><p className="eyebrow">{slot === "final" ? "Final-test result" : "Latest practice result"} · {modeTitle(result.mode, result.selection, result.finalTestId)}</p><h3>{result.score.toFixed(2)} / {result.total}</h3><p className="muted">{result.correctCount} correct · {result.wrongCount} wrong · {result.skippedCount} skipped</p></div><div className="button-row"><button className="secondary-button" onClick={() => onDownload(result)}>Download summary</button><button className="primary-button" onClick={() => onPrepare(slot)}>Start another {slot === "final" ? "final test" : "practice test"}</button></div></section>;
}

function HomeScreen({ state, onStart, onStartFull, onStartFinal, onResume, onPrepare, onDownload }: { state: PersistedState; onStart: (selection: TestSelection) => void; onStartFull: () => void; onStartFinal: (finalTestId: FinalTestId) => void; onResume: (slot: TestSlot) => void; onPrepare: (slot: TestSlot) => void; onDownload: (result: TestResult) => void }) {
  return <main className="page-shell home-shell">
    <section className="hero-card"><div><p className="eyebrow">Physiotherapy · Performance Analyst</p><h2>Build confidence one topic at a time.</h2><p className="hero-copy">Practice from the section banks, or take one of four fixed unseen final CBTs when you are ready. Ordinary practice and the final test slot are saved separately in this browser.</p></div><div className="hero-score"><span>100</span><small>final questions</small><span>72s</span><small>per question</small></div></section>
    <TestSetup onStart={onStart} />
    <div className="setup-alternative"><span>Prefer the official 100-question mix?</span><button className="secondary-button compact" onClick={onStartFull}>Start full CBT simulation</button></div>
    <section className="action-card final-test-card"><div><p className="eyebrow">Fixed readiness checks</p><h3>Start Final Test</h3><p className="muted">Choose one of four separate 100-question sets · 120 minutes · A1/A2/B/C = 32/8/40/20. Each set is separate from the ordinary practice banks.</p></div><div className="button-row final-test-buttons">{([1, 2, 3, 4] as FinalTestId[]).map((finalTestId) => <button key={finalTestId} className="primary-button" onClick={() => onStartFinal(finalTestId)}>Start Final Test {finalTestId}</button>)}</div></section>
    {state.practiceAttempt && <SavedAttemptCard slot="practice" attempt={state.practiceAttempt} onResume={onResume} />}
    {state.finalAttempt && <SavedAttemptCard slot="final" attempt={state.finalAttempt} onResume={onResume} />}
    {!state.practiceAttempt && state.latestResult && <ResultCard slot="practice" result={state.latestResult} onDownload={onDownload} onPrepare={onPrepare} />}
    {!state.finalAttempt && state.finalTestResult && <ResultCard slot="final" result={state.finalTestResult} onDownload={onDownload} onPrepare={onPrepare} />}
    {!state.practiceAttempt && !state.finalAttempt && !state.latestResult && !state.finalTestResult && <section className="action-card"><div><p className="eyebrow">Question bank · v{BANK_VERSION}</p><h3>Ready for a focused test?</h3><p className="muted">Use the selectors above for ordinary practice, or reserve the fixed final set for your readiness check.</p></div></section>}
    <section className="disclaimer"><strong>Independent preparation tool.</strong> This is not an official Sports Authority of India application. Wrong answers carry −0.25 marks; skipped answers carry 0.</section><div className="home-footer"><span>Progress is saved in this browser.</span></div>
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
  const modeLabel = attempt.mode === "final" ? `Fixed unseen final test ${attempt.finalTestId ?? 1}` : attempt.mode === "filtered" ? "Focused question test" : attempt.mode === "full" || !attempt.mode ? "Full CBT simulation" : attempt.mode === "A1_FULL" ? "A1-only full bank" : "Section bank practice";
  return <main className="test-shell">
    <div className="test-topbar"><div><p className="eyebrow">{modeLabel}</p><h2>{modeTitle(attempt.mode, attempt.selection, attempt.finalTestId)}</h2></div><div className="test-controls"><div className={"timer " + (timerWarning ? "warning" : "")} aria-live="polite"><span className="timer-dot" />{formatTime(attempt.remainingMs)}</div>{attempt.status === "running" ? <button className="secondary-button compact" onClick={onPause}>Pause</button> : <button className="primary-button compact" onClick={onResume}>Resume</button>}</div></div>
    <div className="progress-row"><div className="progress-track"><div className="progress-fill" style={{ width: percent + "%" }} /></div><span>{completed}/{attempt.questions.length} completed</span></div>
    <section className="question-card"><div className="question-meta"><span>Question {attempt.currentIndex + 1} of {attempt.questions.length}</span><span className={"section-badge " + question.section.toLowerCase()}>{question.section}</span><span className={"difficulty " + question.difficulty}>{question.difficulty}</span></div>
      {question.passage && <div className="passage-box"><p className="eyebrow">Case study · {question.passageId}</p><p>{question.passage}</p></div>}
      <h3 className="question-text">{question.text}</h3>
      <div className="options" role="radiogroup" aria-label="Answer options">{item.optionOrder.map((optionIndex, displayedIndex) => {
        const isSelected = response.selected === optionIndex;
        const isCorrect = question.correct === optionIndex;
        const optionClass = revealed ? (isCorrect ? "correct " : "") + (isSelected && !isCorrect ? "incorrect" : "") : "";
        return <button key={optionIndex} className={"option-button " + optionClass} disabled={revealed || attempt.status === "paused"} onClick={() => onAnswer(optionIndex)} role="radio" aria-checked={isSelected}><span className="option-label">{optionLabel(displayedIndex)}</span><span>{question.options[optionIndex]}</span>{revealed && isCorrect && <span className="option-result">Correct</span>}{revealed && isSelected && !isCorrect && <span className="option-result">Your answer</span>}</button>;
      })}</div>
      {!revealed && <div className="question-actions"><button className="text-button" disabled={attempt.status === "paused"} onClick={onSkip}>Skip question</button><span className="muted">You cannot return to a previous question.</span></div>}
      {revealed && <div className={"feedback " + (response.status === "skipped" ? "skipped" : response.selected === question.correct ? "positive" : "negative")}><div><strong>{response.status === "skipped" ? "Skipped" : response.selected === question.correct ? "Correct" : "Incorrect"}</strong><p><strong>Correct answer:</strong> {optionLabelForOptionIndex(item.optionOrder, question.correct)}. {question.options[question.correct]}</p><p>{question.explanation}</p>{source && <p className="source-note"><strong>Source:</strong> {source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a> : source.title}</p>}</div></div>}
      {revealed && <div className="next-row"><button className="primary-button" disabled={attempt.status === "paused"} onClick={lastQuestion && isComplete(attempt) ? onSubmit : onNext}>{lastQuestion && isComplete(attempt) ? "Submit test" : "Next question"}</button>{attempt.status === "paused" ? <span className="muted">Resume the timer to continue.</span> : lastQuestion && !isComplete(attempt) && <span className="muted">Complete the remaining questions before submitting.</span>}</div>}
    </section>
  </main>;
}

function ResultScreen({ result, onDownload, onStart }: { result: TestResult; onDownload: () => void; onStart: () => void }) {
  const items = result.items.filter((item) => item.status !== "correct");
  return <main className="page-shell result-shell"><section className="result-hero"><div><p className="eyebrow">{modeTitle(result.mode, result.selection, result.finalTestId)} complete</p><h2>{result.mode === "final" ? "Final test complete." : "Practice complete."}</h2><p className="muted">Review the decisions that cost marks. Correctly answered questions are intentionally omitted from this review.</p></div><div className="big-score"><span>{result.score.toFixed(2)}</span><small>/ {result.total}</small></div></section><section className="result-stats"><div><strong>{result.correctCount}</strong><span>Correct</span></div><div><strong>{result.wrongCount}</strong><span>Wrong</span></div><div><strong>{result.skippedCount}</strong><span>Skipped</span></div><div><strong>−{result.negativeMarks.toFixed(2)}</strong><span>Negative marks</span></div></section><section className="section-results"><h3>Section performance</h3><div className="section-result-grid">{Object.entries(result.sectionScores).map(([section, score]) => <div key={section}><span className={"section-badge " + section.toLowerCase()}>{section}</span><strong>{score.score.toFixed(2)}</strong><small>{score.correct} correct · {score.wrong} wrong · {score.skipped} skipped</small></div>)}</div></section><div className="result-actions"><button className="secondary-button" onClick={onDownload}>Download summary</button><button className="primary-button" onClick={onStart}>Return Home</button></div><section className="review-list"><h3>Wrong and skipped questions ({items.length})</h3>{items.length === 0 ? <div className="empty-card">Perfect score. There are no review items.</div> : items.map((item) => <article className={"review-item " + item.status} key={item.questionId}>{item.passage && <div className="passage-box"><p className="eyebrow">Case study · {item.passageId}</p><p>{item.passage}</p></div>}<div className="review-heading"><span className="section-badge">{item.section}</span><strong>{item.status === "wrong" ? "Wrong" : "Skipped"}</strong></div><h4>{item.text}</h4><p><strong>Your answer:</strong> {item.selected === undefined ? "Skipped" : displayedOptionLabel(item, item.selected) + ". " + item.options[item.selected]}</p><p><strong>Correct answer:</strong> {displayedOptionLabel(item, item.correct) + ". " + item.options[item.correct]}</p><p><strong>Explanation:</strong> {item.explanation}</p></article>)}</section><p className="disclaimer">Independent preparation tool; not an official SAI document.</p></main>;
}

export default function App() {
  const [state, setState] = useState(loadInitialState);
  const [resultSlot, setResultSlot] = useState<TestSlot>(() => state.finalTestResult && !state.latestResult ? "final" : "practice");
  const [screen, setScreen] = useState<Screen>(() => state.activeSlot ? "home" : state.finalTestResult && !state.latestResult ? "result" : state.latestResult ? "result" : "home");
  const stateRef = useRef(state);
  const questionMap = useMemo(getQuestionMap, []);
  const activeSlot = state.activeSlot;
  const attempt = activeSlot ? attemptForSlot(state, activeSlot) : null;
  const result = resultForSlot(state, resultSlot);
  const commit = useCallback((next: PersistedState) => { stateRef.current = next; saveState(next); setState(next); }, []);

  useEffect(() => {
    if (screen !== "test" || !activeSlot || !attempt || attempt.status !== "running") return;
    const timer = window.setInterval(() => {
      setState((current) => {
        const slot = current.activeSlot;
        const currentAttempt = slot ? attemptForSlot(current, slot) : null;
        if (!slot || !currentAttempt || currentAttempt.status !== "running") return current;
        const updated = updateTimer(currentAttempt);
        if (updated.remainingMs <= 0) {
          const expired = setPaused(updated);
          const submitted = scoreAttempt(expired, bankForSlot(slot, expired.finalTestId));
          let next = withAttempt(current, slot, null);
          next = withResult(next, slot, submitted);
          stateRef.current = next;
          saveState(next);
          setResultSlot(slot);
          window.setTimeout(() => setScreen("result"), 0);
          return next;
        }
        const next = withAttempt(current, slot, updated);
        stateRef.current = next;
        saveState(next);
        return next;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [screen, activeSlot, attempt?.status]);

  const pauseCurrentAttempt = useCallback(() => {
    const current = stateRef.current;
    if (!current.activeSlot) return;
    const currentAttempt = attemptForSlot(current, current.activeSlot);
    if (!currentAttempt || currentAttempt.status !== "running") return;
    const next = withAttempt(current, current.activeSlot, setPaused(currentAttempt));
    stateRef.current = next;
    saveState(next);
    setState(next);
  }, []);

  useEffect(() => {
    const onVisibility = () => { if (document.visibilityState === "hidden") pauseCurrentAttempt(); };
    window.addEventListener("pagehide", pauseCurrentAttempt);
    window.addEventListener("beforeunload", pauseCurrentAttempt);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { window.removeEventListener("pagehide", pauseCurrentAttempt); window.removeEventListener("beforeunload", pauseCurrentAttempt); document.removeEventListener("visibilitychange", onVisibility); };
  }, [pauseCurrentAttempt]);

  useEffect(() => {
    if (screen !== "test") return;
    window.history.pushState({ saiMockTest: true }, "", window.location.href);
    const handleBack = () => {
      if (window.confirm("Leave this test? Your current attempt will be paused and saved.")) { pauseCurrentAttempt(); setScreen("home"); } else window.history.pushState({ saiMockTest: true }, "", window.location.href);
    };
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [pauseCurrentAttempt, screen]);

  const canReplace = (slot: TestSlot): boolean => Boolean(attemptForSlot(stateRef.current, slot) || resultForSlot(stateRef.current, slot));
  const startPractice = (create: () => ActiveAttempt) => {
    if (canReplace("practice") && !window.confirm("Starting another practice test will replace the saved practice attempt and result. The final-test slot will remain unchanged. Continue?")) return;
    let next = withAttempt(stateRef.current, "practice", setRunning(create()));
    next = withResult(next, "practice", null);
    commit(next);
    setResultSlot("practice");
    setScreen("test");
  };
  const startTest = (selection: TestSelection) => startPractice(() => createAttempt(QUESTION_BANK, new Date(), randomSeed(), "filtered", selection));
  const startFullTest = () => startPractice(() => createAttempt(QUESTION_BANK, new Date(), randomSeed(), "full"));
  const startFinalTest = (finalTestId: FinalTestId) => {
    if (canReplace("final") && !window.confirm("Starting another final test will replace the saved final attempt and result. Your practice slot will remain unchanged. Continue?")) return;
    const attempt = { ...createAttempt(FINAL_TEST_BANKS[finalTestId], new Date(), randomSeed(), "final"), finalTestId };
    let next = withAttempt(stateRef.current, "final", setRunning(attempt));
    next = withResult(next, "final", null);
    commit(next);
    setResultSlot("final");
    setScreen("test");
  };
  const prepareNewTest = (slot: TestSlot) => { let next = withAttempt(stateRef.current, slot, null); next = withResult(next, slot, null); commit(next); setScreen("home"); };
  const resumeTest = (slot: TestSlot) => { const saved = attemptForSlot(stateRef.current, slot); if (!saved) return; commit(withAttempt(stateRef.current, slot, setRunning(saved))); setScreen("test"); };
  const updateAttempt = (nextAttempt: ActiveAttempt) => { const slot = stateRef.current.activeSlot; if (slot) commit(withAttempt(stateRef.current, slot, nextAttempt)); };
  const pauseTest = () => { if (attempt) updateAttempt(setPaused(attempt)); };
  const answer = (selected: number) => { if (!attempt) return; const current = attempt.questions[attempt.currentIndex]; if (attempt.responses[current.questionId]?.status !== "unanswered") return; updateAttempt(recordAnswer(attempt, current.questionId, selected)); };
  const skip = () => { if (!attempt) return; const current = attempt.questions[attempt.currentIndex]; if (attempt.responses[current.questionId]?.status !== "unanswered") return; updateAttempt(recordSkip(attempt, current.questionId)); };
  const next = () => { if (attempt) updateAttempt(moveNext(attempt)); };
  const submit = () => {
    if (!attempt || !activeSlot || !isComplete(attempt)) return;
    if (!window.confirm("Submit this test and calculate your final score?")) return;
    const submitted = scoreAttempt(attempt, bankForSlot(activeSlot, attempt.finalTestId));
    let next = withAttempt(stateRef.current, activeSlot, null);
    next = withResult(next, activeSlot, submitted);
    commit(next);
    setResultSlot(activeSlot);
    setScreen("result");
  };
  const leaveTest = () => { pauseCurrentAttempt(); setScreen("home"); };
  return <div className="app"><AppHeader onHome={screen === "test" ? leaveTest : undefined} />{screen === "home" && <HomeScreen state={state} onStart={startTest} onStartFull={startFullTest} onStartFinal={startFinalTest} onResume={resumeTest} onPrepare={prepareNewTest} onDownload={downloadSummary} />}{screen === "test" && attempt && <TestScreen attempt={attempt} questionMap={questionMap} onPause={pauseTest} onResume={() => resumeTest(activeSlot!)} onAnswer={answer} onSkip={skip} onNext={next} onSubmit={submit} />}{screen === "result" && result && <ResultScreen result={result} onDownload={() => downloadSummary(result)} onStart={() => setScreen("home")} />}</div>;
}
