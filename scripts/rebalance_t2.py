import json

def rebalance_t2():
    with open('mock_tests/mock_test_2.json') as f:
        qs = json.load(f)

    updates = {
        "t2-a1-006": {
            "options": [
                "Lactate dehydrogenase enzyme (LDH-1)",
                "Hexokinase glycolytic enzyme (HK-1)",
                "Phosphofructokinase-1 enzyme (PFK-1)",
                "Pyruvate kinase regulatory enzyme (PK-1)"
            ]
        },
        "t2-a1-007": {
            "options": [
                "Point where blood lactate concentration reaches an absolute value of 4.0 mmol/L",
                "Point where blood lactate reaches its initial resting baseline level of 1.0 mmol/L",
                "Point where blood lactate reaches maximal peak concentration of 10.0 mmol/L",
                "Point where respiratory exchange ratio reaches resting baseline level of 0.70"
            ]
        },
        "t2-a1-008": {
            "options": [
                "Stroke volume plateaus at approximately 40% to 50% of VO2max",
                "Stroke volume plateaus at approximately 85% to 90% of VO2max",
                "Stroke volume increases continuously up to 100% of VO2max",
                "Stroke volume decreases progressively after 20% of VO2max"
            ]
        },
        "t2-a1-009": {
            "options": [
                "Elevation of submaximal heart rate to compensate for reduced cardiac stroke volume",
                "Expansion of resting blood plasma volume by 10% to 15% within three to five days",
                "Reduction of total sweat gland output to conserve circulating extracellular fluid volume",
                "Increased concentration of sodium and chloride in excreted sweat to prevent hypokalemia"
            ]
        },
        "t2-a1-010": {
            "options": [
                "100% carbohydrate oxidation (pure glycogen utilization)",
                "100% fat oxidation (pure free fatty acid utilization)",
                "50% carbohydrate and 50% fat oxidation (mixed fuel use)",
                "100% protein catabolism (pure amino acid utilization)"
            ]
        },
        "t2-a1-011": {
            "options": [
                "Gradual decline in heart rate and progressive increase in core temperature across repeated bouts",
                "Earlier onset of sweating at a lower core temperature threshold and higher sweat rate",
                "Decreased plasma volume and increased sweat sodium concentration to preserve renal function",
                "Selective reduction in cutaneous peripheral blood flow during sustained exercise in heat"
            ]
        },
        "t2-a1-012": {
            "options": [
                "Intake of 2 to 3 grams of the essential amino acid leucine within a complete protein meal",
                "Intake of 10 to 15 grams of saturated fatty acids consumed immediately before evening sleep",
                "Intake of 20 to 30 grams of non-essential amino acids consumed in an energy-deficient state",
                "Intake of 4 to 5 grams of dietary sodium consumed across repeated continuous training bouts"
            ]
        },
        "t2-a1-013": {
            "options": [
                "5 g per day (in single dose) for 3 days followed by 2 g per day for 2 weeks",
                "20 g per day (in four 5 g doses) for 5–7 days followed by 3–5 g per day",
                "40 g per day (in four 10 g doses) for 3–5 days followed by 10 g per day",
                "1 g per day (in two 0.5 g doses) for 30 days followed by 0.5 g per day"
            ]
        },
        "t2-a1-014": {
            "options": [
                "20 to 30 mmol/L (460 to 690 mg/L) to enhance fluid retention",
                "5 to 10 mmol/L (115 to 230 mg/L) to prevent hypernatremic state",
                "50 to 60 mmol/L (1150 to 1380 mg/L) to maximize gastric emptying",
                "80 to 100 mmol/L (1840 to 2300 mg/L) to increase plasma osmolality"
            ]
        },
        "t2-a1-015": {
            "options": [
                "Accelerates glycogenolysis via adrenergic stimulation of muscle phosphorylase kinase",
                "Reduces the oxygen cost of submaximal exercise via nitric oxide-mediated pathways",
                "Inhibits intramuscular lactic acid generation via carbonic anhydrase enzyme blockade",
                "Enhances long-chain fatty acid beta-oxidation via carnitine palmitoyl transferase activation"
            ]
        },
        "t2-a1-016": {
            "options": [
                "Low energy availability, hyperandrogenism, and polycystic ovarian syndrome",
                "High protein availability, persistent oligomenorrhea, and elevated bone density",
                "Excessive calcium availability, severe dysmenorrhea, and subcalcaneal spurring",
                "Low energy availability, functional hypothalamic amenorrhea, and low bone mineral density"
            ]
        },
        "t2-a1-018": {
            "options": [
                "[Father's height - 13 cm + Mother's height] / 2",
                "[Father's height + 13 cm + Mother's height] / 2",
                "[Father's height + Mother's height + 6.5 cm] / 2",
                "[Father's height + Mother's height - 6.5 cm] / 2"
            ]
        },
        "t2-a1-019": {
            "options": [
                "Equal shoulder and hip breadths (rectangular athletic profile)",
                "Broad shoulders relative to narrow hips (inverted-triangle profile)",
                "Disproportionately long lower limbs (linear ectomorphic profile)",
                "Wide pelvic hips relative to narrow shoulders (pear-shaped profile)"
            ]
        },
        "t2-a1-020": {
            "options": [
                "Dual-energy X-ray absorptiometry (DEXA scan)",
                "Body mass index calculation (BMI formula)",
                "Hydrodensitometry underwater weighing (UWW method)",
                "Skinfold caliper anthropometry (ISAK protocol)"
            ]
        },
        "t2-a1-022": {
            "options": [
                "Cognitive anxiety has an inverted-U relationship with performance, while somatic anxiety has no impact",
                "Cognitive anxiety shows a positive linear relationship with performance, while somatic anxiety is inverted-U",
                "Cognitive anxiety shows a negative linear relationship with performance, while somatic anxiety shows an inverted-U relationship",
                "Cognitive anxiety and somatic anxiety both demonstrate identical positive linear relationships with performance"
            ]
        },
        "t2-a1-023": {
            "options": [
                "Physical, Emotional, Temporal, Tactical, Learning, Emotion, and Performance",
                "Postural, Environmental, Technical, Timing, Linguistic, Effort, and Perspective",
                "Psychological, External, Task, Target, Logical, Execution, and Participation",
                "Physical, Environment, Task, Timing, Learning, Emotion, and Perspective"
            ]
        },
        "t2-a1-025": {
            "options": [
                "Broad-Internal focus (analyzing game strategies)",
                "Broad-External focus (assessing defensive coverage)",
                "Narrow-Internal focus (monitoring respiratory rate)",
                "Narrow-External focus (fixating on the ball laces)"
            ]
        },
        "t2-a1-026": {
            "options": [
                "Chronic sleep disruption, glycogen depletion, and elevated creatine kinase concentrations",
                "Sustained joint discomfort, elevated blood lactate, and localized myofibrillar strains",
                "Autonomic imbalance, excessive training frequency, and loss of competitive motivation",
                "Emotional/physical exhaustion, sport devaluation, and reduced athletic accomplishment"
            ]
        },
        "t2-a1-027": {
            "options": [
                "Stage 2 non-REM sleep (theta wave spindle phase)",
                "Stage 4 REM sleep (active dream sleep phase)",
                "Stage 3 non-REM sleep (slow-wave delta sleep phase)",
                "Stage 1 non-REM sleep (light transitional sleep phase)"
            ]
        },
        "t2-a1-028": {
            "options": [
                "Total linear distance covered above sprinting threshold of 25 km/h",
                "Metabolic work estimate calculated from metabolic equivalent of task",
                "Product of total distance and mean heart rate divided by body mass",
                "Total mechanical work calculated by integrating tri-axial accelerometer vector magnitudes"
            ]
        },
        "t2-a1-029": {
            "options": [
                "Blunts post-exercise inflammatory signaling, satellite cell activity, and long-term anabolic adaptations",
                "Enhances myofibrillar protein synthesis by accelerating ribosomal translation initiation pathways",
                "Increases intramuscular temperature to promote continuous collagen remodeling and tissue repair",
                "Decreases central nervous system fatigue by selectively elevating circulating growth hormone levels"
            ]
        },
        "t2-a1-030": {
            "options": [
                "Mean is used for non-normally distributed data; median is used strictly for symmetric bell curves",
                "Mean is unaffected by extreme outliers; median is heavily distorted by extreme skewness",
                "Mean represents the most frequent value; median represents the arithmetic average score",
                "Mean is the arithmetic average sensitive to outliers; median is the middle value robust to skewness"
            ]
        },
        "t2-a1-031": {
            "options": [
                "Chi-Square test of independence (nominal data)",
                "Kruskal-Wallis one-way ANOVA (ordinal data)",
                "Paired Student's t-test (repeated measures)",
                "Independent two-sample t-test (unpaired data)"
            ]
        },
        "t2-a1-032": {
            "options": [
                "Agreement between duplicate measurements taken by the same investigator",
                "Concordance between measurements taken by two or more independent raters",
                "Correlation between a field assessment and an established gold standard test",
                "Stability of a measurement tool across repeated trials on non-consecutive days"
            ]
        },
        "t2-a2-001": {
            "options": [
                "The Government matches contributions on a 1:9 ratio with 90% from private sectors",
                "The Government of India provides matching grants on a 1:1 basis against contributions",
                "The Fund is funded exclusively by international foreign loans with 0% domestic grants",
                "The Government matches contributions on a 1:3 ratio with 75% from private sectors"
            ]
        },
        "t2-a2-003": {
            "options": [
                "S1: Anabolic Agents (exogenous steroids)",
                "S2: Peptide Hormones (growth factors)",
                "S3: Beta-2 Agonists (bronchodilators)",
                "S4: Hormone Modulators (anti-estrogens)"
            ]
        },
        "t2-a2-004": {
            "options": [
                "Between 12:00 Midnight and 04:00 AM daily",
                "Between 05:00 AM and 11:00 PM daily",
                "Between 08:00 AM and 12:00 Noon daily",
                "Between 01:00 PM and 05:00 PM daily"
            ]
        },
        "t2-a2-005": {
            "options": [
                "2 failures within a rolling 6-month period",
                "3 failures within a rolling 12-month period",
                "5 failures within a rolling 24-month period",
                "1 failure within any single calendar year"
            ]
        },
        "t2-a2-006": {
            "options": [
                "Tokyo Metropolis (Tokyo 2026 Games)",
                "Aichi Prefecture and Nagoya City (Aichi-Nagoya 2026)",
                "Osaka Prefecture and Kobe City (Kansai 2026)",
                "Hokkaido Prefecture and Sapporo City (Sapporo 2026)"
            ]
        },
        "t2-a2-008": {
            "options": [
                "National Anti-Doping Disciplinary Panel (NADDP)",
                "National Olympic Disciplinary Committee (NODC)",
                "National Sports Grievance Redressal Body (NSGRB)",
                "Central Anti-Doping Investigation Bureau (CADIB)"
            ]
        },
        "t2-b-002": {
            "options": [
                "At 90° of knee flexion during seated non-weight-bearing rotation",
                "At 20° of knee flexion during dynamic single-leg weight-bearing rotation",
                "At 0° of knee flexion during static double-leg weight-bearing extension",
                "At 60° of knee flexion during bilateral deep squatting on a flat floor"
            ]
        },
        "t2-b-003": {
            "options": [
                "Pain with internal rotation (thumb down) that is abolished in external rotation (thumb up)",
                "Pain with external rotation (thumb up) that is abolished in internal rotation (thumb down)",
                "Pain with forward flexion (palm down) that is abolished in sagittal extension (palm up)",
                "Pain with internal rotation (thumb down) that is reduced in external rotation (thumb up)"
            ]
        },
        "t2-b-004": {
            "options": [
                "Calcaneofibular ligament (CFL)",
                "Anterior talofibular ligament (ATFL)",
                "Posterior talofibular ligament (PTFL)",
                "Deltoid ligament complex (DLC)"
            ]
        },
        "t2-b-005": {
            "options": [
                "Femoroacetabular Impingement (FAI) or anterior labral tear of the hip",
                "Greater trochanteric pain syndrome (GTPS) or gluteus medius tendinopathy",
                "Osteoarthritis of the sacroiliac joint (SIJ) or posterior pelvic sprain",
                "Ischial tuberosity apophysitis (ITA) or proximal hamstring tendon strain"
            ]
        },
        "t2-b-006": {
            "options": [
                "Sacroiliac joint dysfunction or intra-articular hip joint pathology",
                "Piriformis syndrome or sciatic nerve entrapment in deep gluteal space",
                "Iliopsoas bursitis or internal snapping hip syndrome at trochanter",
                "Ischial bursitis or proximal hamstring origin avulsion tendinopathy"
            ]
        },
        "t2-b-007": {
            "options": [
                "Subscapularis muscle (internal rotator)",
                "Infraspinatus muscle (external rotator)",
                "Teres Minor muscle (external rotator)",
                "Supraspinatus muscle (abductor initiator)"
            ]
        },
        "t2-b-008": {
            "options": [
                "Resisted wrist extension and radial deviation with forearm pronated and elbow fully extended",
                "Resisted wrist flexion and ulnar deviation with forearm supinated and elbow fully extended",
                "Resisted forearm pronation and wrist neutral with elbow positioned at ninety degrees flexion",
                "Resisted active elbow flexion against manual resistance with forearm positioned in full neutral"
            ]
        },
        "t2-b-009": {
            "options": [
                "Set 1 at 100% 10RM, Set 2 at 75% 10RM, Set 3 at 50% 10RM (regressive loading protocol)",
                "Set 1 at 50% 10RM, Set 2 at 75% 10RM, Set 3 at 100% 10RM (progressive loading protocol)",
                "Set 1 at 100% 1RM, Set 2 at 90% 1RM, Set 3 at 80% 1RM (maximal strength protocol)",
                "Set 1 at 30% 1RM, Set 2 at 30% 1RM, Set 3 at 30% 1RM (muscular endurance protocol)"
            ]
        },
        "t2-b-010": {
            "options": [
                "Loads of 30% 1RM performed at 1-second cadence for 3 sets of 20 repetitions daily",
                "Loads of 50% 1RM performed at 2-second cadence for 3 sets of 15 repetitions daily",
                "Loads of 70–85% 1RM performed at 6-second cadence for 3–4 sets on 3 alternate days per week",
                "Loads of 95% 1RM performed at 10-second cadence for 5 sets of 2 repetitions once weekly"
            ]
        },
        "t2-b-011": {
            "options": [
                "Autogenic inhibition via Golgi tendon organ Ib afferent stimulation of target muscle",
                "Reciprocal facilitation via muscle spindle Ia afferent excitation of antagonist muscle",
                "Articular mechanoreceptor inhibition via type II joint capsule receptor activation",
                "Gamma motor neuron co-activation via descending corticospinal motor pathway stimulation"
            ]
        },
        "t2-b-012": {
            "options": [
                "Grade I (small amplitude oscillation performed at the beginning of available range)",
                "Grade II (large amplitude oscillation performed within the resistance-free range)",
                "Grade III (large amplitude oscillation performed up to the limit of available range)",
                "Grade IV (small amplitude oscillation performed at the very limit of available range)"
            ]
        },
        "t2-b-014": {
            "options": [
                "Heavy dynamic eccentric loading (e.g., 85% 1RM leg extensions)",
                "High-velocity plyometric jump training (e.g., depth drop jumps)",
                "Submaximal multi-angle isometric contractions (e.g., quad sets)",
                "Rapid ballistic end-range stretches (e.g., hurdle stretches)"
            ]
        },
        "t2-b-016": {
            "options": [
                "Depresses the humeral head to counteract the superior shearing force of the deltoid muscle",
                "Elevates the humeral head to maximize subacromial contact area during early abduction",
                "Anteriorly translates the humeral head to increase passive tension in the posterior capsule",
                "Posteriorly rotates the clavicle to eliminate all movement demand at the scapulothoracic joint"
            ]
        },
        "t2-b-017": {
            "options": [
                "Males: 5°–8°; Females: 8°–10° (measured in full knee extension)",
                "Males: 10°–14°; Females: 15°–17° (measured in full knee extension)",
                "Males: 20°–25°; Females: 25°–30° (measured in full knee extension)",
                "Males: 0°–2°; Females: 0°–2° (measured in full knee extension)"
            ]
        },
        "t2-b-018": {
            "options": [
                "First-class lever (effort - fulcrum - load)",
                "Second-class lever (fulcrum - load - effort)",
                "First-class lever (fulcrum between load and effort)",
                "Third-class lever (fulcrum - effort - load)"
            ]
        },
        "t2-b-019": {
            "options": [
                "At 90° angle of pull (where 100% of force vector acts as perpendicular rotary torque)",
                "At 0° angle of pull (where 100% of force vector acts as parallel stabilizing force)",
                "At 180° angle of pull (where 100% of force vector acts as parallel dislocating force)",
                "At 45° angle of pull (where 50% of force vector acts as rotary and 50% as stabilizing)"
            ]
        },
        "t2-b-020": {
            "options": [
                "Quadriceps femoris (co-contracting to generate anterior tibial translation load)",
                "Medial gastrocnemius (co-contracting to resist posterior knee joint displacement)",
                "Hamstrings (co-contracting to resist anterior tibial shear and excessive knee valgus)",
                "Popliteus (co-contracting to externally rotate the femoral condyles on the tibia)"
            ]
        },
        "t2-b-021": {
            "options": [
                "Coracohumeral ligament (CHL) at 0° abduction",
                "Superior glenohumeral ligament (SGHL) at 0° abduction",
                "Inferior glenohumeral ligament complex (IGHLC) at 90° abduction",
                "Middle glenohumeral ligament (MGHL) at 45° abduction"
            ]
        },
        "t2-b-023": {
            "options": [
                "Initial contact of the reference foot with the ground surface",
                "First 10% of the gait cycle following weight acceptance impact",
                "Heel rise of the reference limb until contralateral initial contact",
                "Toe-off of the reference limb until mid-swing knee clearance"
            ]
        },
        "t2-b-024": {
            "options": [
                "Initial ground contact shock absorption and weight acceptance",
                "Rapid transfer of body weight and initiation of swing-phase knee flexion",
                "Mid-stance single-limb support and pelvic horizontal stabilization",
                "Terminal swing deceleration and preparation for heel strike contact"
            ]
        },
        "t2-b-025": {
            "options": [
                "Bilateral hip adductor spastic contracture causing narrow base of support",
                "Quadriceps femoris paralysis causing knee hyperextension during mid-stance",
                "Common peroneal nerve palsy causing excessive hip flexion and high steppage",
                "Abbreviated stance phase on the painful lower extremity to minimize weight-bearing"
            ]
        },
        "t2-b-026": {
            "options": [
                "Single peak curve reaching 0.5× body weight at mid-stance",
                "Linear progressive ramp reaching 3.0× body weight at toe-off",
                "Bimodal 'M-shaped' curve with two peaks reaching ~1.1–1.2× body weight",
                "Flat plateau curve maintaining 1.0× body weight throughout stance"
            ]
        },
        "t2-b-027": {
            "options": [
                "Excessive spasticity of the stance-limb ankle plantarflexor muscle group",
                "Weakness of the stance-limb gluteus medius hip abductor musculature",
                "Fixed contracture of the gastrocnemius muscle and posterior ankle capsule",
                "Inability to clear the ground due to inadequate swing-phase knee flexion"
            ]
        },
        "t2-b-028": {
            "options": [
                "Segmental pain gating via stimulation of large-diameter sensory fibers (A-beta)",
                "Descending pain inhibition via endogenous opioid release (endorphins/enkephalins)",
                "Peripheral conduction blockade of unmyelinated nociceptive pathways (C-fibers)",
                "Cutaneous microvascular vasoconstriction reducing local inflammatory mediators (PGs)"
            ]
        },
        "t2-b-030": {
            "options": [
                "Stimulating cutaneous thermoreceptors to increase local microvascular circulation",
                "Accelerating muscle spindle discharge rates to increase resting myofibrillar tone",
                "Elevating local cellular metabolic activity to promote enzymatic tissue degradation",
                "Decreasing sensory nerve conduction velocity and reducing motor spindle excitability"
            ]
        },
        "t2-b-031": {
            "options": [
                "Active cardiac pacemaker or implanted electronic stimulator over the thoracic region",
                "Chronic osteoarthritis of the glenohumeral joint without neurological symptoms",
                "Delayed onset muscle soreness in the quadriceps following unaccustomed exercise",
                "Mild patellofemoral pain syndrome without joint effusion or skin breakdown"
            ]
        },
        "t2-b-032": {
            "options": [
                "Facilitating primitive developmental reflexes to trigger involuntary mass synergy patterns",
                "Using resistance and stretch reflexes to reinforce stereotypical associated reactions",
                "Inhibiting abnormal tone and movement synergies to facilitate normal postural control and active movement",
                "Prescribing heavy isolated open-chain resistance exercises to build compensatory hypertrophy"
            ]
        },
        "t2-b-034": {
            "options": [
                "Romberg test (comparing sway stability with eyes open versus eyes closed)",
                "Finger-to-nose test (assessing intention tremor and dysmetria during reach)",
                "Rapid alternating pronation-supination test (evaluating dysdiadochokinesia)",
                "Heel-to-shin test (assessing lower extremity movement accuracy and coordination)"
            ]
        },
        "t2-b-035": {
            "options": [
                "Stage 1: Flaccidity with complete absence of voluntary movement in involved limb",
                "Stage 2: Basic movement synergies appear with minimal spastic resistance developing",
                "Stage 3: Voluntary synergy control achieved with spasticity reaching peak severity",
                "Stage 4: Spasticity begins to decline and movement outside basic synergies emerges"
            ]
        },
        "t2-b-036": {
            "options": [
                "Failure of radiographic callus formation to appear within two weeks of injury",
                "Complete structural osseous bridging across all cortices within three months",
                "Formation of fibrous pseudoarthrosis with persistent mobility after six months",
                "Failure of bone union within the biologically expected timeframe for that location"
            ]
        },
        "t2-b-037": {
            "options": [
                "Shoulder depression, 110° abduction, external rotation, forearm supination, and wrist/finger extension",
                "Shoulder elevation, 90° abduction, internal rotation, forearm pronation, and wrist/finger flexion",
                "Shoulder depression, 30° abduction, external rotation, forearm supination, and thumb/finger flexion",
                "Shoulder neutral, 0° abduction, internal rotation, forearm pronation, and ulnar deviation at wrist"
            ]
        },
        "t2-b-038": {
            "options": [
                "Derangement syndrome (characterized by directional preference and centralization of symptoms)",
                "Dysfunction syndrome (characterized by end-range pain from contracted adaptive tissue)",
                "Postural syndrome (characterized by pain produced solely by prolonged static loading)",
                "Non-mechanical spinal syndrome (characterized by constant unremitting non-mechanical pain)"
            ]
        },
        "t2-b-039": {
            "options": [
                "A non-tender subcutaneous fibrotic nodule with normal muscle twitch response",
                "A diffuse region of joint effusion with associated capsular end-feel restriction",
                "A hyperirritable taut band nodule producing local twitch and referred pain patterns",
                "A localized periosteal bony spur producing pinpoint tenderness at tendon insertion"
            ]
        },
        "t2-b-040": {
            "options": [
                "Grade I: Small amplitude oscillatory movement (early range)",
                "Grade II: Large amplitude oscillatory movement (mid range)",
                "Grade III: Large amplitude oscillatory movement (end range)",
                "Grade V: High-velocity low-amplitude thrust (anatomical limit)"
            ]
        },
        "t2-c-001": {
            "options": [
                "Non-weight-bearing crutch ambulation for four consecutive weeks without exercise",
                "Passive hamstring static stretching on a physical therapy table twice daily",
                "Continuous low-intensity stationary cycling performed without resistance loading",
                "High-speed sprint mechanics drills, acceleration runs, and eccentric strength training"
            ]
        },
        "t2-c-002": {
            "options": [
                "Isokinetic eccentric hamstring to concentric quadriceps ratio (H:Q) >0.60 and LSI ≥90%",
                "Limb Symmetry Index (LSI) ≥50% on isometric knee extension peak torque testing",
                "Limb Symmetry Index (LSI) ≥70% on functional single-leg forward hop testing",
                "Limb Symmetry Index (LSI) ≥30% on vertical countermovement jump power testing"
            ]
        },
        "t2-c-003": {
            "options": [
                "Type I SLAP tear (superior labrum fraying with intact biceps anchor)",
                "Type II SLAP tear (superior labrum and biceps tendon anchor detachment)",
                "Type III SLAP tear (bucket-handle labral tear with intact biceps anchor)",
                "Type IV SLAP tear (bucket-handle labral tear extending into biceps tendon)"
            ]
        },
        "t2-c-004": {
            "options": [
                "Shoulder immobilizer casting for twelve weeks with absolute avoidance of movement",
                "High-velocity manipulative thrusts directly into end-range extension and rotation",
                "Heavy maximal biceps loading and overhead military barbell presses to muscle failure",
                "Dynamic periscapular neuromuscular control, posterior cuff loading, and rotator cuff work"
            ]
        },
        "t2-c-005": {
            "options": [
                "Lateral Meniscus Tear (LMT) with joint line locking",
                "Iliotibial Band Friction Syndrome (ITBFS) with lateral friction",
                "Proximal Tibiofibular Subluxation (PTS) with instability",
                "Pes Anserine Bursitis (PAB) with medial tendon strain"
            ]
        },
        "t2-c-006": {
            "options": [
                "Open-chain knee extensions performed to muscular exhaustion on variable machines",
                "Immediate surgical lateral retinacular release performed within forty-eight hours",
                "Progressive strengthening of ipsilateral hip abductors and pelvic external rotators",
                "Prolonged bed rest for six weeks with strict avoidance of all weight-bearing drills"
            ]
        },
        "t2-c-007": {
            "options": [
                "Medial epicondylalgia (Golfer's Elbow / Common Flexor Tendinopathy)",
                "Carpal tunnel syndrome (Median Nerve / Flexor Retinaculum Entrapment)",
                "Radial tunnel syndrome (Radial Nerve / Supinator Arch Compression)",
                "Lateral epicondylalgia (Tennis Elbow / Extensor Carpi Radialis Tendinopathy)"
            ]
        },
        "t2-c-008": {
            "options": [
                "Complete rigid forearm casting for three months with absolute rest",
                "Passive hot pack applications performed without active exercise loading",
                "Progressive eccentric-concentric wrist flexor and pronator strengthening loading",
                "High-velocity plyometric medicine ball throws performed without baseline strength"
            ]
        },
        "t2-c-009": {
            "options": [
                "Retrocalcaneal Bursitis (RB) with insertional spur",
                "Plantar Fascia Rupture (PFR) with arch collapse",
                "Distal Tibiofibular Syndesmotic Sprain (High Ankle)",
                "Anterior Talofibular Ligament Sprain (Low Ankle)"
            ]
        },
        "t2-c-010": {
            "options": [
                "Syndesmotic sprains heal in 1 to 2 weeks with standard supportive elastic taping",
                "Syndesmotic sprains heal in 2 to 3 weeks with zero rehabilitation intervention",
                "Syndesmotic sprains require 6 to 12 weeks with initial protected immobilization",
                "Syndesmotic sprains require 3 to 4 weeks with immediate full-contact match drills"
            ]
        },
        "t2-c-011": {
            "options": [
                "Osgood-Schlatter Disease (traction apophysitis of the tibial tubercle)",
                "Sinding-Larsen-Johansson Syndrome (traction apophysitis of the patellar pole)",
                "Sever's Disease (traction apophysitis of the calcaneal tuberosity)",
                "Iselin's Disease (traction apophysitis of the fifth metatarsal base)"
            ]
        },
        "t2-c-012": {
            "options": [
                "Immediate surgical excision of the open apophysis under general anesthesia",
                "Daily maximal depth drop jumps from 60 cm boxes to stimulate bone remodeling",
                "Activity load management, quadriceps/hamstring flexibility, and infrapatellar strapping",
                "Total cast immobilization of the knee in full extension for six consecutive months"
            ]
        },
        "t2-c-013": {
            "options": [
                "Medial Tibial Stress Syndrome (MTSS) of the posteromedial tibial shaft",
                "Lumbar Spinal Stenosis (LSS) causing neurogenic claudication at rest",
                "Tibial Cortical Stress Fracture (TCSF) of the anterior tibial border",
                "Chronic Exertional Compartment Syndrome (CECS) of the anterior compartment"
            ]
        },
        "t2-c-014": {
            "options": [
                "Resting plain lateral radiography of the tibia and fibula shafts",
                "Diagnostic musculoskeletal ultrasound of the distal Achilles tendon",
                "Serum creatine kinase assessment immediately following race completion",
                "Pre- and post-exercise dynamic intramuscular compartment pressure manometry"
            ]
        },
        "t2-c-015": {
            "options": [
                "Ability to walk 50 meters with bilateral axillary crutches (LSI ≥50%)",
                "Zero effusion, full active knee ROM, and quadriceps strength (LSI ≥85%)",
                "Presence of grade I joint effusion and active knee flexion (LSI ≥60%)",
                "Normal plain radiography showing structural joint space width (LSI ≥40%)"
            ]
        },
        "t2-c-016": {
            "options": [
                "High-impact continuous road running performed daily on hard concrete surfaces",
                "Heavy open-chain leg extensions with maximal terminal knee hyperextension torque",
                "Optimizing lower limb alignment, quadriceps/hamstring strength, and body composition",
                "Permanent cessation of all physical activity and complete sedentary lifestyle adoption"
            ]
        },
        "t2-c-017": {
            "options": [
                "Normal reactive strength with identical bilateral landing impulse distribution",
                "Elevated reactive strength index indicating readiness for maximal depth jumping",
                "Low reactive strength with extended contact time and compensatory limb loading asymmetry",
                "Invalid testing results requiring complete exclusion of all force platform data"
            ]
        },
        "t2-c-018": {
            "options": [
                "Strict bed rest without weight-bearing ground contact for four consecutive weeks",
                "Seated bilateral heavy leg press resistance exercises performed to muscular failure",
                "Application of cryotherapy ice wraps while reviewing technical video footage",
                "Unilateral landing mechanics, rapid stretch-shortening drills, and single-leg loading"
            ]
        },
        "t2-c-020": {
            "options": [
                "Isolated high-velocity open-chain knee extensions on a machine",
                "Passive floor-mat adductor stretching held for thirty seconds daily",
                "Therapeutic ultrasound applications over the pubic ramus without loading",
                "Copenhagen Adduction Exercise protocol with progressive eccentric loading"
            ]
        }
    }

    for q in qs:
        qid = q['id']
        if qid in updates:
            q['options'] = updates[qid]['options']

    with open('mock_tests/mock_test_2.json', 'w') as f:
        json.dump(qs, f, indent=2)

    print("Updated mock_test_2.json successfully!")

if __name__ == '__main__':
    rebalance_t2()
