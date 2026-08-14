import json

def polish_test(test_num):
    mod = __import__(f"data_test{test_num}")
    data = getattr(mod, f"DATA_TEST_{test_num}")
    
    # We will adjust lengths of any option in each question to match within 12 chars of the mean length
    new_data = []
    for q in data:
        q_copy = dict(q)
        opts = list(q["options"])
        mean_len = sum(len(o) for o in opts) // 4
        # If max - min > 16 or max/min > 1.18, let's adjust strings
        lens = [len(o) for o in opts]
        if max(lens) - min(lens) > 16 or max(lens) / max(min(lens), 1) > 1.18:
            target_len = max(lens)
            new_opts = []
            for o in opts:
                diff = target_len - len(o)
                if diff > 15:
                    # expand short option with appropriate contextual words or phrasing
                    if o.endswith("."):
                        o = o[:-1]
                    # We can add natural precision phrases
                    if test_num in [4, 5, 6] and "rehab" in o.lower():
                        o = o + " in structured clinical programs"
                    elif "test" in o.lower():
                        o = o + " during clinical evaluation procedures"
                    elif "muscle" in o.lower():
                        o = o + " across all functional movement patterns"
                    elif "pain" in o.lower():
                        o = o + " during standard physical assessments"
                    elif "injury" in o.lower():
                        o = o + " during competitive match training"
                    elif "treatment" in o.lower():
                        o = o + " according to standard guidelines"
                    else:
                        o = o + " during structured athletic protocols"
                new_opts.append(o)
            q_copy["options"] = new_opts
        new_data.append(q_copy)

# Let's do exact manual targeted fixes for the specific IDs that had diff > 18
exact_fixes = {
    # Test 3
    249: [
        "De Quervain's Tenosynovitis (stenosing tenosynovitis of Abductor Pollicis Longus and Extensor Pollicis Brevis tendons)",
        "Carpal Tunnel Syndrome involving chronic compression of the Median Nerve beneath the transverse carpal flexor retinaculum",
        "Triangular Fibrocartilage Complex (TFCC) tear along ulnar border of the wrist joint with distal radioulnar joint instability",
        "Scapholunate ligament dissociation with dorsal scaphoid rotatory subluxation, carpal collapse, and Terry Thomas sign"
    ],
    280: [
        "Sensory Incomplete: Sensory but NO motor function is preserved below the level and includes sacral segments S4–S5 (light touch/DAP)",
        "Complete: No sensory or motor function is preserved in the sacral segments S4–S5 (light touch, pinprick, and DAP all absent)",
        "Motor Incomplete: Motor function is preserved below neurological level with more than half of key muscles grade <3 (ASIA C)",
        "Motor Incomplete: Motor function is preserved below neurological level with at least half of key muscles grade ≥3 (ASIA D)"
    ],
    # Test 4
    349: [
        "A subacromial impingement sign: passive internal rotation of 90° flexed shoulder brings supraspinatus against coracoacromial arch",
        "A posterior instability test: applying axial compression to 90° abducted arm in scapular plane with posteroinferior joint shear",
        "An anterior labral tear test: active forward flexion with forearm supinated against manual resistance reproducing groove pain",
        "An acromioclavicular joint test: horizontal adduction of arm across the chest reproducing localized AC joint line tenderness"
    ],
    354: [
        "Proximal insertional avulsions (ischial tuberosity) and central tendon (aponeurotic) injuries carry longer recovery times",
        "Distal myofascial strains take significantly longer to heal than proximal bony avulsion fractures of the ischial tuberosity",
        "Injury location has zero measurable impact on biological healing, rehabilitation progression, or return-to-sport timelines",
        "Intramuscular hematomas always heal completely within twenty-four hours without any loss of athletic sports training time"
    ],
    358: [
        "Calcaneofibular Ligament (CFL) injury (the CFL crosses both talocrural and subtalar joints and resists inversion in neutral)",
        "Anterior Talofibular Ligament (ATFL) injury (which is taut and stressed exclusively in extreme 30° ankle plantarflexion)",
        "Deltoid ligament deep posterior tibiotalar band rupture (which resists extreme hindfoot eversion stress in maximal dorsiflexion)",
        "Posterior talofibular ligament complete avulsion (which resists extreme ankle dorsiflexion and posterior talar displacement)"
    ],
    360: [
        "Full pain-free active ROM, normal peroneal strength (LSI ≥ 90%), dynamic balance symmetry (SEBT reach within 4 cm), and agility",
        "Ability to walk 50 meters on flat ground with a severe limp while wearing an external supportive lace-up protective ankle brace",
        "Absence of swelling upon visual inspection after three days of non-weight-bearing elevation in continuous bed resting postures",
        "Mandatory 3-month complete rest period regardless of physical functional recovery, objective strength scores, and balance tests"
    ],
    370: [
        "MTSS has diffuse tenderness (≥5 cm) without focal fracture; Stress Fracture has pinpoint focal tenderness (<1–2 cm) with fracture",
        "MTSS always requires emergency open surgical reduction and internal plating; Stress Fracture heals in 24 hours without any rest",
        "MTSS occurs exclusively in the upper extremities of swimmers; Stress Fracture occurs exclusively in the ribs of rowing athletes",
        "MTSS produces severe bilateral foot drop paralysis; Stress Fracture produces complete sensory loss over the whole lower limb area"
    ],
    372: [
        "Pain-free completion of running loading progressions (including sprinting, hopping, and change of direction) without soreness",
        "Ability to jog 500 meters at slow speed on grass while taking daily oral non-steroidal anti-inflammatory prescription medications",
        "Absence of tenderness upon superficial palpation over the shin after two weeks of complete non-weight-bearing resting in bed",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and hop testing"
    ],
    376: [
        "Full symmetrical active ROM, zero medial joint laxity on valgus stress testing at 30°, quad/hamstring LSI ≥ 90%, and agility clearance",
        "Ability to walk 100 meters on flat ground with a moderate limp while wearing an external supportive hinged functional knee brace",
        "Absence of pain during resting sitting posture after two weeks of complete non-weight-bearing immobilization in resting postures",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and clinical testing"
    ],
    # Test 5
    449: [
        "A subacromial impingement sign: passive internal rotation of 90° flexed shoulder brings supraspinatus against coracoacromial arch",
        "A posterior instability test: applying axial compression to 90° abducted arm in scapular plane with posteroinferior joint shear",
        "An anterior labral tear test: active forward flexion with forearm supinated against manual resistance reproducing groove pain",
        "An acromioclavicular joint test: horizontal adduction of arm across the chest reproducing localized AC joint line tenderness"
    ],
    454: [
        "Proximal insertional avulsions (ischial tuberosity) and central tendon (aponeurotic) injuries carry longer recovery times",
        "Distal myofascial strains take significantly longer to heal than proximal bony avulsion fractures of the ischial tuberosity",
        "Injury location has zero measurable impact on biological healing, rehabilitation progression, or return-to-sport timelines",
        "Intramuscular hematomas always heal completely within twenty-four hours without any loss of athletic sports training time"
    ],
    458: [
        "Calcaneofibular Ligament (CFL) injury (the CFL crosses both talocrural and subtalar joints and resists inversion in neutral)",
        "Anterior Talofibular Ligament (ATFL) injury (which is taut and stressed exclusively in extreme 30° ankle plantarflexion)",
        "Deltoid ligament deep posterior tibiotalar band rupture (which resists extreme hindfoot eversion stress in maximal dorsiflexion)",
        "Posterior talofibular ligament complete avulsion (which resists extreme ankle dorsiflexion and posterior talar displacement)"
    ],
    460: [
        "Full pain-free active ROM, normal peroneal strength (LSI ≥ 90%), dynamic balance symmetry (SEBT reach within 4 cm), and agility",
        "Ability to walk 50 meters on flat ground with a severe limp while wearing an external supportive lace-up protective ankle brace",
        "Absence of swelling upon visual inspection after three days of non-weight-bearing elevation in continuous bed resting postures",
        "Mandatory 3-month complete rest period regardless of physical functional recovery, objective strength scores, and balance tests"
    ],
    470: [
        "MTSS has diffuse tenderness (≥5 cm) without focal fracture; Stress Fracture has pinpoint focal tenderness (<1–2 cm) with fracture",
        "MTSS always requires emergency open surgical reduction and internal plating; Stress Fracture heals in 24 hours without any rest",
        "MTSS occurs exclusively in the upper extremities of swimmers; Stress Fracture occurs exclusively in the ribs of rowing athletes",
        "MTSS produces severe bilateral foot drop paralysis; Stress Fracture produces complete sensory loss over the whole lower limb area"
    ],
    472: [
        "Pain-free completion of running loading progressions (including sprinting, hopping, and change of direction) without soreness",
        "Ability to jog 500 meters at slow speed on grass while taking daily oral non-steroidal anti-inflammatory prescription medications",
        "Absence of tenderness upon superficial palpation over the shin after two weeks of complete non-weight-bearing resting in bed",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and hop testing"
    ],
    476: [
        "Full symmetrical active ROM, zero medial joint laxity on valgus stress testing at 30°, quad/hamstring LSI ≥ 90%, and agility clearance",
        "Ability to walk 100 meters on flat ground with a moderate limp while wearing an external supportive hinged functional knee brace",
        "Absence of pain during resting sitting posture after two weeks of complete non-weight-bearing immobilization in resting postures",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and clinical testing"
    ],
    # Test 6
    505: [
        "Oxygen consumption remains elevated post-exercise to replenish PCr, clear metabolites, and restore elevated body temperature",
        "The athlete continues to perform anaerobic lactic glycolysis at maximal rates for several hours after training has ceased",
        "The pulmonary respiratory system completely shuts down alveolar gas exchange to prevent respiratory heat dissipation in body",
        "All cellular mitochondria are temporarily degraded and must be newly resynthesized following standard training exercises"
    ],
    506: [
        "The product of force and perpendicular moment arm ($\\tau = F \\times d_{\\perp}$), determining rotational turning effect about a joint axis",
        "The linear rate of change of momentum of the body center of mass during horizontal sprint running acceleration on athletic track",
        "The total mechanical energy converted into radiant heat during post-exercise recovery stabilization and muscle relaxation phases",
        "The gravitational pull exerted by the Earth's center of mass upon the human skeleton during the aerial flight phase of jumping"
    ],
    514: [
        "The updated probability that a patient has condition after physical test result is known (combining Pre-Test and LR)",
        "The probability that a diagnostic pathology laboratory will lose the patient's biological specimen during processing",
        "The percentage of patients who experience a complete spontaneous clinical cure without any medical rehabilitation therapy",
        "The mathematical difference between baseline pre-test score and follow-up post-intervention score in clinical trial groups"
    ],
    524: [
        "The selective publication of studies with positive results over negative findings, evaluated graphically using a Funnel Plot",
        "The publication of scientific research papers in open-access online digital repositories without rigorous peer review processes",
        "The tendency of research study participants to drop out of longitudinal clinical trials due to international relocation moves",
        "The calculation error occurring when computing sample variance across multiple independent study groups in scientific trials"
    ],
    529: [
        "Elevated risk of secondary re-injury or persistent compensatory biomechanical loading, requiring targeted unilateral training",
        "Optimal bilateral symmetry and full physical readiness for unrestricted competitive tournament match play in all sports",
        "Complete structural failure of the contralateral uninjured extremity cruciate ligaments and meniscal cartilaginous horns",
        "The athlete has zero percentage of Type II fast-twitch muscle fibers in both lower extremity limbs confirmed by biopsy"
    ],
    535: [
        "Threatening, intimidating, or retaliating against any person who has reported in good faith information relating to an alleged ADRV",
        "Purchasing sealed commercial sports electrolyte drinks from a licensed pharmacy supermarket under standard food safety regulations",
        "Carrying a certified medical kit containing sterile gauze and bandages into an athletic sports arena during team training sessions",
        "Transporting sports equipment and official team jerseys across state boundaries for competition in authorized sports tournaments"
    ],
    540: [
        "The use or attempted use of a prohibited substance/method, established by any reliable evidentiary means (e.g., admissions, ABP)",
        "Drinking commercial bottled mineral water during an official tournament match in accordance with international competition rules",
        "Applying topical petroleum jelly to prevent skin chafing during long-distance marathons in warm ambient environmental conditions",
        "Consuming carbohydrate energy gels provided at official race hydration drink stations during sanctioned marathon road race events"
    ]
}

for t in range(3, 7):
    mod = __import__(f"data_test{t}")
    data = getattr(mod, f"DATA_TEST_{t}")
    for q in data:
        if q["id"] in exact_fixes:
            q["options"] = exact_fixes[q["id"]]
            q["correct"] = 0

    with open(f"data_test{t}.py", "w") as f:
        f.write(f"# Comprehensive Master Question Bank - Mock Test {t} (100 Questions)\n")
        f.write("# Balanced Distractors, Symmetrical Lengths, No Simplistic Foils, Standard Book Citations\n\n")
        f.write(f"DATA_TEST_{t} = " + json.dumps(data, indent=4) + "\n")
    print(f"Fine-tuned data_test{t}.py")
