export type Section = "A1" | "A2" | "B" | "C";
export type FinalTestId = 1 | 2 | 3 | 4;
export type AttemptMode = "full" | "final" | "A1_FULL" | "filtered" | Section;
export type TestSlot = "practice" | "final";
export type Difficulty = "foundational" | "applied" | "analytical";
export type ResponseStatus = "unanswered" | "answered" | "skipped";
export type PracticeQuestionCount = 100 | "all";

export interface TestSelection {
  section: Section;
  topic?: string;
  subtopic?: string;
  questionCount?: PracticeQuestionCount;
}

export interface Question {
  id: string;
  section: Section;
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
  asOf?: string;
  passageId?: string;
  passage?: string;
}

export interface AttemptQuestion {
  questionId: string;
  optionOrder: number[];
}

export interface Response {
  status: ResponseStatus;
  selected?: number;
}

export interface ActiveAttempt {
  version: 3;
  seed: number;
  createdAt: string;
  updatedAt: string;
  status: "running" | "paused";
  remainingMs: number;
  lastTickAt?: number;
  currentIndex: number;
  questions: AttemptQuestion[];
  responses: Record<string, Response>;
  totalDurationMs?: number;
  mode?: AttemptMode;
  selection?: TestSelection;
  finalTestId?: FinalTestId;
}

export interface ResultItem {
  questionId: string;
  section: Section;
  text: string;
  options: string[];
  optionOrder: number[];
  correct: number;
  explanation: string;
  sourceId: string;
  passage?: string;
  passageId?: string;
  status: "correct" | "wrong" | "skipped";
  selected?: number;
}

export interface TestResult {
  version: 3;
  submittedAt: string;
  durationMs: number;
  total: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  attemptedCount: number;
  negativeMarks: number;
  score: number;
  sectionScores: Record<Section, { correct: number; wrong: number; skipped: number; score: number }>;
  items: ResultItem[];
  mode?: AttemptMode;
  selection?: TestSelection;
  finalTestId?: FinalTestId;
}

export interface PersistedState {
  version: 4;
  practiceAttempt: ActiveAttempt | null;
  finalAttempt: ActiveAttempt | null;
  activeSlot: TestSlot | null;
  latestResult: TestResult | null;
  finalTestResult: TestResult | null;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  counts: Record<Section, number>;
  passageCount: number;
}
