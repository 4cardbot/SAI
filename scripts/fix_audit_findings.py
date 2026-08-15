"""Apply the human-audit corrections to the mock-test question bank.

This is intentionally an explicit, ID-based migration: question IDs are stable,
and every change can be reviewed in the resulting JSON diff.
"""

from __future__ import annotations

import glob
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load_questions() -> tuple[dict[str, dict], dict[str, list[dict]]]:
    by_id: dict[str, dict] = {}
    by_file: dict[str, list[dict]] = {}
    files = sorted(
        glob.glob(str(ROOT / "mock_tests" / "mock_test_*.json")),
        key=lambda name: int(re.search(r"_(\d+)\.json$", name).group(1)),
    )
    for filename in files:
        questions = json.loads(Path(filename).read_text())
        by_file[filename] = questions
        for question in questions:
            if question["id"] in by_id:
                raise ValueError(f"duplicate question id: {question['id']}")
            by_id[question["id"]] = question
    return by_id, by_file


def set_fields(question: dict, **fields: object) -> None:
    question.update(fields)


def set_option(question: dict, index: int, value: str) -> None:
    options = list(question["options"])
    options[index] = value
    question["options"] = options


def replace_text(question: dict, old: str, new: str) -> None:
    question["text"] = question["text"].replace(old, new)
    question["explanation"] = question["explanation"].replace(old, new)


def fix_a1(qs: dict[str, dict]) -> None:
    # Defective answer sets and keys.
    set_fields(qs["t2-a1-009"],
        options=[
            "Renal erythropoietin stimulation of erythropoiesis, increasing red-cell volume and haemoglobin mass",
            "A lasting expansion of plasma volume without any change in red-cell mass",
            "Reduced haemoglobin concentration that improves oxygen unloading at altitude",
            "Reduced ventilation and lower arterial oxygen pressure after acclimatization",
        ], correct=0,
        explanation="Chronic altitude exposure stabilizes hypoxia-signalling pathways and increases renal erythropoietin, stimulating erythropoiesis and expanding red-cell volume and haemoglobin mass.")
    set_fields(qs["t2-a1-020"],
        options=[
            "Fat mass, total body water, and fat-free dry solids",
            "Fat mass, bone mineral content, and total body water only",
            "Body mass index, waist circumference, and resting metabolic rate",
            "Skinfold thickness, limb girths, and bone breadths only",
        ], correct=0,
        explanation="A three-compartment model separates fat mass, total body water, and fat-free dry solids. DEXA is a different method whose outputs depend on its own model assumptions.")
    set_fields(qs["t2-a1-030"],
        options=[
            "SD describes variability among individual observations; SEM estimates the uncertainty of the sample mean and equals SD divided by the square root of sample size",
            "SD estimates the sample mean; SEM describes whether the data are normally distributed",
            "SD is used only for categorical data; SEM is used only for continuous data",
            "SD and SEM are interchangeable names for the same measure of spread",
        ], correct=0,
        explanation="Standard deviation describes individual-data variability. Standard error of the mean describes the precision of the estimated mean and is calculated as SD/√n.")
    set_fields(qs["t3-a1-014"],
        options=[
            "Raises blood bicarbonate and supports extracellular hydrogen-ion efflux from working muscle",
            "Replaces all sodium lost in sweat and directly increases plasma sodium concentration",
            "Raises muscle calcium storage and prevents all calcium release during glycolysis",
            "Replaces magnesium lost in sweat and directly increases mitochondrial oxygen delivery",
        ], correct=0,
        explanation="Acute sodium bicarbonate loading increases extracellular bicarbonate and buffering capacity, helping remove hydrogen ions from contracting muscle during intense glycolytic exercise.")
    qs["t4-a1-013"]["correct"] = 2
    set_fields(qs["t4-a1-015"], correct=1,
        explanation="Creatine supplementation can increase intramuscular total creatine and phosphocreatine availability, supporting ATP resynthesis during repeated high-intensity efforts. The magnitude varies between athletes.")
    qs["t4-a1-024"]["correct"] = 1
    set_fields(qs["t4-a1-028"], correct=1,
        explanation="For continuous measurements, reliability is commonly reported with an intraclass correlation coefficient together with an absolute-error measure such as the standard error of measurement. Pearson correlation alone does not assess agreement.")
    qs["t5-a1-023"]["correct"] = 1
    set_fields(qs["t5-a1-025"], correct=1,
        explanation="Transformational leadership motivates through a shared vision, idealized influence, intellectual stimulation, and individualized consideration rather than punishment or rewards alone.")
    set_fields(qs["t6-a1-027"],
        options=[
            "Failure to reject a false null hypothesis, producing a false-negative conclusion",
            "Rejection of a true null hypothesis, producing a false-positive conclusion",
            "The proportion of people with a condition who test positive",
            "The probability that a person with a negative test truly has no condition",
        ], correct=0,
        explanation="A Type II error (β) occurs when a study fails to reject a false null hypothesis and therefore misses a real effect, often because power is inadequate.")
    qs["t12-a1-013"]["correct"] = 1
    set_option(qs["t12-a1-015"], 2,
        "By entering chronological age, stature, sitting height, subischial leg length, body mass, and sex into a validated maturity-offset equation")
    qs["t12-a1-018"]["correct"] = 0
    qs["t12-a1-023"]["correct"] = 0

    # Correct explanations and qualify claims that were too absolute.
    set_fields(qs["t1-a1-003"],
        explanation="A velocity loss above about 30% indicates substantial fatigue and loss of movement quality, including peripheral and neuromuscular fatigue. It does not independently diagnose central nervous system fatigue.")
    set_fields(qs["t1-a1-012"],
        text="For an endurance event lasting approximately 1 to 2.5 hours, what is the commonly recommended range of carbohydrate intake during exercise?",
        explanation="For events of roughly 1 to 2.5 hours, 30–60 g/hour of rapidly absorbed carbohydrate is commonly recommended. Longer ultra-endurance events may use higher, individually tolerated rates.")
    set_fields(qs["t1-a1-023"],
        text="Which intervention most specifically targets cognitive appraisal and worry rather than physiological arousal in an elite competitor?",
        options=[
            "Progressive muscle relaxation targeting autonomic arousal",
            "Cognitive thought stopping targeting intrusive negative internal dialogue",
            "Autogenic training targeting peripheral warmth and relaxation",
            "Slow diaphragmatic breathing targeting respiratory arousal",
        ], correct=1,
        explanation="Thought stopping is a cognitive strategy aimed at intrusive negative dialogue and worry. Reframing and cognitive restructuring can also target cognitive anxiety, so the stem must distinguish the intended technique.")
    set_fields(qs["t1-a1-028"],
        explanation="A sustained fall in vagally mediated HRV can suggest autonomic imbalance or incomplete recovery when interpreted with resting heart rate, performance, symptoms, and training load. HRV alone does not diagnose non-functional overreaching.")
    set_fields(qs["t1-a1-031"],
        explanation="TEM estimates random measurement error across repeated measurements by the same or different observers. It is useful for assessing measurement precision, but it is not simply the standard deviation and does not alone establish reliability.")
    set_fields(qs["t2-a1-022"],
        text="According to Multidimensional Anxiety Theory, how do cognitive state anxiety and somatic state anxiety typically behave as competition approaches?",
        options=[
            "Cognitive anxiety often remains elevated before competition, while somatic anxiety rises close to the start and may fall after activity begins",
            "Cognitive anxiety is always absent before competition, while somatic anxiety remains constant throughout",
            "Both forms of anxiety necessarily follow the same performance curve in every athlete",
            "Somatic anxiety is purely cognitive and cognitive anxiety is purely cardiovascular",
        ], correct=0,
        explanation="Cognitive anxiety may be present during the days or hours before competition, while somatic symptoms commonly increase nearer to the start and can change once performance begins.")
    set_fields(qs["t2-a1-032"],
        text="In sports technology validation, what does a Bland–Altman analysis primarily assess?",
        options=[
            "Agreement and systematic bias between paired measurements by plotting their differences against their means",
            "The association between two variables without assessing agreement or bias",
            "The sensitivity and specificity of a diagnostic test at one fixed threshold",
            "The internal consistency of a questionnaire across unrelated items",
        ], correct=0,
        explanation="A Bland–Altman plot evaluates pairwise agreement and bias between two measurement methods or repeated measurements, with limits of agreement. It is not a substitute for correlation or reliability analysis in every design.")
    set_fields(qs["t3-a1-010"],
        options=[
            "Heat exhaustion involves no central nervous system dysfunction, whereas exertional heat stroke is defined by CNS dysfunction with marked hyperthermia, commonly around or above 40°C",
            "Heat stroke is defined by a core temperature below 36°C and shivering",
            "Heat exhaustion always causes coma and circulatory collapse",
            "A normal core temperature rules out all heat illness during exercise",
        ], correct=0,
        explanation="Exertional heat stroke is primarily identified by central nervous system dysfunction in the setting of severe heat illness; a core temperature around or above 40°C is common but should not be used as the sole diagnostic requirement.")
    set_fields(qs["t3-a1-016"],
        explanation="Fat oxidation requires more oxygen per unit of ATP than carbohydrate oxidation and is less suited to maximal glycolytic work. Ketogenic diets can also reduce carbohydrate availability and pyruvate dehydrogenase activity; the exact performance effect depends on the event and athlete.")
    set_fields(qs["t3-a1-020"],
        text="Across a training season, how should changes in an athlete's somatotype be interpreted?",
        options=[
            "Somatotype components may change with body-composition and training changes, but no universal seasonal shift occurs in every athlete",
            "Ectomorphy necessarily increases to its maximum in every peak-competition phase",
            "Endomorphy necessarily rises while mesomorphy disappears during competition",
            "All somatotype components are permanently fixed from birth",
        ], correct=0,
        explanation="Heath–Carter components describe relative physique at the time of assessment. Training, nutrition, growth, and body-composition changes may alter the profile, but no single seasonal trajectory applies to every athlete.")
    set_fields(qs["t5-a1-007"],
        text="During heavy exercise, what acute effect does the Bohr effect have on the oxygen–haemoglobin dissociation curve in active muscle?",
        explanation="In active muscle, lower pH, higher PCO₂, increased temperature, and related factors shift the local oxygen–haemoglobin dissociation relationship to the right, reducing haemoglobin affinity and facilitating oxygen unloading. This acute effect should not be confused with a fixed chronic whole-body training shift.")
    set_fields(qs["t6-a1-004"],
        explanation="A squat mean-velocity value near 0.15–0.20 m/s is a commonly used approximate minimum-velocity range near maximal loading, but the threshold varies with exercise, athlete, device, and velocity metric.")
    set_fields(qs["t6-a1-009"],
        text="What is the net ATP yield from anaerobically converting one mole of glucosyl residues from muscle glycogen to lactate?",
        explanation="Glycogen phosphorylase supplies glucose-1-phosphate and bypasses the hexokinase ATP cost. The commonly taught net yield is three ATP per glucosyl residue converted to lactate.")
    set_fields(qs["t6-a1-010"],
        explanation="Energy availability below 30 kcal/kg FFM/day is a historical operational cutoff associated with increased risk of low-energy-availability effects. It is not a universal standalone diagnostic threshold for RED-S.")
    set_fields(qs["t6-a1-016"],
        explanation="Tanner stage 3 generally represents mid-puberty and may occur near the adolescent growth spurt, but the relationship with peak height velocity varies between individuals and should not be treated as fixed.")
    set_fields(qs["t6-a1-023"],
        text="Which force-plate metric is commonly used to monitor neuromuscular fatigue and stretch-shortening-cycle performance?",
        explanation="The modified reactive strength index (jump height divided by contraction time) is a useful monitoring metric, but its reliability and sensitivity depend on the jump protocol, strategy, athlete, and other concurrent measures.")
    set_fields(qs["t7-a1-003"],
        text="How should the load for maximal-power resistance exercises be selected?",
        options=[
            "Use an exercise- and athlete-specific load that maximizes measured power rather than one universal percentage",
            "Use 5% to 10% of 1RM for every ballistic and Olympic-lifting exercise",
            "Use zero external resistance for all power training",
            "Use 100% to 110% of 1RM for every power exercise",
        ], correct=0,
        explanation="The load that maximizes power is exercise- and athlete-specific. Ballistic jump squats often use lighter loads than Olympic-lifting derivatives, so one universal percentage is inappropriate.")
    set_fields(qs["t7-a1-007"],
        explanation="A forceful Valsalva can markedly increase intra-abdominal and intrathoracic pressure, improve trunk stiffness, reduce venous return transiently, and produce large temporary blood-pressure changes. The magnitude is not a universal fixed value such as 300 mmHg.")
    set_fields(qs["t7-a1-010"],
        options=[
            "Leucine is converted directly into glucose inside red blood cells",
            "A commonly cited leucine dose in a high-quality protein serving can stimulate mTORC1, but no universal threshold applies to every meal or athlete",
            "Leucine instantly depletes all other essential amino acids from plasma",
            "Leucine must be eliminated from the diet to prevent muscle breakdown",
        ], correct=1,
        explanation="Leucine availability is one signal involved in mTORC1 activation. A 2.5–3 g dose is commonly cited for many adults, but total protein quality, meal composition, age, and training status also matter.")
    set_fields(qs["t7-a1-023"],
        options=[
            "Consuming caffeine and using bright screens immediately before bed",
            "Maintaining a consistent schedule and a cool, dark, quiet room while limiting evening light and allowing an individualized caffeine-free interval before sleep",
            "Sleeping for two hours during the day and remaining awake for 48 hours before competition",
            "Sleeping with bright lights and loud television throughout the night",
        ], correct=1,
        explanation="Consistent timing, a cool/dark/quiet environment, reduced evening light, and an individualized caffeine cutoff support sleep. A 1–2 hour cutoff is not sufficient for every athlete because caffeine clearance varies.")
    set_fields(qs["t7-a1-032"],
        text="Which statement best describes endocrine monitoring in suspected overtraining syndrome?",
        options=[
            "A single insulin or growth-hormone value diagnoses overtraining",
            "A single lactate value while standing diagnoses overtraining",
            "Complete absence of thyroid hormones is expected in all overtrained athletes",
            "Catecholamine and cortisol responses may be altered, but no single endocrine pattern reliably diagnoses overtraining syndrome",
        ], correct=3,
        explanation="Endocrine responses can be altered in some athletes with severe training maladaptation, but no single catecholamine, cortisol, or other endocrine pattern is sufficiently specific to diagnose overtraining syndrome.")
    set_fields(qs["t8-a1-004"],
        explanation="The myonuclear-domain theory proposes that satellite-cell fusion may support substantial hypertrophy, but the size threshold and whether new myonuclei are always required remain debated. It should be presented as a model rather than settled necessity.")
    set_fields(qs["t8-a1-006"],
        explanation="Exercise-induced arterial hypoxaemia is multifactorial and may involve diffusion limitation, ventilation–perfusion inequality, and other pulmonary or cardiovascular factors. No single mechanism, such as interstitial oedema, is required in every athlete.")
    set_fields(qs["t8-a1-009"],
        text="In altitude physiology, which renal response is associated with hypoxia signalling in peritubular interstitial cells?",
        explanation="Hypoxia signalling, particularly through HIF-2α in renal erythropoietin-producing cells, increases EPO transcription and stimulates bone-marrow erythropoiesis. HIF-1α is not the sole regulator of this response.")
    set_fields(qs["t8-a1-015"],
        text="Which established hand/wrist radiographic methods are commonly used to estimate skeletal age?",
        explanation="Greulich–Pyle and Tanner–Whitehouse methods use left hand/wrist radiographs. Neither should be described as a single universal clinical gold standard for every population or purpose.")
    set_fields(qs["t8-a1-022"],
        explanation="A 10–20% velocity-loss target is commonly used when preserving power and movement quality is the priority, but the appropriate threshold depends on the exercise, athlete, and training goal.")
    set_fields(qs["t9-a1-007"],
        options=[
            "Failure of thermoregulation with central nervous system dysfunction in severe heat illness, commonly with core temperature around or above 40°C",
            "Rapid hypothermia caused by cutaneous blood pooling",
            "Selective peripheral motor-nerve paralysis from solar radiation",
            "Pancreatic destruction causing acute hyperglycaemia",
        ], correct=0,
        explanation="Exertional heat stroke involves central nervous system dysfunction in the setting of severe heat illness and excessive metabolic heat production. A core temperature around or above 40°C is common, but temperature alone is not diagnostic.")
    set_fields(qs["t9-a1-010"],
        text="Which statement best reflects current understanding of post-exercise protein and carbohydrate timing?",
        options=[
            "Consume only fat immediately after training",
            "Avoid all food and fluid for 24 hours after training",
            "Protein and carbohydrate soon after exercise can be useful, but there is no strict universal 0–2-hour anabolic window independent of total daily intake and prior meals",
            "Alcohol is recommended to accelerate recovery",
        ], correct=2,
        explanation="Post-exercise protein and carbohydrate can support recovery, especially when rapid glycogen restoration is needed. Total daily intake, meal distribution, and pre-exercise nutrition matter more than a rigid universal anabolic window.")
    set_fields(qs["t9-a1-011"],
        explanation="Iron supports haemoglobin, myoglobin, and oxidative enzymes. Ferritin below approximately 30–35 µg/L is often used as a screening range for depleted stores, but thresholds vary by assay, inflammation, sex, and clinical context.")
    set_fields(qs["t9-a1-014"],
        explanation="Endomorphy in the Heath–Carter system represents relative adiposity and body roundness. It should not be interpreted as a direct measurement of digestive-organ mass.")
    set_fields(qs["t9-a1-016"],
        options=[
            "A dental examination of erupted permanent teeth",
            "A blood test measuring growth hormone during sleep",
            "A psychological maturity questionnaire",
            "A non-invasive equation using age, stature, sitting height, subischial leg length, body mass, and sex-specific terms to estimate years from peak height velocity",
        ], correct=3,
        explanation="Mirwald maturity-offset equations use age, stature, sitting height, subischial leg length, body mass, and sex-specific coefficients to estimate years from peak height velocity.")
    set_fields(qs["t9-a1-022"],
        explanation="Training monotony is mean daily load divided by the standard deviation of daily load, and strain is weekly load multiplied by monotony. These are monitoring heuristics; they do not strongly or reliably diagnose illness or overtraining by themselves.")
    set_fields(qs["t9-a1-023"],
        explanation="Contrast-water therapy alternates thermal exposure and may influence peripheral circulation and subjective soreness. Proposed vascular-pumping and metabolite-clearance mechanisms remain less certain than the modest evidence for perceived recovery.")
    set_fields(qs["t9-a1-024"],
        options=[
            "Using MEMS sensors to measure inertial acceleration in three orthogonal axes; sampling rate depends on the device and protocol",
            "Using satellite photography to track footprints",
            "Measuring radial-artery blood flow with continuous laser Doppler imaging",
            "Measuring air pressure inside the lungs",
        ], correct=0,
        explanation="Tri-axial accelerometers use MEMS sensors to measure acceleration along three orthogonal axes. Sampling frequency is device- and protocol-dependent, not universally 100 Hz.")
    set_fields(qs["t9-a1-025"],
        explanation="The ROC curve plots sensitivity against 1−specificity across thresholds. AUC summarizes discrimination, with 1.0 representing perfect discrimination and 0.5 representing chance; intermediate interpretation bands are heuristics rather than universal rules.")
    set_fields(qs["t10-a1-011"],
        explanation="Collagen or gelatin with vitamin C may increase circulating collagen-related amino acids and collagen-synthesis markers when combined with loading. This does not prove tendon or ligament repair or guarantee increased stiffness.")
    set_fields(qs["t10-a1-012"],
        explanation="Sweat sodium varies substantially between athletes and environments. Individualized replacement may be useful during prolonged heavy sweating, but sodium loss alone does not establish cramping or hyponatraemia; excessive hypotonic-fluid intake is a central risk for exercise-associated hyponatraemia.")
    set_fields(qs["t11-a1-009"],
        options=[
            "A commonly cited leucine dose of approximately 2.5–3.0 g in a high-quality protein serving",
            "Approximately 0.5–0.8 g in every meal for all athletes",
            "Approximately 6.5–7.0 g required in every meal",
            "Approximately 9.5–10.0 g required in every meal",
        ], correct=0,
        explanation="Approximately 2.5–3.0 g of leucine is a commonly cited dose for stimulating MPS in many adults, but it is not a universal threshold independent of total protein, age, and meal composition.")
    set_fields(qs["t11-a1-012"],
        explanation="Below 30 kcal/kg FFM/day is a historical operational cutoff associated with increased risk of low-energy-availability effects. It is not a definitive standalone RED-S diagnosis.")
    set_fields(qs["t11-a1-028"],
        explanation="Contralateral temperature differences can be useful in a standardized thermography protocol, but a 0.5–0.7°C value is not universal; interpretation depends on acclimatization, environment, device, body region, and measurement protocol.")
    set_fields(qs["t11-a1-032"],
        text="After an Adverse Analytical Finding in Sample A, what right must be communicated to the athlete?",
        explanation="The athlete must be informed of the right to request opening and analysis of Sample B. Sample B analysis is not automatically mandatory in every case.")
    set_fields(qs["t12-a1-002"],
        explanation="Classical post-activation potentiation can involve myosin regulatory-light-chain phosphorylation, whereas PAPE is a broader voluntary performance-enhancement phenomenon with overlapping but distinct and incompletely settled mechanisms.")
    set_fields(qs["t12-a1-012"],
        options=[
            "A carbohydrate concentration of 1% to 2%",
            "A carbohydrate concentration of 18% to 20%",
            "A carbohydrate concentration of 30% to 35%",
            "A commonly used sports-drink range of about 6% to 8%, with osmolality depending on the complete formulation",
        ], correct=3,
        explanation="A 6–8% carbohydrate concentration is common in sports drinks, but whether a drink is isotonic depends on its full carbohydrate, electrolyte, and osmolality formulation.")
    set_fields(qs["t12-a1-022"],
        explanation="A fall in the testosterone-to-cortisol ratio has been used historically as a research or monitoring marker of altered anabolic–catabolic balance, but a greater-than-30% fall is not a validated standalone diagnosis of overtraining syndrome.")
    set_fields(qs["t12-a1-028"],
        text="On a countermovement-jump force–time curve, which phase is defined from maximum downward centre-of-mass velocity until downward velocity reaches zero?",
        explanation="Eccentric braking begins at maximum downward centre-of-mass velocity and ends when downward velocity reaches zero. The minimum ground-reaction-force point does not necessarily coincide exactly with maximum downward velocity.")


def fix_a2(qs: dict[str, dict]) -> None:
    set_fields(qs["t2-a2-001"],
        options=[
            "The Government of India makes a matching contribution of 25% of CSR funds received during the year",
            "The Government of India matches every non-government contribution on a 1:1 basis",
            "The Fund is financed only by international loans",
            "The Government contributes 75% of every private donation",
        ], correct=0,
        explanation="The current Ministry of Youth Affairs and Sports description states that the Government of India contributes 25% of the CSR funds received during the year. The question should not state a universal 1:1 match.")
    set_fields(qs["t2-a2-003"],
        options=[
            "S1: Anabolic Agents",
            "S2: Peptide Hormones and Growth Factors",
            "S3: Beta-2 Agonists",
            "S5: Diuretics and Masking Agents",
        ], correct=3,
        explanation="Hydrochlorothiazide and furosemide are diuretics and masking agents in WADA class S5, prohibited at all times unless an applicable exemption exists.")
    set_fields(qs["t4-a2-001"],
        options=[
            "The Mission Olympic Cell selects athletes for TOPS funding",
            "The anti-doping disciplinary panel hears first-instance cases",
            "The Indian Olympic Association manages Olympic delegations",
            "NADA coordinates, implements, and monitors India’s national anti-doping programme",
        ], correct=3,
        explanation="NADA India is the national organization responsible for promoting, coordinating, and monitoring the anti-doping programme in India under the applicable WADA-aligned rules.")
    set_fields(qs["t4-a2-004"],
        options=[
            "Auckland, New Zealand",
            "Glasgow, Scotland",
            "Birmingham, England",
            "Gold Coast, Australia",
        ], correct=1,
        explanation="Glasgow, Scotland was confirmed as the host city of the 2026 Commonwealth Games, with a reduced ten-sport programme.")
    set_fields(qs["t4-a2-007"],
        text="Which statement best describes Olympic delegation accreditation for medical and support personnel?",
        options=[
            "The permitted number depends on the Olympic accreditation and delegation rules for that edition; there is no universal 30–33% rule for every Team India delegation",
            "Support staff may never be accredited",
            "Support staff are always capped at exactly 10% of athletes",
            "Support staff are always capped at exactly 75% of athletes",
        ], correct=0,
        explanation="Support-personnel accreditation is governed by the applicable Olympic and edition-specific delegation rules. A fixed 30–33% quota should not be presented as a universal rule without a precise source.")
    set_fields(qs["t5-a2-001"],
        text="Under the Sports Authority of India governance structure, who serves as the Ex-Officio President of the SAI General Body?",
        options=[
            "The Union Minister for Youth Affairs and Sports",
            "The Target Olympic Podium Scheme",
            "The Khelo India Youth Games",
            "The National Sports Development Fund",
        ], correct=0,
        explanation="The Union Minister for Youth Affairs and Sports serves as the ex-officio President of the SAI General Body, while the Director General of SAI functions as its chief executive.")
    set_fields(qs["t5-a2-004"],
        options=[
            "Sample A contains at least 60 mL and Sample B at least 30 mL of a suitable urine specimen",
            "Sample A and Sample B each contain exactly 10 mL",
            "The urine remains undivided in an unsealed cup",
            "A blood sample is divided into five equal serum tubes",
        ], correct=0,
        explanation="For a suitable urine collection, the specimen is divided into A and B bottles; the commonly specified minimum volumes are 60 mL for Sample A and 30 mL for Sample B, subject to the applicable testing standard.")
    set_fields(qs["t5-a2-006"],
        text="In modern Olympic governance, what is the primary role of the International Testing Agency (ITA)?",
        options=[
            "A national disciplinary panel for first-instance hearings",
            "An independent organization that manages anti-doping testing and results-management programmes for participating sports bodies and major events",
            "The Court of Arbitration for Sport",
            "A national constitutional court",
        ], correct=1,
        explanation="The International Testing Agency is an independent anti-doping organization that manages testing and related programmes for Olympic and other international sport bodies and events.")
    set_fields(qs["t5-a2-007"],
        text="Under the National Sports Development Code of India (2011), what minimum representation of eminent sportspersons was specified in National Sports Federations?",
        options=[
            "At least 25% representation for eminent sportspersons",
            "Exactly 0% representation",
            "Exactly 100% representation",
            "At least 75% representation for ministry officers",
        ], correct=0,
        explanation="The 2011 Sports Code specified at least 25% representation for eminent sportspersons. This is a historical-code question and should be labelled accordingly because later governance legislation changed the framework.")

    # Clarify questions that intentionally use older legal or governance frameworks.
    for question_id in ["t2-a2-007", "t7-a2-007", "t11-a2-008"]:
        if not qs[question_id]["text"].startswith("Under the National Sports Development Code of India (2011), "):
            qs[question_id]["text"] = "Under the National Sports Development Code of India (2011), " + qs[question_id]["text"].split(", ", 1)[-1]
    for question_id in ["t3-a2-008", "t4-a2-005", "t6-a2-002", "t12-a2-008"]:
        if not qs[question_id]["text"].startswith("Under the National Sports Development Code of India (2011), "):
            qs[question_id]["text"] = "Under the National Sports Development Code of India (2011), " + qs[question_id]["text"].split(", ", 1)[-1]
    for question_id in ["t2-a2-008", "t6-a2-008", "t7-a2-002", "t8-a2-008", "t10-a2-008", "t12-a2-004"]:
        question = qs[question_id]
        question["text"] = question["text"].replace("Under the National Anti-Doping Act (2022)", "According to the enacted National Anti-Doping Act (2022) text")
        question["text"] = question["text"].replace("Under the National Anti-Doping Act, 2022", "According to the enacted National Anti-Doping Act (2022) text")
        note = "This item is anchored to the enacted Act text; as of the notification date, the NADA Rules 2021 remained the operative rules."
        question["explanation"] = question["explanation"].replace(" " + note + " " + note, " " + note)
        if note not in question["explanation"]:
            question["explanation"] += " " + note
    set_fields(qs["t1-a2-005"],
        text="When an athlete has a diagnosed medical condition requiring a prohibited medication, which authorization normally permits its use in sport?",
        explanation="A Therapeutic Use Exemption authorizes use of a prohibited substance or method for a documented medical condition when the applicable criteria are met. Retroactive TUEs exist for defined emergency or exceptional circumstances.")
    set_fields(qs["t1-a2-008"],
        text="Within the applicable SAI age-verification protocol, which method is used for skeletal-age assessment?",
        explanation="The intended SAI protocol is the Tanner–Whitehouse 3 method using a left hand and wrist radiograph. The question should identify the applicable SAI age-verification context rather than claim that TW3 is mandatory for every age-group tournament.")
    set_fields(qs["t3-a2-001"],
        explanation="The MAKA Trophy wording is transitional. Current Ministry material describes the award in relation to the overall winner of the Khelo India University Games, while older material describes the best university in inter-university sport. The edition and policy year should be stated.")
    set_fields(qs["t3-a2-006"],
        text="What is the primary function of NSNIS Patiala within SAI?",
        explanation="NSNIS Patiala is SAI’s national coaching and academic institute, supporting coach education, sports-science work, and high-performance training. It should not be labelled simply as an NCOE.")
    set_fields(qs["t3-a2-007"],
        text="Under the POSH Act, what is required of an Internal Committee at a covered SAI workplace?",
        explanation="A covered workplace must constitute an Internal Committee chaired by a senior woman officer, with the statutory membership and external-member requirements. The rule should not be expanded to every sports hostel without a specific applicable SAI order.")
    set_fields(qs["t7-a2-004"],
        options=[
            "Total blood cholesterol and triglycerides",
            "Haemoglobin, haematocrit, reticulocyte percentage, and calculated OFF-score",
            "Serum creatinine and blood urea nitrogen",
            "Blood glucose and urine pH",
        ], correct=1,
        explanation="The haematological Athlete Biological Passport module tracks haemoglobin, haematocrit, reticulocytes, and calculated indices such as the OFF-score.")
    set_fields(qs["t7-a2-008"],
        explanation="The Internal Committee includes a senior woman Presiding Officer, at least half women members, and an external member meeting the statutory qualifications. The external member need not be described narrowly as coming from an NGO.")
    set_fields(qs["t8-a2-002"],
        text="Under the National Sports Development Code of India (2011), what transparency requirement applied to National Sports Federations?",
        explanation="Under the 2011 Code, NSFs were expected to maintain audited accounts and publish financial information proactively. This should be labelled as the historical 2011 framework because later governance legislation changed the regulatory context.")
    set_fields(qs["t8-a2-008"],
        explanation="The ADDP is a quasi-judicial disciplinary body with legal, medical, and sport expertise. Its decisions are subject to the applicable appeal process and should not be described as immune from appeal.")
    for question in qs.values():
        if question.get("section") == "A2":
            question["asOf"] = "2026-01-30"


def fix_b(qs: dict[str, dict]) -> None:
    # Defective answer sets and keys.
    set_fields(qs["t2-b-011"],
        options=[
            "Autogenic inhibition during target-muscle isometric contraction followed by reciprocal inhibition during agonist contraction",
            "Reciprocal facilitation caused only by muscle-spindle excitation",
            "Articular inhibition caused only by joint-capsule receptors",
            "Gamma-motor-neuron coactivation caused only by descending pathways",
        ], correct=0,
        explanation="Hold-relax with agonist contraction combines autogenic inhibition from the tight muscle’s isometric contraction with reciprocal inhibition when the opposing agonist contracts.")
    qs["t2-b-012"]["correct"] = 3
    set_fields(qs["t2-b-018"],
        options=[
            "First-class lever; the fulcrum lies between the weight of the head and the neck-extensor effort",
            "Second-class lever; the load lies between fulcrum and effort",
            "Third-class lever; the effort lies between fulcrum and load",
            "A pulley system with no lever arms",
        ], correct=0,
        explanation="At the atlanto-occipital joint, the fulcrum lies between the head’s anterior load and the posterior neck-extensor effort, making it a first-class lever.")
    set_fields(qs["t2-b-020"],
        options=[
            "Quadriceps femoris",
            "Medial gastrocnemius",
            "Anterior cruciate ligament (ACL)",
            "Popliteus",
        ], correct=2,
        explanation="Dynamic knee valgus during cutting increases multiplanar loading and can increase ACL strain. Muscle co-contraction may modify loading but is not the intra-articular structure asked for.")
    set_fields(qs["t2-b-036"],
        options=[
            "Delayed union heals more slowly than expected but continues biological progression; non-union shows cessation of healing with persistent mobility and often sclerotic ends",
            "Delayed union is diagnosed when callus has not appeared after two weeks",
            "Delayed union means complete bridging within three months",
            "Non-union means every fracture with pain after six months, regardless of healing signs",
        ], correct=0,
        explanation="Delayed union is slower-than-expected healing that may continue, whereas non-union involves failure or cessation of healing, often with persistent movement and a poorly viable fracture gap.")
    set_fields(qs["t2-b-037"], correct=0,
        explanation="ULTT1 commonly biases the median nerve using shoulder depression, abduction, external rotation, forearm supination, wrist/finger extension, elbow extension, and structural differentiation with the cervical spine.")
    set_fields(qs["t2-b-038"], correct=1,
        explanation="McKenzie dysfunction syndrome produces consistent end-range pain from shortened or adaptively shortened tissue. Derangement is characterized by variable symptoms and a directional preference or centralization response.")
    set_fields(qs["t2-b-039"],
        options=[
            "A non-tender subcutaneous nodule",
            "A region of joint effusion",
            "An active trigger point produces familiar spontaneous pain; a latent trigger point is painful only when palpated or loaded",
            "A periosteal bone spur at a tendon insertion",
        ], correct=2,
        explanation="An active trigger point produces familiar spontaneous local or referred pain. A latent trigger point is clinically silent until palpated or loaded, although both may lie in a taut band.")
    qs["t3-b-006"]["correct"] = 0
    qs["t3-b-008"]["correct"] = 2
    qs["t3-b-015"]["correct"] = 0
    set_fields(qs["t3-b-026"],
        options=[
            "A 2500-Hz sinusoidal carrier burst-modulated at approximately 50 bursts per second, commonly using about 10 ms on and 10 ms off",
            "A 1–2-Hz current with a 10-µs pulse and continuous duty cycle",
            "A 200-Hz current with a 50-µs pulse and no burst modulation",
            "A 10,000-Hz current delivered in isolated 1-ms pulses at a 5% duty cycle",
        ], correct=0,
        explanation="Russian current traditionally uses a 2500-Hz carrier modulated into approximately 50 bursts per second, with a commonly described 10-ms on/10-ms off burst cycle.")
    set_fields(qs["t3-b-031"],
        options=[
            "No increase in tone",
            "A catch followed by minimal resistance through less than half of the remaining range",
            "Considerable increase in tone that makes passive movement difficult",
            "Marked increase in tone through most of the range but the part is easily moved",
        ], correct=1,
        explanation="Modified Ashworth 1+ is a catch followed by minimal resistance through less than half of the remaining range. A catch-and-release at the end of range is Grade 1.")
    set_fields(qs["t3-b-033"],
        options=[
            "Neer, Hawkins, and Speed tests",
            "Lachman, pivot-shift, and anterior-drawer tests",
            "Ober, Thomas, and Trendelenburg tests",
            "Spurling, ULTT1, cervical distraction, and cervical rotation below 60°",
        ], correct=3,
        explanation="The Wainner cluster contains four findings: Spurling, ULTT1, cervical distraction, and cervical rotation below 60° toward the symptomatic side.")
    set_fields(qs["t3-b-038"],
        options=[
            "Fulcrum at the lateral acromion; stationary arm parallel to the sternum/trunk; moving arm along the lateral humerus toward the lateral epicondyle",
            "Fulcrum at the medial epicondyle; stationary arm along the femur; moving arm along the tibia",
            "Fulcrum at the patella; stationary arm along the pelvis; moving arm along the tibia",
            "Fulcrum at the fibular head; stationary arm along the femur; moving arm toward the calcaneus",
        ], correct=0,
        explanation="For shoulder abduction, align the fulcrum with the lateral acromion, the stationary arm with the trunk/sternum, and the moving arm with the lateral humerus.")
    set_fields(qs["t3-b-040"],
        text="Which test evaluates scapular contribution by manually stabilizing or retracting the medial scapular border during an active shoulder test?",
        options=[
            "Scapular Retraction Test, which stabilizes/retracts the scapula during testing",
            "Scapular Depression Test",
            "Scapular Tilt Test",
            "Scapular Assistance Test, which assists upward rotation and posterior tilt",
        ], correct=0,
        explanation="Stabilizing or retracting the medial scapular border describes the Scapular Retraction Test. The Scapular Assistance Test instead assists upward rotation and posterior tilt during elevation.")
    set_fields(qs["t4-b-001"],
        options=[
            "Isolated posterolateral-corner injury",
            "ACL injury diagnosed by Lachman testing",
            "Meniscal injury diagnosed by McMurray testing",
            "PCL injury diagnosed by posterior drawer testing",
        ], correct=0,
        explanation="Increased external rotation at 30° that normalizes at 90° suggests an isolated posterolateral-corner injury; increased rotation at both angles suggests combined PLC and PCL injury.")
    set_fields(qs["t4-b-002"],
        options=[
            "Slump the spine, flex the cervical spine, extend the knee, dorsiflex the ankle, then release cervical flexion for structural differentiation",
            "Perform Apley compression in prone",
            "Perform Thessaly at 20° knee flexion",
            "Perform McMurray in supine",
        ], correct=0,
        explanation="The slump sequence progressively loads the neural tissues and then uses cervical release as structural differentiation.")
    set_fields(qs["t4-b-003"],
        options=[
            "Approximately 160° elevation in the scapular plane with axial humeral compression and internal/external rotation",
            "90° elevation with forced internal rotation only",
            "90° abduction with an empty-can position only",
            "90° forward flexion with forearm supination",
        ], correct=0,
        explanation="The Crank test uses high scapular-plane elevation, axial compression, and humeral rotation to stress the glenoid labrum.")
    qs["t4-b-004"]["correct"] = 1
    set_fields(qs["t4-b-005"],
        options=[
            "Teres minor",
            "A glenohumeral capsular pattern",
            "A hip capsular pattern",
            "A wrist capsular pattern",
        ], correct=0,
        explanation="Hornblower’s sign assesses the ability to maintain external rotation at 90° abduction and is associated particularly with teres-minor dysfunction or a large posterosuperior cuff tear.")
    qs["t4-b-020"]["correct"] = 0
    qs["t5-b-006"]["correct"] = 1
    qs["t6-b-020"]["correct"] = 1
    set_fields(qs["t6-b-035"],
        options=[
            "An anterior glide to improve external rotation and an inferior glide to improve abduction/elevation, selected according to the restricted movement",
            "Continuous axial compression into the glenoid",
            "A superior glide into the coracoacromial arch",
            "A high-velocity thrust into forced adduction and internal rotation",
        ], correct=0,
        explanation="Accessory-glide direction should follow the restricted movement and joint mechanics. An anterior glide is commonly used to improve external rotation, while an inferior glide can assist elevation; mobilization is individualized.")
    qs["t12-b-002"]["correct"] = 0

    # Correct explanations and clinical wording.
    set_option(qs["t1-b-011"], 3, "It reduces the relative ankle contribution and increases loading of the knee extensors and patellar tendon")
    set_fields(qs["t2-b-026"], explanation="During normal walking, vertical ground-reaction force has two broad peaks of about 1.1–1.2 body weight during weight acceptance and terminal stance, separated by a mid-stance trough.")
    set_fields(qs["t3-b-018"], explanation="The patella acts as a spacer that holds the quadriceps tendon anterior to the knee axis, increasing the quadriceps moment arm and improving extensor torque. The exact percentage varies with flexion angle and individual anatomy.")
    set_fields(qs["t3-b-020"], text="Which structures provide the principal passive and dynamic restraint against lateral patellar displacement during the first 0–30° of knee flexion?", explanation="The MPFL is the principal passive restraint in early flexion, while the VMO contributes dynamically. The roles should not be collapsed into calling the MPFL a dynamic muscle restraint.")
    set_fields(qs["t3-b-030"], text="In rehabilitation for sensory ataxia or impaired proprioceptive coordination, Frenkel exercises emphasize which principle?", explanation="Frenkel exercises use slow, precise, repeated movements with visual guidance and conscious control. They are classically used for sensory ataxia and proprioceptive loss; they are not a universal treatment for every cerebellar disorder.")
    set_fields(qs["t3-b-036"], explanation="A local twitch response may occur during dry needling and can help confirm that the needle has engaged a taut band, but it does not prove mechanical disruption or biochemical normalization.")
    set_fields(qs["t4-b-011"], explanation="Forward trunk lean changes the ground-reaction-force moment arms: it tends to reduce the knee-extensor moment while increasing the hip-extensor moment, increasing demand on the gluteal and hamstring musculature.")
    set_fields(qs["t4-b-014"], explanation="Open-chain knee extension from 90° toward 45° generally produces less anterior tibial shear and less ACL strain than terminal extension. The strain is reduced, not literally zero.")
    set_fields(qs["t4-b-015"], text="What is the established biomechanical role of the lower extremities and trunk during an overhead throw?", options=[
        "They contribute little and the arm acts independently",
        "They contribute only after ball release",
        "They contribute substantially through a sequential kinetic chain that transfers force toward the arm and hand",
        "They contribute only by flexing the wrist at release",
    ], correct=2, explanation="The lower extremities and trunk contribute substantially through a proximal-to-distal kinetic chain. A universal percentage is not established across all throwing sports and athletes.")
    set_fields(qs["t4-b-026"], text="Which statement best reflects the use of polarity in HVPC for acute oedema and wound care?", options=[
        "Positive polarity is mandatory in every acute oedema protocol",
        "Negative polarity is commonly used early in some oedema and wound protocols, but polarity is phase- and protocol-dependent",
        "Alternating current has no polarity and is required for every acute wound",
        "Direct current is used to cauterize the skin",
    ], correct=1, explanation="HVPC polarity is protocol- and healing-phase-dependent. Cathodal/negative treatment is commonly used in some early oedema and wound protocols, while later wound-healing goals may use different polarity choices.")
    set_fields(qs["t4-b-039"], explanation="A positive Laslett provocation cluster supports the SI joint as a possible pain source with useful diagnostic accuracy; it does not confirm a structural SI-joint lesion or establish a single pathology without clinical correlation.")
    set_fields(qs["t5-b-005"], text="The Stork Standing Test may reproduce pain in athletes with which suspected spine condition?", explanation="The one-legged hyperextension test may reproduce pain in athletes with suspected pars stress injury, but its diagnostic accuracy is limited and it should not independently diagnose spondylolysis.")
    set_fields(qs["t5-b-031"], options=[
        "Complete: no sensory or motor function is preserved in sacral S4–S5",
        "Incomplete: sensory but not motor function is preserved below the neurological level",
        "Incomplete: motor function is preserved and at least half of key muscles below the level are grade 3/5 or higher",
        "Incomplete: motor function is preserved, but more than half of key muscles below the neurological level are grade below 3/5",
    ], correct=3, explanation="AIS C is an incomplete motor injury in which more than half of the key muscles below the neurological level have a grade below 3/5. AIS D has at least half at grade 3/5 or higher.")
    set_option(qs["t5-b-039"], 2, "Posterior-superior glide of the distal fibula or posterior glide of the talus during an active weight-bearing lunge")
    set_fields(qs["t6-b-006"], text="The Crank Test and O’Brien’s Active Compression Test assess which broad shoulder pathology, with O’Brien’s test sometimes used when SLAP pathology is suspected?", options=[
        "The transverse humeral ligament",
        "Glenoid labral pathology, which may include a SLAP lesion",
        "The coracoclavicular ligaments",
        "The medial collateral ligament of the elbow",
    ], correct=1, explanation="These tests can contribute to assessment of glenoid labral pathology. Neither test alone establishes a specific SLAP tear.")
    set_fields(qs["t7-b-012"], options=[
        "Reciprocal inhibition caused by skin stimulation",
        "The stretch reflex",
        "Pharmacological blockade of acetylcholine",
        "Autogenic inhibition mediated by GTO Ib discharge during isometric contraction of the target muscle",
    ], correct=3, explanation="Contract-relax uses an isometric contraction of the target tight muscle, followed by relaxation and stretching. GTO-mediated autogenic inhibition is one proposed neurophysiological contribution.")
    set_option(qs["t7-b-018"], 2, "Common or deep peroneal-nerve dysfunction causing weakness of the ankle dorsiflexors")
    set_fields(qs["t7-b-040"], text="During cervical vascular-risk assessment, which finding should stop treatment and prompt appropriate referral?", explanation="Dizziness, diplopia, dysarthria, dysphagia, drop attacks, nausea, numbness, or nystagmus during or after a neck movement are concerning symptoms. Modern frameworks do not treat sustained extension–rotation testing as a valid stand-alone vascular screen; history, examination, risk assessment, and referral are required.")
    set_fields(qs["t8-b-022"], explanation="Active insufficiency occurs when a multi-joint muscle is shortened across all of its joints and cannot generate maximal active tension. For example, the hamstrings may generate less knee-flexion force when the hip is extended and the knee is already flexed.")
    set_fields(qs["t8-b-033"], text="During upper-limb neurodynamic testing for a brachial-plexus or peripheral-nerve presentation, which movement can serve as structural differentiation when symptoms are reproduced?", explanation="Contralateral cervical lateral flexion can increase neural-tissue loading and ipsilateral flexion can reduce it, but the finding must be interpreted with the complete neurodynamic examination; it does not by itself confirm a nerve-root diagnosis.")
    set_fields(qs["t9-b-013"], text="In the treatment of calcific shoulder tendinopathy, what is a principal proposed effect of focused extracorporeal shockwave therapy?", options=[
        "Freezing deposits into ice crystals",
        "Direct electrical destruction of deltoid motor nerves",
        "Surgical removal of the acromion",
        "Delivering acoustic energy that may stimulate mechanotransduction, pain modulation, and resorption of calcific deposits",
    ], correct=3, explanation="Focused shockwave therapy delivers acoustic energy to the target tissue and may promote mechanotransduction, pain modulation, and resorption of calcific deposits. Radial and focused devices are not interchangeable, and the exact mechanism remains under study.")
    set_fields(qs["t9-b-014"], explanation="Extension is a common directional preference in many posterior derangement patterns and may centralize symptoms, but the proportion of patients and the proposed nuclear-migration mechanism should not be treated as universal.")
    set_option(qs["t9-b-024"], 3, "The effective area of the ultrasound beam, usually slightly smaller than the soundhead’s geometric face area")
    set_fields(qs["t9-b-025"], text="Which statement best reflects polarity selection for HVPC during early wound care?", options=[
        "Cathode (negative polarity) is commonly used early in some protocols, but polarity should follow wound phase and clinical goals",
        "High-frequency radio waves are delivered without electrodes",
        "A continuous 100,000-Hz sine wave is required",
        "Anode (positive polarity) is mandatory for every inflammatory wound",
    ], correct=0, explanation="HVPC polarity is not a universal rule. Cathodal treatment is commonly used early in some wound-care protocols, with polarity and parameters selected according to phase, tissue status, and clinical goals.")
    set_fields(qs["t9-b-030"], explanation="Clonus is a rhythmic series of involuntary contractions triggered by rapid stretch and is associated with an upper-motor-neuron syndrome. It is not independently pathognomonic and must be interpreted with the neurological examination.")
    set_fields(qs["t10-b-011"], explanation="Maitland Grade V is a high-velocity, small-amplitude thrust delivered at the physiological end of the available range, within appropriate clinical indications and safety screening. It is not delivered through a pathological barrier.")
    set_fields(qs["t10-b-039"], options=[
        "Rapid sit-ups to activate rectus abdominis",
        "Relaxing all abdominal muscles while holding the breath",
        "Gently drawing the lower abdominal wall inward without moving the pelvis or rib cage, biasing rather than isolating transversus abdominis and deep abdominal recruitment",
        "Forcefully pushing the abdominal wall outward during a Valsalva",
    ], correct=2, explanation="The abdominal drawing-in manoeuvre gently draws the lower abdominal wall inward. It can bias deep abdominal recruitment, but it does not selectively isolate transversus abdominis or guarantee no superficial-muscle activity.")
    set_fields(qs["t11-b-011"], explanation="Heavy isometric loading may provide short-term analgesia and temporarily reduce motor inhibition in some people with patellar tendinopathy. The effect is not guaranteed or necessarily persistent, and progressive loading remains central to rehabilitation.")
    set_fields(qs["t11-b-026"], text="Which option describes a commonly used non-thermal ultrasound parameter set, while acknowledging that clinical evidence for acute ankle sprains is limited?", explanation="Low-intensity pulsed ultrasound is sometimes used as a non-thermal modality, but evidence has not established this parameter set as clinically meaningful treatment for acute ankle sprains. It should not replace progressive rehabilitation.")
    set_fields(qs["t11-b-034"], explanation="Anterior Y-Balance asymmetry above 4 cm has been associated with increased injury risk in some cohorts, but it is not a universal standalone predictor and should be interpreted with other screening information.")
    set_option(qs["t11-b-037"], 0, "Bone tenderness at the posterior edge or tip of either malleolus, or inability to bear weight for four steps both immediately after injury and during clinical assessment")
    set_option(qs["t12-b-008"], 3, "Arm at 120° abduction and 90° external rotation, elbow flexed 90°, forearm supinated, with resisted elbow flexion")
    set_fields(qs["t12-b-016"], text="Why can eccentric single-leg squats on a 25-degree decline board be used in patellar tendinopathy rehabilitation?", options=[
        "The decline eliminates quadriceps activation",
        "The decline prevents patellofemoral contact",
        "The decline reduces knee loading by 80%",
        "The decline relatively reduces ankle dorsiflexion demand and increases knee-extensor/patellar-tendon demand, without completely isolating the tendon",
    ], correct=3, explanation="A decline board can reduce the ankle contribution and relatively increase knee-extensor and patellar-tendon demand. It is a loading option, not universally superior or completely isolating.")
    set_fields(qs["t12-b-022"], options=[
        "The anatomical centre of body mass",
        "The displacement/path of the point of application of the resultant ground-reaction force under the feet",
        "Bone mineral density of the calcaneus",
        "Maximum voluntary quadriceps force",
    ], correct=1, explanation="COP excursion is the displacement of the point of application of the resultant ground-reaction force. Its movement reflects the neuromuscular torque adjustments used to control the centre of mass.")
    set_fields(qs["t12-b-023"], text="What concentric external-rotator to internal-rotator strength ratio is commonly used as a reference range in overhead athletes?", explanation="An ER:IR ratio around 66–75% is a commonly used benchmark, but it varies with angular velocity, testing position, sport, and population; no single ratio defines normality or injury risk.")
    set_fields(qs["t12-b-025"], options=[
        "Preferential activation of central opioid mechanisms, with low-frequency TENS classically associated with μ-opioid effects and experimental evidence also involving δ-opioid mechanisms",
        "Blockade of peripheral nicotinic receptors",
        "Destruction of substance P stores",
        "Permanent down-regulation of dorsal-column pathways",
    ], correct=0, explanation="Low-frequency, motor-intensity TENS is classically associated with endogenous opioid analgesic mechanisms, with μ-opioid effects emphasized in many descriptions and frequency-dependent receptor findings in experimental work.")
    set_fields(qs["t12-b-039"], options=[
        "Prevents all ligament laxity and accelerates cartilage healing",
        "Replaces progressive loading and physical therapy",
        "May modestly attenuate disuse muscle loss in some immobilization studies, but does not replace rehabilitation",
        "Eliminates all inflammatory cytokine release",
    ], correct=2, explanation="Creatine has shown mixed evidence for modestly preserving muscle size or function during immobilization and retraining. It does not replace progressive rehabilitation, and the cited 20% figure should not be presented as a universal attenuation of atrophy.")


def fix_c(qs: dict[str, dict]) -> None:
    # Restore the actual case passage for the 40 records that contained only a placeholder.
    for question in qs.values():
        if question.get("section") == "C" and question.get("passage") == "Clinical case presentation and analytical evaluation.":
            source = next(
                candidate for candidate in qs.values()
                if candidate.get("section") == "C"
                and candidate.get("passageId") == question.get("passageId")
                and candidate.get("passage") != "Clinical case presentation and analytical evaluation."
            )
            question["passage"] = source["passage"]

    # Defective keys and options.
    qs["t2-c-001"]["correct"] = 1
    set_fields(qs["t2-c-001"],
        options=[
            "Quadriceps limb-symmetry index of 100% on isokinetic testing",
            "A commonly used Hecc:Qcon benchmark around 0.80–1.0, interpreted with the complete return-to-sprint battery",
            "A hamstring-to-quadriceps concentric ratio of exactly 0.40",
            "Complete absence of pain during a passive straight-leg raise to 45°",
        ], correct=1,
        explanation="The Hecc:Qcon ratio describes eccentric hamstring braking capacity relative to quadriceps force. Around 0.80–1.0 is a commonly used benchmark in some return-to-sprint protocols, but it is not a universal standalone clearance threshold.")
    qs["t6-c-005"]["correct"] = 0
    qs["t11-c-003"]["correct"] = 1
    set_option(qs["t11-c-003"], 1, "GIRD with preserved total rotational arc; clinical significance depends on symptoms, total-arc comparison, and examination findings")
    set_fields(qs["t11-c-003"], explanation="The thrower has an internal-rotation deficit with a nearly preserved total rotational arc, consistent with an adaptive throwing pattern. Positive pain or instability tests still require clinical assessment; the finding should not be labelled simply benign or pathological.")
    qs["t11-c-011"]["correct"] = 1
    qs["t11-c-013"]["correct"] = 1
    set_fields(qs["t11-c-015"],
        options=[
            "Flexor carpi radialis and pronator teres origin",
            "Extensor carpi radialis brevis/common extensor origin",
            "Triceps brachii insertion on the olecranon",
            "Biceps brachii insertion on the radial tuberosity",
        ], correct=1,
        explanation="Lateral epicondylalgia most commonly involves the common extensor origin, particularly the extensor carpi radialis brevis, rather than the ECRL alone or a posterior-arm tendon.")
    qs["t11-c-016"]["correct"] = 1
    qs["t11-c-017"]["correct"] = 1

    set_fields(qs["t7-c-001"],
        passage="A 25-year-old international male track sprinter feels a sudden posterior-thigh pain during a stretch-type movement involving marked hip flexion and knee extension. Examination demonstrates tenderness near the ischial origin, pain on resisted knee flexion, and pain on a standing hamstring stretch test.")
    for question in qs.values():
        if question.get("section") == "C" and question.get("passageId") == "cs-61":
            question["passage"] = qs["t7-c-001"]["passage"]

    set_fields(qs["t11-c-005"],
        text="Which diagnosis is most consistent with this presentation?",
        options=[
            "Proximal patellar tendinopathy at the inferior-pole tendon origin",
            "Medial meniscal tear with a locked knee",
            "Hoffa’s fat-pad disorder with a positive anterior-drawer test",
            "Symptomatic bipartite patella with lateral retinacular avulsion",
        ], correct=0,
        explanation="Focal inferior-pole tenderness and load-related jumping pain support proximal patellar tendinopathy. A Royal London Hospital test could add clinical information but was not provided in the passage.")
    for passage_id in ["p5-08", "cs-78", "cs-88", "cs-98"]:
        for question in qs.values():
            if question.get("section") == "C" and question.get("passageId") == passage_id:
                addition = " The athlete has also completed supervised sport-specific and contact-progressive training without symptoms."
                if not question["passage"].endswith(addition):
                    question["passage"] += addition

    # Do not describe clinical tests as diagnostic proof.
    for question in qs.values():
        if question.get("section") != "C":
            continue
        question["text"] = question["text"].replace("confirm", "support")
        question["explanation"] = question["explanation"].replace("is diagnostic of", "supports a diagnosis of")
        question["explanation"] = question["explanation"].replace("are diagnostic of", "support a diagnosis of")
        question["explanation"] = question["explanation"].replace("confirms", "supports")
        question["explanation"] = question["explanation"].replace("confirmed", "supported")
        question["explanation"] = question["explanation"].replace("proven", "associated")
        question["explanation"] = question["explanation"].replace("gold standard", "commonly used reference")
        question["text"] = question["text"].replace("gold standard", "commonly used reference")

    set_fields(qs["t3-c-003"],
        options=[
            "Rotator-cuff-related subacromial pain with scapular-control contribution",
            "Anterior glenohumeral instability with a Bankart lesion",
            "Posterior internal glenohumeral impingement",
            "Adhesive capsulitis with global passive restriction",
        ], correct=0,
        explanation="Painful arc and positive Neer/Hawkins-Kennedy findings support rotator-cuff-related subacromial pain, but no single test establishes bursal compression or a definitive structural lesion.")
    set_fields(qs["t12-c-003"],
        options=[
            "Rotator-cuff-related subacromial pain associated with scapular protraction and cuff fatigue",
            "Compression of the suprascapular nerve in the spinoglenoid notch",
            "A complete acromial avulsion fracture",
            "Severe glenohumeral osteoarthritis",
        ], correct=0,
        explanation="The findings are consistent with rotator-cuff-related subacromial pain in a swimmer. Scapular posture, cuff fatigue, and posterior-capsule mobility may contribute; literal subacromial-space narrowing is not established by these tests alone.")
    set_option(qs["t3-c-010"], 2, "Avoid valgus and contact stress initially, and progress resisted hip-adduction loading as symptoms and healing permit")
    set_fields(qs["t3-c-013"], explanation="N-spot tenderness is suspicious for a tarsal-navicular stress injury and warrants imaging and specialist assessment; it is not pathognomonic on palpation alone.")
    for question_id in ["t3-c-014", "t5-c-014", "t7-c-014", "t8-c-014", "t10-c-014"]:
        question = qs[question_id]
        question["explanation"] = "This is a higher-risk bone-stress pattern because of tensile or shear loading and relatively limited healing potential. Initial management commonly includes activity cessation and protected or non-weight-bearing immobilization with urgent specialist review; surgery depends on fracture pattern, displacement, non-union, and athlete-specific factors."
        question["text"] = question["text"].replace("requiring immediate non-weight-bearing immobilization or surgical fixation", "requiring strict protection and specialist assessment")
        question["text"] = question["text"].replace("requiring strict non-weight-bearing (NWB) cast immobilization for 6 weeks or percutaneous screw fixation", "requiring strict protection and specialist assessment")
    set_fields(qs["t3-c-017"], explanation="An anterior reach asymmetry above 4 cm has been associated with increased lower-extremity injury risk in some screening cohorts, but the effect size is not universal and the result should be interpreted with the complete assessment.")
    set_fields(qs["t3-c-019"], explanation="Retreat of distal symptoms toward the spine during repeated movement is called centralization. It supports a directional-preference pattern and may be prognostically useful, but it does not prove disc reduction or guarantee conservative success.")
    set_fields(qs["t12-c-017"], explanation="A crossed SLR can have relatively high specificity for nerve-root or disc involvement, but sensitivity and estimates vary. It supports clinical suspicion and should be interpreted with the neurological examination and imaging when indicated.")
    set_fields(qs["t12-c-018"], explanation="When extension centralizes symptoms, a graded directional-preference programme may be considered, combined with education, activity modification, and trunk/hip rehabilitation. The response does not prove anterior nuclear migration.")
    set_fields(qs["t4-c-001"], explanation="A proximal free-tendon avulsion with retraction warrants urgent orthopaedic consultation. Surgical re-anchoring may be considered in high-demand athletes, but management depends on the number of tendons, retraction, tissue quality, symptoms, and patient goals.")
    set_fields(qs["t4-c-009"], explanation="A knee dislocation or multi-ligament injury requires immediate and serial neurovascular assessment, including pulses and ABI where appropriate. Normal initial pulses do not completely exclude evolving popliteal-artery injury; follow trauma protocols and use vascular imaging when indicated.")
    set_option(qs["t4-c-018"], 0, "AFO for foot clearance, gentle passive dorsiflexion positioning, and electrical stimulation only when individually indicated and clinically appropriate")
    set_fields(qs["t4-c-018"], explanation="An AFO and positioning help preserve gait and prevent equinus while a nerve injury recovers. Electrical stimulation is not automatically indicated for every axonotmesis and should be selected according to the neurological and muscle examination.")
    set_fields(qs["t4-c-019"],
        options=[
            "Compression-side lesions always require surgery; tension-side lesions always need rest only",
            "Both sides should be treated with unrestricted running",
            "Compression-side lesions are often initially managed with protected weight bearing and specialist monitoring; tension-side lesions carry greater displacement risk and may require fixation depending on imaging",
            "Neither side can heal without pelvic pins",
        ], correct=2,
        explanation="Compression-side femoral-neck stress injuries are often more stable and may be managed initially with protected weight bearing and specialist monitoring. Tension-side injuries have greater displacement risk and often need fixation, but management is individualized.")
    for question_id in ["t5-c-007", "t9-c-007"]:
        set_fields(qs[question_id], explanation="The findings support possible coexisting lateral epicondylalgia and radial-tunnel/posterior-interosseous-nerve irritation. Tenderness and one neurodynamic test do not establish radial-tunnel syndrome without the full clinical examination.")
    for question_id in ["t6-c-017", "t8-c-017", "t9-c-017", "t10-c-017"]:
        question = qs[question_id]
        for index, option in enumerate(question["options"]):
            if "peak tensile strain" in option or "extreme peak tensile strain" in option:
                question["options"][index] = option.replace("produces extreme peak tensile strain", "is associated with increased ACL loading").replace("produces high peak tensile strain", "is associated with increased ACL loading")
        question["explanation"] = "Dynamic valgus, hip internal rotation, and shallow knee flexion are established biomechanical risk markers associated with increased ACL loading and non-contact injury risk; video analysis does not directly measure ACL tensile strain."
    for question_id in ["t8-c-003", "t10-c-003"]:
        question = qs[question_id]
        for index, option in enumerate(question["options"]):
            if "Benign physiological adaptation" in option:
                question["options"][index] = "GIRD with a preserved total arc, but positive apprehension/relocation findings indicate that associated instability and symptoms require clinical assessment"
        question["explanation"] = "A preserved total arc can reflect an adaptive throwing pattern, but positive apprehension and relocation tests mean the shoulder should not be labelled simply benign; symptoms, laxity, strength, and control must be assessed."
    for question_id in ["t8-c-005", "t10-c-005"]:
        question = qs[question_id]
        for index, option in enumerate(question["options"]):
            if "Gluteus Medius and Gluteus Maximus" in option:
                question["options"][index] = "Reduced gluteal strength or motor control on the stance limb, to be confirmed by strength and movement testing"
        question["explanation"] = "Pelvic drop, hip adduction, and dynamic valgus are consistent with reduced proximal gluteal control, but video findings alone do not prove muscle weakness; strength and motor-control testing are required."
    for question_id in ["t8-c-009", "t10-c-009"]:
        question = qs[question_id]
        for index, option in enumerate(question["options"]):
            if "combined mechanical laxity" in option:
                question["options"][index] = "Chronic ankle instability with sensorimotor/proprioceptive deficits; mechanical laxity requires separate laxity testing"
        question["explanation"] = "A low CAIT score, recurrent giving way, impaired dynamic balance, and delayed peroneal response support chronic ankle instability with sensorimotor deficits. Mechanical ligament laxity requires a separate examination."
    set_fields(qs["t11-c-007"],
        options=[
            "Grade I ankle sprain",
            "Grade IV ankle dislocation with complete rupture",
            "Findings most consistent with a Grade II ankle sprain with partial ATFL injury and laxity; exact millimetre thresholds are not universal",
            "No ligamentous injury",
        ], correct=2,
        explanation="The swelling, ecchymosis, ATFL tenderness, and increased soft-end-feel translation are consistent with a Grade II sprain. Grading should use the complete examination rather than one universal millimetre cutoff.")
    set_fields(qs["t11-c-019"],
        options=[
            "Pain entirely referred from a cervical nerve root",
            "Irreparable latissimus-dorsi tear",
            "Scapular dyskinesis contributes to the athlete’s shoulder pain and movement impairment",
            "Permanent glenohumeral dislocation",
        ], correct=2,
        explanation="Pain relief with manual assistance suggests that scapular mechanics contribute to symptoms. It does not confirm subacromial narrowing or identify a single structural lesion.")
    set_fields(qs["t12-c-005"], explanation="The findings are consistent with tendon disrepair or degenerative features on the Cook–Purdam conceptual continuum. Ultrasound findings do not validate a discrete pathological stage, and the continuum is a clinical model rather than a universally validated staging system.")
    set_fields(qs["t12-c-013"], explanation="The findings support iliotibial-band-related lateral knee pain. Compression of tissue deep to the ITB has been proposed, but the exact pain mechanism is debated; training load, hip control, and running mechanics are relevant contributors.")

    # Soften fixed prescriptions and outcome guarantees in case explanations/options.
    for question in qs.values():
        if question.get("section") != "C":
            continue
        question["text"] = question["text"].replace("zero long-term structural or athletic disability", "an excellent overall prognosis, although symptoms can recur during growth")
        question["text"] = question["text"].replace("without long-term disability", "with an excellent overall prognosis")
        question["explanation"] = question["explanation"].replace("with zero long-term consequences", "with an excellent overall prognosis")
        question["explanation"] = question["explanation"].replace("without long-term consequences", "with an excellent overall prognosis")
        question["explanation"] = question["explanation"].replace("3 sets of 10", "a progressive, individually tolerated dose")
        question["explanation"] = question["explanation"].replace("3–5 sessions", "a commonly used course of several sessions")
        question["explanation"] = question["explanation"].replace("70-80%", "some studies report substantial success")
        question["explanation"] = question["explanation"].replace("70–80%", "some studies report substantial success")
        question["explanation"] = question["explanation"].replace("5-10%", "a modest, individualized amount")
        question["explanation"] = question["explanation"].replace("5–10%", "a modest, individualized amount")
        question["explanation"] = question["explanation"].replace("7.5–10%", "a modest, individualized amount")
    for question_id in ["t8-c-006", "t10-c-006"]:
        set_option(qs[question_id], 0, qs[question_id]["options"][0].replace("cadence increase by 7.5–10%", "a modest individualized cadence increase"))
    set_option(qs["t11-c-014"], 1, "Increasing running cadence modestly, often in the range of 5–10% when tolerated, to reduce impact loading")
    set_option(qs["t12-c-014"], 1, "Gluteus medius strengthening, a modest individualized cadence increase, and step-width modification as tolerated")



def main() -> None:
    qs, files = load_questions()
    fix_a1(qs)
    fix_a2(qs)
    fix_b(qs)
    fix_c(qs)
    for filename, questions in files.items():
        Path(filename).write_text(json.dumps(questions, indent=2, ensure_ascii=True) + "\n")


if __name__ == "__main__":
    main()
