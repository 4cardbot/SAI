import type { AttemptMode, Section } from "./types";

export const TEST_DURATION_MS = 2 * 60 * 60 * 1000;
export const STANDARD_QUESTION_DURATION_MS = TEST_DURATION_MS / 100;
export const A2_PRACTICE_DURATION_MS = 48 * 60 * 1000;
export const NEGATIVE_MARK = 0.25;
/** Question counts used by section-specific practice cards. */
export const SECTION_COUNTS: Record<Section, number> = {
  A1: 100,
  A2: 40,
  B: 100,
  C: 100,
};
/** Official full-CBT composition from the SAI notification. */
export const EXAM_SECTION_COUNTS: Record<Section, number> = {
  A1: 32,
  A2: 8,
  B: 40,
  C: 20,
};
export const A1_FULL_COUNT = 100;
/** Random practice count when the user selects a section without a topic. */
export const SECTION_ONLY_COUNT = 100;
export const SECTION_LABELS: Record<Section, string> = {
  A1: "Section A1 · Basic sports science",
  A2: "Section A2 · General sports awareness",
  B: "Section B · Applied Physiotherapy",
  C: "Section C · Case studies",
};
export const STORAGE_KEY = "sai-pa-mock:v3";
export const BANK_VERSION = "2026.08.8";
export const A2_COVERAGE_DATE = "2026-08-16";

export function durationForMode(mode: AttemptMode = "full"): number {
  return mode === "A2" ? A2_PRACTICE_DURATION_MS : TEST_DURATION_MS;
}

export function durationForQuestionCount(questionCount: number): number {
  return Math.max(0, Math.round(questionCount * STANDARD_QUESTION_DURATION_MS));
}
