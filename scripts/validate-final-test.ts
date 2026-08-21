import { FINAL_TEST_BANKS, QUESTION_BANK } from "../src/data/questionBank";
import { validateQuestionBank } from "../src/data/validate";

const expected = { A1: 32, A2: 8, B: 40, C: 20 };
const errors: string[] = [];
const regularTexts = new Set(QUESTION_BANK.map((question) => question.text));
const allFinalTexts = new Set<string>();
const reports: Record<string, unknown> = {};
const requiredTopics = [
  "A1:Core Disciplines Foundational Concepts",
  "A1:Testing Parameters, Standardization & Athlete Assessment",
  "A1:Data Interpretation & Applied Analytics",
  "A1:Performance Enhancement & Recovery Protocols",
  "A1:Emerging Technologies & Biostatistics",
  "A1:Holistic Development, Travel & Ethics",
  "A2:Olympic & Asian Games",
  "A2:Indian sports ecosystem and schemes",
  "A2:Anti-doping awareness",
  "A2:Major international sporting events",
  "A2:Sports governance and ethics",
  "B:Human Anatomy",
  "B:Human and Exercise Physiology",
  "B:Electrotherapy and Electrodiagnosis",
  "B:Exercise Therapy and Rehabilitation",
  "B:Biomechanics and Movement Analysis",
  "B:Psychology and Human Development",
  "B:Assessment, Diagnosis and Clinical Reasoning",
  "B:Sports Physiotherapy, Emergencies and Travel",
  "B:Sports Medicine, Nutrition and Research",
  "C:Lower Extremity Scenarios",
  "C:Upper Extremity Scenarios",
  "C:Spine & Pelvis Scenarios",
  "C:On-Field & Emergency Triage",
  "C:Return to Play (RTP) Frameworks",
];

Object.entries(FINAL_TEST_BANKS).forEach(([finalTestId, bank]) => {
  const result = validateQuestionBank(bank, expected, false);
  errors.push(...result.errors.map((error) => `Final test ${finalTestId}: ${error}`));
  const topicCounts = new Map<string, number>();
  bank.forEach((question) => {
    topicCounts.set(`${question.section}:${question.topic}`, (topicCounts.get(`${question.section}:${question.topic}`) ?? 0) + 1);
    if (regularTexts.has(question.text)) errors.push(`${question.id} repeats a practice-bank question text`);
    if (allFinalTexts.has(question.text)) errors.push(`${question.id} repeats another final-test question text`);
    allFinalTexts.add(question.text);
  });
  requiredTopics.forEach((topic) => {
    if (!topicCounts.has(topic)) errors.push(`Final test ${finalTestId} is missing required topic: ${topic}`);
  });
  const answerCounts = bank.reduce((counts, question) => {
    counts[question.correct] += 1;
    return counts;
  }, [0, 0, 0, 0]);
  if (Math.max(...answerCounts) - Math.min(...answerCounts) > 10) errors.push(`Final test ${finalTestId} answer-position imbalance: ${answerCounts.join(", ")}`);
  const passageIds = [...new Set(bank.filter((question) => question.passageId).map((question) => question.passageId!))];
  if (passageIds.length !== 5 || passageIds.some((passageId) => bank.filter((question) => question.passageId === passageId).length !== 4)) {
    errors.push(`Final test ${finalTestId} Section C must contain five four-question cases`);
  }
  reports[finalTestId] = { ...result, answerCounts, topicCounts: Object.fromEntries(topicCounts), passageIds };
});

console.log(JSON.stringify({ valid: errors.length === 0, errors, reports }, null, 2));
if (errors.length) process.exitCode = 1;
