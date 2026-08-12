export type Section = "A1" | "A2" | "B" | "C";
export type Difficulty = "foundational" | "applied" | "analytical";
export type ResponseStatus = "unanswered" | "answered" | "skipped";
export type SourceKind = "official" | "guideline" | "consensus" | "textbook" | "research" | "study-material";

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
  source: string;
  sourceUrl?: string;
  sourceId?: string;
  sourceKind?: SourceKind;
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
  version: 1;
  testNumber: number;
  seed: number;
  createdAt: string;
  updatedAt: string;
  status: "running" | "paused";
  remainingMs: number;
  lastTickAt?: number;
  currentIndex: number;
  questions: AttemptQuestion[];
  responses: Record<string, Response>;
}

export interface ResultItem {
  questionId: string;
  section: Section;
  text: string;
  options: string[];
  optionOrder: number[];
  correct: number;
  explanation: string;
  source: string;
  sourceUrl?: string;
  sourceId?: string;
  sourceKind?: SourceKind;
  passage?: string;
  passageId?: string;
  status: "correct" | "wrong" | "skipped";
  selected?: number;
}

export interface TestResult {
  version: 1;
  testNumber: number;
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
}

export interface PersistedState {
  version: 1;
  activeAttempt: ActiveAttempt | null;
  latestResult: TestResult | null;
  nextTestNumber: number;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  counts: Record<Section, number>;
  passageCount: number;
}
