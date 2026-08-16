import { readFile, writeFile } from "node:fs/promises";

type Question = { id: string; sourceId: string };

const files = [
  "question_bank/section_a1_testing_assessment.json",
  "question_bank/section_a1_data_analytics.json",
  "question_bank/section_a1_technology_biostatistics.json",
  "question_bank/section_a1_holistic_travel_ethics.json",
];

function setRange(question: Question, first: number, last: number, sourceId: string): boolean {
  const number = Number(question.id.split("-").at(-1));
  if (number >= first && number <= last) {
    question.sourceId = sourceId;
    return true;
  }
  return false;
}

for (const file of files) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  for (const question of questions) {
    if (file.includes("core_disciplines")) {
    if (setRange(question, 147, 150, "ais-supplements-position-2022")) continue;
    } else if (file.includes("testing_assessment")) {
      if (setRange(question, 108, 115, "world-physiotherapy-consent-2023")) continue;
      setRange(question, 116, 122, "world-physiotherapy-ethics-2023");
    } else if (file.includes("data_analytics")) {
      if (setRange(question, 69, 69, "world-physiotherapy-ethics-2023")) continue;
      if (setRange(question, 99, 99, "ais-athlete-data-governance")) continue;
      setRange(question, 131, 140, "cdc-confounding-epi-manual");
      setRange(question, 141, 150, "world-physiotherapy-ethics-2023");
    } else if (file.includes("technology_biostatistics")) {
      if (setRange(question, 21, 21, "wearable-inertial-camomilla-2018")) continue;
      if (setRange(question, 26, 30, "wearable-inertial-camomilla-2018")) continue;
      if (setRange(question, 54, 54, "scikit-learn-common-pitfalls-1-9")) continue;
      if (setRange(question, 55, 56, "scikit-learn-model-evaluation-1-9")) continue;
      if (setRange(question, 61, 61, "ais-athlete-data-governance")) continue;
      if (setRange(question, 1, 8, "wearable-athlete-sensors-seshadri-2019")) continue;
      if (setRange(question, 10, 10, "ioc-load-illness-2016")) continue;
      if (setRange(question, 9, 9, "gps-validity-scott-2016")) continue;
      if (setRange(question, 11, 17, "gps-validity-scott-2016")) continue;
      if (setRange(question, 22, 25, "wearable-inertial-camomilla-2018")) continue;
      if (setRange(question, 60, 60, "cdc-confounding-epi-manual")) continue;
      if (setRange(question, 64, 65, "ais-athlete-data-governance")) continue;
      if (setRange(question, 67, 69, "ais-athlete-data-governance")) continue;
      if (setRange(question, 70, 70, "nist-ai-rmf-2023")) continue;
      if (setRange(question, 51, 53, "scikit-learn-supervised-learning")) continue;
      if (setRange(question, 54, 60, "nist-ai-rmf-2023")) continue;
      if (setRange(question, 71, 80, "unesco-ai-ethics-2021")) continue;
      if (setRange(question, 81, 140, "nist-sematech-statistics")) continue;
      setRange(question, 141, 150, "nakagawa-cuthill-effect-size-2007");
    } else if (file.includes("holistic_travel_ethics")) {
      if (setRange(question, 61, 80, "cdc-yellow-book-jet-lag-2026")) continue;
      if (setRange(question, 6, 6, "nccih-yoga-safety")) continue;
      if (setRange(question, 8, 8, "nccih-yoga-safety")) continue;
      if (setRange(question, 11, 14, "nccih-yoga-safety")) continue;
      if (setRange(question, 16, 16, "yogic-breathing-swimmers-2017")) continue;
      if (setRange(question, 17, 17, "nccih-yoga-safety")) continue;
      if (setRange(question, 19, 20, "yogic-breathing-swimmers-2017")) continue;
      if (setRange(question, 91, 91, "wada-code-2021")) continue;
      if (setRange(question, 98, 98, "wada-code-2021")) continue;
      if (setRange(question, 100, 100, "wada-code-2021")) continue;
      if (setRange(question, 146, 146, "acsm-getp-12")) continue;
      if (setRange(question, 147, 148, "nsca-essentials-5")) continue;
      if (setRange(question, 70, 70, "cdc-yellow-book-jet-lag-2026")) continue;
      if (setRange(question, 95, 95, "wada-istue-2023")) continue;
      if (setRange(question, 36, 36, "world-physiotherapy-consent-2023")) continue;
      if (setRange(question, 39, 39, "world-physiotherapy-ethics-2023")) continue;
      if (setRange(question, 92, 93, "ais-supplements-position-2022")) continue;
      if (setRange(question, 95, 96, "ais-supplements-position-2022")) continue;
      if (setRange(question, 99, 99, "ais-supplements-position-2022")) continue;
      if (setRange(question, 116, 116, "world-physiotherapy-consent-2023")) continue;
      if (setRange(question, 129, 129, "bern-return-to-sport-2016")) continue;
      if (setRange(question, 15, 15, "acsm-getp-12")) continue;
      if (setRange(question, 18, 18, "acsm-getp-12")) continue;
      if (setRange(question, 1, 20, "yoga-athletes-review-2025")) continue;
      if (setRange(question, 21, 30, "yoga-mindfulness-sport-buhlmayer-2017")) continue;
      if (setRange(question, 101, 110, "wada-istue-2023")) continue;
      if (setRange(question, 111, 120, "world-physiotherapy-ethics-2023")) continue;
      if (setRange(question, 131, 140, "ais-athlete-data-governance")) continue;
      setRange(question, 121, 140, "interdisciplinary-performance-sport-burns-2023");
    }
  }
  await writeFile(file, `${JSON.stringify(questions, null, 2)}\n`);
}
