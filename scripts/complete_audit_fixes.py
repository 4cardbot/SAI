"""Apply the remaining explicit corrections from the mock-bank audit.

This migration deliberately changes questions by stable ID.  It does not
rebalance answer letters by swapping unrelated options: correctness and option
meaning take priority over an artificial answer distribution.
"""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load() -> tuple[dict[str, dict], dict[Path, list[dict]]]:
    by_id: dict[str, dict] = {}
    by_file: dict[Path, list[dict]] = {}
    for path in sorted((ROOT / "mock_tests").glob("mock_test_*.json"), key=lambda p: int(p.stem.split("_")[-1])):
        questions = json.loads(path.read_text())
        by_file[path] = questions
        for question in questions:
            by_id[question["id"]] = question
    return by_id, by_file


def update(qs: dict[str, dict], question_id: str, **fields: object) -> None:
    qs[question_id].update(fields)


def option(qs: dict[str, dict], question_id: str, index: int, value: str) -> None:
    qs[question_id]["options"][index] = value


def fix_test_1(qs: dict[str, dict]) -> None:
    update(qs, "t1-a1-003",
        options=[
            "Rapid phosphocreatine replenishment within active contracting sarcomeres",
            "Substantial neuromuscular fatigue and loss of movement quality",
            "Optimal accumulation of mechanical tension for tendon collagen remodeling",
            "Selective recruitment of high-threshold type II motor units without fatigue",
        ], correct=1,
        explanation="Velocity loss above about 30% indicates substantial fatigue and loss of movement quality, including peripheral and neuromuscular fatigue. It does not independently diagnose central nervous system fatigue.")
    option(qs, "t1-a1-012", 2, "10–20 grams of carbohydrate per hour of exercise")
    option(qs, "t1-a1-028", 2, "Autonomic imbalance and incomplete recovery, requiring corroborating evidence before diagnosing non-functional overreaching")
    update(qs, "t1-a2-008",
        text="In the SAI age-verification protocol for adolescent athletes, which hand-and-wrist radiographic methods may be used according to the applicable age or category?",
        options=[
            "Tanner–Whitehouse 3 and Greulich–Pyle methods, selected according to the applicable age/category protocol",
            "Only a hypothetical Greulich–Pyle 2 method for every age and category",
            "Only a hypothetical Fels Longitudinal 1 method for every age and category",
            "Only a hypothetical Roche–Wainer–Thissen 4 method for every age and category",
        ], correct=0,
        explanation="SAI age-verification protocols may use established left-hand and wrist skeletal-age methods such as Tanner–Whitehouse and Greulich–Pyle, depending on the athlete’s age or category. The applicable protocol should be identified rather than presenting TW3 as universal.")
    update(qs, "t1-b-007",
        text="When assessing suspected posterior shoulder instability, which named test is specifically designed to assess posteroinferior labral or posterior-instability pathology?",
        explanation="The posterior Jerk test is designed to assess posteroinferior labral pathology and posterior glenohumeral instability. The Kim test is a separate test that may be used alongside it; they should not be treated as one test with one universal accuracy estimate.")
    update(qs, "t1-b-008",
        explanation="The thumb-in-fist ulnar-deviation maneuver commonly called Finkelstein’s test is often performed as Eichhoff’s maneuver in clinical practice. The original Finkelstein maneuver is examiner-assisted. Both are used to provoke first-dorsal-compartment pain associated with De Quervain’s tenosynovitis; the terminology should be distinguished.")
    update(qs, "t1-b-015",
        explanation="Heavy isometric loading may provide short-term symptom relief in some people with tendinopathy without requiring large tendon excursions. The analgesic response is variable and does not establish a universal treatment effect or replace progressive rehabilitation.")
    update(qs, "t1-b-028",
        explanation="TENS has some or conditional evidence as an adjunct for acute postoperative or procedural pain. Evidence quality is heterogeneous, and TENS should not be described as a universal or definitive treatment.")
    option(qs, "t1-b-036", 3, "Remodeling phase, when woven bone is replaced by organized lamellar bone")
    qs["t1-c-003"]["text"] = qs["t1-c-003"]["text"].replace("Gonyometric", "Goniometric")
    option(qs, "t1-c-006", 1, "Combined hip-focused and quadriceps strengthening with progressive functional loading")
    update(qs, "t1-c-015",
        explanation="An LSI of at least 90% is a commonly used benchmark for hop and strength testing, but cutoffs vary by protocol and sport. Return-to-sport clearance is multifactorial and also considers symptoms, range of motion, strength quality, sport-specific exposure, and clinician assessment.")
    update(qs, "t1-c-016",
        explanation="ACL-RSI is a useful psychological-readiness measure. A threshold such as 60–65% may be used in a specific protocol, but thresholds vary and the score should inform rather than independently determine unrestricted clearance.")


def fix_test_2(qs: dict[str, dict]) -> None:
    qs["t2-a1-011"]["correct"] = 1
    update(qs, "t2-a1-014",
        options=[
            "80–100 mmol/L (1840–2300 mg/L) to increase plasma osmolality",
            "5–10 mmol/L (115–230 mg/L) to prevent a hypernatremic state",
            "50–60 mmol/L (1150–1380 mg/L) to maximize gastric emptying",
            "200–300 mg/L (approximately 8.7–13 mmol/L sodium) to support fluid retention",
        ], correct=3,
        explanation="The official notification sample uses 200–300 mg/L sodium. For sodium, that is approximately 8.7–13 mmol/L, not 20–30 mmol/L. Units must remain consistent.")
    option(qs, "t2-b-003", 3, "Pain with internal rotation (thumb down) that persists or worsens in external rotation (thumb up)")
    update(qs, "t2-b-005",
        explanation="A positive FADIR reproduces pain and suggests intra-articular hip pathology, including possible FAI. It is sensitive but nonspecific and does not diagnose FAI or an anterior labral tear by itself.")
    update(qs, "t2-b-010",
        text="In the Heavy Slow Resistance (HSR) protocol for patellar tendinopathy, what is the recommended training frequency and repetition continuum?",
        explanation="A commonly studied patellar-tendinopathy HSR programme uses three sessions per week and progresses from higher-repetition loads toward approximately 6RM, with slow controlled concentric and eccentric phases. Beyer et al. is associated with Achilles-tendinopathy HSR evidence, whereas Kongsgaard et al. studied patellar-tendinopathy HSR.")
    update(qs, "t2-b-014",
        text="In early rehabilitation after ACL reconstruction, when performed in a protected range, why are closed kinetic chain (CKC) exercises often favored over open kinetic chain (OKC) exercises?",
        explanation="In early ACL rehabilitation, appropriately selected CKC exercises can promote axial compression and co-contraction while limiting some anterior tibial shear. Exercise choice still depends on graft, range, loading, symptoms, and rehabilitation phase; CKC is not universally preferred for every acute ligament injury.")
    update(qs, "t2-b-028",
        explanation="Low-frequency, motor-intensity TENS may involve endogenous-opioid mechanisms and descending inhibition. Descriptions of the recruited afferents and opioid receptor effects vary by protocol; motor axons are large-diameter Aα fibers, not small-diameter fibers.")
    option(qs, "t2-b-034", 0, "Loss of balance with eyes closed after stable eyes-open stance, indicating impaired proprioceptive input")
    update(qs, "t2-c-015",
        explanation="A protocol may use absence of effusion, full symmetric range, normal gait, and quadriceps symmetry of at least 85% before progressing to running. The threshold is protocol-specific rather than universal; the keyed option and explanation should use the same value.")
    passage = qs["t2-c-001"].get("passage")
    if passage and qs["t2-c-001"]["text"].startswith("Case Vignette 1:"):
        qs["t2-c-001"]["text"] = qs["t2-c-001"]["text"].replace("Case Vignette 1: ", "", 1)


def fix_test_3(qs: dict[str, dict]) -> None:
    qs["t3-a1-003"]["text"] = qs["t3-a1-003"]["text"].replace("0 to 50–100 ms", "0–100 ms")
    qs["t3-a1-013"]["correct"] = 2
    qs["t3-a2-001"]["text"] = "Under the current Khelo India University Games framework, which trophy recognizes the overall top-performing university?"
    qs["t3-a2-001"]["explanation"] = "Current Ministry wording identifies the overall winner of the Khelo India University Games. Older material used MAKA Trophy wording for the best university in inter-university sport; the policy year should be specified when using that historical definition."
    qs["t3-b-004"]["text"] = "Clarke’s sign (Patellar Grind test) is positive when downward patellar pressure during quadriceps contraction produces which finding?"
    option(qs, "t3-b-008", 2, "Firm posterior capsular and ligamentous tension at terminal extension")
    qs["t3-b-009"]["explanation"] = "The Spanish Squat supports the posterior tibia, allowing a more vertical shank and reducing ankle dorsiflexion demand while loading the quadriceps and patellar tendon. It does not eliminate patellofemoral compression."
    option(qs, "t3-b-017", 2, "A pulley system with no anatomical lever classification")
    qs["t3-b-036"]["text"] = "During dry-needling pistoning of a myofascial trigger point, which response may occur when the needle engages a taut band?"
    qs["t3-b-037"]["options"][0] = "PEACE: Protect, Elevate, Avoid routine anti-inflammatory modalities, Compress, Educate; LOVE: Load, Optimism, Vascularisation, Exercise"
    qs["t3-b-037"]["explanation"] = "PEACE & LOVE expands to Protect, Elevate, Avoid routine anti-inflammatory modalities, Compress, Educate, followed by Load, Optimism, Vascularisation, and Exercise. It does not require avoiding every anti-inflammatory treatment in every clinical situation."
    option(qs, "t3-c-008", 2, "Thumb-spica orthosis, relative rest from provoking grip, gradual thumb loading, and soft-tissue mobilisation")
    option(qs, "t3-c-010", 1, "Begin maximal resisted hip-adduction and cutting drills immediately from week 1")
    option(qs, "t3-c-017", 0, "Associated with increased injury risk in some cohorts; the effect is not a universal 2.5-fold prediction")
    option(qs, "t3-c-019", 1, "Centralization indicating a directional-preference response that may have favorable prognostic value")


def fix_test_4(qs: dict[str, dict]) -> None:
    option(qs, "t4-a1-001", 3, "A general strength block followed by a deload and then a power block, without separating contraction phases")
    qs["t4-a1-003"]["options"][3] = "Depth jumps from a 60 cm box onto firm ground with rebound"
    qs["t4-a1-003"]["explanation"] = "Depth jumps from an elevated box produce high impact and eccentric loading and should be progressed only after adequate strength, landing control, and tissue tolerance. The exact height is not a universal prescription."
    option(qs, "t4-a1-006", 2, "Inspiratory fatigue directly stops all renal blood flow while locomotor muscles remain fully perfused")
    option(qs, "t4-a1-008", 0, "A transient fall in venous return and stroke volume followed by compensatory cardiovascular responses")
    option(qs, "t4-a1-008", 1, "A sustained five-fold increase in ventricular filling throughout the strain")
    option(qs, "t4-a1-008", 2, "No cardiovascular change because intrathoracic pressure cannot affect venous return")
    option(qs, "t4-a1-010", 2, "Reduced peripheral vascular resistance caused by duplicated baroreceptor nerve endings")
    option(qs, "t4-a1-011", 0, "Myostatin/GDF-8, a negative regulator of muscle growth")
    qs["t4-a1-012"]["text"] = qs["t4-a1-012"]["text"].replace("events >2.5–3 hours", "events lasting more than 2.5 hours")
    qs["t4-a1-021"]["correct"] = 1
    qs["t4-a1-023"]["correct"] = 2
    qs["t4-a1-026"]["correct"] = 0
    qs["t4-a1-031"]["correct"] = 1
    update(qs, "t4-a2-005",
        text="Under the National Sports Development Code of India (2011), what maximum cumulative tenure was permitted for the President of a recognized National Sports Federation?",
        options=[
            "A maximum cumulative tenure of 12 years, with or without a break",
            "A maximum cumulative tenure of 4 years only",
            "A maximum cumulative tenure of 20 years",
            "A maximum cumulative tenure of 16 years",
        ], correct=0,
        explanation="The 2011 Sports Code stated a maximum cumulative tenure of 12 years for the NSF President, with or without a break. The question should ask cumulative tenure rather than three consecutive terms.")
    qs["t4-a2-008"]["explanation"] = "Beta-blockers are prohibited in-competition in the sports identified by the applicable Prohibited List, such as shooting and archery. They are not prohibited out of competition in every sport."
    qs["t4-b-002"]["text"] = "When performing the Slump Test for neural tension, what is the standard proximal-to-distal sequence of positioning?"
    qs["t4-b-005"]["options"][1:] = ["Infraspinatus", "Supraspinatus", "Subscapularis"]
    qs["t4-b-010"]["options"][0] = "Prone Y-raise in the scapular plane and prone horizontal abduction in external rotation"
    qs["t4-b-021"]["text"] = "Compared with the lumbar spine, which region permits more axial rotation because of its relatively coronal facet orientation?"
    qs["t4-b-021"]["correct"] = 0
    qs["t4-b-022"]["correct"] = 0
    qs["t4-b-036"]["options"] = [
        "Reproduction of distal paresthesia, ischemic discomfort, or inability to maintain the elevated position",
        "Pain-free hand opening and closing with no symptoms for the full test duration",
        "Isolated low-back pain during a straight-leg raise",
        "Localized acromioclavicular clicking without arm fatigue or paresthesia",
    ]
    qs["t4-b-036"]["correct"] = 0
    option(qs, "t4-c-015", 3, "Focused ESWT at approximately 2 Hz pulse frequency with a protocol-specific energy flux density")
    qs["t4-c-015"]["explanation"] = "ESWT may be a useful adjunct for selected chronic tendinopathies, but evidence and protocols are condition-specific. Frequency, pulse count, energy flux density, and anaesthesia should be reported separately rather than calling the evidence universally strong."
    qs["t4-c-016"]["text"] = "Which is one commonly studied ESWT protocol for chronic tendinopathy, recognizing that protocols and anaesthesia vary?"
    qs["t4-c-016"]["options"][3] = "A commonly studied course of several sessions spaced about one week apart; local anaesthetic use depends on energy, site, and tolerance"
    qs["t4-c-016"]["explanation"] = "Several weekly sessions without local anaesthetic are one commonly studied approach, but the number of sessions, energy, analgesia, and anaesthesia vary by condition, protocol, and tolerance."
    option(qs, "t4-c-017", 1, "Saphenous nerve descending subcutaneously along the medial tibial flare")


def fix_test_5(qs: dict[str, dict]) -> None:
    option(qs, "t5-a1-002", 0, "Complete bed rest without any physical activity for four weeks")
    qs["t5-a1-021"]["text"] = "In the Mirwald maturity-offset method, which statement best describes the role of sitting height and subischial leg length?"
    qs["t5-a1-021"]["explanation"] = "Sitting height and subischial leg length are input variables in Mirwald’s multivariable maturity-offset equation; their ratio alone does not calculate maturity offset."
    qs["t5-a1-029"]["correct"] = 1
    option(qs, "t5-a2-007", 3, "At least 10% representation for ministry officers, with no eminent-sportsperson requirement")
    option(qs, "t5-b-007", 1, "Weakness of index-finger flexion caused by isolated median-nerve injury")
    option(qs, "t5-b-008", 1, "Apprehension or fear, with resistance to further external rotation or anterior translation")
    qs["t5-b-012"]["explanation"] = "In a pain-dominant problem, pain is encountered before the first resistance (P1 before R1), so lower-grade oscillations are generally selected. In a stiffness-dominant problem, resistance precedes pain and higher-grade oscillations may be used toward the restriction when appropriate."
    qs["t5-b-014"]["explanation"] = "For Achilles tendinopathy, Achilles-specific HSR protocols use progressive calf raises with heavy loads, commonly three times per week and a controlled concentric/eccentric tempo. Kongsgaard et al. is chiefly associated with the patellar-tendinopathy HSR trial, so the attribution should not be used for this Achilles-specific statement."
    option(qs, "t5-b-033", 0, "Temporarily blocking presynaptic acetylcholine release by cleaving SNAP-25 at the motor endplate")
    option(qs, "t5-c-007", 2, "Possible coexisting lateral epicondylalgia and radial-tunnel/PIN irritation, requiring full clinical examination")
    option(qs, "t5-c-013", 1, "Anterior tibial cortex stress fracture, a high-risk bone-stress injury")
    qs["t5-c-014"]["text"] = "Why is an anterior tibial cortex stress fracture considered a high-risk bone-stress injury, and what initial management is appropriate?"
    option(qs, "t5-c-015", 3, "These findings support consideration for clearance, subject to full sport-specific assessment and clinician decision")
    qs["t5-c-015"]["explanation"] = "The results meet commonly used physical and psychological benchmarks, but LSI, ACL-RSI, and landing symmetry do not by themselves establish unrestricted clearance. Symptoms, full range, effusion, sport-specific exposure, and clinician assessment remain necessary."
    option(qs, "t5-c-017", 1, "High valgus moment, hip internal rotation, and shallow flexion are associated with increased ACL loading and non-contact injury risk")
    qs["t5-c-017"]["explanation"] = "Dynamic valgus, hip internal rotation, and shallow knee flexion are associated with increased ACL loading and non-contact injury risk; these kinematics do not directly demonstrate a measured peak ACL tensile strain."
    qs["t5-c-020"]["text"] = "What initial management and return-to-bowling plan is appropriate for this young fast bowler with an active pars lesion?"
    option(qs, "t5-c-020", 0, "Relative rest from fast bowling, neutral-spine rehabilitation, reassessment of healing, and a graded individualized return-to-bowling programme")
    qs["t5-c-020"]["explanation"] = "Active pars lesions require individualized activity restriction, trunk rehabilitation, imaging or clinical reassessment where indicated, correction of bowling mechanics, and a graded return-to-bowling programme. A fixed 8–12-week timeline cannot guarantee bony healing or safe clearance."


def fix_test_6(qs: dict[str, dict]) -> None:
    qs["t6-a1-004"]["text"] = qs["t6-a1-004"]["text"].replace("0.15 to 0.20 m/s", "0.30 to 0.35 m/s")
    qs["t6-a1-004"]["explanation"] = "For a standard back squat, a mean concentric velocity around 0.30–0.35 m/s is a commonly used approximate minimum-velocity region near maximal loading. Exact values vary with exercise, athlete, device, and velocity metric."
    option(qs, "t6-a1-023", 1, "Jump height divided by time to take-off as the modified Reactive Strength Index")
    qs["t6-b-002"]["options"][3] = "Positive at 30° only suggests isolated PLC injury; positivity at both 30° and 90° suggests combined PLC/PCL injury"
    qs["t6-b-006"]["options"] = [
        "Rotator-cuff-related subacromial pain",
        "Glenoid labral pathology, which may include a SLAP lesion",
        "Anterior glenohumeral instability",
        "Adhesive capsulitis",
    ]
    qs["t6-b-012"]["options"] = [
        "Reciprocal inhibition caused only by a rapid stretch reflex",
        "Presynaptic inhibition caused only by cutaneous receptors",
        "Pharmacological blockade of acetylcholine at the motor endplate",
        "GTO-mediated autogenic inhibition plus Ia-mediated reciprocal inhibition",
    ]
    qs["t6-b-012"]["explanation"] = "Hold-relax with agonist contraction combines GTO-mediated autogenic inhibition from the isometric hold of the tight muscle with Ia-mediated reciprocal inhibition when the opposing agonist contracts. It does not discharge muscle spindles as the primary mechanism."
    qs["t6-b-034"]["options"] = [
        "Releasing hip flexion while keeping the cervical spine fixed",
        "Changing only the knee angle while keeping the neural interfaces unchanged",
        "Releasing cervical flexion; symptom change supports neural mechanosensitivity",
        "Applying ice to the hamstring while keeping all neural positions unchanged",
    ]
    qs["t6-b-034"]["explanation"] = "Cervical release can serve as structural differentiation because it changes neural-tissue loading without materially changing hamstring length. Symptom change supports neural mechanosensitivity but does not alone confirm a specific nerve lesion."
    qs["t6-c-002"]["text"] = "Which context-dependent benchmark may support late-stage return-to-sprint progression when interpreted with the full clinical battery?"
    qs["t6-c-002"]["options"][1] = "H:Q around 0.70 under the specified testing protocol, symmetry at least 90%, and pain-free high-speed exposure"
    qs["t6-c-002"]["explanation"] = "An H:Q value around 0.70 may be used as a protocol-specific benchmark, but interpretation depends on contraction mode, angular velocity, athlete, and test position. Strength symmetry, full pain-free range, symptoms, and graded high-speed exposure are also required."
    qs["t6-c-007"]["correct"] = 3
    qs["t6-c-015"]["explanation"] = "An ACL-RSI threshold such as 65% may be used in a specific protocol. A statement such as ‘below 56–60 points, depending on postoperative time point’ is clearer than the malformed inequality ‘<56–60%.’ The scale should inform, not independently determine, clearance."
    qs["t6-c-017"]["options"][3] = "Anterior Cruciate Ligament, which is preferentially loaded by this non-contact movement pattern"
    qs["t6-c-017"]["correct"] = 3
    qs["t6-c-018"]["text"] = "Which multi-component neuromuscular warm-up programme, such as FIFA 11+ or PEP, should be integrated to reduce ACL injury risk?"
    qs["t6-c-018"]["options"][1] = "A structured programme combining landing mechanics, plyometrics, trunk control, eccentric strength, and agility"
    qs["t6-c-020"]["explanation"] = "Mixed bowling actions can create large counter-rotation and lumbar shear. The exact threshold is not universal; reducing the mixed action by aligning the shoulders and hips in a consistent side-on or front-on technique is a reasonable technical objective during graded rehabilitation."


def fix_test_10(qs: dict[str, dict]) -> None:
    update(qs, "t10-a2-001",
        options=[
            "The Union Minister for Youth Affairs and Sports",
            "The Director General of SAI",
            "The Secretary of the Ministry of Youth Affairs and Sports",
            "The President of the Indian Olympic Association",
        ], correct=0,
        explanation="The Union Minister for Youth Affairs and Sports is the ex-officio President of the SAI General Body under the applicable governance structure.")
    update(qs, "t10-a2-006",
        options=[
            "A national first-instance disciplinary panel",
            "The International Testing Agency, which manages anti-doping testing and related programmes for participating sports bodies and events",
            "The Court of Arbitration for Sport",
            "The Supreme Court of India",
        ], correct=1,
        explanation="The International Testing Agency is an independent anti-doping organization that manages testing and related programmes for Olympic and other international sport bodies and events.")


def fix_test_12(qs: dict[str, dict]) -> None:
    qs["t12-a1-001"]["explanation"] = "Concurrent endurance exercise activates AMPK and related energy-sensing pathways, which can inhibit mTORC1 signalling through mechanisms involving TSC2 and raptor. SIRT1 also participates in energy and mitochondrial signalling, but it should not be described as the sole kinase phosphorylating TSC2/raptor."
    qs["t12-a1-011"]["correct"] = 0
    qs["t12-a1-014"]["explanation"] = qs["t12-a1-014"]["explanation"].replace("<= 5.0%", "≤ 5.0%")
    qs["t12-a1-020"]["explanation"] = "A superimposed twitch during an MVC indicates incomplete voluntary activation. Comparison with a resting evoked twitch after the MVC is needed to help distinguish central activation failure from peripheral contractile fatigue."
    qs["t12-a1-024"]["text"] = "When assessing test-retest reliability of a force-plate protocol evaluated by one fixed examiner across multiple days, which ICC model is appropriate when absolute scores matter?"
    qs["t12-a1-024"]["explanation"] = "For one fixed examiner with interest in absolute agreement across repeated measurements, ICC(3,1)—a two-way mixed-effects, absolute-agreement, single-measure model—is a commonly appropriate choice. The exact ICC model should be reported with the design assumptions."
    qs["t12-a1-028"]["correct"] = 0
    qs["t12-a1-029"]["correct"] = 1
    qs["t12-a2-004"]["explanation"] = "The enacted Act provides for the National Anti-Doping Disciplinary Panel and the National Anti-Doping Appeal Panel. Use those names consistently rather than switching between NADP and NAAP without definition."
    qs["t12-b-009"]["explanation"] = "Heavy isometric loading is a commonly studied protocol that may provide short-term symptom relief in some people with tendinopathy. The effect is variable and should not be described as maximal or guaranteed analgesia."
    qs["t12-b-010"]["text"] = "In a Heavy Slow Resistance (HSR) programme for patellar tendinopathy, what repetition tempo is commonly prescribed per repetition?"
    qs["t12-b-010"]["explanation"] = "Patellar-tendinopathy HSR protocols commonly use a controlled tempo of about 3 seconds concentric and 3 seconds eccentric. Kongsgaard et al. is associated with the patellar-tendinopathy HSR trial; Achilles protocols should be cited separately."
    qs["t12-b-015"]["correct"] = 0
    qs["t12-b-036"]["text"] = qs["t12-b-036"]["text"].replace("propriorception", "proprioception")
    qs["t12-c-009"]["options"][0] = "Hamstring strength deficit (LSI = 82%, below the selected ≥90% benchmark) requiring further assessment before unrestricted contact clearance"
    qs["t12-c-009"]["explanation"] = "The hamstring LSI of 82% is below the selected 90% benchmark. LSI and ACL-RSI are protocol-specific criteria, not universal mandatory clearance rules; symptoms, sport-specific exposure, and clinician assessment remain necessary."
    qs["t12-c-010"]["passage"] = qs["t12-c-010"]["passage"].replace("Single-Leg Triple Hop LSI = 91%", "Single-Leg Triple Hop LSI = 92%")
    qs["t12-c-012"]["explanation"] = qs["t12-c-012"]["explanation"].replace("within pain tolerance <=3/10", "within a protocol-specific, individually tolerated pain range")
    qs["t12-c-013"]["options"][0] = "Iliotibial-band-related lateral knee pain with hip-control and training-load contributors"
    qs["t12-c-020"]["explanation"] = qs["t12-c-020"]["explanation"].replace("Type II SLAP tears succeed with conservative therapy", "Some athletes with Type II SLAP tears can improve with conservative therapy")


def normalize_math(value: str) -> str:
    superscripts = str.maketrans("0123456789+-=()", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾")
    subscripts = str.maketrans("0123456789+-=()", "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎")
    value = value.replace("\\ ", " ")
    value = re.sub(r"\\frac\{([^{}]+)\}\{([^{}]+)\}", r"(\1/\2)", value)
    value = re.sub(r"\\sqrt\{([^{}]+)\}", lambda m: "√" + m.group(1), value)
    value = re.sub(r"\\(?:text|mathrm|operatorname)\{([^{}]*)\}", r"\1", value)
    replacements = {
        "\\times": "×", "\\cdot": "·", "\\geq": "≥", "\\ge": "≥",
        "\\leq": "≤", "\\le": "≤", "\\pm": "±", "\\approx": "≈",
        "\\max": "max", "\\min": "min", "\\Delta": "Δ", "\\alpha": "α",
        "\\beta": "β", "\\mu": "μ", "\\lambda": "λ", "\\theta": "θ",
        "\\pi": "π", "\\infty": "∞", "\\log": "log", "\\sum": "Σ",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    value = re.sub(r"\^\{([^{}]+)\}", lambda m: m.group(1).translate(superscripts), value)
    value = re.sub(r"\^([0-9]+)", lambda m: m.group(1).translate(superscripts), value)
    value = re.sub(r"_\{([^{}]+)\}", lambda m: "_" + m.group(1), value)
    value = re.sub(r"_([0-9]+)", lambda m: m.group(1).translate(subscripts), value)
    value = value.replace("$", "").replace("{", "").replace("}", "")
    value = value.replace("\\", "")
    value = value.replace("1.8 Nm/kg", "1.8 N·m/kg")
    value = value.replace("J/cm2", "J/cm²").replace("m/s2", "m/s²")
    value = value.replace("7.a modest", "a modest")
    value = value.replace("BL Force", "bilateral force")
    value = value.replace("BL  Force", "bilateral force")
    value = value.replace("propriorception", "proprioception")
    return value


def normalize_bank(by_file: dict[Path, list[dict]]) -> None:
    for questions in by_file.values():
        for question in questions:
            for field in ("text", "explanation", "passage"):
                if question.get(field):
                    question[field] = normalize_math(question[field])
            question["options"] = [normalize_math(value) for value in question["options"]]


def main() -> None:
    qs, files = load()
    fix_test_1(qs)
    fix_test_2(qs)
    fix_test_3(qs)
    fix_test_4(qs)
    fix_test_5(qs)
    fix_test_6(qs)
    fix_test_10(qs)
    fix_test_12(qs)
    normalize_bank(files)
    for path, questions in files.items():
        path.write_text(json.dumps(questions, ensure_ascii=False, indent=2) + "\n")


if __name__ == "__main__":
    main()
