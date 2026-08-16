import { readFile, writeFile } from "node:fs/promises";

type Question = { id: string; options: string[]; correct: number };
const files = [
  "question_bank/section_a2_olympic_asian_games.json",
  "question_bank/section_a2_indian_sports_ecosystem_schemes.json",
  "question_bank/section_a2_anti_doping_awareness.json",
  "question_bank/section_a2_major_international_events.json",
  "question_bank/section_a2_sports_governance_ethics.json",
];
function shuffledTargets(seed: number): number[] {
  const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  let state = seed >>> 0;
  for (let index = values.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }
  return values;
}
const targetSequences = files.map((_, index) => shuffledTargets(11 + index * 11));
const changes: Array<Record<string, unknown>> = [];
let globalIndex = 0;
for (const [fileIndex, file] of files.entries()) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  for (const [questionIndex, question] of questions.entries()) {
    const target = targetSequences[fileIndex][questionIndex];
    const before = { options: [...question.options], correct: question.correct };
    if (target !== question.correct) {
      const answer = question.options[question.correct];
      const distractors = question.options.filter((_, index) => index !== question.correct);
      distractors.splice(target, 0, answer);
      question.options = distractors;
      question.correct = target;
      changes.push({ id: question.id, file, before, after: { options: [...question.options], correct: question.correct }, target, reason: "Central option permutation to remove mechanical answer-position cycles while preserving the answer text." });
    }
    globalIndex += 1;
  }
  await writeFile(file, `${JSON.stringify(questions, null, 2)}\n`);
}
await writeFile("research/a2_answer_reordering_log.json", `${JSON.stringify({ generatedAt: "2026-08-16", targetSequences, totalQuestions: globalIndex, changedQuestions: changes.length, changes }, null, 2)}\n`);
console.log(`Reordered correct options for ${changes.length} of ${globalIndex} A2 questions.`);
