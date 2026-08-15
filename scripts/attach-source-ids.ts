import fs from "node:fs";
import path from "node:path";
import { sourceIdForQuestion } from "../src/data/sourceCatalog";

const root = path.resolve("mock_tests");
const files = fs.readdirSync(root)
  .filter((file) => /^mock_test_\d+\.json$/.test(file))
  .sort((a, b) => Number(a.match(/\d+/)?.[0]) - Number(b.match(/\d+/)?.[0]));

for (const file of files) {
  const filename = path.join(root, file);
  const questions = JSON.parse(fs.readFileSync(filename, "utf8")) as Array<Record<string, unknown>>;
  questions.forEach((question) => {
    question.sourceId = sourceIdForQuestion({
      section: String(question.section),
      topic: String(question.topic),
      subtopic: String(question.subtopic),
      text: String(question.text),
      explanation: String(question.explanation),
    });
  });
  fs.writeFileSync(filename, JSON.stringify(questions, null, 2) + "\n");
}
