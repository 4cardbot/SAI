# Day-before weak-area source map

Prepared for the SAI Performance Analyst (Physiotherapy) revision set. This is a **source map, not the final study notes**. Use it to open the cited source, verify the fact/formula, and then compress it into a one-page memory sheet.

**Current-fact cutoff:** 2026-08-21 (Asia/Kolkata). For A2 event calendars, hosts, programmes, office-holders, schemes and laws, treat the official page as authoritative on the day of revision. Do not convert a scheduled future event into a result.

**Controlling exam source:** `sai-notification-2026` — local file `_Final_ NOTIFICATION FOR PA REGULAR RECRUITMENT_30.01.2026.pdf`, English CBT pp. 14–15, A1 pp. 19–22, and illustrative Annexure B pp. 106–135. The sample questions are illustrative; the notification does not specify fixed subtopic quotas.

## How to use this map

1. Read the SAI page and the first local textbook source for the topic.
2. Verify the listed formulas, named tests, classifications and “contrast pairs.”
3. Draw one small process diagram or comparison table from each topic; do not copy passages.
4. For current A2 facts, record the retrieval date beside the fact and re-check the official link immediately before the examination.

## A1 — Basic Sports Science Knowledge

### A1: Core Disciplines Foundational Concepts

**Syllabus locus:** SAI p. 19 — anthropometry, exercise physiology, physiotherapy, biomechanics, biochemistry, strength and conditioning, psychology and nutrition.

**Primary/local sources**

- `sai-notification-2026` — Annexure B Section A samples, pp. 106–108; use the eight short conceptual/applied patterns as the style anchor.
- `basic-biomechanics-hall` — *Basic Biomechanics*, 6th ed., Ch. 1 p. 1, Ch. 2 p. 29, Ch. 3 p. 61, Ch. 5 p. 117, Ch. 6 p. 147, Ch. 8 p. 229, Chs. 10–14 pp. 319–449, Appendix D p. 514.
- `physiology-sport-exercise-kenney` — *Physiology of Sport and Exercise*, 5th ed., bioenergetics p. 49, fatigue p. 113, cardiovascular/respiratory physiology pp. 139–181, training p. 209, adaptations pp. 247–272, environmental physiology pp. 283–309.
- `nsca-essentials-5` — *Essentials of Strength Training and Conditioning*, 5th ed., Chs. 1–6, 10–12, 18 and 20–24; supplied PDF contents pp. 11–19.
- `clinical-sports-nutrition-burke` — *Clinical Sports Nutrition*, 4th ed., Chs. 1–7; printed p. 1 metabolism, p. 19 nutritional-status measurement, p. 44 body composition, p. 61 protein, p. 96 energy requirements.

**High-yield checks**

- BMI is `mass (kg) / height² (m²)`; it cannot distinguish fat mass from fat-free mass, distribution or somatotype.
- Match effort duration and intensity to the phosphagen, glycolytic and oxidative energy systems; know why phosphocreatine resynthesis and mitochondrial capacity matter in intermittent sport.
- Keep the mechanical chain together: `F = ma`, torque `τ = F × moment arm`, work `W = F × displacement`, and power `P = W / time`.
- Contrast specificity, overload, progression, individualisation and recovery; ask which principle the vignette is testing.
- Recognise tissue composition, energy availability, hydration, motivation/arousal and fatigue as interacting—not isolated—performance variables.
- Terminology to link: anthropometry → body composition → somatotype; acute response → chronic adaptation; impairment → activity limitation → participation restriction.

### A1: Testing Parameters, Standardization & Athlete Assessment

**Syllabus locus:** SAI p. 20 — physiological, biomechanical, biochemical, anthropometric, psychological and performance parameters; validity, reliability, sensitivity, specificity, norms, test batteries, SOPs, calibration, safety, consent and confidentiality.

**Primary/local sources**

- `sai-notification-2026` — A1 p. 20; Annexure B Section A pp. 106–108 and Section B applied-test style pp. 108–121.
- `acsm-getp-12` — ACSM *Guidelines for Exercise Testing and Prescription*, 12th ed.; testing, pre-participation screening, safety and prescription chapters.
- `nsca-essentials-5` — Chs. 13–15, test selection/administration and data interpretation; supplied PDF pp. 1631–1653.
- `magee-orthopaedic-assessment` — *Orthopedic Physical Assessment*, 7th ed., Ch. 1 p. 1 and regional examination Chs. 5, 9, 11–14, 17–18.
- `world-physiotherapy-consent-2023` and `world-physiotherapy-ethics-2023` — informed consent, privacy, autonomy, confidentiality and professional responsibility.

**High-yield checks**

- Reliability asks whether repeated measurement is consistent; validity asks whether the test measures the intended construct. Know test–retest, inter-rater, intra-rater and internal consistency terminology.
- Diagnostic formulas: `sensitivity = TP/(TP+FN)`; `specificity = TN/(TN+FP)`; PPV/NPV depend on prevalence; likelihood ratios update pre-test probability.
- Know `SEM`, `MDC`, coefficient of variation `CV = SD/mean × 100`, and the difference between measurement error and real athlete change.
- Standardise time of day, nutrition, hydration, sleep, warm-up, instructions, equipment, tester and environmental conditions; document deviations.
- Select laboratory versus field tests by validity, reliability, feasibility, ecological relevance, athlete safety and the decision the result must support.
- Never treat a normative value as a diagnosis: compare with the right age/sex/sport/training-status reference and interpret the individual longitudinally.

### A1: Emerging Technologies & Biostatistics

**Syllabus locus:** SAI p. 21 — wearables, GPS, IMU, force plates, motion capture/video, AI/ML, athlete-management platforms, privacy, descriptive/inferential statistics, effect size and practical significance.

**Primary/local sources**

- `gps-validity-scott-2016` — GPS measures of distance, speed, acceleration and player load; validity/reliability review.
- `wearable-inertial-camomilla-2018` — accelerometer, gyroscope and magnetometer use, placement and in-field limitations.
- `wearable-athlete-sensors-seshadri-2019` — wearable physiological/biochemical monitoring and interpretation limits.
- `ais-athlete-data-governance` — Australian Institute of Sport data governance: collection, access, protection and responsible use.
- `nist-sematech-statistics` — NIST/SEMATECH e-Handbook, exploratory analysis, probability, tests and regression.
- `scikit-learn-common-pitfalls-1-9`, `scikit-learn-model-evaluation-1-9`, `nist-ai-rmf-2023` — data leakage, evaluation, bias, transparency, validity and human oversight.

**High-yield checks**

- Distinguish external load (distance, acceleration, repetitions) from internal load (heart rate, RPE, HRV and biochemical response).
- Know what each sensor estimates: GPS location/speed/distance; IMU acceleration/angular velocity/orientation; force plate ground-reaction force and impulse; video/motion capture kinematics.
- Revise mean, median, range, IQR, variance, SD, CV, confidence interval, effect size and practical/clinical significance as separate ideas.
- `p < 0.05` is not the same as a large or useful effect; inspect magnitude, uncertainty, precision and context.
- Prevent leakage: split training and test data before fitting preprocessing or models; keep labels and future information out of the predictor pipeline.
- Treat athlete data as sensitive: access control, purpose limitation, consent, retention, de-identification, bias checks and human review are performance requirements, not optional extras.

### A1: Data Interpretation & Applied Analytics

**Syllabus locus:** SAI pp. 20–21 — performance profiling, strengths/weaknesses, limiting factors, recommendations, longitudinal trends, research design, critical appraisal and communication.

**Primary/local sources**

- `nsca-essentials-5` — Chs. 13–15, test data and interpretation; supplied PDF pp. 1631–1653.
- `nist-sematech-statistics` — exploratory data analysis, variability, uncertainty, statistical tests and regression.
- `cdc-confounding-epi-manual` — exposure–outcome interpretation, confounding and epidemiologic analysis.
- `world-physiotherapy-ebp-2023` — evidence-informed decision-making, uncertainty and clinical reasoning.
- `gps-validity-scott-2016` — longitudinal athlete-monitoring measures and measurement limitations.
- `sai-notification-2026` — Annexure B applied reasoning, especially Section B pp. 108–121 and Section C pp. 122–135.

**High-yield checks**

- Build the chain: baseline → meaningful change → likely limiter → intervention → re-test; avoid prescribing from one isolated score.
- Separate absolute change, percentage change, standardised change and change beyond MDC/measurement error.
- Correlation does not establish causation; identify confounding, selection bias, regression to the mean and missing data.
- Interpret a performance profile by sport demand and athlete role, not by a generic “higher is better” rule.
- Combine objective measures with RPE, wellness, symptoms, coach observation and athlete goals; discordance is a prompt for investigation.
- Report findings in decision language: what changed, how certain it is, why it matters, what action is proposed and when it will be reviewed.

### A1: Performance Enhancement & Recovery Protocols

**Syllabus locus:** SAI pp. 20–21 — strength/endurance/speed/agility/power, technique, load management, periodisation, psychological skills, nutrition, recovery, fatigue, injury prevention and return-to-play coordination.

**Primary/local sources**

- `nsca-essentials-5` — Chs. 18, 20–24; program design, speed/agility, metabolic training, periodisation, rehabilitation, overreaching and recovery.
- `physiology-sport-exercise-kenney` — training p. 209, adaptations pp. 247–272, heat/cold p. 283, altitude p. 309, sport/overtraining/tapering/detraining pp. 333–346.
- `ioc-load-management-consensus-2016` — BJSM 50:1030–1041; supplied PDF load-management and injury-risk sections.
- `ioc-load-illness-2016` — BJSM 50:1043–1052; load, recovery, travel and illness risk.
- `ioc-sports-nutrition-consensus`, `ioc-reds-2023`, `ais-supplements-position-2022` — fueling, energy availability, RED-S and supplement risk.
- `bern-return-to-sport-2016` — BJSM 50:853–859; athlete-centred StARRT return-to-sport framework.

**High-yield checks**

- Connect overload and periodisation to adaptation; distinguish planned functional overreaching from non-functional overreaching, overtraining and illness.
- Track external and internal load together; sudden spikes, insufficient recovery, travel, sleep loss and illness alter risk interpretation.
- Compare active recovery, passive recovery, sleep, nutrition, hydration, compression, massage, heat/cold and hydrotherapy by mechanism, evidence and context—not slogans.
- Energy availability and RED-S can impair endocrine, bone, immune, menstrual/reproductive, cardiovascular and performance outcomes; do not reduce RED-S to body weight alone.
- Supplements require a risk–benefit, contamination and batch-testing decision within WADA rules; “natural” does not mean safe or permitted.
- RTP is criteria- and risk-based: symptoms, function, tissue capacity, sport demands, psychosocial readiness and shared decision-making all matter.

### A1: Holistic Development, Travel & Ethics

**Syllabus locus:** SAI pp. 21–22 — yoga/mind–body work, athlete wellness and LTAD, burnout/overtraining, travel/jet lag/climate/altitude, anti-doping, interdisciplinary coordination, documentation and conduct.

**Primary/local sources**

- `cdc-yellow-book-jet-lag-2026` — CDC Yellow Book 2026, “Jet Lag Disorder,” sleep/light timing, medication and alcohol cautions.
- `nccih-yoga-safety` — yoga components, pranayama, qualified instruction and safety limits.
- `yoga-mindfulness-sport-buhlmayer-2017` and `yoga-athletes-review-2025` — performance-relevant mindfulness/yoga evidence and limitations.
- `world-physiotherapy-consent-2023` and `world-physiotherapy-ethics-2023` — informed choice, dignity, privacy, confidentiality and ethical conduct.
- `wada-code-2021`, `wada-istue-2023` — clean-sport responsibilities and TUE terminology.
- `interdisciplinary-performance-sport-burns-2023`, `ais-athlete-data-governance` — team roles, collaboration, communication and athlete-information governance.

**High-yield checks**

- Jet-lag planning is direction-specific: phase sleep, light exposure, meals and training to the destination time zone; avoid casual sedative/alcohol advice.
- Separate asana, pranayama, meditation, mindfulness, relaxation and biofeedback; check contraindications and supervision for forceful breathing or extreme positions.
- Know burnout, overtraining, mental-health referral, athlete autonomy, safeguarding and duty-of-care language.
- Consent is informed, voluntary, specific and revisable; confidentiality has defined professional/legal limits and should never be promised absolutely.
- Anti-doping recall chain: athlete/support-person responsibility → prohibited list → medication/supplement check → TUE if criteria are met → documentation.
- Draw the interdisciplinary loop: athlete ↔ coach ↔ physiotherapist/doctor ↔ S&C ↔ psychologist/nutritionist ↔ analyst, with one shared record and clear escalation.

## A2 — General Sports Awareness

**Current-source rule:** all items below are to be checked against the linked official page on **2026-08-21**. The source catalog contains the stable IDs; dynamic pages may change after that date.

**Current official links to re-check:** [`ioc-olympic-charter-2025`](https://olympics.com/ioc/olympic-charter), [`oca-games-timeline`](https://oca.asia/games/), [`oca-aichi-nagoya-2026`](https://oca.asia/games/111-aichi-nagoya-2026.html), [`myas-khelo-india-2025`](https://yas.nic.in/sports/khelo-india-national-programme-development-sports-0), [`sai-tops-official-2026`](https://sportsauthorityofindia.nic.in/sai_new/public/target-olympic-podium), [`wada-prohibited-list-2026`](https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list), [`nada-india-official-2026`](https://nadaindia.yas.nic.in/updated-resources/), [`a2-national-sports-governance-act-2025`](https://www.yas.nic.in/sites/default/files/National%20Sports%20Governance%20Act%2C%202025_0.pdf), [`commonwealth-sport-history-2026`](https://www.commonwealthsport.com/commonwealth-games), [`world-athletics-champs-history-2025`](https://worldathletics.org/en/competitions/world-athletics-championships/world-athletics-championships-tokyo-2025-7190593/event-info/world-athletics-history), [`fifa-world-cup-2026`](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026) and [`icc-world-cups-2026`](https://www.icc-cricket.com/).

### A2: Olympic & Asian Games

**Syllabus locus:** SAI p. 22; use Annexure B’s sports-awareness framing in Section A pp. 106–108.

**Primary/local sources**

- `ioc-olympic-charter-2025` — current Olympic Charter, Fundamental Principles and rules on IOC, NOCs, IFs and the Games.
- `olympics-official` and `ioc-paris-2024-results` — official Olympic programme, results and medal facts.
- `oca-games-timeline` — OCA Asian Summer Games timeline, 1951–2034: editions, numbering and hosts.
- `oca-aichi-nagoya-2026` — official 20th Asian Games page: host, **19 September–4 October 2026**, programme information.
- `asian-games-official` — OCA institutional information; OCA identifies 45 Asian NOCs.

**High-yield checks**

- Distinguish IOC, International Federation, National Olympic Committee, OCA and the organising committee; know who governs, who regulates the sport and who delivers the event.
- Learn Olympic Charter principles and the difference between the Olympic Games, Winter Games, Paralympic Games, Youth Olympic Games and Asian Games.
- Anchor the OCA timeline: first unified Asian Games, host/edition/numbering, four-year cycle, and the 2026 Aichi-Nagoya entry.
- As of the cutoff, Aichi-Nagoya 2026 is a scheduled future event; do not memorise unverified results or a changed programme as fact.
- Use official results pages for medal tables, records and host facts; avoid coaching-site “one-liners” when an official archive exists.

### A2: Indian Sports Ecosystem & Government Schemes

**Syllabus locus:** SAI p. 22 — Indian sports institutions, schemes and athlete-support ecosystem.

**Primary/local sources**

- `sai-notification-2026` — SAI role, recruitment context and scheme/governance references in the notification.
- `sai-about-official-2026`, `sai-organisational-information-2026`, `sai-ncoe-official-2026` — SAI objectives, organisational functions, NCOEs, sports science, medicine, diet and support staff.
- `myas-khelo-india-2025` — Khelo India scheme page; continuation 2021–22 to 2025–26 and scheme components.
- `myas-khelo-india-revised-guidelines-2025` — Revised Operational Guidelines, Chapter 3: competitions, talent identification, scientific test batteries and NSF association.
- `sai-tops-official-2026`, `myas-nsdf-official-2026`, `myas-annual-report-2024` — TOPS, Mission Olympic Cell, Core/Development groups, NSDF grants and MYAS/SAI responsibilities.
- `ioa-organisation-official`, `myas-recognised-nsf-2025` — IOA role and the official recognised-NSF list.

**High-yield checks**

- Khelo India components: infrastructure; competitions/talent development; Khelo India Centres/academies; Fit India; inclusiveness. Verify the active operational period before memorising.
- TOPS is athlete-support oriented; distinguish Mission Olympic Cell, Core Group, Development Group, selection and support decisions.
- Separate SAI, MYAS, IOA, NSF, NCOE, NSDF and TOPS roles; exam distractors often swap the institution that funds, selects, governs or delivers.
- NCOE questions should trigger high-performance training plus sports-science, sports-medicine, rehabilitation, diet and support-staff functions.
- The 2025 recognised-NSF page is a dated list, not a timeless list; record the year beside any federation fact.
- **Official supplementary policy to re-check:** [Khelo Bharat Niti 2025](https://yas.nic.in/sites/default/files/Khelo%20Bharat%20Niti-2025%20%281%29_0.pdf). It is not currently assigned a separate source-catalog ID.

### A2: Anti-Doping Regulations & Clean Sport

**Syllabus locus:** SAI p. 22 — WADA/NADA, prohibited substances/methods, TUEs, athlete and support-personnel responsibilities and clean-sport ethics.

**Primary/local sources**

- `wada-prohibited-list-2026` — WADA 2026 List; official page states it took effect on 1 January 2026.
- `wada-code-2021` — Code Articles 2.1, 2.2, 18 and 21.1.4; strict liability, responsibilities, education and prevention.
- `wada-istue-2023` and `nada-india-tue-2026` — TUE criteria, application, documentation, emergency treatment and review.
- `nada-india-rules-2021` — National Anti-Doping Rules 2021, Articles 2, 5–8 and 10–12.
- `nada-india-official-2026`, `nada-india-abp-2026` — current NADA resources, testing, whereabouts, Athlete Biological Passport and education.

**High-yield checks**

- Revise the 2026 List’s structure and the S0–S9/P1–P2 terminology directly from the live WADA List; classifications and routes matter.
- Know the anti-doping rule-violation framework and the difference between presence, use/attempted use, evasion/refusal, whereabouts, tampering, possession, trafficking and complicity.
- “Strict liability” concerns the athlete’s responsibility for a prohibited substance in the sample; do not confuse it with proof of intentional cheating.
- TUE is a medical exception with criteria and documentation; it is not a blanket permission to use a prohibited drug.
- Distinguish in-competition and out-of-competition status, sample collection/chain of custody, results management and appeal/review terminology.
- Apply the supplement rule: contamination risk remains the athlete’s responsibility; check ingredients, batch testing and professional advice.

### A2: Major International Championships

**Syllabus locus:** SAI p. 22 — major international championships and sports-awareness facts.

**Primary/local sources**

- `commonwealth-sport-history-2026` / `commonwealth-sport-games` — official Commonwealth Games history timeline.
- `commonwealth-sport-birmingham-2022`, `commonwealth-sport-glasgow-2026`, `commonwealth-sport-amdavad-2030` — dated edition, host and future-host facts.
- `world-athletics-champs-history-2025` / `world-athletics-championships-history`, `world-athletics-tokyo-2025` — World Athletics Championships history and Tokyo 2025 event information.
- `world-aquatics-championships-history`, `world-aquatics-singapore-2025`, `world-aquatics-budapest-2027` — World Aquatics history and dated editions.
- `fifa-world-cup-history`, `fifa-world-cup-qatar-2022`, `fifa-world-cup-2026`, `fifa-world-cup-2030` — official FIFA history, hosts, format and centenary facts.
- `icc-world-cups-2026`, `fiba-basketball-world-cup-history`, `fiba-basketball-world-cup-2027` — official cricket and basketball championship information.

**High-yield checks**

- Build a compact timeline by event: inaugural year/host, governing body, normal cycle, latest completed edition and announced next host.
- Keep “championship,” “World Cup,” “Games,” “edition,” “host,” “venue,” “qualification” and “medal table” as separate fact types.
- Verify historic anchors from first-party archives: Commonwealth Games, World Athletics, World Aquatics, FIFA and FIBA all have different inaugural years and naming conventions.
- At the cutoff, separate completed 2025/2026 events from future 2026/2027 hosts; do not infer winner, schedule or programme from a search snippet.
- For cricket, use the ICC tournament page/release for the specific World Cup and format; the ICC home page alone is not a sufficient citation for a precise current fact.

### A2: Sports Governance, Ethics, and Safeguarding

**Syllabus locus:** SAI p. 22 — governance, accountability, ethics, athlete welfare, harassment/abuse prevention and safe sport.

**Primary/local sources**

- `myas-national-sports-code-2011` and `national-sports-code-2011` — federation recognition, accountability, elections, athlete representation and governance principles.
- `a2-national-sports-governance-act-2025` — National Sports Governance Act 2025, Sections 1–4 and 12–17; codes of ethics, safe-sport policy, grievance redressal, grants and elections.
- `ioc-safeguarding-toolkit-2017` and `a2-ioc-safeguarding-toolkit-2017` — Toolkit Section 3/core-components checklist: policy, reporting, records, whistleblowing and review.
- `a2-ioc-safe-sport-2025`, `a2-draw-the-line-ioc` — safe, respectful environments and scenario-based harassment/abuse/discrimination education.
- `posh-act-2013-india-code` / `a2-india-posh-act-2013` — POSH Act Sections 2, 4, 9–13, 16 and 19.
- `world-physiotherapy-ethics-2023`, `world-physiotherapy-consent-2023` — professional dignity, autonomy, confidentiality and informed consent.

**High-yield checks**

- Distinguish governance from event operations: recognition, elections, financial accountability, athlete representation, ethics and grievance redressal have different owners.
- Safeguarding vocabulary: harassment, abuse, discrimination, bullying, retaliation, reporting pathway, independent investigation, confidentiality and duty of care.
- Know the minimum safe-sport system: accessible policy, education, named reporting channels, protection from retaliation, records, response and periodic review.
- POSH contrasts to verify: who can complain, Internal Committee, complaint/inquiry process, confidentiality and employer duties; use the Act rather than a coaching summary.
- Ethical performance support requires consent, privacy, professional boundaries, conflict-of-interest disclosure, secure records and athlete-centred escalation.
- Re-check the 2025 Act and any SAI policy on the official government/SAI page on the revision date; legislation and institutional policy are time-sensitive.

## B — Applied Sports Science Knowledge (Physiotherapy)

### B: Biomechanics and Movement Analysis

**Syllabus locus:** SAI physiotherapy Section B sample, Annexure B pp. 116–117; applied Section C biomechanics examples pp. 128–131. Working syllabus: Section B biomechanics/movement analysis.

**Primary/local sources**

- `basic-biomechanics-hall` — Chs. 1–3, 5–6, 8, 10–14, printed pp. 1–497; Appendix D p. 514.
- `neumann-kinesiology` — Ch. 4 p. 77, shoulder Ch. 5 p. 119, hip Ch. 12 p. 479, knee Ch. 13 p. 538, ankle/foot Ch. 14 p. 595, walking Ch. 15 p. 653, running Ch. 16 p. 706.
- `perry-burnfield-gait-analysis` — supplied PDF chapters on normal gait cycle, determinants, observational analysis and pathological gait; printed page locator is not reliably exposed.
- `sai-notification-2026` — Annexure B applied examples: impulse–momentum, torque, force application, cadence, LSI and sprint mechanics.

**High-yield checks**

- Formula set: `v = Δx/Δt`, `a = Δv/Δt`, `F = ma`, impulse `J = FΔt = Δp`, torque `τ = Fd`, work `W = Fd`, power `P = W/t`.
- Distinguish kinematics (motion description) from kinetics (forces/moments); identify the reference frame and the direction of the external force.
- Revise lever classes, centre of mass, base of support, moment arm, ground-reaction force, centre of pressure and rate of force development.
- Scapulohumeral rhythm, knee screw-home, windlass mechanism, Q-angle, lumbopelvic rhythm and subtalar pronation/supination are high-yield contrast terms.
- Memorise Perry gait sequence: initial contact → loading response → mid-stance → terminal stance → pre-swing → initial/mid/terminal swing.
- In sport cases, connect technique to loading: horizontal force in sprinting, cadence/ground-contact time, valgus under fatigue, and landing strategy.

### B: Human Anatomy & Kinesiology

**Syllabus locus:** SAI physiotherapy Section B sample, Annexure B pp. 112–113; broader applied movement examples pp. 116–117.

**Primary/local sources**

- `openstax-anatomy-physiology-2e` — Chs. 1–4 for anatomical language and organisation; relevant body-system chapters.
- `neumann-kinesiology` — Chs. 1–4 pp. 3–77; regional Chs. 5, 12–16 pp. 119–706.
- `magee-orthopaedic-assessment` — regional shoulder p. 274, lumbar spine p. 627, hip p. 765, knee p. 869, lower leg/ankle/foot p. 990, gait p. 1096.
- `basic-biomechanics-hall` — skeletal articulations Ch. 5 p. 117 and skeletal muscle Ch. 6 p. 147.

**High-yield checks**

- Planes/axes, anatomical position, osteokinematics versus arthrokinematics, convex–concave rule and open versus closed chain.
- For every major muscle, pair origin/insertion with action, nerve supply, functional role and sport-relevant injury mechanism.
- Revise brachial/lumbosacral plexus, dermatomes, myotomes, reflexes and common entrapment sites as a map rather than isolated lists.
- Shoulder: supraspinatus initiation, rotator-cuff force couple, scapular upward rotation and overhead phases.
- Knee/ankle/hip: ACL–meniscus mechanisms, quadriceps/hamstring roles, ankle ligament order, foot arch/windlass and hip abductor control of dynamic valgus.
- Draw one regional kinetic-chain diagram for shoulder, pelvis–knee and foot–ankle; label the external load and the primary stabilisers.

### B: Human Physiology & Exercise Physiology

**Syllabus locus:** SAI physiotherapy Section B applied sample, Annexure B pp. 111–112; related Section A physiology samples pp. 106–108.

**Primary/local sources**

- `physiology-sport-exercise-kenney` — bioenergetics p. 49, fatigue p. 113, cardiovascular/respiratory pp. 139–181, training p. 209, adaptations pp. 247–272, heat/cold p. 283, altitude p. 309, overtraining/tapering/detraining pp. 333–346.
- `nsca-essentials-5` — Chs. 1–6 and 24; supplied PDF contents pp. 11–19.
- `acsm-getp-12` — exercise testing, screening, safety and prescription chapters.
- `brukner-khan-clinical-sports-medicine-vol2` — Volume 2 Part A exercise/health, Part B medical problems, Part C heat/cold/altitude and Part E performance/ethics.

**High-yield checks**

- Revise ATP–PCr, anaerobic glycolysis and oxidative metabolism by intensity/duration; know glycogen, lactate production/clearance and phosphocreatine resynthesis.
- Fick principle: `VO₂ = Q × (arterial–venous O₂ difference)`; connect heart rate, stroke volume, cardiac output and peripheral extraction.
- Distinguish VO₂max, ventilatory threshold, lactate threshold, economy, fatigue and recovery dynamics.
- Type I/II fibres, motor-unit recruitment, sliding-filament excitation–contraction coupling and Henneman’s size principle are frequent stems.
- Acute responses are not chronic adaptations: compare HR, stroke volume, plasma volume, mitochondrial/capillary changes and autonomic recovery.
- Environmental cases require thermoregulation, dehydration/heat illness, cold exposure, altitude acclimatisation, sleep and training-load reasoning.

### B: Electrotherapy and Electrodiagnosis

**Syllabus locus:** SAI physiotherapy Section B sample, Annexure B p. 114, especially ultrasound and TENS; detailed working syllabus in `sectionB_guidelines.md` §3.

**Primary/local sources**

- `watson-electrotherapy` — *Electrotherapy: Evidence-Based Practice*, supplied EPUB chapters on electrical stimulation, electrophysical agents, dosage, indications, contraindications and safety.
- `claytons-electrotherapy` — *Clayton’s Electrotherapy*, supplied PDF chapters on currents, physiological effects, thermal agents, indications, contraindications and clinical safety.
- `sai-notification-2026` — Annexure B p. 114, sample items on ultrasound and TENS.
- `world-physiotherapy-ebp-2023` — use to qualify modality claims by evidence quality and clinical relevance.

**High-yield checks**

- Pulse/current vocabulary: amplitude/intensity, pulse duration, frequency, phase, duty cycle, polarity, waveform, ramp and electrode placement.
- TENS: conventional/high-frequency versus low-frequency/burst concepts; relate proposed analgesia to gate-control and endogenous-opioid terminology without treating either as universal proof.
- Ultrasound: 1 MHz versus 3 MHz, continuous versus pulsed, duty cycle, attenuation, thermal/non-thermal effects and phonophoresis.
- IFT, Russian current, HVPC, faradic/galvanic stimulation, SWD, IR/UV, laser, shockwave and cryotherapy: indication, dose and contraindication contrasts.
- Electrodiagnosis terms: rheobase, chronaxie, strength–duration curve, denervation, EMG biofeedback, nerve-conduction study and motor/sensory response.
- Safety triggers: pacemaker/implanted electronics, active malignancy, DVT, acute bleeding, pregnancy/site restrictions, impaired sensation, infection and open growth plates; verify modality-specific exceptions.

**Locator gap:** the supplied electrotherapy books are usable primary local sources, but their EPUB/PDF extraction does not provide a stable printed-page locator in the catalog. Use the chapter/section title and the SAI sample page above.

### B: Exercise Therapy and Rehabilitation

**Syllabus locus:** SAI physiotherapy Section B sample, Annexure B pp. 113–115; Section C rehabilitation examples pp. 124–128.

**Primary/local sources**

- `kisner-therapeutic-exercise` — *Therapeutic Exercise: Foundations and Techniques*, 7th ed., Parts I–III: general concepts, applied science and intervention principles.
- `osullivan-rehabilitation` — *Physical Rehabilitation*, supplied chapters on motor control, neurological rehabilitation, therapeutic exercise and functional retraining.
- `nsca-essentials-5` — Chs. 18, 20–24; resistance, speed/agility, periodisation, rehabilitation and recovery.
- `brukner-khan-clinical-sports-medicine` — printed Chs. 17–20, pp. 239–296; rehabilitation, principles, RTP and concussion.
- `sports-injury-prevention-rehabilitation-joyce-lewindon` — prevention, rehabilitation programming, monitoring and return-to-performance chapters.

**High-yield checks**

- FITT, overload, specificity, progression, reversibility, individualisation and irritability-based dosing.
- Contraction and loading terms: isometric, concentric, eccentric, isotonic, open-chain, closed-chain, kinetic-chain and rate of progression.
- Stretching/PNF: static, dynamic, ballistic, hold–relax, contract–relax, agonist contraction and rhythmic stabilisation.
- Tendinopathy cases: isometric analgesia, progressive eccentric/HSR loading, energy-storage progression and sport-specific exposure; do not reduce treatment to passive modalities.
- Maitland grades I–V, Kaltenborn grades, Mulligan MWM, motor control, proprioception, perturbation and plyometric progression.
- Rehab sequence: protect/modify load → restore ROM and symptoms → rebuild capacity → integrate speed/power/change of direction → expose to sport demands → monitor response.

**Locator gap:** the supplied Kisner, O’Sullivan and Joyce–Lewindon files are identifiable by edition/title and section, but stable printed page numbers are not exposed consistently in the local catalog.

### B: Assessment, Diagnosis and Clinical Reasoning

**Syllabus locus:** SAI physiotherapy Section B sample, Annexure B pp. 114–115; detailed working syllabus in `sectionB_guidelines.md` §6.

**Primary/local sources**

- `magee-orthopaedic-assessment` — Ch. 1 p. 1; shoulder p. 274, lumbar spine p. 627, hip p. 765, knee p. 869, ankle/foot p. 990, gait p. 1096, primary-care p. 1180, emergency sports assessment p. 1215.
- `konin-special-tests-orthopedic-examination` — supplied test-by-test regional sections for procedure, structure and interpretation.
- `maitland-peripheral-manipulation` — assessment, mobilisation grading, precautions and clinical reasoning sections.
- `shacklock-clinical-neurodynamics` — neurodynamic examination, structural differentiation, mechanosensitivity and treatment sections.
- `world-physiotherapy-ebp-2023` — evidence-informed reasoning and uncertainty.

**High-yield checks**

- Use a repeatable sequence: subjective history → red flags → observation → ROM/end-feel → strength → special tests → function → differential diagnosis → plan/re-test.
- Know SOAP documentation and MMT Oxford 0–5; distinguish active versus passive ROM and empty, soft, firm, hard and springy end-feels.
- Test pairs: Lachman/Pivot Shift for ACL; McMurray/Thessaly/Apley for meniscus; Neer/Hawkins for subacromial pain; Thompson for Achilles; SLR/Slump for neural mechanosensitivity.
- Sensitivity helps rule out when high; specificity helps rule in when high; interpret clusters and likelihood ratios rather than memorising a test in isolation.
- Outcome measures to recognise: NPRS/VAS, KOOS, IKDC, LEFS, DASH/QuickDASH, VISA-A/VISA-P and Y-Balance.
- Neurodynamic terms: slider versus tensioner, structural differentiation, symptom reproduction versus sensitisation, and concordant response.

### B: Sports Physiotherapy, Injury Management & Return to Play (RTP)

**Syllabus locus:** SAI physiotherapy Section C case style, Annexure B pp. 124–128; Section B applied physiotherapy examples pp. 112–115 and 116–117.

**Primary/local/consensus sources**

- `brukner-khan-clinical-sports-medicine` — printed Chs. 2–4, 8–10, 12–13 and 17–20; injury mechanism, biomechanics, prevention, rehabilitation and RTP.
- `ioc-manual-sports-injuries` — supplied IOC manual chapters on recognition, acute management, rehabilitation and prevention.
- `scat6-consensus-bjsm-2023` — BJSM 57:695–711; SCAT6, red flags, multimodal assessment, rehabilitation and RTS.
- `doha-groin-consensus-2015` — BJSM 49:768–774; adductor-, iliopsoas-, inguinal- and pubic-related groin pain taxonomy.
- `ioc-load-management-consensus-2016` — BJSM 50:1030–1041; load progression, recovery, injury risk and return-to-performance planning.
- `aspetar-acl-cpg-2023`, `london-hamstring-consensus-2023`, `apta-lateral-ankle-cpg-2021`, `bern-return-to-sport-2016` — criteria-based ACL, hamstring, ankle and shared-decision RTP guidance.

**High-yield checks**

- Acute-care contrast: old RICE/POLICE versus PEACE & LOVE; know protection, optimal loading, compression/elevation and the reason early graded loading is used.
- Injury patterns: ACL pop/early haemarthrosis; meniscal delayed effusion/locking; ATFL after plantarflexion-inversion; syndesmosis after external rotation/dorsiflexion; hamstring high-speed sprinting.
- Doha terminology is clinical: adductor-related, iliopsoas-related, inguinal-related and pubic-related; map tenderness and resisted tests to the category.
- ACL/hamstring/ankle progression is criteria-based; use strength, hop/function, ROM, symptoms, exposure and sport demands rather than time alone.
- LSI formula: `involved limb / uninvolved limb × 100`; interpret asymmetry with absolute capacity, movement quality and sport demands.
- SCAT6 and load-management decisions require multimodal evidence, symptom monitoring, graduated exposure, athlete input and medical/technical coordination.

### B: Sports Emergencies, On-Field Management & Travelling

**Syllabus locus:** SAI physiotherapy Section C emergency case style, Annexure B pp. 122–128; detailed working syllabus in `sectionB_guidelines.md` §8.

**Primary/local sources**

- `scat6-consensus-bjsm-2023` — BJSM 57:695–711; red flags, sideline assessment and graduated return-to-sport.
- `ioc-manual-sports-injuries` — field recognition, acute management and medical-support chapters.
- `brukner-khan-clinical-sports-medicine-vol2` — Volume 2 Part C heat/cold/altitude and Part F emergencies/endurance events.
- `magee-orthopaedic-assessment` — Ch. 18 p. 1215, emergency sports assessment.
- `cdc-yellow-book-jet-lag-2026` — jet-lag disorder, sleep/light timing and travel medication cautions.
- `ioc-load-illness-2016` — travel, recovery, illness and monitoring context.

**High-yield checks**

- Primary survey: catastrophic bleeding/response/airway/breathing/circulation/disability/exposure; know when an AED/EAP and emergency activation take priority over orthopaedic examination.
- SCAT6 red flags include worsening consciousness, repeated vomiting, seizure, severe/increasing headache, neck pain/tenderness, double vision and limb weakness/tingling; verify the current tool wording.
- Suspected spinal trauma: manual in-line stabilisation, coordinated airway/turning/immobilisation and no solo log-roll improvisation.
- Exertional heat stroke is a medical emergency with CNS dysfunction: immediate whole-body cooling and emergency care; remember “cool first, transport second” where the local protocol supports it.
- Differentiate heat exhaustion, heat stroke, hypothermia, altitude illness, anaphylaxis, asthma and cardiac collapse by danger signs and first action.
- Travel checklist: medical kit/records, medication and TUE documentation, time-zone plan, hydration/food, compression/mobility, sleep setup, climate/altitude acclimatisation and emergency contacts.

**Locator gap:** the supplied IOC manual and Volume 2 are identifiable locally, but stable printed page locators are not consistently exposed; use Part/Chapter titles plus the SAI case pages.

### B: Sports Medicine, Pharmacology, Nutrition & Research Basics

**Syllabus locus:** SAI physiotherapy Section B/Section C applied style, Annexure B pp. 120–122 and 133–135; detailed working syllabus in `sectionB_guidelines.md` §9.

**Primary/local sources**

- `brukner-khan-clinical-sports-medicine-vol2` — Volume 2 Parts A–F: exercise, nutrition, medical problems, heat/cold/altitude, performance/ethics and emergencies.
- `clinical-sports-nutrition-burke` — Ch. 1 p. 1, Ch. 2 p. 19, Ch. 3 p. 44, Ch. 4 p. 61, Ch. 5 p. 96, Ch. 6 p. 116, Ch. 7 p. 149, Ch. 9 p. 200 and Ch. 10 p. 222.
- `ioc-sports-nutrition-consensus` and `ioc-reds-2023` — fueling, hydration, recovery, energy availability and RED-S.
- `wada-prohibited-list-2026`, `wada-code-2021`, `wada-istue-2023` — pharmacology/medication, prohibited substances, TUE and supplement risk.
- `who-medication-without-harm-2022` — medication reconciliation, checking medicines and safe-use terminology.
- `world-physiotherapy-ebp-2023`, `nist-sematech-statistics`, `nakagawa-cuthill-effect-size-2007` — research designs, uncertainty, effect size, confidence intervals and statistical interpretation.

**High-yield checks**

- Energy availability formula: `EA = (energy intake − exercise energy expenditure) / fat-free mass`; connect low EA to RED-S rather than diagnosing from weight alone.
- Nutrition contrasts: carbohydrate availability for training, protein distribution/quality, fluid and sodium replacement, recovery carbohydrate + protein, micronutrient deficiency and supplement contamination.
- Pharmacology/clean sport: drug class versus route/timing, prohibited-list status, medication reconciliation, TUE, adverse effects and athlete/support-person responsibility.
- Research design ladder: systematic review/meta-analysis, RCT, cohort, case-control, cross-sectional, case series/case report; know bias and confounding for each.
- Statistics: null hypothesis, p value, confidence interval, effect size, sensitivity/specificity, likelihood ratios, absolute/relative risk and clinical significance.
- Use the SAI Nutrition sample pp. 120–122 and Section C p. 133–135 for applied calculation patterns, but verify any numeric recommendation against the cited current consensus rather than treating a sample value as universal.

## Source gaps and cautions

- **No official A1/A2/B subtopic weightage:** the SAI notification supplies the section marks and illustrative samples, not a fixed quota for these weak-area labels.
- **Scanned/ebook locator limits:** Brukner & Khan Volume 2, Kisner, O’Sullivan, Perry, Konin, Maitland, Shacklock, Watson/Clayton and the IOC manual are present in `books/`, but the repository catalog cannot reliably expose a printed page for every relevant section. Chapter/section titles are the defensible locator.
- **Electrodiagnosis gap:** the local catalogue has strong electrotherapy sources but no separate, dedicated EMG/nerve-conduction textbook ID. Verify detailed electrodiagnostic thresholds from the relevant chapter in the supplied electrotherapy text or a current primary clinical source before finalising notes.
- **A2 dynamic facts:** Olympic/Asian/major-championship calendars, programme details, recognition lists, active schemes and governance law can change. Re-open the official links on the revision date; retain the 2026-08-21 cutoff in the notes.
- **Question-writing caution:** unofficial mock answers may signal recurrence but should not override the primary source when the answer is factually wrong. The final notes should preserve uncertainty where a source gives a range, context-dependent threshold or evolving consensus.
