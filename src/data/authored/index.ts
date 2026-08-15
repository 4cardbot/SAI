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
import type { Question } from "../../types";

export const TEST_1_QUESTIONS = test1 as unknown as Question[];
export const TEST_2_QUESTIONS = test2 as unknown as Question[];
export const TEST_3_QUESTIONS = test3 as unknown as Question[];
export const TEST_4_QUESTIONS = test4 as unknown as Question[];
export const TEST_5_QUESTIONS = test5 as unknown as Question[];
export const TEST_6_QUESTIONS = test6 as unknown as Question[];
export const TEST_7_QUESTIONS = test7 as unknown as Question[];
export const TEST_8_QUESTIONS = test8 as unknown as Question[];
export const TEST_9_QUESTIONS = test9 as unknown as Question[];
export const TEST_10_QUESTIONS = test10 as unknown as Question[];

/**
 * 10 Individual Mock Tests (100 Questions each) loaded directly from individual JSON files.
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
];

/**
 * The complete question bank composed dynamically from the 10 individual JSON test files.
 */
export const AUTHORED_QUESTION_BANK: Question[] = INDIVIDUAL_TESTS.flat();
