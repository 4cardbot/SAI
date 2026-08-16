# SAI Performance Analyst — A1 source and syllabus research

Research note prepared 2026-08-16 from the supplied notification PDF, `sectionA_guidelines.md`, the current `src/data/sourceCatalog.ts`, all PDFs in `books/`, and restricted high-trust web sources. No questions are generated here.

## 1. Primary notification evidence

Primary local source: `_Final_ NOTIFICATION FOR PA REGULAR RECRUITMENT_30.01.2026.pdf` (English text; PDF page numbers printed in the document).

| Exam fact | Evidence |
| --- | --- |
| CBT duration and size | Two hours; 100 MCQs; one-quarter of the marks assigned to a question deducted for each incorrect answer — notification p. 14. |
| Section A | Common to all sports-science disciplines; 40 marks made up of A1 Basic Sports Science Knowledge (32) and A2 General Sports Awareness (8); objective MCQs — pp. 14–15. |
| Section B | Discipline-specific Applied Sports Science Knowledge; 40 marks; objective MCQs — pp. 15 and 22. |
| Section C | Discipline-specific Sports-Related Case Studies; 20 marks; objective, passage-based/analytical MCQs — pp. 15 and 22–23. |
| A1 scope | Interdisciplinary core covering foundational concepts, assessment, testing, data use, performance, recovery, injury prevention, technology, research, holistic management and ethics — pp. 19–22. |
| A2 scope | Olympic and Asian Games; Indian sports ecosystem and schemes; anti-doping; major international events; sports governance and ethics — p. 22. |
| Illustrative samples | Annexure B, “Illustrative Sample Questions (All Seven Sports Science Disciplines),” begins p. 106. |

The notification’s English Section A1 is on pp. 19–22. Pages 16–18 contain the Hindi counterpart. The guideline file is useful as a working summary, but the notification is the controlling syllabus source.

## 2. Exact A1 syllabus and repository-group mapping

The numbered areas below retain the notification’s English labels and coverage. The right-hand group names are repository concepts, not official notification sections.

| No. | Notification A1 coverage | Notification page | Current repository group/file |
| ---: | --- | :---: | --- |
| 1 | **Anthropometry** — body composition, somatotypes, growth and maturation | 19 | Core Disciplines Foundational Concepts / `section_a1_core_disciplines.json` |
| 2 | **Exercise Physiology** — energy systems, fatigue and adaptation | 19 | Core / `section_a1_core_disciplines.json` |
| 3 | **Physiotherapy** — injury mechanisms and basic rehabilitation principles | 19 | Core / `section_a1_core_disciplines.json` |
| 4 | **Biomechanics** — movement analysis, force and kinematics | 19 | Core / `section_a1_core_disciplines.json` |
| 5 | **Biochemistry** — biomarkers, metabolism and recovery indicators | 19 | Core / `section_a1_core_disciplines.json` |
| 6 | **Strength & Conditioning** — training principles, load and recovery | 19 | Core / `section_a1_core_disciplines.json` |
| 7 | **Psychology** — motivation, stress, arousal and mental readiness | 19 | Core / `section_a1_core_disciplines.json` |
| 8 | **Nutrition** — macronutrients, hydration and energy balance | 19 | Core / `section_a1_core_disciplines.json` |
| 9 | **Test Parameters & Athlete Assessment** — physiological, biomechanical, biochemical, anthropometric, psychological and performance parameters; validity, reliability, sensitivity, specificity; test-battery selection; normative/reference data and sport benchmarks; laboratory versus field testing | 20 | Testing Parameters, Standardization & Athlete Assessment / `section_a1_testing_assessment.json` |
| 10 | **Test Protocols & Standardization** — SOPs; pre-test requirements and athlete preparation; contraindications and safety; instrument calibration and quality control; ethics, informed consent and confidentiality; national/international testing guidance including IOC, ACSM, NSCA, FIFA and World Athletics | 20 | Testing Parameters, Standardization & Athlete Assessment / `section_a1_testing_assessment.json` |
| 11 | **Interpretation & Application of Data** — performance profiling; strengths, weaknesses and limiting factors; translating data into training recommendations; longitudinal monitoring and trends; communicating findings | 20 | Data Interpretation & Applied Analytics / `section_a1_data_analytics.json` |
| 12 | **Performance Enhancement Strategies** — evidence-based strength, endurance, speed, agility and power interventions; technique/movement efficiency; load management and periodization; psychological skills; nutrition, hydration and supplementation within WADA guidance | 20 | Performance Enhancement & Recovery Protocols / `section_a1_performance_recovery.json` |
| 13 | **Recovery Protocols & Regeneration** — physiology of recovery and fatigue; active/passive recovery; cryotherapy, thermotherapy, compression, massage and hydrotherapy; sleep and circadian management; subjective/objective monitoring | 20 | Performance Enhancement & Recovery Protocols / `section_a1_performance_recovery.json` |
| 14 | **Injury Prevention & Risk Management** — common injuries and mechanisms; screening; load monitoring and overuse prevention; biomechanical/movement strategies; return-to-play criteria and multidisciplinary coordination | 20–21 | Performance Enhancement & Recovery Protocols / `section_a1_performance_recovery.json` |
| 15 | **New & Emerging Technologies in Sports Science** — wearables and athlete-monitoring systems; GPS, IMU, force plates, motion capture and video analysis; AI/ML and big data; mobile/digital athlete-management platforms; limitations, ethics and privacy | 21 | Emerging Technologies & Biostatistics / `section_a1_technology_biostatistics.json` |
| 16 | **Biostatistics & Data Analysis** — descriptive/inferential statistics; visualization and interpretation; statistical software and performance-analysis tools; variability, effect size and practical significance; evidence-based decisions through analytics | 21 | Emerging Technologies & Biostatistics / `section_a1_technology_biostatistics.json` |
| 17 | **Principles of Research & Evidence-Based Practice** — research design and methodology; experimental, observational and applied models; critical appraisal; athlete-research ethics; translating findings into practice | 21 | Data Interpretation & Applied Analytics / `section_a1_data_analytics.json` |
| 18 | **Yoga & Mind–Body Interventions in Sports** — flexibility, balance, strength and mobility; pranayama; meditation, mindfulness and stress management; integration into training/rehabilitation; supporting evidence | 21 | Holistic Development, Travel & Ethics / `section_a1_holistic_travel_ethics.json` |
| 19 | **Athlete Health, Wellness & Holistic Development** — physical, mental and emotional well-being; burnout, overtraining and mental health; lifestyle/behavioral interventions; LTAD models | 21 | Holistic / `section_a1_holistic_travel_ethics.json` |
| 20 | **Travel-Related Challenges & Competition Readiness** — travel, jet lag and time zones; travel fatigue, sleep and recovery; climate, altitude, heat and humidity; travel nutrition/hydration; competition tours and camps | 21–22 | Holistic / `section_a1_holistic_travel_ethics.json` |
| 21 | **Anti-Doping Awareness & Ethical Practices** — anti-doping principles and WADA Code; TUEs; sports-scientist responsibilities; clean sport and athlete education | 22 | Holistic / `section_a1_holistic_travel_ethics.json` |
| 22 | **Interdisciplinary Coordination & Support Systems** — sports-scientist role in high-performance teams; collaboration with coaches, medical staff, physiotherapists, psychologists and nutritionists; athlete-management systems/documentation; communication, reporting and conduct | 22 | Holistic Development, Travel & Ethics / `section_a1_holistic_travel_ethics.json` |

Canonical storage implication: the official syllabus has 22 numbered A1 areas. The repository’s six generation files are thematic storage groupings; the final bank assigns each official area to one primary group so coverage can be audited without double-counting. They must not be mistaken for six official syllabus sections. `section_a1.json` is the 900-item aggregate currently present in the worktree.

## 3. Illustrative sample-question structure and answer conventions

### What the notification demonstrates

- **Section A sample:** Annexure B pp. 106–107 gives eight short, conceptual/applied questions. The examples cover the eight A1 foundational concepts in order: anthropometry, exercise physiology, physiotherapy, biomechanics, biochemistry, strength and conditioning, psychology, and nutrition. It does not provide a separate A2 sample despite the heading’s “+ sports awareness” wording.
- **Section B sample:** Begins p. 108 and is arranged under the seven recruitment disciplines: Anthropometry (p. 108), Physiology (p. 111), Physiotherapy (p. 112), Biomechanics (p. 116), Strength & Conditioning (p. 117), Psychology (p. 119), and Nutrition (p. 120). The sample heading and discipline headings therefore support **seven job disciplines**.
- **Section C sample:** Begins p. 122 as “Advanced, Passage-Based.” It provides discipline-specific scenarios/case stems for Anthropometry, Physiology, Physiotherapy, Biomechanics, Strength & Conditioning, Psychology and Nutrition; examples continue through pp. 123–135. This matches the p. 15/p. 22 description of analytical, passage-based case studies.
- **Common item shape:** a stem, four response choices, and an answer letter. Some stems are conceptual; others are applied, numerical or scenario-based. The notification gives no official per-subtopic question quota or fixed A1 distribution.
- **Reference lines:** most illustrative items have no citation; selected later Section C items include a `Reference:` line (for example NSCA/ACE on pp. 130–131). A reference line is not part of the stated CBT format.

### Formatting inconsistencies to normalize in the bank

- Section A pp. 106–107 uses lowercase `a.`–`d.` and `Correct Answer: d` style.
- Section B mixes uppercase `(A)`–`(D)` with `Correct Answer: B`, uppercase `A)`–`D)` with `Answer: C`, and lowercase options with `Correct Answer: b` (see pp. 108, 119–122).
- Some Psychology Section B items on pp. 119–120 omit option letters and/or an answer line entirely. They are incomplete as answer-key examples.
- Section C mixes lowercase options/`Correct Answer: c` (pp. 123–124, 128, 130–131) and uppercase options/`Answer: C` (p. 133 onward).
- Page 106 contains a duplicated-looking `1. 1.` before the first Section A item; this is a layout/transcription artifact, not a content rule.

Recommended data convention for future authored items: retain four option strings and a zero-based `correct` index, independent of the notification’s inconsistent display labels. That is a repository convention, not a claim about the CBT renderer.

## 4. Supplied books and locatable material

Page numbers below are **printed book pages** where the PDF contents identifies them. `PDF p.` identifies the PDF page containing the title, copyright or contents evidence. Do not silently substitute PDF page numbers for printed pagination.

| Proposed/current ID | Supplied PDF and bibliographic evidence | Relevant A1 chapters/pages |
| --- | --- | --- |
| `basic-biomechanics-hall` | `books/Basic Biomechanics.pdf`; Susan J. Hall, **Basic Biomechanics, 6th ed.**; McGraw-Hill, copyright 2012 (PDF pp. 3–4). | Ch. 1 *What Is Biomechanics?* p. 1; Ch. 2 *Kinematic Concepts* p. 29; Ch. 3 *Kinetic Concepts* p. 61; Ch. 5 *Skeletal Articulations* p. 117; Ch. 6 *Skeletal Muscle* p. 147; Ch. 8 *Lower Extremity* p. 229; Chs. 10–14 linear/angular kinematics, kinetics, equilibrium and angular kinetics pp. 319–449; Appendix D anthropometric parameters p. 514. Contents: PDF pp. 5–14. |
| `brukner-khan-clinical-sports-medicine` | `books/Brukner & Khan's Clinical Sports Medicine 1.pdf`; **Volume 1: Injuries, 5th ed.**; title/copyright pages identify the 2017 McGraw-Hill Education Australia edition (PDF pp. 1 and 5; scanned PDF, no usable text layer). | Contents PDF pp. 9–15: Ch. 2 evidence/shared decision-making p. 9; Ch. 3 acute injuries p. 13; Ch. 4 overuse injuries p. 29; Ch. 8 clinical biomechanics p. 85; Ch. 9 sports-specific injury biomechanics p. 121; Ch. 10 training programming p. 139; Ch. 12 preventing injury p. 165; Ch. 13 recovery p. 189; Ch. 17 rehabilitation p. 239; Ch. 18 rehabilitation principles p. 277; Ch. 19 return to play p. 285; Ch. 20 concussion p. 296. |
| `brukner-khan-clinical-sports-medicine-v2` | `books/Brukner & Khan's Clinical Sports Medicine Volume 2.pdf`; **Volume 2: The Medicine of Exercise, 5th ed.**; Peter Brukner and Karim Khan; reprinted 2019, copyright 2019 (PDF pp. 4, 6–7). | Contents PDF pp. 13–16: Part A exercise/health (physical inactivity, benefits/risks, exercise assessment/prescription, nutrition); Part B medical problems (obesity, diabetes, cardiac/respiratory/GI/neurological conditions, tired athlete, mental health); Part C heat/cold/altitude/underwater; Part D youth, female-specific, transgender/intersex, older people and disability; Part E performance/ethics (nutrition, drugs, genetics, medico-legal issues, harassment/abuse); Part F emergencies and endurance-event coverage. Ch. 1 begins at printed p. 1 / PDF p. 81. Detailed chapter page starts are not consistently exposed in the supplied contents extraction, so use chapter title plus printed page label when locating passages. |
| `clinical-sports-nutrition-burke` | `books/Clinical Sports Nutrition, 4th Edition.pdf`; Louise Burke and Vicki Deakin; **4th ed.**, text copyright 2010, reprinted through 2011 (PDF pp. 1, 5). | Ch. 1 exercise physiology/metabolism p. 1; Ch. 2 nutritional-status measurement p. 19; Ch. 3 kinanthropometry/body composition p. 44; Ch. 4 protein/amino acids p. 61; Ch. 5 athlete energy requirements p. 96; Ch. 6 weight loss p. 116; Ch. 7 making weight p. 149; Ch. 9 bone/exercise/nutrition p. 200; Ch. 10 iron depletion/deficiency p. 222; Ch. 13 fluid/carbohydrate intake and Ch. 14 recovery nutrition are identified by title in the body/contents. Contents: PDF pp. 6–12. |
| `nsca-essentials-5` | `books/Essentials of Strength Training and Conditioning.pdf`; NSCA; G. Gregory Haff and N. Travis Triplett, editors; **5th ed.** The supplied PDF’s cataloging/copyright page records Human Kinetics `[2027]` and copyright 2027, 2016, 2008, 2000, 1994 (PDF pp. 7–9). | Contents PDF pp. 11–19: Ch. 1 body systems; Ch. 2 biomechanics; Ch. 3 bioenergetics; Chs. 4–6 endocrine/anaerobic/aerobic adaptations; Ch. 9 psychology; Chs. 10–12 nutrition, performance nutrition/RED-S and performance-enhancing substances; Chs. 13–14 test selection/administration and data interpretation; Ch. 18 resistance program design; Chs. 20–22 speed/agility, aerobic/metabolic training and periodization; Ch. 23 rehabilitation; Ch. 24 overreaching/overtraining/recovery. |
| `neumann-kinesiology` | `books/Kinesiology of the Musculoskeletal System.pdf`; Donald A. Neumann; **3rd ed.**, Elsevier copyright 2017 (PDF pp. 5–8). | Contents PDF pp. 21–22: Ch. 1 Getting Started p. 3; Ch. 2 joints p. 28; Ch. 3 muscle p. 47; Ch. 4 biomechanical principles p. 77; Ch. 5 shoulder p. 119; Ch. 12 hip p. 479; Ch. 13 knee p. 538; Ch. 14 ankle/foot p. 595; Ch. 15 walking p. 653; Ch. 16 running p. 706. |
| `magee-orthopaedic-assessment` | `books/Orthopedic Physical Assessment.pdf`; David J. Magee and Robert C. Manske; **7th ed.**, Elsevier copyright 2021 (PDF pp. 1–2). | Contents PDF pp. 7–10: Ch. 1 principles/concepts p. 1; Ch. 5 shoulder p. 274; Ch. 9 lumbar spine p. 627; Ch. 11 hip p. 765; Ch. 12 knee p. 869; Ch. 13 lower leg/ankle/foot p. 990; Ch. 14 gait p. 1096; Ch. 17 primary-care assessment p. 1180; Ch. 18 emergency sports assessment p. 1215. |
| `physiology-sport-exercise-kenney` | `books/Physiology of Sport and Exercise with Web Study Guide.pdf`; W. Larry Kenney, Jack H. Wilmore and David L. Costill; **5th ed.**, copyright 2012 (PDF pp. 7–8). | Contents PDF pp. 10–13: introduction p. 1; bioenergetics/muscle metabolism p. 49; fatigue p. 113; cardiovascular/respiratory function pp. 139–181; principles of exercise training p. 209; adaptations to aerobic/anaerobic training pp. 247–272; heat/cold p. 283; altitude p. 309; training for sport/overtraining/tapering/detraining pp. 333–346; body composition/nutrition/ergogenic aids pp. 355–417; growth/maturation p. 425; exercise prescription p. 500 onward. |

## 5. Official and primary web sources

These are restricted to the requested source families: SAI/MYAS, ACSM, NSCA, IOC, WADA/NADA, World Physiotherapy, and primary consensus papers. URLs are included for catalog use.

| Stable ID candidate | Primary source | URL | A1/A2 use |
| --- | --- | --- | --- |
| `sai-notification-2026` | SAI, *Final Notification for Performance Analyst Regular Recruitment* | <https://www.sportsauthorityofindia.nic.in/sai_new/public/assets/uploads/jobs/67735ca5-a732-4deb-9828-9c0119411192.pdf> | Controlling exam structure, A1/A2 syllabus, discipline list and samples; local copy remains authoritative for page references. |
| `sai-jobs-archive-2026` | SAI jobs archive | <https://sportsauthorityofindia.nic.in/sai_new/jobs-archive> | Publication/archive context for the 30 January 2026 recruitment notice. |
| `myas-khelo-india-2021-26` | Ministry of Youth Affairs & Sports, Khelo India — National Programme for Development of Sports | <https://yas.nic.in/sports/khelo-india-national-programme-development-sports-0> | A2 Khelo India components, competitions, talent development, centres and inclusiveness. |
| `myas-tops-nsdf` | MYAS, National Sports Development Fund / Target Olympic Podium Scheme | <https://yas.nic.in/sports/national-sports-development-fund-0> | A2 TOPS purpose, athlete support and SAI/MYAS governance context. |
| `acsm-getp-12` | American College of Sports Medicine, *Guidelines for Exercise Testing and Prescription*, 12th ed. | <https://acsm.org/education-resources/books/guidelines-exercise-testing-prescription/> | Testing, screening, safety, exercise prescription and applied assessment. |
| `nsca-essentials-5` | NSCA, *Essentials of Strength Training and Conditioning*, 5th ed. | <https://www.nsca.com/certification/cscs/essentials-of-strength-training-and-conditioning-5th-edition/> | Strength, conditioning, testing, program design, recovery and performance preparation. |
| `wada-prohibited-list-2026` | WADA, *2026 Prohibited List* | <https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list> | A1 supplementation-within-guidance and A2 anti-doping terminology; the 2026 List took effect 1 January 2026. |
| `nada-india-updated-resources-2026` | National Anti-Doping Agency India, updated resources | <https://nadaindia.yas.nic.in/updated-resources/> | A2 Indian anti-doping rules, prohibited-list access, athlete biological passport and education context. |
| `ioc-reds-2023` | IOC consensus statement on Relative Energy Deficiency in Sport (REDs) | <https://bjsm.bmj.com/content/57/17/1073> | Energy availability, body composition, health/performance effects and REDs assessment concepts. |
| `ioc-load-illness-2016` | IOC consensus statement on load in sport and risk of illness | <https://bjsm.bmj.com/content/50/17/1043> | Load, recovery, travel, monitoring, illness and overtraining risk. |
| `ioc-sports-nutrition-2010` | IOC consensus statement on sports nutrition 2010, PubMed record | <https://pubmed.ncbi.nlm.nih.gov/22150426/> | Foundational sports nutrition consensus; verify current recommendations against newer primary guidance. |
| `ioc-supplements-2018` | IOC consensus statement on dietary supplements and the high-performance athlete | <https://bjsm.bmj.com/content/52/7/439> | Supplement evidence, risk assessment and anti-doping/reputation risk. |
| `ioc-heat-events-2023` | IOC consensus statement on recommendations and regulations for sport events in the heat | <https://bjsm.bmj.com/content/57/1/8> | Heat, hydration, acclimatization, competition readiness and recovery. |
| `ioc-concussion-amsterdam-2022` | Amsterdam 2022 International Consensus Statement on Concussion in Sport | <https://bjsm.bmj.com/content/57/11/695> | Injury recognition, rehabilitation, return-to-sport and interdisciplinary care. |
| `world-physiotherapy-ebp-2023` | World Physiotherapy policy statement: Evidence-based practice | <https://world.physio/policy/ps-ebp> | Critical appraisal, evidence integration, safety and clinical reasoning. Direct PDF: <https://world.physio/sites/default/files/2024-01/PS-2023-EBP_0.pdf>. |

## Comparable papers and unofficial mock material

The web search found no verifiable previous SAI Performance Analyst (Physiotherapy) paper. A commercial provider advertises a 2026 free mock/question page and a separate previous-paper page, but the latter states that a package is not currently available. These pages were therefore used only to confirm comparable mock format and recurring topic signals, not as official papers or authoritative answer keys:

- Unofficial question/quiz page: <https://toppersexam.com/question-for-sai-performance-analyst-%28physiotherapy%29-exam---english>
- Unofficial free mock page: <https://toppersexam.com/MEDICAL-EXAMS/SAI-PERFORMANCE-ANALYST/free-test_6862.html>
- Unofficial previous-paper listing: <https://toppersexam.com/MEDICAL-EXAMS/SAI-PERFORMANCE-ANALYST/previous-year-papers_6862.html>

Official SAI role descriptions from earlier recruitment notices were used only as context for athlete injury management, scientific testing and interdisciplinary work. The official SAI jobs archive is <https://sportsauthorityofindia.nic.in/sai_new/jobs-archive>.
| `olympics-official` | International Olympic Committee, Olympic Games | <https://olympics.com/> | A2 Olympic movement, editions, results and programme facts; use the specific official event page when a claim is time-sensitive. |
| `asian-games-official` | Olympic Council of Asia | <https://oca.asia/> | A2 Asian Games facts and official event information. |

## 6. Proposed stable-ID and metadata actions for `sourceCatalog.ts`

The current interface supports `id`, `title`, `kind`, `publisher`, optional `authors`, `edition`, `year`, `url`, `localPath`, `scope` and `locator`. Preserve existing IDs already referenced by JSON; add version-specific IDs when two supplied PDFs are distinct works.

| ID | Action and metadata to record |
| --- | --- |
| `sai-notification-2026` | Keep. Add the official SAI PDF URL above; retain localPath `_Final_ NOTIFICATION FOR PA REGULAR RECRUITMENT_30.01.2026.pdf`; locator `English CBT pp.14–15; English A1 pp.19–22; A2 p.22; Annexure B pp.106–135`. |
| `basic-biomechanics-hall` | Keep. Add `authors: Susan J. Hall`, `edition: 6th`, `year: 2012`, localPath, and locator `contents PDF pp.5–14; printed ch.1–15 pp.1–497; Appendix D p.514`. |
| `physiology-sport-exercise-kenney` | Keep. Add `edition: 5th`, `year: 2012`, localPath, and locator `contents PDF pp.10–13; printed exercise physiology/training/environment sections pp.1–417`. |
| `clinical-sports-nutrition-burke` | Keep, but reconcile year: supplied PDF says 4th ed., text copyright 2010, reprinted 2010–2011 (not 2015). Add exact edition/year/localPath and printed locators from §4. |
| `nsca-essentials-5` | Keep for compatibility, but do not leave `year: 2016` unqualified: the supplied 5th-edition PDF records Human Kinetics `[2027]` and copyright 2027, 2016, … (PDF p.8), while the official NSCA page confirms the edition. Either update metadata to the supplied file’s recorded year or introduce a version-specific alias before changing provenance. |
| `neumann-kinesiology` | Keep. Existing 3rd-edition/2017 metadata matches the supplied PDF; add printed chapter locators from §4. |
| `magee-orthopaedic-assessment` | Keep. Add co-author `Robert C. Manske`, `edition: 7th`, `year: 2021`, and printed chapter locators. |
| `brukner-khan-clinical-sports-medicine` | Keep as the Volume 1 injuries source; add `edition: 5th`, `year: 2017`, localPath and the Volume 1 contents locators. |
| `brukner-khan-clinical-sports-medicine-v2` | Add as a separate textbook source: *Clinical Sports Medicine Volume 2: The Medicine of Exercise*, Peter Brukner and Karim Khan, 5th ed., 2019, localPath `books/Brukner & Khan's Clinical Sports Medicine Volume 2.pdf`, scope medical exercise, environment, performance ethics and practical sports medicine; locator contents PDF pp.13–16 and Ch.1 printed p.1/PDF p.81. |
| `wada-prohibited-list-2026` | Keep. Add/retain WADA URL, publisher, `year: 2026`, and scope “prohibited substances/methods, monitoring programme and anti-doping terminology.” |
| `nada-india-updated-resources-2026` | Add official source with URL, publisher NADA India/MYAS, `year: 2026`, scope “Indian anti-doping rules, athlete biological passport, education and WADA List access.” |
| `myas-khelo-india-2021-26` | Add official source with URL, publisher MYAS, `edition/year: scheme 2021–22 to 2025–26`, scope and a locator such as “scheme components.” |
| `myas-tops-nsdf` | Add official source with URL, publisher MYAS, scope “TOPS purpose, selection/support and SAI/MYAS governance.” |
| `ioc-sports-nutrition-2010` | Existing catalog ID should gain PubMed URL `https://pubmed.ncbi.nlm.nih.gov/22150426/` and a year note distinguishing the 2010 consensus from its 2011 journal supplement citation. |
| `ioc-supplements-2018` | Add official consensus-paper source with BJSM URL, authors/IOC publisher, `year: 2018`, scope “supplement evidence, safety and anti-doping risk.” |
| `ioc-heat-events-2023` | Add official consensus-paper source with BJSM URL, `year: 2023`, scope “heat, hydration, acclimatization and event readiness.” |
| `ioc-reds-2023`, `ioc-load-illness-2016`, `ioc-concussion-amsterdam-2022`, `world-physiotherapy-ebp-2023` | Keep existing IDs; prefer direct BJSM/World Physiotherapy URLs above over only an abstract index where available, and add locator/scope text that names the relevant A1 areas. |

Stable-ID rule: IDs should identify a specific edition, year or primary document, not a broad topic. Keep `localPath` for supplied PDFs and `url` for the owning organization/paper. Use `locator` for printed chapter/page or notification page references; do not invent page numbers when only a chapter title is recoverable.

## 7. Evidence and reconciliation notes

1. **Seven recruitment disciplines versus “eight” in Section A.** The vacancy table on notification p. 3 names seven recruitment disciplines: Anthropometry, Biomechanics, Nutrition, Physiotherapy, Physiology, Psychology, and Strength & Conditioning. Annexure B p. 106 also says “All Seven Sports Science Disciplines.” However, the Section A assessment narrative on pp. 15 and 19 says “all eight sports science disciplines,” and A1 item 5 adds Biochemistry as a foundational concept. The safest reconciliation is: seven job disciplines, eight A1 foundational knowledge domains; Biochemistry is not a separate advertised post in this notification.

2. **A1 sample count is not a quota.** The eight Section A examples on pp. 106–107 align neatly with A1 items 1–8, but the notification never says A1 must contain one question per foundational concept or 4 marks per concept. Treat the examples as illustrative only.

3. **A2 is specified but not sampled separately.** A2 is explicitly 8 marks and 20% of Section A on p. 22. Annexure B’s Section A sample contains eight A1-style questions and no separately labelled A2 examples. Do not infer that the eight examples represent A2.

4. **The working guideline is broader/derived.** `sectionA_guidelines.md` accurately reflects the 32/8 split and broad interdisciplinary intent, but it reorganizes the notification’s 22 numbered A1 areas into six practical themes and includes study recommendations. The notification pages above should win where wording or scope differs.

5. **Current-source risk.** WADA’s 2026 List is time-sensitive; scheme pages, event facts and official governance pages can change. Questions tied to current status should point to a dated source ID and be rechecked before release. Older textbooks and older IOC nutrition consensus material should not override current WADA/IOC/ACSM guidance.

6. **Book-edition mismatches.** The existing catalog metadata is not uniformly aligned to the supplied PDFs: Clinical Sports Nutrition’s supplied fourth edition records 2010/2011 reprints; the supplied NSCA fifth-edition PDF records 2027/2016 copyright history; Brukner’s two volumes are distinct books; and several existing entries omit edition/year/locators. These are provenance issues for future catalog work, not reasons to rewrite existing question JSON in this research task.

7. **Primary-source hierarchy.** Use the SAI notification for exam claims; the supplied books for textbook chapter framing; current owning-organization pages and official consensus papers for current practice; and WADA/NADA for anti-doping. A textbook or a generated question-bank explanation is not an independent primary source.
