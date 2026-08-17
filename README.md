# SAI Performance Analyst Question Bank

An independent, English-only Physiotherapy Performance Analyst preparation app aligned to the attached SAI notification:

- 100 MCQs in 2 hours.
- Section A1: 32 basic sports-science questions in the official CBT; 100-question A1-only practice sets.
- Section A2: 8 general sports-awareness questions in the official CBT; 40-question A2-only practice sets.
- Section B: 40 applied Physiotherapy questions in the official CBT; 100-question B-only practice sets.
- Section C: 20 analytical questions in the official CBT; theme-only practice sets of 200 questions selected as 50 complete four-question case studies.
- Correct: +1, wrong: −0.25, skipped: 0.
- Focused tests can be created by selecting a section and topic, with optional subtopics for Sections A1, A2 and B. Every matching question is included and receives 72 seconds of prorated time.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run validate:bank
npm run generate:c
npm run audit:c
npm test
npm run build
```

## Free deployment

### Netlify Drop

Run `npm run build`, then drag the generated `dist` folder into [Netlify Drop](https://app.netlify.com/drop). Netlify will provide a shareable URL immediately. The included `netlify.toml` also supports a connected repository deployment.

### GitHub Pages

Create a GitHub repository, push this folder to its `main` branch, then enable **Settings → Pages → GitHub Actions**. The included `.github/workflows/deploy-pages.yml` validates the bank, runs tests, builds the app, and deploys it on every push to `main`.

## Content model

The production bank contains 3450 explicit, high-yield question objects split into four section files: `question_bank/section_a1.json` (900), `section_a2.json` (200), `section_b.json` (1350), and `section_c.json` (1000). A1 retains six 150-question group files; A2 retains five 40-question group files; B retains nine 150-question group files; Section C retains five 200-question theme files; and each section has a coverage manifest. Section C contains 250 distinct passages, each preserved as a complete four-question case-study group. The app uses dropdowns for section/topic/subtopic-focused practice, except Section C which is filtered by theme only, and retains a full 100-question CBT simulation with the official 32 / 8 / 40 / 20 weighting. Focused tests use the standard 72-seconds-per-question pace; selecting a Section C theme therefore produces 200 questions and a 240-minute practice allocation. Automated audits check answer-position balance, option-length risk, case continuity, source provenance and consensus coverage; flagged option sets remain subject to content review. The test engine dynamically shuffles displayed options.

The app has no backend or login. Each attempt is generated from a fresh random seed, while the active attempt and latest result are stored in versioned browser storage. Answers, the current question, and remaining time are saved as the user progresses. Closing, refreshing, leaving the tab, or navigating Home pauses the attempt; Home offers Resume. The completed report remains available until the user chooses Start new test. Starting a new test instead from Home permanently replaces the saved attempt after confirmation.

The question bank is an independent preparation resource, not an official SAI examination or recruitment application.
