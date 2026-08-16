import { readFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";

type Question = {
  id: string;
  section: string;
  topic: string;
  subtopic: string;
  difficulty: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
};

const files = [
  "question_bank/section_a1_core_disciplines.json",
  "question_bank/section_a1_testing_assessment.json",
  "question_bank/section_a1_data_analytics.json",
  "question_bank/section_a1_performance_recovery.json",
  "question_bank/section_a1_technology_biostatistics.json",
  "question_bank/section_a1_holistic_travel_ethics.json",
];

const expectedGroups: Record<string, string[]> = {
  "Core Disciplines Foundational Concepts": [
    "Anthropometry — body composition, somatotypes, growth & maturation",
    "Exercise Physiology — energy systems, fatigue, adaptation",
    "Physiotherapy — injury mechanisms, basic rehabilitation principles",
    "Biomechanics — movement analysis, force, kinematics",
    "Biochemistry — biomarkers, metabolism, recovery indicators",
    "Strength & Conditioning — training principles, load, recovery",
    "Psychology — motivation, stress, arousal, mental readiness",
    "Nutrition — macronutrients, hydration, energy balance",
  ],
  "Testing Parameters, Standardization & Athlete Assessment": ["Test Parameters & Athlete Assessment", "Test Protocols & Standardization"],
  "Data Interpretation & Applied Analytics": ["Interpretation & Application of Data", "Principles of Research & Evidence-Based Practice"],
  "Performance Enhancement & Recovery Protocols": ["Performance Enhancement Strategies", "Recovery Protocols & Regeneration", "Injury Prevention & Risk Management"],
  "Emerging Technologies & Biostatistics": ["New & Emerging Technologies in Sports Science", "Biostatistics & Data Analysis"],
  "Holistic Development, Travel & Ethics": ["Yoga & Mind–Body Interventions in Sports", "Athlete Health, Wellness & Holistic Development", "Travel-Related Challenges & Competition Readiness", "Anti-Doping Awareness & Ethical Practices", "Interdisciplinary Coordination & Support Systems"],
};

const questions = (await Promise.all(files.map(async (file) => JSON.parse(await readFile(file, "utf8")) as Question[]))).flat();
const merged = JSON.parse(await readFile("question_bank/section_a1.json", "utf8")) as Question[];
const answerPositions = [0, 0, 0, 0];
const sourceCounts = new Map<string, number>();
const difficultyCounts = new Map<string, number>();
const subtopicCounts = new Map<string, number>();
const exactTexts = new Map<string, string[]>();
const baseTexts = new Map<string, string[]>();
const optionLengthWarnings: string[] = [];
const unknownSourceIds = new Set<string>();
const structuralErrors: string[] = [];

for (const question of questions) {
  answerPositions[question.correct] += 1;
  sourceCounts.set(question.sourceId, (sourceCounts.get(question.sourceId) ?? 0) + 1);
  if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) unknownSourceIds.add(question.sourceId);
  difficultyCounts.set(question.difficulty, (difficultyCounts.get(question.difficulty) ?? 0) + 1);
  subtopicCounts.set(question.subtopic, (subtopicCounts.get(question.subtopic) ?? 0) + 1);
  const normalized = question.text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  exactTexts.set(normalized, [...(exactTexts.get(normalized) ?? []), question.id]);
  const base = normalized.replace(/^(for an athlete entering a new training block|when reviewing a high performance athlete profile|during a competition preparation meeting|in a practical sports science assessment|when communicating the finding to a coach|for a youth athlete in a development programme|during a congested competition period|in a rehabilitation or reconditioning setting|when comparing laboratory and field information|for an athlete preparing for an important final) /, "");
  baseTexts.set(base, [...(baseTexts.get(base) ?? []), question.id]);
  const lengths = question.options.map((option) => option.length);
  if (Math.max(...lengths) - Math.min(...lengths) > 55) optionLengthWarnings.push(question.id);
}

const duplicateTexts = [...exactTexts.entries()].filter(([, ids]) => ids.length > 1);
const repeatedBaseStems = [...baseTexts.entries()].filter(([, ids]) => ids.length > 1);
if (questions.length !== 900) structuralErrors.push(`retained files contain ${questions.length} questions`);
if (merged.length !== 900) structuralErrors.push(`merged A1 contains ${merged.length} questions`);
if (merged.map((question) => question.id).join("\n") !== questions.map((question) => question.id).join("\n")) structuralErrors.push("merged A1 ordering/content does not match retained files");
for (const [topic, subtopics] of Object.entries(expectedGroups)) {
  const groupQuestions = questions.filter((question) => question.topic === topic);
  if (groupQuestions.length !== 150) structuralErrors.push(`${topic} contains ${groupQuestions.length} questions`);
  for (const subtopic of subtopics) {
    const count = groupQuestions.filter((question) => question.subtopic === subtopic).length;
    if (count < 10) structuralErrors.push(`${topic} has only ${count} questions for ${subtopic}`);
  }
  const unexpected = [...new Set(groupQuestions.map((question) => question.subtopic))].filter((subtopic) => !subtopics.includes(subtopic));
  if (unexpected.length) structuralErrors.push(`${topic} has unexpected subtopics: ${unexpected.join(", ")}`);
}
const report = {
  total: questions.length,
  files: Object.fromEntries(files.map((file) => [file, questions.filter((q) => q.id.startsWith(file.includes("core") ? "a1-core" : file.includes("testing") ? "a1-test" : file.includes("data") ? "a1-data" : file.includes("performance") ? "a1-recovery" : file.includes("technology") ? "a1-tech" : "a1-holistic")).length])),
  answerPositions,
  sourceCounts: Object.fromEntries(sourceCounts),
  difficultyCounts: Object.fromEntries(difficultyCounts),
  subtopicCounts: Object.fromEntries(subtopicCounts),
  exactDuplicateCount: duplicateTexts.length,
  repeatedBaseStemCount: repeatedBaseStems.length,
  repeatedBaseStemExamples: repeatedBaseStems.slice(0, 12),
  optionLengthWarningCount: optionLengthWarnings.length,
  optionLengthWarningExamples: optionLengthWarnings.slice(0, 20),
  unknownSourceIds: [...unknownSourceIds],
  structuralErrors,
};
console.log(JSON.stringify(report, null, 2));
if (structuralErrors.length || duplicateTexts.length || optionLengthWarnings.length || unknownSourceIds.size) process.exitCode = 1;
