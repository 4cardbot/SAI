import { readFile, writeFile } from "node:fs/promises";

const files = [
  "question_bank/section_a1_core_disciplines.json",
  "question_bank/section_a1_testing_assessment.json",
  "question_bank/section_a1_data_analytics.json",
  "question_bank/section_a1_performance_recovery.json",
  "question_bank/section_a1_technology_biostatistics.json",
  "question_bank/section_a1_holistic_travel_ethics.json",
];

const fixes = [
  {
    key: "compression, massage, cryotherapy, and hydrotherapy should be selected according to:",
    correct: "The intended outcome, evidence, timing, athlete preference, and possible tradeoffs",
    distractors: [
      "The most expensive modality regardless of the athlete's goals or schedule",
      "A fixed rule that passive care should replace training and sleep",
      "A belief that every modality produces identical recovery effects",
    ],
  },
  {
    key: "If r = 0.70, r squared = 0.49 suggests:",
    correct: "49% of sample outcome variation is associated with the linear predictor",
    distractors: [
      "A 49-unit increase in the outcome for each relevant predictor change",
      "A p-value equal to 0.49 for the fitted regression model",
      "Proof that the predictor causes the outcome in this sample",
    ],
  },
  {
    key: "a practical jet-lag plan should be based on:",
    correct: "Travel direction, time-zone change, light exposure, sleep timing, and competition schedule",
    distractors: [
      "A single universal bedtime chosen without considering travel direction",
      "Avoiding all daylight and activity after arrival at the destination",
      "Only the total number of flight hours without the time-zone change",
    ],
  },
  {
    key: "a Therapeutic Use Exemption is relevant when an athlete:",
    correct: "Needs a prohibited substance or method for a documented medical condition under applicable rules",
    distractors: [
      "Wants to use a prohibited substance for performance enhancement without a documented medical need",
      "Has not checked whether a supplement is included on the current prohibited list",
      "Uses a supplement with unknown ingredients and assumes it is automatically permitted",
    ],
  },
];

for (const file of files) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Array<{ text: string; options: string[]; correct: number }>;
  for (const question of questions) {
    const fix = fixes.find((candidate) => question.text.includes(candidate.key));
    if (!fix) continue;
    const target = question.correct;
    const currentCorrect = question.options[question.correct];
    if (currentCorrect !== fix.correct) throw new Error(`${file}: answer mismatch for ${question.text}`);
    const canonical = [fix.correct, ...fix.distractors];
    const start = (4 - target) % 4;
    question.options = canonical.slice(start).concat(canonical.slice(0, start));
    question.correct = target;
  }
  await writeFile(file, `${JSON.stringify(questions, null, 2)}\n`);
}
