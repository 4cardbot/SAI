import { FINAL_TEST_BANK } from "../src/data/questionBank";
import { QUESTION_BANK } from "../src/data/questionBank";
import { validateQuestionBank } from "../src/data/validate";

const expected = { A1: 32, A2: 8, B: 40, C: 20 };
const result = validateQuestionBank(FINAL_TEST_BANK, expected, false);
const errors = [...result.errors];
const regularTexts = new Set(QUESTION_BANK.map((question) => question.text));
FINAL_TEST_BANK.forEach((question) => {
  if (regularTexts.has(question.text)) errors.push(`${question.id} repeats a practice-bank question text`);
});

const topicCounts = new Map<string, number>();
FINAL_TEST_BANK.forEach((question) => topicCounts.set(`${question.section}:${question.topic}`, (topicCounts.get(`${question.section}:${question.topic}`) ?? 0) + 1));
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
requiredTopics.forEach((topic) => {
  if (!topicCounts.has(topic)) errors.push(`Final test is missing required topic: ${topic}`);
});

const answerCounts = FINAL_TEST_BANK.reduce((counts, question) => {
  counts[question.correct] += 1;
  return counts;
}, [0, 0, 0, 0]);
if (Math.max(...answerCounts) - Math.min(...answerCounts) > 10) errors.push(`Final answer-position imbalance: ${answerCounts.join(", ")}`);
const passageIds = [...new Set(FINAL_TEST_BANK.filter((question) => question.passageId).map((question) => question.passageId!))];
if (passageIds.length !== 5 || passageIds.some((passageId) => FINAL_TEST_BANK.filter((question) => question.passageId === passageId).length !== 4)) {
  errors.push("Final Section C must contain five four-question cases");
}

console.log(JSON.stringify({ ...result, valid: errors.length === 0, errors, answerCounts, topicCounts: Object.fromEntries(topicCounts), passageIds }, null, 2));
if (errors.length) process.exitCode = 1;
