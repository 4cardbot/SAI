# SAI Performance Analyst Mock Tests

An independent, English-only Physiotherapy Performance Analyst preparation app aligned to the attached SAI notification:

- 100 MCQs in 2 hours.
- Section A1: 32 basic sports-science questions.
- Section A2: 8 general sports-awareness questions.
- Section B: 40 applied Physiotherapy questions.
- Section C: 20 analytical questions selected from passage-based case studies; every passage has four linked questions.
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

The production bank contains 2,000 explicit question objects: 640 A1, 160 A2, 800 B and 400 C records, with 100 distinct C passages. The records are split into reviewable batches under [`src/data/authored`](src/data/authored), and [`src/data/questionBank.ts`](src/data/questionBank.ts) imports that bank directly; no questions are generated at runtime. The source audit is documented in [`research/sai-performance-analyst-sources.md`](research/sai-performance-analyst-sources.md), and the application includes a source catalog for official sources, guidelines, consensus papers, textbooks and research papers.

The older [`src/data/facts.ts`](src/data/facts.ts) seed data is retained only as historical material and is not part of the production bank.

The app has no backend or login. The active attempt and latest result are stored in versioned browser storage. Starting a new test clears the previous attempt and latest result after confirmation.

The question bank is an independent preparation resource, not an official SAI examination or recruitment application.
