import { useCallback, useEffect, useMemo, useState } from "react";
import { BANK_VERSION, SECTION_LABELS, TEST_DURATION_MS } from "./constants";
import { completedCount, createAttempt, isComplete, moveNext, recordAnswer, recordSkip, scoreAttempt, setPaused, setRunning, updateTimer } from "./quiz";
import { loadState, saveState, clearAll } from "./storage";
import { downloadSummary } from "./summary";
import { QUESTION_BANK } from "./data/questionBank";
import { resolveSourceUrl } from "./data/sourceCatalog";
import { optionLabelForSourceIndex } from "./answerDisplay";
import type { ActiveAttempt, Question, Response, Section, TestResult } from "./types";

type Screen = "home" | "test" | "result";

function loadInitialState() {
  const state = loadState();
  if (state.activeAttempt?.status === "running") {
    const paused = setPaused(state.activeAttempt);
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

function displayedOptionLabel(item: { optionOrder: number[] }, sourceIndex: number): string {
  return optionLabel(item.optionOrder.indexOf(sourceIndex));
}

function getQuestionMap(): Map<string, Question> {
  return new Map(QUESTION_BANK.map((question) => [question.id, question]));
}

function AppHeader({ onHome }: { onHome?: () => void }) {
  return <header className="site-header"><div className="brand-mark" aria-hidden="true">PA</div><div><p className="eyebrow">Independent preparation tool</p><h1>SAI Performance Analyst</h1></div>{onHome && <button className="icon-button" onClick={onHome} aria-label="Return to home">Home</button>}</header>;
}

function HomeScreen({ state, onStart, onResume, onReset, onDownload }: { state: ReturnType<typeof loadState>; onStart: () => void; onResume: () => void; onReset: () => void; onDownload: () => void }) {
  const active = state.activeAttempt;
  const result = state.latestResult;
  return <main className="page-shell home-shell">
    <section className="hero-card">
      <div><p className="eyebrow">Physiotherapy · Performance Analyst</p><h2>Practice the way the notification is written.</h2><p className="hero-copy">Timed, case-based mock tests aligned to the SAI CBT structure, with immediate explanations and a saved attempt you can resume.</p></div>
      <div className="hero-score"><span>100</span><small>MCQs</small><span>02:00</span><small>hours</small></div>
    </section>
    <section className="info-grid" aria-label="Test format">
      <div className="info-card"><span className="section-badge a1">A1</span><strong>32 questions</strong><small>Basic sports science</small></div>
      <div className="info-card"><span className="section-badge a2">A2</span><strong>8 questions</strong><small>General sports awareness</small></div>
      <div className="info-card"><span className="section-badge b">B</span><strong>40 questions</strong><small>Applied Physiotherapy</small></div>
      <div className="info-card"><span className="section-badge c">C</span><strong>20 questions</strong><small>Five case studies</small></div>
    </section>
    <section className="action-card">
      {active ? <><div><p className="eyebrow">Saved attempt · Test {active.testNumber}</p><h3>{completedCount(active)} of 100 questions completed</h3><p className="muted">Your attempt is paused and will resume exactly where you left it.</p></div><button className="primary-button" onClick={onResume}>Resume test</button></> : result ? <><div><p className="eyebrow">Latest result · Test {result.testNumber}</p><h3>{result.score.toFixed(2)} / 100</h3><p className="muted">{result.correctCount} correct · {result.wrongCount} wrong · {result.skippedCount} skipped</p></div><div className="button-row"><button className="secondary-button" onClick={onDownload}>Download summary</button><button className="primary-button" onClick={onStart}>Start new test</button></div></> : <><div><p className="eyebrow">Question bank v{BANK_VERSION}</p><h3>Ready for Test {state.nextTestNumber}</h3><p className="muted">Every test uses the official 32 / 8 / 40 / 20 section weighting.</p></div><button className="primary-button" onClick={onStart}>Start test</button></>}
    </section>
    {active && <button className="text-button danger-text" onClick={onStart}>Start a new test instead</button>}
    <section className="disclaimer"><strong>Independent preparation tool.</strong> This is not an official Sports Authority of India application. Wrong answers carry −0.25 marks; skipped answers carry 0.</section>
    <div className="home-footer"><button className="text-button" onClick={onReset}>Reset local data</button><span>Progress is saved in this browser.</span></div>
  </main>;
}

function TestScreen({ attempt, questionMap, onPause, onResume, onAnswer, onSkip, onNext, onSubmit }: { attempt: ActiveAttempt; questionMap: Map<string, Question>; onPause: () => void; onResume: () => void; onAnswer: (selected: number) => void; onSkip: () => void; onNext: () => void; onSubmit: () => void }) {
  const item = attempt.questions[attempt.currentIndex];
  const question = questionMap.get(item.questionId);
  if (!question) return <main className="page-shell"><section className="error-card">This question is missing from the current bank. Reset local data and start a new test.</section></main>;
  const response: Response = attempt.responses[question.id] ?? { status: "unanswered" };
  const revealed = response.status !== "unanswered";
  const completed = completedCount(attempt);
  const lastQuestion = attempt.currentIndex === attempt.questions.length - 1;
  const percent = Math.round((completed / attempt.questions.length) * 100);
  const timerWarning = attempt.remainingMs < 10 * 60 * 1000;
  const sourceUrl = resolveSourceUrl(question.sourceId, question.sourceUrl, question.source, question.sourceKind);
  return <main className="test-shell">
    <div className="test-topbar"><div><p className="eyebrow">Test {String(attempt.testNumber).padStart(2, "0")}</p><h2>{SECTION_LABELS[question.section]}</h2></div><div className="test-controls"><div className={`timer ${timerWarning ? "warning" : ""}`} aria-live="polite"><span className="timer-dot" />{formatTime(attempt.remainingMs)}</div>{attempt.status === "running" ? <button className="secondary-button compact" onClick={onPause}>Pause</button> : <button className="primary-button compact" onClick={onResume}>Resume</button>}</div></div>
    <div className="progress-row"><div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div><span>{completed}/100 completed</span></div>
    <section className="question-card">
      <div className="question-meta"><span>Question {attempt.currentIndex + 1} of 100</span><span className={`section-badge ${question.section.toLowerCase()}`}>{question.section}</span><span className={`difficulty ${question.difficulty}`}>{question.difficulty}</span></div>
      {question.passage && <div className="passage-box"><p className="eyebrow">Case study · {question.passageId}</p><p>{question.passage}</p></div>}
      <h3 className="question-text">{question.text}</h3>
      <div className="options" role="radiogroup" aria-label="Answer options">{item.optionOrder.map((sourceIndex, displayedIndex) => {
        const isSelected = response.selected === sourceIndex;
        const isCorrect = question.correct === sourceIndex;
        const optionClass = revealed ? `${isCorrect ? "correct" : ""} ${isSelected && !isCorrect ? "incorrect" : ""}` : "";
        return <button key={sourceIndex} className={`option-button ${optionClass}`} disabled={revealed || attempt.status === "paused"} onClick={() => onAnswer(sourceIndex)} role="radio" aria-checked={isSelected}><span className="option-label">{optionLabel(displayedIndex)}</span><span>{question.options[sourceIndex]}</span>{revealed && isCorrect && <span className="option-result">Correct</span>}{revealed && isSelected && !isCorrect && <span className="option-result">Your answer</span>}</button>;
      })}</div>
      {!revealed && <div className="question-actions"><button className="text-button" disabled={attempt.status === "paused"} onClick={onSkip}>Skip question</button><span className="muted">You cannot return to a previous question.</span></div>}
      {revealed && <div className={`feedback ${response.status === "skipped" ? "skipped" : response.selected === question.correct ? "positive" : "negative"}`}><div><strong>{response.status === "skipped" ? "Skipped" : response.selected === question.correct ? "Correct" : "Incorrect"}</strong><p><strong>Correct answer:</strong> {optionLabelForSourceIndex(item.optionOrder, question.correct)}. {question.options[question.correct]}</p><p>{question.explanation}</p>{sourceUrl ? <a className="source-link" href={sourceUrl} target="_blank" rel="noreferrer">Source: {question.source}</a> : <span className="source-text">Source: {question.source}</span>}</div></div>}
      {revealed && <div className="next-row"><button className="primary-button" disabled={attempt.status === "paused"} onClick={lastQuestion && isComplete(attempt) ? onSubmit : onNext}>{lastQuestion && isComplete(attempt) ? "Submit test" : "Next question"}</button>{attempt.status === "paused" ? <span className="muted">Resume the timer to continue.</span> : lastQuestion && !isComplete(attempt) && <span className="muted">Complete the remaining questions before submitting.</span>}</div>}
    </section>
  </main>;
}

function ResultScreen({ result, onDownload, onStart }: { result: TestResult; onDownload: () => void; onStart: () => void }) {
  const items = result.items.filter((item) => item.status !== "correct");
  return <main className="page-shell result-shell"><section className="result-hero"><div><p className="eyebrow">Test {String(result.testNumber).padStart(2, "0")} submitted</p><h2>Test complete.</h2><p className="muted">Review the decisions that cost marks. Correctly answered questions are intentionally omitted from this review.</p></div><div className="big-score"><span>{result.score.toFixed(2)}</span><small>/ 100</small></div></section><section className="result-stats"><div><strong>{result.correctCount}</strong><span>Correct</span></div><div><strong>{result.wrongCount}</strong><span>Wrong</span></div><div><strong>{result.skippedCount}</strong><span>Skipped</span></div><div><strong>−{result.negativeMarks.toFixed(2)}</strong><span>Negative marks</span></div></section><section className="section-results"><h3>Section performance</h3><div className="section-result-grid">{Object.entries(result.sectionScores).map(([section, score]) => <div key={section}><span className={`section-badge ${section.toLowerCase()}`}>{section}</span><strong>{score.score.toFixed(2)}</strong><small>{score.correct} correct · {score.wrong} wrong · {score.skipped} skipped</small></div>)}</div></section><div className="result-actions"><button className="secondary-button" onClick={onDownload}>Download summary</button><button className="primary-button" onClick={onStart}>Start new test</button></div><section className="review-list"><h3>Wrong and skipped questions ({items.length})</h3>{items.length === 0 ? <div className="empty-card">Perfect score. There are no review items.</div> : items.map((item) => <article className={`review-item ${item.status}`} key={item.questionId}>{item.passage && <div className="passage-box"><p className="eyebrow">Case study · {item.passageId}</p><p>{item.passage}</p></div>}<div className="review-heading"><span className="section-badge">{item.section}</span><strong>{item.status === "wrong" ? "Wrong" : "Skipped"}</strong></div><h4>{item.text}</h4><p><strong>Your answer:</strong> {item.selected === undefined ? "Skipped" : `${displayedOptionLabel(item, item.selected)}. ${item.options[item.selected]}`}</p><p><strong>Correct answer:</strong> {displayedOptionLabel(item, item.correct)}. {item.options[item.correct]}</p><p><strong>Explanation:</strong> {item.explanation}</p>{item.sourceUrl ? <a className="source-link" href={item.sourceUrl} target="_blank" rel="noreferrer">Source: {item.source}</a> : <span className="source-text">Source: {item.source}</span>}</article>)}</section><p className="disclaimer">Independent preparation tool; not an official SAI document.</p></main>;
}

export default function App() {
  const [state, setState] = useState(loadInitialState);
  const [screen, setScreen] = useState<Screen>(() => state.activeAttempt ? "home" : state.latestResult ? "result" : "home");
  const questionMap = useMemo(getQuestionMap, []);
  const attempt = state.activeAttempt;
  const result = state.latestResult;

  const commit = useCallback((next: ReturnType<typeof loadState>) => {
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
          saveState(next);
          window.setTimeout(() => setScreen("result"), 0);
          return next;
        }
        const next = { ...current, activeAttempt: updated };
        saveState(next);
        return next;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [screen, attempt?.status]);

  useEffect(() => {
    const pauseOnHide = () => {
      setState((current) => {
        if (!current.activeAttempt || current.activeAttempt.status !== "running") return current;
        const next = { ...current, activeAttempt: setPaused(current.activeAttempt) };
        saveState(next);
        return next;
      });
    };
    const onVisibility = () => { if (document.visibilityState === "hidden") pauseOnHide(); };
    window.addEventListener("pagehide", pauseOnHide);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { window.removeEventListener("pagehide", pauseOnHide); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);

  useEffect(() => {
    if (screen !== "test") return;
    window.history.pushState({ saiMockTest: true }, "", window.location.href);
    const handleBack = () => {
      if (window.confirm("Leave this test? Your current attempt will be paused and saved.")) {
        setState((current) => {
          if (!current.activeAttempt) return current;
          const next = { ...current, activeAttempt: setPaused(current.activeAttempt) };
          saveState(next);
          return next;
        });
        setScreen("home");
      } else {
        window.history.pushState({ saiMockTest: true }, "", window.location.href);
      }
    };
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [screen]);

  const startTest = () => {
    if (state.activeAttempt && !window.confirm("Starting a new test will permanently clear your saved attempt. Continue?")) return;
    if (state.latestResult && !window.confirm("Starting a new test will clear your latest result from this browser. Continue?")) return;
    const created = setRunning(createAttempt(state.nextTestNumber, QUESTION_BANK));
    commit({ ...state, activeAttempt: created, latestResult: null, nextTestNumber: state.nextTestNumber + 1 });
    setScreen("test");
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
  const reset = () => {
    if (!window.confirm("Reset all saved test data from this browser?")) return;
    const nextState = clearAll();
    setState(nextState);
    setScreen("home");
  };
  const download = () => { if (result) downloadSummary(result); };

  const leaveTest = () => { if (attempt) commit({ ...state, activeAttempt: setPaused(attempt) }); setScreen("home"); };
  return <div className="app"><AppHeader onHome={screen === "test" ? leaveTest : undefined} />{screen === "home" && <HomeScreen state={state} onStart={startTest} onResume={resumeTest} onReset={reset} onDownload={download} />}{screen === "test" && attempt && <TestScreen attempt={attempt} questionMap={questionMap} onPause={pauseTest} onResume={resumeTest} onAnswer={answer} onSkip={skip} onNext={next} onSubmit={submit} />}{screen === "result" && result && <ResultScreen result={result} onDownload={download} onStart={startTest} />}</div>;
}
