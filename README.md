# SAI Performance Analyst Question Bank

An independent, English-only Physiotherapy Performance Analyst preparation app aligned to the attached SAI notification:

- 100 MCQs in 2 hours.
- Section A1: 32 basic sports-science questions.
- Section A2: 8 general sports-awareness questions in the official CBT; 40-question A2-only practice sets.
- Section B: 40 applied Physiotherapy questions.
- Section C: 20 analytical questions selected from complete passage-based case-study groups.
- Correct: +1, wrong: −0.25, skipped: 0.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run validate:bank
npm test
npm run build
```

## Free deployment

### Netlify Drop

Run `npm run build`, then drag the generated `dist` folder into [Netlify Drop](https://app.netlify.com/drop). Netlify will provide a shareable URL immediately. The included `netlify.toml` also supports a connected repository deployment.

### GitHub Pages

Create a GitHub repository, push this folder to its `main` branch, then enable **Settings → Pages → GitHub Actions**. The included `.github/workflows/deploy-pages.yml` validates the bank, runs tests, builds the app, and deploys it on every push to `main`.

## Content model

The production bank contains 1820 explicit, high-yield question objects split into four section files: `question_bank/section_a1.json` (900), `section_a2.json` (200), `section_b.json` (480), and `section_c.json` (240). A1 retains six 150-question group files; A2 retains five 40-question group files and a coverage manifest. Section C contains 120 distinct passages, each preserved as a complete case-study group. The app supports section-specific practice sets, a 100-question A1-only test drawn exclusively from the A1 bank, a 40-question A2-only practice test with a 48-minute timer, and a full 100-question CBT simulation with the official 32 / 8 / 40 / 20 weighting. Every question adheres to strict anti-pattern standards, eliminating option-length and answer-position cues. The test engine dynamically shuffles displayed options.

The app has no backend or login. Each attempt is generated from a fresh random seed, while the active attempt and latest result are stored in versioned browser storage. Answers, the current question, and remaining time are saved as the user progresses. Closing, refreshing, leaving the tab, or navigating Home pauses the attempt; Home offers Resume. The completed report remains available until the user chooses Start new test. Starting a new test instead from Home permanently replaces the saved attempt after confirmation.

The question bank is an independent preparation resource, not an official SAI examination or recruitment application.
