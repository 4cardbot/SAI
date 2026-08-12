import { QUESTION_BANK } from "../src/data/questionBank";
import { validateQuestionBank } from "../src/data/validate";

const result = validateQuestionBank(QUESTION_BANK);
console.log(JSON.stringify({ ...result, sample: QUESTION_BANK.slice(0, 2) }, null, 2));
if (!result.valid) process.exitCode = 1;
