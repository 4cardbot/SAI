import test1 from "../../../mock_tests/mock_test_1.json";
import test2 from "../../../mock_tests/mock_test_2.json";
import test3 from "../../../mock_tests/mock_test_3.json";
import test4 from "../../../mock_tests/mock_test_4.json";
import test5 from "../../../mock_tests/mock_test_5.json";
import test6 from "../../../mock_tests/mock_test_6.json";
import test7 from "../../../mock_tests/mock_test_7.json";
import test8 from "../../../mock_tests/mock_test_8.json";
import test9 from "../../../mock_tests/mock_test_9.json";
import test10 from "../../../mock_tests/mock_test_10.json";
import test11 from "../../../mock_tests/mock_test_11.json";
import test12 from "../../../mock_tests/mock_test_12.json";
import type { Question } from "../../types";
import { sourceIdForQuestion } from "../sourceCatalog";

function withProvenance(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    sourceId: question.sourceId ?? sourceIdForQuestion(question),
  }));
}

export const TEST_1_QUESTIONS = withProvenance(test1 as unknown as Question[]);
export const TEST_2_QUESTIONS = withProvenance(test2 as unknown as Question[]);
export const TEST_3_QUESTIONS = withProvenance(test3 as unknown as Question[]);
export const TEST_4_QUESTIONS = withProvenance(test4 as unknown as Question[]);
export const TEST_5_QUESTIONS = withProvenance(test5 as unknown as Question[]);
export const TEST_6_QUESTIONS = withProvenance(test6 as unknown as Question[]);
export const TEST_7_QUESTIONS = withProvenance(test7 as unknown as Question[]);
export const TEST_8_QUESTIONS = withProvenance(test8 as unknown as Question[]);
export const TEST_9_QUESTIONS = withProvenance(test9 as unknown as Question[]);
export const TEST_10_QUESTIONS = withProvenance(test10 as unknown as Question[]);
export const TEST_11_QUESTIONS = withProvenance(test11 as unknown as Question[]);
export const TEST_12_QUESTIONS = withProvenance(test12 as unknown as Question[]);

/**
 * 12 Individual Mock Tests (100 Questions each) loaded directly from individual JSON files.
 */
export const INDIVIDUAL_TESTS: Question[][] = [
  TEST_1_QUESTIONS,
  TEST_2_QUESTIONS,
  TEST_3_QUESTIONS,
  TEST_4_QUESTIONS,
  TEST_5_QUESTIONS,
  TEST_6_QUESTIONS,
  TEST_7_QUESTIONS,
  TEST_8_QUESTIONS,
  TEST_9_QUESTIONS,
  TEST_10_QUESTIONS,
  TEST_11_QUESTIONS,
  TEST_12_QUESTIONS,
];

/**
 * The complete question bank composed dynamically from the 12 individual JSON test files.
 */
export const AUTHORED_QUESTION_BANK: Question[] = INDIVIDUAL_TESTS.flat();
