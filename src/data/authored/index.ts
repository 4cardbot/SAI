import sectionA1 from "../../../question_bank/section_a1.json";
import sectionA2 from "../../../question_bank/section_a2.json";
import sectionB from "../../../question_bank/section_b.json";
import sectionC from "../../../question_bank/section_c.json";
import finalTest from "../../../question_bank/final_test.json";
import type { Question, Section } from "../../types";
import { sourceIdForQuestion } from "../sourceCatalog";

function withProvenance(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    sourceId: question.sourceId ?? sourceIdForQuestion(question),
  }));
}

export const SECTION_BANKS: Record<Section, Question[]> = {
  A1: withProvenance(sectionA1 as unknown as Question[]),
  A2: withProvenance(sectionA2 as unknown as Question[]),
  B: withProvenance(sectionB as unknown as Question[]),
  C: withProvenance(sectionC as unknown as Question[]),
};

/** Fixed unseen 100-question CBT used by the dedicated final-test mode. */
export const FINAL_TEST_BANK: Question[] = withProvenance(finalTest as unknown as Question[]);

/** The complete production bank, composed from the four syllabus sections. */
export const AUTHORED_QUESTION_BANK: Question[] = [
  ...SECTION_BANKS.A1,
  ...SECTION_BANKS.A2,
  ...SECTION_BANKS.B,
  ...SECTION_BANKS.C,
];
