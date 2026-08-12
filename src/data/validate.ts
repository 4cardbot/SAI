import { SECTION_COUNTS } from "../constants";
import type { Question, Section, ValidationResult } from "../types";
import { SOURCE_CATALOG_BY_ID, sourceIdForLabel } from "./sourceCatalog";

const sections: Section[] = ["A1", "A2", "B", "C"];

export function validateQuestionBank(bank: Question[]): ValidationResult {
  const errors: string[] = [];
  const counts: Record<Section, number> = { A1: 0, A2: 0, B: 0, C: 0 };
  const ids = new Set<string>();
  const texts = new Set<string>();
  const passages = new Map<string, number>();

  bank.forEach((question, index) => {
    counts[question.section] += 1;
    if (ids.has(question.id)) errors.push(`Duplicate question id: ${question.id}`);
    ids.add(question.id);
    // Section C is passage-based: the same analytical stem can be validly
    // reused when the athlete, data and decision context differ by passage.
    if (question.section !== "C") {
      if (texts.has(question.text)) errors.push(`Duplicate question text: ${question.text}`);
      texts.add(question.text);
    }
    if (question.options.length !== 4) errors.push(`${question.id} must have exactly four options`);
    if (new Set(question.options).size !== question.options.length) errors.push(`${question.id} has duplicate options`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${question.id} has an invalid correct index`);
    if (!question.explanation.trim()) errors.push(`${question.id} is missing an explanation`);
    if (!question.source.trim()) errors.push(`${question.id} is missing a source`);
    if (question.sourceId && !SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(`${question.id} references an unknown sourceId: ${question.sourceId}`);
    if (question.sourceId && question.sourceKind && SOURCE_CATALOG_BY_ID.get(question.sourceId)?.kind !== question.sourceKind) errors.push(`${question.id} has a sourceKind that does not match sourceId ${question.sourceId}`);
    const labelledSourceId = sourceIdForLabel(question.source, question.sourceKind);
    if (!labelledSourceId) errors.push(`${question.id} has no catalog mapping for source label: ${question.source}`);
    if (question.sourceId && labelledSourceId && question.sourceId !== labelledSourceId) errors.push(`${question.id} sourceId ${question.sourceId} does not match source label ${question.source}`);
    if (!sections.includes(question.section)) errors.push(`${question.id} has an invalid section`);
    if (question.section === "A2" && !question.asOf) errors.push(`${question.id} is missing asOf metadata`);
    if (question.section === "C" && !question.passageId) errors.push(`${question.id} is missing passageId`);
    if (question.passageId) passages.set(question.passageId, (passages.get(question.passageId) ?? 0) + 1);
    if (index > 10000) errors.push("Question bank is unexpectedly large");
  });

  const expected = { A1: 640, A2: 160, B: 800, C: 400 };
  sections.forEach((section) => {
    if (counts[section] !== expected[section]) errors.push(`${section} has ${counts[section]} questions; expected ${expected[section]}`);
  });
  passages.forEach((count, passageId) => {
    if (count !== 4) errors.push(`${passageId} has ${count} questions; expected 4`);
  });

  return { valid: errors.length === 0, errors, counts, passageCount: passages.size };
}
