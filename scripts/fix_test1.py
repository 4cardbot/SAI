import json
from data_test1 import DATA_TEST_1

fixes = {
    8: [
        "1.2 to 2.0 grams per kilogram of body weight per day to support muscle repair and growth",
        "0.4 to 0.6 grams per kilogram of body weight per day to prevent renal nitrogen accumulation",
        "3.5 to 4.5 grams per kilogram of body weight per day to replace all dietary carbohydrates",
        "5.0 to 6.0 grams per kilogram of body weight per day to induce continuous ketogenesis"
    ],
    17: [
        "0.3 grams per kilogram body weight per day for 5–7 days, followed by 0.03–0.05 g/kg/day maintenance",
        "1.5 grams per kilogram body weight per day for 30 days, followed by 0.50–0.80 g/kg/day maintenance",
        "0.01 grams per kilogram body weight once weekly, followed by zero long-term maintenance intake",
        "5.0 grams per kilogram body weight per day continuously throughout the entire competitive season"
    ],
    32: [
        "An 8-week structured neuromuscular training program incorporating plyometrics and landing mechanics",
        "A 6-month continuous passive motorized stretching regimen performed exclusively on massage tables",
        "A heavy open-chain leg extension program performed strictly with maximal 1RM resistance loads",
        "A complete bed rest protocol with strict immobilization of both lower extremities in rigid casts"
    ],
    33: [
        "Target Olympic Podium Scheme (TOPS - providing specialized elite funding)",
        "Khelo India Youth Games (KIYG - national grassroots talent competition)",
        "National Sports Development Fund (NSDF - public corporate sports fund)",
        "Mission Olympic Cell (MOC - apex body evaluating elite athlete support)"
    ],
    34: [
        "Citius, Altius, Fortius – Communiter (Faster, Higher, Stronger – Together)",
        "Citius, Altius, Fortius – Fideliter (Faster, Higher, Stronger – Faithfully)",
        "Citius, Altius, Fortius – Perpetuo (Faster, Higher, Stronger – Permanently)",
        "Citius, Altius, Fortius – Concorditer (Faster, Higher, Stronger – In Harmony)"
    ],
    35: [
        "National Anti-Doping Agency (NADA India - statutory national body)",
        "Sports Authority of India (SAI - apex sports development authority)",
        "Indian Olympic Association (IOA - national Olympic committee body)",
        "National Dope Testing Laboratory (NDTL - WADA accredited testing lab)"
    ],
    36: [
        "Los Angeles, California, USA (2028 Summer Olympic Games host)",
        "Brisbane, Queensland, Australia (2032 Summer Olympic Games host)",
        "Paris, Île-de-France, France (2024 Summer Olympic Games host city)",
        "Madrid, Community of Madrid, Spain (Candidate Olympic host city)"
    ],
    38: [
        "Major Dhyan Chand Khel Ratna Award (Highest sporting honour in India)",
        "Arjuna Award for Outstanding Performance (Premier sports recognition)",
        "Dronacharya Award for Outstanding Coaches (Premier coach recognition)",
        "Rashtriya Khel Protsahan Puruskar (Sports promotion and development)"
    ],
    42: [
        "The iliotibial band transitioning from extensor to flexor, spontaneously reducing the anteriorly subluxated lateral tibial plateau",
        "The posterior cruciate ligament subluxating behind the medial femoral condyle during active terminal extension of the tibiofemoral joint",
        "The medial meniscus posterior horn snapping over the medial tibial spine margin during passive valgus stress and internal rotation",
        "The patella dislocating laterally over the elevated lateral femoral trochlear ridge during forced active knee extension at thirty degrees"
    ],
    44: [
        "Supraspinatus muscle tendon unit (subacromial impingement)",
        "Infraspinatus muscle tendon unit (posterior cuff strain)",
        "Subscapularis muscle tendon unit (anterior instability)",
        "Teres Minor muscle tendon unit (external rotator tear)"
    ],
    45: [
        "Acetabular Labral Tear or Femoroacetabular Impingement (FAI syndrome)",
        "Greater Trochanteric Pain Syndrome or gluteal tendinopathy lesion",
        "Iliopsoas bursitis with external snapping hip syndrome friction",
        "Piriformis syndrome with sciatic nerve compression in the buttock"
    ],
    46: [
        "Sacroiliac joint dysfunction or anterior sacroiliac ligament pathology",
        "Iliopsoas muscle strain with retroperitoneal bursal inflammation",
        "Femoral neck stress fracture with cortical bone displacement risk",
        "Gluteus medius insertional tendinopathy at the greater trochanter"
    ],
    47: [
        "Anterior Talofibular Ligament (ATFL) complete or partial tear",
        "Calcaneofibular Ligament (CFL) complete or partial rupture",
        "Deltoid ligament anterior superficial tibiotalar band strain",
        "Posterior talofibular ligament deep capsular avulsion sprain"
    ],
    50: [
        "Alfredson protocol: 3 sets of 15 repetitions, twice daily for 12 weeks, with the knee straight (Gastrocnemius) and knee bent (Soleus)",
        "Heavy Slow Resistance protocol: 3 sets of 6–8 reps, 3 times weekly for 12 weeks, performed exclusively with maximum isokinetic devices",
        "Silbernagel protocol: Concentric-eccentric loading with pain-guided activity, progressing to high-speed energy storage plyometrics",
        "Stanish-Curwin protocol: Progressive eccentric loading with daily static stretching, increasing speed from slow to fast each week"
    ],
    53: [
        "The progressive abolition of distal radiating symptoms toward the midline of the spine with repeated directional loading movements",
        "The gradual spread of pain from the lumbar spine down into the distal extremities during repetitive directional movement testing",
        "The development of bilateral protective muscle spasm in response to prolonged static positioning in end-range spinal flexion",
        "The permanent loss of segmental spinal mobility following high-velocity low-amplitude thrust manipulation to the lower back"
    ],
    54: [
        "Roll and glide occur in the exact same spatial direction",
        "Roll and glide occur in opposite spatial directions always",
        "Roll occurs normally while gliding translation is absent",
        "Gliding occurs without any angular rolling across surfaces"
    ],
    56: [
        "Decelerating the foot drop via eccentric contraction of the pretibial dorsiflexors and drawing the tibia forward over the heel rocker",
        "Accelerating the forward propulsion of the body over the metatarsophalangeal joints via concentric calf plantarflexion activation",
        "Locking the talocrural joint in maximal rigid plantarflexion to resist compressive loading forces during initial contact phase",
        "Providing a rigid lever for explosive push-off during terminal stance transition by engaging the plantar aponeurosis mechanism"
    ],
    58: [
        "Gluteus Medius and Gluteus Minimus abductor group",
        "Gluteus Maximus and Adductor Magnus extensor group",
        "Iliopsoas and Rectus Femoris primary flexor group",
        "Tensor Fasciae Latae contracting in total isolation"
    ],
    61: [
        "Selectively stimulating large-diameter myelinated A-beta afferents to inhibit nociceptive transmission at the spinal cord dorsal horn",
        "Selectively depolarizing small unmyelinated C fibers to deplete substance P stores within peripheral sensory cutaneous nerve terminals",
        "Directly destroying sensory nerve endings in the epidermis through localized thermal electrocoagulation and high-frequency heating",
        "Stimulating the pituitary gland to release systemic beta-endorphins into circulating cerebrospinal fluid and peripheral bloodstream"
    ],
    62: [
        "1 MHz penetrates deeper (up to 3–5 cm) for deep structures; 3 MHz penetrates superficially (1–2 cm) for superficial structures",
        "3 MHz penetrates deeper (up to 5–7 cm) for deep tissues; 1 MHz penetrates superficially (0.5–1 cm) for cutaneous skin layers",
        "1 MHz generates pure electrical currents without sound; 3 MHz generates pure acoustic mechanical waves without heating",
        "1 MHz is used exclusively for bone fractures; 3 MHz is used exclusively for peripheral nerve regeneration in the upper limb"
    ],
    63: [
        "A stable cavitation mechanism producing localized acoustic streaming that enhances cell membrane permeability and protein synthesis",
        "A rapid thermal coagulation of sensory nociceptors that permanently blocks action potential propagation along peripheral axons",
        "An electrical polarization of the lipid bilayer that forces open voltage-gated calcium channels across the whole muscle belly",
        "A mechanical shear force that dissolves extracellular hydroxyapatite crystals within the deep connective tissue matrix layers"
    ],
    64: [
        "The ratio of spatial peak intensity to spatial average intensity, which should be ≤6:1 to prevent localized tissue hot spots",
        "The ratio of acoustic absorption in cortical bone versus subcutaneous adipose tissue, which must consistently exceed 10:1",
        "The ratio of acoustic pulse delivery time to rest pause duration, which should be strictly maintained at a ratio of 1:1",
        "The ratio of piezoelectric crystal surface area to transducer casing circumference, which must precisely equal 2:1"
    ],
    65: [
        "Inhibiting abnormal muscle tone and primitive reflexes while facilitating normal postural control and task-specific movement patterns",
        "Using primitive pathological reflex synergies and associated reactions to initiate gross voluntary movement in flaccid limb stages",
        "Immobilizing the non-paretic sound limb in a mitt for 90% of waking hours to force intensive repetitive use of the paretic extremity",
        "Applying high-resistance strength training exclusively on open-chain variable resistance machines to induce muscular hypertrophy"
    ],
    67: [
        "Constraining the non-paretic upper limb in a mitt for 90% of waking hours while engaging the paretic arm in intensive repetitive training",
        "Restraining the involved paretic arm in a static splint while training the sound contralateral limb in bilateral coordination tasks",
        "Applying continuous sensory transcutaneous electrical nerve stimulation to both upper extremities simultaneously during seated rest",
        "Immobilizing both upper extremities in bilateral rigid plaster casts while performing passive gait re-education on a treadmill"
    ],
    68: [
        "Flaccidity with complete absence of reflex responses or voluntary movement (Stage 1)",
        "Spasticity reaches its peak with voluntary movement limited to basic synergy patterns (Stage 3)",
        "Spasticity declines and voluntary movement combinations deviating from synergies emerge (Stage 4)",
        "Individual joint movements become isolated with completely normal motor coordination (Stage 6)"
    ],
    69: [
        "Passive subsystem (vertebrae/ligaments), Active subsystem (muscles/tendons), and Neural subsystem (CNS/sensory receptors)",
        "Superficial rectus abdominis sling, lateral external oblique muscular corset, and posterior latissimus dorsi myofascial sling",
        "Thoracic ribcage osseous cage, lumbar lordotic vertebral column, and pelvic ring architectural osseous structural frameworks",
        "Cardiovascular systemic perfusion, pulmonary alveolar gas exchange, and peripheral neuromuscular motor command pathways"
    ],
    71: [
        "By the spatial intersection and constructive interference of two medium-frequency AC currents (e.g., 4000 Hz and 4100 Hz)",
        "By directly transmitting a high-voltage 100 Hz DC rectangular pulse from one active electrode over the motor point site",
        "By applying a high-power monochromatic coherent laser beam synchronized with continuous pulsed shortwave diathermy units",
        "By rapid mechanical vibrations delivered through a focused acoustic piezoelectric crystal transducer onto the joint line"
    ],
    73: [
        "Spasticity is velocity-dependent with a clasp-knife resistance; Rigidity is velocity-independent with constant resistance throughout range",
        "Spasticity is velocity-independent lead-pipe resistance; Rigidity is velocity-dependent increasing only during rapid ballistic stretching",
        "Spasticity occurs exclusively in cerebellar vermis lesions; Rigidity occurs exclusively in lower motor neuron anterior horn lesions",
        "Spasticity affects exclusively distal wrist flexor muscles; Rigidity affects exclusively cranial nerve innervated facial muscles"
    ],
    74: [
        "Passive lateral flexion and axial downward compression reproducing radicular pain into the ipsilateral upper extremity",
        "Passive neck flexion causing sharp electric-like shocks shooting down the spinal cord and into the lower extremities",
        "Passive bilateral cervical rotation reproducing localized dizziness, rotary nystagmus, and unilateral Horner syndrome",
        "Resisted isometric neck extension producing generalized muscular fatigue and dull aching in the upper trapezius muscle"
    ],
    78: [
        "Rectus Femoris muscle (two-joint hip flexor / knee extensor)",
        "Iliopsoas muscle belly (deep primary hip flexor muscle group)",
        "Tensor Fasciae Latae (lateral hip flexor and abductor unit)",
        "Pectineus and Adductor Longus (anteromedial hip flexor group)"
    ],
    79: [
        "Cyclic alternating periods of cold-induced vasodilation following initial vasoconstriction to preserve tissue viability",
        "Continuous progressive vasoconstriction leading to severe tissue hypoxia, cellular necrosis, and cold-induced ischemia",
        "Permanent dilation of deep muscular arteries with rapid increase in local tissue temperature and cellular metabolic rate",
        "Immediate reflex inhibition of all cutaneous sensory thermoreceptors and complete blockade of motor nerve transmission"
    ],
    81: [
        "Grade 3c (extensive intratendinous / aponeurosis rupture)",
        "Grade 1a (minor localized myofascial muscle strain injury)",
        "Grade 2b (moderate myotendinous junction structural tear)",
        "Grade 4 (complete muscle or tendon avulsion disruption)"
    ],
    82: [
        "Nordic Hamstring Exercise with progressive eccentric overload and structured high-speed sprinting exposures",
        "Passive static hamstring stretching on a massage table for 15 minutes daily throughout the competitive season",
        "Seated light leg extensions performed on a variable resistance machine to muscular fatigue twice every week",
        "Low-intensity continuous stationary cycling exclusively at zero magnetic resistance for 8 consecutive weeks"
    ],
    84: [
        "Restoring full symmetrical passive knee extension (0°) immediately within the first 1 to 2 weeks post-operatively",
        "Achieving 140° of deep knee flexion within the first 48 hours post-operatively using high-force passive stretching",
        "Initiating heavy open-chain quadriceps leg extensions from 90° to 0° with maximal loads on post-operative day one",
        "Immobilizing the knee in 45° of flexion in a rigid plaster cast for six consecutive weeks without weight-bearing"
    ],
    85: [
        "Lateral femoral condyle (terminal sulcus) and posterior lateral tibial plateau",
        "Medial femoral condyle (intercondylar ridge) and anterior medial tibial plateau",
        "Superior patellar pole and anterior femoral trochlear groove apex articular rim",
        "Medial malleolus groove and talar dome anteromedial articular cartilage surface"
    ],
    86: [
        "Posterolateral Corner (PLC) complex (FCL, popliteus tendon, popliteofibular ligament)",
        "Superficial Medial Collateral Ligament (sMCL) and posterior oblique ligament (POL)",
        "Anteromedial bundle of the Anterior Cruciate Ligament (ACL) and transverse ligament",
        "Medial patellofemoral ligament (MPFL) and medial patellotibial ligament complex"
    ],
    89: [
        "Bone tenderness along the distal 6 cm of the posterior edge of either malleolus or inability to bear weight for 4 steps",
        "Severe sharp pain during active inversion and eversion of the subtalar joint in non-weight-bearing sitting position",
        "Presence of superficial cutaneous ecchymosis and localized soft tissue swelling over the dorsal surface of the midfoot",
        "Inability to perform a single-leg heel raise without assistance within 24 hours of the acute inversion ankle injury"
    ],
    90: [
        "Progressive multi-directional dynamic balance, proprioceptive wobble-board training, and reactive perturbation drills",
        "Passive non-weight-bearing bed rest and immobilization in a rigid plaster cast for six consecutive months",
        "Daily application of superficial ice packs and continuous passive motion without any active exercise therapy",
        "High-velocity manual manipulation of the subtalar joint delivered into forced inversion at end-range"
    ],
    91: [
        "Full-thickness rotator cuff tendon tear or severe axillary nerve palsy (deltoid paralysis)",
        "Subacromial subdeltoid bursitis with localized subacromial impingement syndrome",
        "Adhesive capsulitis of the glenohumeral joint with global capsular restriction",
        "Bicipital tenosynovitis within the bicipital groove of the proximal humerus"
    ],
    93: [
        "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints' - Traction Periostitis)",
        "Anterior Tibial Cortex High-Risk Stress Fracture with cortical lucency",
        "Chronic Exertional Compartment Syndrome of the anterior deep compartment",
        "Complete rupture of the flexor hallucis longus tendon sheath at ankle"
    ],
    95: [
        "Non-inflammatory cell-mediated degenerative tendinosis with collagen disruption and hypervascularity",
        "Massive acute inflammatory cell infiltration dominated by active polymorphonuclear neutrophils",
        "Acute pyogenic bacterial infection of the subpatellar infrapatellar fat pad synovial space",
        "Complete mechanical severance of the deep insertional fibers of the rectus femoris tendon"
    ],
    96: [
        "High-load isometric quadriceps contractions (e.g., Spanish Squat / leg press held at 60° for 45s x 5 reps)",
        "High-velocity drop jumps from a 60 cm plyometric box onto hard flooring surfaces without warm-up",
        "Passive continuous bed rest with strict avoidance of all lower extremity weight-bearing movements",
        "Rapid ballistic concentric knee extensions performed on an isokinetic dynamometer to exhaustion"
    ],
    98: [
        "Isolated eccentric contractions of the wrist extensors (Extensor Carpi Radialis Brevis) using the flexible bar",
        "Forceful high-velocity manipulation of the radiohumeral joint delivered into forced extension and pronation",
        "Continuous application of ultrasound at 3 W/cm2 delivered directly over the radial nerve superficial branch",
        "Immobilizing the elbow, forearm, and wrist in a long-arm fiberglass cast for twelve consecutive weeks"
    ],
    100: [
        "Relative rest from aggravating extension/rotation loads, deep lumbo-pelvic core stabilization in neutral spine, and gradual reconditioning",
        "Aggressive hyperextension spinal stretches and continuous heavy bowling drills performed daily throughout the active competitive season",
        "Complete absolute bed rest for six consecutive months with strict avoidance of all physical activity and spinal stabilization exercises",
        "High-velocity spinal manipulative thrusts delivered directly into painful hyperextension to forcefully mobilize the lumbar facet joints"
    ]
}

new_data = []
for q in DATA_TEST_1:
    qid = q["id"]
    if qid in fixes:
        q_copy = dict(q)
        q_copy["options"] = fixes[qid]
        q_copy["correct"] = 0
        new_data.append(q_copy)
    else:
        new_data.append(q)

ratios = []
diffs = []
for q in new_data:
    lens = [len(o) for o in q["options"]]
    r = max(lens) / max(min(lens), 1)
    d = max(lens) - min(lens)
    ratios.append(r)
    diffs.append(d)

print(f"Test 1 New Stats: Avg Ratio = {sum(ratios)/len(ratios):.2f}, Worst Ratio = {max(ratios):.2f}, Max Diff = {max(diffs)}")

with open("data_test1.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 1 (100 Questions)\n")
    f.write("# Balanced Distractors, Symmetrical Lengths, No Simplistic Foils, Standard Book Citations\n\n")
    f.write("DATA_TEST_1 = " + json.dumps(new_data, indent=4) + "\n")
print("Saved data_test1.py")
