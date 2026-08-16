import { readFile, writeFile } from "node:fs/promises";

type A2Question = {
  id: string;
  section: "A2";
  topic: string;
  subtopic: string;
  difficulty: "foundational" | "applied" | "analytical";
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
  asOf: string;
};

const groups = [
  { topic: "Olympic & Asian Games", slug: "olympic_asian_games" },
  { topic: "Indian sports ecosystem and schemes", slug: "indian_sports_ecosystem_schemes" },
  { topic: "Anti-doping awareness", slug: "anti_doping_awareness" },
  { topic: "Major international sporting events", slug: "major_international_events" },
  { topic: "Sports governance and ethics", slug: "sports_governance_ethics" },
] as const;

function assertQuestion(question: A2Question, topic: string): void {
  if (question.section !== "A2" || question.topic !== topic) throw new Error(`${question.id} has the wrong A2 group`);
  if (!question.id || !question.text || !question.explanation || !question.sourceId) throw new Error(`${question.id} is missing required content`);
  if (question.asOf !== "2026-08-16") throw new Error(`${question.id} has the wrong asOf date`);
  if (question.options.length !== 4 || new Set(question.options).size !== 4) throw new Error(`${question.id} must have four unique options`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) throw new Error(`${question.id} has an invalid correct index`);
}

const all: A2Question[] = [];
const manifest = { generatedAt: "2026-08-16", section: "A2", total: 0, groups: [] as Array<Record<string, unknown>>, sources: {} as Record<string, number>, questionMappings: [] as Array<Record<string, string>> };

for (const group of groups) {
  const file = `question_bank/section_a2_${group.slug}.json`;
  const questions = JSON.parse(await readFile(file, "utf8")) as A2Question[];
  if (questions.length !== 40) throw new Error(`${file} has ${questions.length}; expected 40`);
  const ids = new Set<string>();
  questions.forEach((question) => {
    assertQuestion(question, group.topic);
    if (ids.has(question.id)) throw new Error(`Duplicate ID in ${file}: ${question.id}`);
    ids.add(question.id);
    all.push(question);
  });
  const subtopics = Object.fromEntries([...new Set(questions.map((q) => q.subtopic))].map((subtopic) => [subtopic, questions.filter((q) => q.subtopic === subtopic).length]));
  const difficulty = Object.fromEntries(["foundational", "applied", "analytical"].map((level) => [level, questions.filter((q) => q.difficulty === level).length]));
  const answerIndices = Object.fromEntries([0, 1, 2, 3].map((index) => [String(index), questions.filter((q) => q.correct === index).length]));
  const sourceIds = [...new Set(questions.map((q) => q.sourceId))];
  manifest.groups.push({ topic: group.topic, file, count: questions.length, subtopics, difficulty, answerIndices, sourceIds });
  sourceIds.forEach((sourceId) => { manifest.sources[sourceId] = (manifest.sources[sourceId] ?? 0) + questions.filter((q) => q.sourceId === sourceId).length; });
}

if (all.length !== 200) throw new Error(`A2 merged bank has ${all.length}; expected 200`);
const allIds = new Set(all.map((q) => q.id));
const allTexts = new Set(all.map((q) => q.text));
if (allIds.size !== all.length) throw new Error("Merged A2 bank has duplicate IDs");
if (allTexts.size !== all.length) throw new Error("Merged A2 bank has duplicate stems");
manifest.total = all.length;
manifest.questionMappings = all.map((question) => ({ id: question.id, repositoryGroup: question.topic, officialSyllabusArea: question.topic, subtopic: question.subtopic, sourceId: question.sourceId }));

await writeFile("question_bank/section_a2.json", `${JSON.stringify(all, null, 2)}\n`);
await writeFile("research/a2_coverage_manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Merged ${all.length} A2 questions from ${groups.length} durable group files.`);
