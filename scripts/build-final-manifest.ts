import { mkdirSync, writeFileSync } from "node:fs";
import { FINAL_TEST_BANK } from "../src/data/questionBank";

const samplePatternByTopic: Record<string, string> = {
  "Core Disciplines Foundational Concepts": "SAI Annexure B Section A cross-disciplinary applied concept",
  "Testing Parameters, Standardization & Athlete Assessment": "SAI Annexure A testing, validity and standardisation emphasis",
  "Data Interpretation & Applied Analytics": "SAI Annexure A data interpretation and evidence emphasis",
  "Performance Enhancement & Recovery Protocols": "SAI Annexure B fatigue, recovery and training-adjustment pattern",
  "Emerging Technologies & Biostatistics": "SAI Annexure A technology and biostatistics emphasis",
  "Holistic Development, Travel & Ethics": "SAI Annexure A athlete-management, travel and ethical-practice emphasis",
  "Olympic & Asian Games": "SAI Annexure A2 general sports awareness",
  "Indian sports ecosystem and schemes": "SAI Annexure A2 Indian sports ecosystem and schemes",
  "Anti-doping awareness": "SAI Annexure A2 clean-sport and TUE awareness",
  "Major international sporting events": "SAI Annexure A2 major-event awareness",
  "Sports governance and ethics": "SAI Annexure A2 governance, safeguarding and ethics",
  "Human Anatomy": "SAI Annexure B applied anatomy and kinesiology",
  "Human and Exercise Physiology": "SAI Annexure B applied physiology scenarios",
  "Electrotherapy and Electrodiagnosis": "SAI Annexure B modality selection and safety",
  "Exercise Therapy and Rehabilitation": "SAI Annexure B exercise-therapy application",
  "Biomechanics and Movement Analysis": "SAI Annexure B movement analysis and force interpretation",
  "Psychology and Human Development": "SAI Annexure B applied psychology scenarios",
  "Assessment, Diagnosis and Clinical Reasoning": "SAI Annexure B diagnostic-test and clinical-reasoning pattern",
  "Sports Physiotherapy, Emergencies and Travel": "SAI Annexure B emergency, rehabilitation and travel application",
  "Sports Medicine, Nutrition and Research": "SAI Annexure B nutrition, sports medicine and evidence application",
  "Lower Extremity Scenarios": "SAI Annexure B Section C sports-injury case pattern; Doha consensus integration",
  "Upper Extremity Scenarios": "SAI Annexure B Section C overhead-athlete case pattern",
  "Spine & Pelvis Scenarios": "SAI Annexure B Section C spine and pelvis case pattern",
  "On-Field & Emergency Triage": "SAI Annexure B Section C emergency and concussion case pattern; SCAT6 integration",
  "Return to Play (RTP) Frameworks": "SAI Annexure B Section C criteria-based decision pattern; IOC load integration",
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

const questions = FINAL_TEST_BANK.map((question) => {
  const correctLength = question.options[question.correct].length;
  const distractors = question.options.filter((_, index) => index !== question.correct).map((option) => option.length);
  const spread = Math.max(...question.options.map((option) => option.length)) - Math.min(...question.options.map((option) => option.length));
  const correctStrictlyLongest = correctLength > Math.max(...distractors);
  return {
    id: question.id,
    section: question.section,
    repositoryGroup: question.topic,
    syllabusSubtopic: question.subtopic,
    primarySourceId: question.sourceId,
    samplePattern: samplePatternByTopic[question.topic] ?? "SAI sample-informed authored item",
    passageId: question.passageId ?? null,
    correctIndex: question.correct,
    optionLengthSpread: spread,
    correctStrictlyLongest,
    flags: {
      optionLengthSpreadOver15: spread > 15,
      correctOver10CharsLongerThanDistractorMedian: correctLength - median(distractors) > 10,
    },
  };
});

const topicCounts = FINAL_TEST_BANK.reduce<Record<string, number>>((counts, question) => {
  const key = `${question.section}: ${question.topic}`;
  counts[key] = (counts[key] ?? 0) + 1;
  return counts;
}, {});
const sourceCounts = FINAL_TEST_BANK.reduce<Record<string, number>>((counts, question) => {
  counts[question.sourceId] = (counts[question.sourceId] ?? 0) + 1;
  return counts;
}, {});
const answerPositionCounts = FINAL_TEST_BANK.reduce<number[]>((counts, question) => {
  counts[question.correct] += 1;
  return counts;
}, [0, 0, 0, 0]);
const cases = [...new Set(FINAL_TEST_BANK.filter((question) => question.passageId).map((question) => question.passageId!))].map((passageId) => ({
  passageId,
  questionIds: FINAL_TEST_BANK.filter((question) => question.passageId === passageId).map((question) => question.id),
  sourceIds: [...new Set(FINAL_TEST_BANK.filter((question) => question.passageId === passageId).map((question) => question.sourceId))],
}));

const manifest = {
  version: 1,
  generatedAt: "2026-08-21",
  bankPath: "question_bank/final_test.json",
  purpose: "Fixed unseen 100-question final CBT set; source and audit manifest",
  composition: { A1: 32, A2: 8, B: 40, C: 20 },
  timing: { totalMinutes: 120, secondsPerQuestion: 72 },
  asOf: "2026-08-16",
  sourcePriority: ["sai-notification-2026", "scat6-consensus-bjsm-2023", "doha-groin-consensus-2015", "ioc-load-management-consensus-2016", "textbooks-and-official-sources"],
  topicCounts,
  sourceCounts,
  answerPositionCounts,
  cases,
  questions,
};

mkdirSync("research", { recursive: true });
writeFileSync("research/final_test_manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
