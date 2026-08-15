# SAI Performance Analyst Mock Tests

An independent, English-only Physiotherapy Performance Analyst preparation app aligned to the attached SAI notification:

- 100 MCQs in 2 hours.
- Section A1: 32 basic sports-science questions.
- Section A2: 8 general sports-awareness questions.
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

The production bank contains 1200 explicit, high-yield question objects authored across 12 full-length mock tests: 384 A1, 96 A2, 480 B, and 240 C records, with 120 distinct C passages. Section C passages retain their grouping (each mock test selects complete groups totalling 20 questions). Every question adheres to strict anti-pattern standards, eliminating option length disparities and formatting cues. The test engine dynamically shuffles displayed options.

The app has no backend or login. Each attempt is generated from a fresh random seed, while the active attempt and latest result are stored in versioned browser storage. Answers, the current question, and remaining time are saved as the user progresses. Closing, refreshing, leaving the tab, or navigating Home pauses the attempt; Home offers Resume. The completed report remains available until the user chooses Start new test. Starting a new test instead from Home permanently replaces the saved attempt after confirmation.

The question bank is an independent preparation resource, not an official SAI examination or recruitment application.

