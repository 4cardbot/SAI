import { readFile, writeFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";
import type { Question } from "../src/types";

const groups = [
  { topic: "Lower Extremity Scenarios", slug: "lower_extremity", prefix: "c-lower" },
  { topic: "Upper Extremity Scenarios", slug: "upper_extremity", prefix: "c-upper" },
  { topic: "Spine & Pelvis Scenarios", slug: "spine_pelvis", prefix: "c-spine" },
  { topic: "On-Field & Emergency Triage", slug: "on_field_emergency_triage", prefix: "c-emergency" },
  { topic: "Return to Play (RTP) Frameworks", slug: "return_to_play", prefix: "c-rtp" },
] as const;

const requiredSources = [
  "ioc-concussion-amsterdam-2022",
  "doha-groin-consensus-2015",
  "ioc-load-illness-2016",
] as const;

const errors: string[] = [];
const all: Question[] = [];
const sourceCounts: Record<string, number> = {};
const questionMappings: Array<Record<string, string>> = [];
const caseMappings: Array<Record<string, unknown>> = [];
const ids = new Set<string>();

function pad(value: number): string {
  return String(value).padStart(3, "0");
}

for (const group of groups) {
  const file = `question_bank/section_c_${group.slug}.json`;
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  if (questions.length !== 200) errors.push(`${file} has ${questions.length} questions; expected 200`);

  const byPassage = new Map<string, Question[]>();
  questions.forEach((question, index) => {
    const caseNumber = Math.floor(index / 4) + 1;
    const questionNumber = (index % 4) + 1;
    const expectedPassageId = `${group.prefix}-${pad(caseNumber)}`;
    const expectedId = `${expectedPassageId}-q${questionNumber}`;
    if (question.section !== "C") errors.push(`${question.id} must have section C`);
    if (question.topic !== group.topic) errors.push(`${question.id} has topic ${question.topic}; expected ${group.topic}`);
    if (question.id !== expectedId) errors.push(`${file} record ${index + 1} must have id ${expectedId}`);
    if (question.passageId !== expectedPassageId) errors.push(`${question.id} must have passageId ${expectedPassageId}`);
    if (!question.passage || question.passage.trim().length < 40) errors.push(`${question.id} has an absent or too-short passage`);
    if (!question.subtopic || !question.text || !question.explanation || !question.sourceId) errors.push(`${question.id} is missing required content`);
    if (!Array.isArray(question.options) || question.options.length !== 4 || new Set(question.options).size !== 4) errors.push(`${question.id} must have four unique options`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${question.id} has an invalid zero-based correct index`);
    if (!("foundational" === question.difficulty || "applied" === question.difficulty || "analytical" === question.difficulty)) errors.push(`${question.id} has an invalid difficulty`);
    if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(`${question.id} has unknown sourceId ${question.sourceId}`);
    if (ids.has(question.id)) errors.push(`Duplicate Section C question ID ${question.id}`);
    ids.add(question.id);
    const passageQuestions = byPassage.get(question.passageId ?? expectedPassageId) ?? [];
    passageQuestions.push(question);
    byPassage.set(question.passageId ?? expectedPassageId, passageQuestions);
    all.push(question);
    sourceCounts[question.sourceId] = (sourceCounts[question.sourceId] ?? 0) + 1;
    questionMappings.push({
      id: question.id,
      repositoryGroup: group.topic,
      officialTheme: group.topic,
      subtopic: question.subtopic,
      passageId: question.passageId ?? expectedPassageId,
      sourceId: question.sourceId,
    });
  });

  if (byPassage.size !== 50) errors.push(`${file} has ${byPassage.size} passages; expected 50`);
  byPassage.forEach((caseQuestions, passageId) => {
    if (caseQuestions.length !== 4) errors.push(`${file} passage ${passageId} has ${caseQuestions.length} questions; expected 4`);
    if (new Set(caseQuestions.map((question) => question.passage)).size !== 1) errors.push(`${file} passage ${passageId} does not share one passage text`);
    caseMappings.push({
      passageId,
      topic: group.topic,
      questionIds: caseQuestions.map((question) => question.id),
      sourceIds: [...new Set(caseQuestions.map((question) => question.sourceId))],
      subtopics: [...new Set(caseQuestions.map((question) => question.subtopic))],
    });
  });
}

if (all.length !== 1000) errors.push(`Section C durable files contain ${all.length} questions; expected 1000`);
for (const sourceId of requiredSources) {
  if (!SOURCE_CATALOG_BY_ID.has(sourceId)) errors.push(`Required consensus source is absent from sourceCatalog: ${sourceId}`);
}

await writeFile("question_bank/section_c.json", `${JSON.stringify(all, null, 2)}\n`);
await writeFile("research/section_c_coverage_manifest.json", `${JSON.stringify({
  generatedAt: "2026-08-19",
  section: "C",
  total: all.length,
  questionsPerTheme: 200,
  casesPerTheme: 50,
  questionsPerCase: 4,
  groups: groups.map((group) => ({ topic: group.topic, file: `question_bank/section_c_${group.slug}.json`, count: all.filter((question) => question.topic === group.topic).length, cases: caseMappings.filter((item) => item.topic === group.topic).length })),
  requiredConsensusSources: requiredSources,
  sourceCounts,
  caseMappings,
  questionMappings,
}, null, 2)}\n`);

console.log(JSON.stringify({ status: errors.length ? "fail" : "pass", errors, total: all.length, groups: groups.map((group) => ({ topic: group.topic, questions: all.filter((question) => question.topic === group.topic).length, cases: caseMappings.filter((item) => item.topic === group.topic).length })), sourceCount: Object.keys(sourceCounts).length }));
if (errors.length) process.exitCode = 1;
