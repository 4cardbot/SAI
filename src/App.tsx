import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { A1_FULL_COUNT, BANK_VERSION, SECTION_COUNTS, SECTION_LABELS } from "./constants";
import { completedCount, createAttempt, isComplete, moveNext, pausePersisted, recordAnswer, recordSkip, scoreAttempt, setPaused, setRunning, updateTimer } from "./quiz";
import { randomSeed } from "./random";
import { loadState, saveState } from "./storage";
import { downloadSummary } from "./summary";
import { QUESTION_BANK, SECTION_BANKS } from "./data/questionBank";
import { SOURCE_CATALOG_BY_ID } from "./data/sourceCatalog";
import { optionLabelForOptionIndex } from "./answerDisplay";
import type { ActiveAttempt, AttemptMode, Question, Response, Section, TestResult } from "./types";

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

const BANK_OPTIONS: Array<{ mode: AttemptMode; badge: string; badgeClass: string; title: string; count: number; description: string }> = [
  { mode: "A1", badge: "A1", badgeClass: "a1", title: "Basic sports science", count: SECTION_COUNTS.A1, description: "Strength, physiology, nutrition, psychology and performance analysis." },
  { mode: "A1_FULL", badge: "A1 · 100", badgeClass: "a1", title: "A1-only full test", count: A1_FULL_COUNT, description: "100 questions drawn only from the 900-question A1 bank." },
  { mode: "A2", badge: "A2", badgeClass: "a2", title: "Sports awareness", count: SECTION_COUNTS.A2, description: "Indian sports governance, anti-doping and major sporting events." },
  { mode: "B", badge: "B", badgeClass: "b", title: "Applied Physiotherapy", count: SECTION_COUNTS.B, description: "Assessment, rehabilitation, electrotherapy and sports physiotherapy." },
  { mode: "C", badge: "C", badgeClass: "c", title: "Sports case studies", count: SECTION_COUNTS.C, description: "Passage-based clinical reasoning and return-to-sport decisions." },
];

function modeTitle(mode: AttemptMode | undefined): string {
  if (!mode || mode === "full") return "Full CBT simulation";
  if (mode === "A1_FULL") return "A1-only · 100-question test";
  return `${mode} · ${SECTION_LABELS[mode].replace(/^Section [A-Z0-9]+ · /, "")}`;
}

function getQuestionMap(): Map<string, Question> {
  return new Map(QUESTION_BANK.map((question) => [question.id, question]));
}

function AppHeader({ onHome }: { onHome?: () => void }) {
  return <header className="site-header"><div className="brand-mark" aria-hidden="true">PA</div><div><p className="eyebrow">Independent preparation tool</p><h1>SAI Performance Analyst</h1></div>{onHome && <button className="icon-button" onClick={onHome} aria-label="Return to home">Home</button>}</header>;
}

function HomeScreen({ state, onStart, onResume, onStartInstead, onPrepareNewTest, onDownload }: { state: ReturnType<typeof loadState>; onStart: (mode: AttemptMode) => void; onResume: () => void; onStartInstead: () => void; onPrepareNewTest: () => void; onDownload: () => void }) {
  const active = state.activeAttempt;
  const result = state.latestResult;
  return <main className="page-shell home-shell">
    <section className="hero-card">
      <div><p className="eyebrow">Physiotherapy · Performance Analyst</p><h2>Build confidence section by section.</h2><p className="hero-copy">Practice any syllabus section independently or simulate the complete SAI CBT structure, with immediate explanations and a saved attempt you can resume.</p></div>
      <div className="hero-score"><span>100</span><small>MCQs</small><span>02:00</span><small>hours</small></div>
    </section>
    <section className="info-grid" aria-label="Section question banks">
      {BANK_OPTIONS.map((option) => <button key={option.mode} className="info-card bank-card" onClick={() => onStart(option.mode)}><span className={`section-badge ${option.badgeClass}`}>{option.badge}</span><strong>{option.title}</strong><small>{option.count} questions · {option.description}</small></button>)}
    </section>
    <section className="action-card">
      {active ? <><div><p className="eyebrow">Saved attempt · {modeTitle(active.mode)}</p><h3>{completedCount(active)} of {active.questions.length} questions completed</h3><p className="muted">Your attempt is paused and will resume exactly where you left it.</p></div><button className="primary-button" onClick={onResume}>Resume practice</button></> : result ? <><div><p className="eyebrow">Latest result · {modeTitle(result.mode)}</p><h3>{result.score.toFixed(2)} / {result.total}</h3><p className="muted">{result.correctCount} correct · {result.wrongCount} wrong · {result.skippedCount} skipped</p></div><div className="button-row"><button className="secondary-button" onClick={onDownload}>Download summary</button><button className="primary-button" onClick={onPrepareNewTest}>Choose another bank</button></div></> : <><div><p className="eyebrow">Full exam simulation · v{BANK_VERSION}</p><h3>Practice all four sections</h3><p className="muted">100 questions in the official 32 / 8 / 40 / 20 weighting.</p></div><button className="primary-button" onClick={() => onStart("full")}>Start full CBT</button></>}
    </section>
    {active && <button className="text-button danger-text" onClick={onStartInstead}>Start a new test instead</button>}
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
    <div className="test-topbar"><div><p className="eyebrow">{attempt.mode === "full" || !attempt.mode ? "Full CBT simulation" : attempt.mode === "A1_FULL" ? "A1-only full bank" : "Section bank practice"}</p><h2>{modeTitle(attempt.mode)}</h2></div><div className="test-controls"><div className={`timer ${timerWarning ? "warning" : ""}`} aria-live="polite"><span className="timer-dot" />{formatTime(attempt.remainingMs)}</div>{attempt.status === "running" ? <button className="secondary-button compact" onClick={onPause}>Pause</button> : <button className="primary-button compact" onClick={onResume}>Resume</button>}</div></div>
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
  return <main className="page-shell result-shell"><section className="result-hero"><div><p className="eyebrow">{modeTitle(result.mode)} complete</p><h2>Practice complete.</h2><p className="muted">Review the decisions that cost marks. Correctly answered questions are intentionally omitted from this review.</p></div><div className="big-score"><span>{result.score.toFixed(2)}</span><small>/ {result.total}</small></div></section><section className="result-stats"><div><strong>{result.correctCount}</strong><span>Correct</span></div><div><strong>{result.wrongCount}</strong><span>Wrong</span></div><div><strong>{result.skippedCount}</strong><span>Skipped</span></div><div><strong>−{result.negativeMarks.toFixed(2)}</strong><span>Negative marks</span></div></section><section className="section-results"><h3>Section performance</h3><div className="section-result-grid">{Object.entries(result.sectionScores).map(([section, score]) => <div key={section}><span className={`section-badge ${section.toLowerCase()}`}>{section}</span><strong>{score.score.toFixed(2)}</strong><small>{score.correct} correct · {score.wrong} wrong · {score.skipped} skipped</small></div>)}</div></section><div className="result-actions"><button className="secondary-button" onClick={onDownload}>Download summary</button><button className="primary-button" onClick={onStart}>Choose another bank</button></div><section className="review-list"><h3>Wrong and skipped questions ({items.length})</h3>{items.length === 0 ? <div className="empty-card">Perfect score. There are no review items.</div> : items.map((item) => <article className={`review-item ${item.status}`} key={item.questionId}>{item.passage && <div className="passage-box"><p className="eyebrow">Case study · {item.passageId}</p><p>{item.passage}</p></div>}<div className="review-heading"><span className="section-badge">{item.section}</span><strong>{item.status === "wrong" ? "Wrong" : "Skipped"}</strong></div><h4>{item.text}</h4><p><strong>Your answer:</strong> {item.selected === undefined ? "Skipped" : `${displayedOptionLabel(item, item.selected)}. ${item.options[item.selected]}`}</p><p><strong>Correct answer:</strong> {displayedOptionLabel(item, item.correct)}. {item.options[item.correct]}</p><p><strong>Explanation:</strong> {item.explanation}</p></article>)}</section><p className="disclaimer">Independent preparation tool; not an official SAI document.</p></main>;
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

  const startTest = (mode: AttemptMode = "full") => {
    if (state.activeAttempt && !window.confirm("Starting a new test will permanently clear your saved attempt. Continue?")) return;
    const selectedBank = mode === "full" || mode === "A1_FULL" ? QUESTION_BANK : SECTION_BANKS[mode];
    const created = setRunning(createAttempt(selectedBank, new Date(), randomSeed(), mode));
    commit({ ...state, activeAttempt: created, latestResult: null });
    setScreen("test");
  };

  const chooseNewTest = () => {
    if (state.activeAttempt && !window.confirm("Starting a new test will permanently clear your saved attempt. Continue?")) return;
    commit({ ...state, activeAttempt: null, latestResult: null });
    setScreen("home");
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
  return <div className="app"><AppHeader onHome={screen === "test" ? leaveTest : undefined} />{screen === "home" && <HomeScreen state={state} onStart={startTest} onResume={resumeTest} onStartInstead={chooseNewTest} onPrepareNewTest={prepareNewTest} onDownload={download} />}{screen === "test" && attempt && <TestScreen attempt={attempt} questionMap={questionMap} onPause={pauseTest} onResume={resumeTest} onAnswer={answer} onSkip={skip} onNext={next} onSubmit={submit} />}{screen === "result" && result && <ResultScreen result={result} onDownload={download} onStart={prepareNewTest} />}</div>;
}
