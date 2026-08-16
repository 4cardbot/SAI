import { readFile, writeFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";

type Difficulty = "foundational" | "applied" | "analytical";
type BQuestion = {
  id: string;
  section: "B";
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
};

const groups = [
  { topic: "Human Anatomy", slug: "human_anatomy", prefix: "b-anatomy-" },
  { topic: "Human and Exercise Physiology", slug: "human_exercise_physiology", prefix: "b-physiology-" },
  { topic: "Electrotherapy and Electrodiagnosis", slug: "electrotherapy_electrodiagnosis", prefix: "b-electro-" },
  { topic: "Exercise Therapy and Rehabilitation", slug: "exercise_therapy_rehabilitation", prefix: "b-exercise-" },
  { topic: "Biomechanics and Movement Analysis", slug: "biomechanics_movement_analysis", prefix: "b-biomechanics-" },
  { topic: "Psychology and Human Development", slug: "psychology_human_development", prefix: "b-psychology-" },
  { topic: "Assessment, Diagnosis and Clinical Reasoning", slug: "assessment_diagnosis_clinical_reasoning", prefix: "b-assessment-" },
  { topic: "Sports Physiotherapy, Emergencies and Travel", slug: "sports_physiotherapy_emergencies_travel", prefix: "b-sportsphysio-" },
  { topic: "Sports Medicine, Nutrition and Research", slug: "sports_medicine_nutrition_research", prefix: "b-sportsmed-" },
] as const;

const biomechanicsSubtopicCounts: Record<string, number> = {
  "knee/patellofemoral/screw-home mechanics": 13,
  "shoulder/scapulohumeral mechanics": 13,
  "normal gait phases": 13,
  "running/jumping/landing mechanics": 13,
  "vectors/force/torque/moment arms": 13,
  "foot/ankle/subtalar/windlass mechanics": 13,
  "pathological gait and observational analysis": 12,
  "ground reaction forces": 12,
  "levers and mechanical advantage": 12,
  "spine/pelvis/lumbopelvic rhythm": 12,
  "centre of gravity/base of support": 12,
  "throwing and sport-skill biomechanics": 12,
};

function assertQuestion(question: BQuestion, group: typeof groups[number]): void {
  if (question.section !== "B" || question.topic !== group.topic) throw new Error(`${question.id} has the wrong Section B group`);
  if (!question.id.startsWith(group.prefix)) throw new Error(`${question.id} does not use the ${group.prefix} prefix`);
  if (!question.id || !question.text.trim() || !question.subtopic.trim() || !question.explanation.trim() || !question.sourceId) throw new Error(`${question.id} is missing required content`);
  if (!["foundational", "applied", "analytical"].includes(question.difficulty)) throw new Error(`${question.id} has unsupported difficulty ${question.difficulty}`);
  if (question.options.length !== 4 || new Set(question.options).size !== 4) throw new Error(`${question.id} must have four unique options`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) throw new Error(`${question.id} has an invalid correct index`);
  if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) throw new Error(`${question.id} has unknown sourceId ${question.sourceId}`);
}

const all: BQuestion[] = [];
const manifest = {
  generatedAt: "2026-08-17",
  section: "B",
  total: 0,
  groups: [] as Array<Record<string, unknown>>,
  sources: {} as Record<string, number>,
  questionMappings: [] as Array<Record<string, string>>,
};

for (const group of groups) {
  const file = `question_bank/section_b_${group.slug}.json`;
  const questions = JSON.parse(await readFile(file, "utf8")) as BQuestion[];
  if (questions.length !== 150) throw new Error(`${file} has ${questions.length}; expected 150`);
  const ids = new Set<string>();
  questions.forEach((question) => {
    assertQuestion(question, group);
    if (ids.has(question.id)) throw new Error(`Duplicate ID in ${file}: ${question.id}`);
    ids.add(question.id);
    all.push(question);
  });
  const subtopics = Object.fromEntries([...new Set(questions.map((q) => q.subtopic))].map((subtopic) => [subtopic, questions.filter((q) => q.subtopic === subtopic).length]));
  if (group.slug === "biomechanics_movement_analysis" && JSON.stringify(subtopics) !== JSON.stringify(biomechanicsSubtopicCounts)) throw new Error(`${file} does not match the central biomechanics subtopic blueprint`);
  const difficulty = Object.fromEntries(["foundational", "applied", "analytical"].map((level) => [level, questions.filter((q) => q.difficulty === level).length]));
  const answerIndices = Object.fromEntries([0, 1, 2, 3].map((index) => [String(index), questions.filter((q) => q.correct === index).length]));
  const sourceIds = [...new Set(questions.map((q) => q.sourceId))];
  manifest.groups.push({ topic: group.topic, file, count: questions.length, subtopics, difficulty, answerIndices, sourceIds });
  sourceIds.forEach((sourceId) => { manifest.sources[sourceId] = (manifest.sources[sourceId] ?? 0) + questions.filter((q) => q.sourceId === sourceId).length; });
}

if (all.length !== 1350) throw new Error(`Merged Section B bank has ${all.length}; expected 1350`);
const allIds = new Set(all.map((q) => q.id));
const allTexts = new Set(all.map((q) => q.text));
if (allIds.size !== all.length) throw new Error("Merged Section B bank has duplicate IDs");
if (allTexts.size !== all.length) throw new Error("Merged Section B bank has duplicate stems");
manifest.total = all.length;
manifest.questionMappings = all.map((question) => ({ id: question.id, repositoryGroup: question.topic, officialSyllabusArea: question.topic, subtopic: question.subtopic, sourceId: question.sourceId }));

await writeFile("question_bank/section_b.json", `${JSON.stringify(all, null, 2)}\n`);
await writeFile("research/section_b_coverage_manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Merged ${all.length} Section B questions from ${groups.length} durable group files.`);
