import json
from data_test2 import DATA_TEST_2

fixes = {
    105: [
        "Progressive rise in heart rate accompanied by declining stroke volume due to cutaneous fluid loss and blood pooling",
        "Decreased heart rate and elevated stroke volume caused by central blood volume hypervolemia and core cooling",
        "Sharp increase in arterial oxygen saturation caused by hyperventilation-induced respiratory alkalosis states",
        "Complete suppression of cardiac sympathetic outflow mediated by elevated core body temperature and sweating"
    ],
    109: [
        "Angular Velocity, measured in degrees per second or radians per second (rate of rotational displacement over time)",
        "Angular Displacement, measured in radians or degrees of segmental excursion around a specified joint rotation axis",
        "Angular Acceleration, measured in degrees per second squared (rate of change of rotational velocity over time)",
        "Linear Momentum, calculated as the product of segment mass and linear velocity along the motion path vector"
    ],
    110: [
        "The ratio of ballistic concentric peak force to maximal isometric peak force (Dynamic Strength Deficit)",
        "The percentage of slow-twitch Type I muscle fibers present within the quadriceps femoris muscle belly",
        "The total mechanical work completed during a 60-second repetitive continuous jumping fatigue test battery",
        "The difference between left-limb and right-limb ground reaction force impulses during unilateral jump landing"
    ],
    113: [
        "0.2 to 0.4 g/kg body weight consumed 60 to 90 minutes pre-exercise to increase extracellular buffering capacity",
        "0.05 to 0.1 g/kg body weight consumed 10 minutes pre-exercise to stimulate central dopamine neurotransmission",
        "1.0 to 2.0 g/kg body weight consumed daily for 4 consecutive weeks to expand intracellular glycogen storage",
        "0.01 to 0.02 g/kg body weight consumed during exercise bouts to accelerate free fatty acid mobilization"
    ],
    118: [
        "The minimum amount of change in a score that exceeds the standard measurement error of the clinical instrument",
        "The smallest difference in score that patients perceive as clinically meaningful and beneficial to daily function",
        "The statistical probability that a null hypothesis is falsely accepted by researchers during clinical trials",
        "The mathematical mean difference between the experimental treatment and active control intervention groups"
    ],
    120: [
        "Decreased oxygen consumption, decreased heart rate, and increased parasympathetic activity",
        "Elevated sympathetic tone, increased blood pressure, and increased myoelectric muscle tension",
        "Elevated blood lactate accumulation, hyperventilation, and increased cerebral blood flow rate",
        "Suppression of cellular immune markers and elevated systemic cortisol hormone secretion levels"
    ],
    121: [
        "Suppressed hypothalamic GnRH pulsatility leading to low circulating estrogen and elevated bone resorption",
        "Elevated parathyroid hormone secretion directly stimulating osteoblast bone mineralization and density",
        "Excessive calcitonin secretion causing systemic hypercalcemia, soft tissue calcification, and cramping",
        "Suppression of adrenal cortisol production leading to unconstrained epiphyseal bone longitudinal growth"
    ],
    122: [
        "Seeking bright light exposure in the late afternoon / evening and taking melatonin in the local night",
        "Seeking bright light exposure in the early morning at dawn and taking exogenous melatonin at sunrise",
        "Avoiding all fluid intake and maintaining absolute bed rest for three consecutive days in dark rooms",
        "Wearing dark sunglasses continuously throughout the entire competition week without outdoor exposure"
    ],
    123: [
        "Category S1 (Anabolic Androgenic Steroids and Related Growth Agents)",
        "Category S3 (Beta-2 Agonists and Bronchodilator Inhalation Compounds)",
        "Category S6 (Central Nervous System Stimulants and Alertness Agents)",
        "Category S9 (Glucocorticoids and Systemic Anti-Inflammatory Steroids)"
    ],
    124: [
        "A common cognitive framework and mutual understanding of performance goals, load metrics, and injury protocols",
        "Each practitioner maintaining confidential player logs without sharing diagnostic data with clinical colleagues",
        "A system where all clinical decisions are made exclusively by the sports head coach without medical team input",
        "A computer software database that automatically calculates competition match scores and ranking league tables"
    ],
    126: [
        "High degree of functional redundancy and overlapping motor strategies among multiple synergist muscle groups",
        "Direct one-to-one hardwired synaptic connections between single cortical neurons and individual muscle fibers",
        "Complete structural separation of afferent sensory pathways from efferent motor command execution pathways",
        "Permanent motor unit recruitment hierarchies that cannot be modified by voluntary intent or motor learning"
    ],
    127: [
        "The active muscle is stretched immediately prior to concentric contraction, amplifying force via recoil and reflexes",
        "The muscle performs pure isometric contraction followed by prolonged rest to maximize metabolic ATP replenishment",
        "The antagonist muscle is completely paralyzed through reciprocal inhibition during the entire movement cycle",
        "The muscle contracts concentrically at slow speeds to minimize tendon strain and prevent mechanical rupture"
    ],
    128: [
        "Elevated core body temperature and skin blood flow redistribution increase sweat rate and reduce blood volume",
        "Respiratory alkalosis causes severe cerebral vasoconstriction and reduces central corticospinal motor drive",
        "Intramuscular glycogen stores are depleted within the first 60 seconds of submaximal aerobic exercise bouts",
        "Peripheral arterial baroreceptors become completely desensitized to changes in systemic arterial blood pressure"
    ],
    131: [
        "The lowest positive value that represents a clinically meaningful change rather than a trivial effect",
        "The maximum possible score achievable on an objective patient-reported functional outcome measure scale",
        "The standard deviation of baseline test scores divided by the square root of total sample population",
        "The statistical p-value threshold required to reject the null hypothesis in multivariable regression"
    ],
    133: [
        "Mission Olympic Cell (MOC - apex committee dedicated to evaluating TOPS athlete support proposals)",
        "Sports Authority of India (SAI - apex sports development body managing national training centers)",
        "Indian Olympic Association (IOA - national Olympic committee responsible for Olympic participation)",
        "National Anti-Doping Agency (NADA India - statutory national organization managing anti-doping)"
    ],
    134: [
        "Milan and Cortina d'Ampezzo, Italy (host of 2026 Winter Olympic Games)",
        "Salt Lake City, Utah, USA (host of 2034 Winter Olympic Games event)",
        "Nice and French Alps, France (host of 2030 Winter Olympic Games)",
        "Stockholm and Are, Sweden (candidate Winter Olympic Games host city)"
    ],
    135: [
        "Tampering or Attempted Tampering with any part of Doping Control (Article 2.5 of the World Code)",
        "Possession of a Prohibited Substance by an Athlete Support Person during official team travel",
        "Evading, Refusing, or Failing to Submit to Sample Collection following official notification",
        "Whereabouts Failures involving three missed tests or filing failures within a twelve-month period"
    ],
    137: [
        "A maximum tenure of twelve (12) consecutive years, with or without break, regardless of election results",
        "A maximum tenure of four (4) consecutive years with mandatory retirement from all sports administration",
        "A maximum tenure of twenty-five (25) consecutive years subject to unanimous Executive Committee approval",
        "Unlimited lifetime tenure provided the National Sports Federation maintains annual audited financial accounts"
    ],
    138: [
        "Arjuna Award for Outstanding Performance in Sports and Games (recognizing 4 years of excellence)",
        "Major Dhyan Chand Khel Ratna Award (highest sporting honour recognizing 4 years of achievement)",
        "Dronacharya Award for Outstanding Coaches (recognizing excellence in mentoring national athletes)",
        "Dhyan Chand Award for Lifetime Achievement (recognizing lifelong contribution to sports promotion)"
    ],
    139: [
        "National Dope Testing Laboratory (NDTL, New Delhi - WADA-accredited analytical laboratory)",
        "National Anti-Doping Agency (NADA India - statutory authority managing sample collection)",
        "Sports Authority of India (SAI - apex sports development body managing training infrastructure)",
        "All India Institute of Medical Sciences (AIIMS - premier national tertiary medical center)"
    ],
    140: [
        "A minimum of two (2) years up to a maximum of four (4) years ineligibility",
        "A mandatory lifetime ban from all competitive sports participation globally",
        "A three (3) month suspension and a mandatory public apology to the federation",
        "A written reprimand without any period of competitive sports ineligibility"
    ],
    144: [
        "Subscapularis muscle tear or subscapular neuropathy (loss of active internal rotation control)",
        "Supraspinatus tendon tear with subacromial impingement during active overhead arm elevation",
        "Infraspinatus muscle atrophy resulting from suprascapular nerve entrapment at spinoglenoid notch",
        "Teres minor tendon rupture with loss of active shoulder external rotation in abduction plane"
    ],
    145: [
        "A continuous firm end-feel with slight give and rapid elastic recoil upon release of the applied force",
        "An abrupt bone-to-bone hard stop encountered well before the normal physiological end-range of motion",
        "A soft yielding spongy stop accompanied by visible joint effusion and localized thermal erythema",
        "An absence of any mechanical resistance where the patient halts movement due to extreme pain"
    ],
    146: [
        "The convex femoral condyles roll posteriorly and glide anteriorly on the fixed concave tibial plateau",
        "The convex femoral condyles roll anteriorly and glide posteriorly on the fixed concave tibial plateau",
        "The concave tibial plateau rolls and glides posteriorly on the fixed convex femoral condyle surfaces",
        "The concave tibial plateau rolls anteriorly and glides anteriorly on the fixed femoral condyles"
    ],
    147: [
        "The pelvis sways laterally over the stance limb, dropping the contralateral swinging hemipelvis",
        "The trunk hyperextends backward at heel strike to compensate for weak gluteus maximus extensor torque",
        "The knee remains fully locked in hyperextension throughout the entire single-leg stance phase duration",
        "The ankle is dragged along the floor in rigid equinovarus posture due to anterior tibialis paralysis"
    ],
    148: [
        "A high-velocity, low-amplitude manipulative thrust applied past the physiological limit but within anatomical integrity",
        "A large-amplitude rhythmic oscillatory movement performed within the initial pain-free range of joint excursion",
        "A small-amplitude oscillatory technique delivered at the very beginning of the available range of joint movement",
        "A sustained continuous passive stretch maintained for twenty minutes using external mechanical weights and pulleys"
    ],
    149: [
        "Applying a sustained inferior glide to the glenohumeral joint while the patient actively elevates the arm pain-free",
        "Applying a high-velocity manipulation to the sternoclavicular joint with the arm locked in maximal internal rotation",
        "Performing passive continuous mechanical traction on the cervical spine while the shoulder remains stationary",
        "Applying aggressive static transverse friction massage across the supraspinatus tendon for thirty minutes"
    ],
    150: [
        "Deep Transverse Friction Massage (DTFM) applied perpendicularly across the lesion to promote mobile scar formation",
        "Continuous passive bed rest with strict immobilization of the involved limb in a rigid plastic orthosis",
        "High-voltage electrical stimulation delivered continuously for eight hours to paralyze local sensory nociceptors",
        "Superficial heat pack application combined with complete avoidance of all active upper extremity movement"
    ],
    151: [
        "Isometric contractions of the Deep Neck Flexors (Longus Colli and Longus Capitis) with pressure biofeedback",
        "High-velocity low-amplitude thrust manipulation directed into maximal extension and ipsilateral rotation",
        "Heavy isotonic strengthening of the superficial Sternocleidomastoid and Upper Trapezius muscle groups",
        "Continuous cervical mechanical traction applied at 50% of total body weight for sixty consecutive minutes"
    ],
    152: [
        "To clear the advancing swinging foot and maintain adequate ground clearance during the mid-swing phase",
        "To absorb ground impact forces and cushion downward momentum during the loading response phase",
        "To lock the midtarsal joint into a rigid lever for propulsion during the terminal stance transition",
        "To decelerate forward trunk momentum via eccentric contraction during the terminal swing phase"
    ],
    153: [
        "Infraspinatus, Teres Minor, and Subscapularis providing dynamic inferior and medial compressive vectors against the Deltoid",
        "Pectoralis Major and Latissimus Dorsi pulling the humeral head into superior and anterior displacement against the Acromion",
        "Upper Trapezius and Levator Scapulae elevating the scapula while the Rhomboids downwardly rotate the glenoid fossa",
        "Biceps Brachii and Coracobrachialis pulling the humerus into pure anterior translation during active arm elevation"
    ],
    154: [
        "Approximately 10° of active Ankle Dorsiflexion with the knee fully extended to allow smooth forward progression",
        "Approximately 25° of active Ankle Plantarflexion with the knee flexed to 45° to absorb downward compressive force",
        "Complete rigid locking of the talocrural joint at 0° neutral to prevent any sagittal plane ankle motion",
        "Approximately 30° of active Subtalar Inversion to convert the foot into a flexible shock-absorbing mechanism"
    ],
    156: [
        "A low beam non-uniformity ratio (BNR ≤ 4:1) indicating a uniform acoustic beam that minimizes periosteal hot spots",
        "A high beam non-uniformity ratio (BNR ≥ 10:1) indicating high peak acoustic spikes that maximize thermal heating",
        "A variable beam ratio that changes continuously throughout the treatment session according to tissue impedance",
        "A ratio that measures the rate of battery discharge during continuous ultrasound output delivery modes"
    ],
    157: [
        "High-voltage pulsed current (HVPC) with monophasic twin-peak pulses delivering negative polarity over the wound",
        "Low-frequency alternating current delivered with symmetric biphasic square pulses at visible motor threshold",
        "Continuous direct galvanic current applied with positive polarity for twelve consecutive hours daily",
        "High-frequency interferential current delivered with a 100 Hz beat frequency across four crossing suction pads"
    ],
    158: [
        "To determine the minimum electrical stimulus duration required to excite the nerve at twice the rheobase intensity",
        "To measure the maximum electrical current intensity that a patient can tolerate without reporting severe pain",
        "To calculate the total electrical impedance of the cutaneous skin layers prior to electrotherapy application",
        "To evaluate the speed of muscle relaxation following a maximal tetanic involuntary electrical contraction"
    ],
    160: [
        "The patient sits in a neutral upright posture without slumping, avoiding mechanical tension on the neuraxis",
        "The patient lies prone with the cervical spine placed in full extension and ipsilateral lateral side-bending",
        "The patient lies supine with the bilateral lower extremities elevated to 90° of passive straight leg raising",
        "The patient stands upright with the lumbar spine locked in full extension while holding the breath"
    ],
    161: [
        "Passive accessory Posteroanterior (PA) oscillatory mobilization directed at the hypomobile upper cervical facet joints",
        "High-force passive stretching of the bilateral sternocleidomastoid muscles into maximal cervical extension",
        "Continuous motorized mechanical cervical traction applied at 40% of body weight for forty-five minutes",
        "Applying superficial ice packs over the anterior throat while avoiding all active neck movement therapy"
    ],
    162: [
        "Active nod movements maintaining low pressure stages (22–24 mmHg) without activating superficial neck muscles",
        "Performing rapid cervical flexion against high manual resistance to maximize sternocleidomastoid strength",
        "Holding maximal isometric neck extension for sixty consecutive seconds against a rigid padded headrest",
        "Performing continuous passive circular neck rolls throughout the full available range of cervical motion"
    ],
    163: [
        "Quadriceps strengthening focusing on Vastus Medialis Oblique (VMO) and gluteal neuromuscular hip abductor control",
        "Aggressive open-chain leg extensions performed strictly from 30° of flexion to full terminal hyperextension",
        "Continuous non-weight-bearing immobilization of the knee in a rigid cylinder plaster cast for eight weeks",
        "High-velocity plyometric jump landings performed onto hard wooden floors without prior warm-up drills"
    ],
    164: [
        "Patient in prone lying, examiner passively flexes the knee while maintaining the pelvis flat on the table",
        "Patient in supine lying, examiner elevates the extended leg until radicular sciatic pain is reproduced",
        "Patient in side-lying, examiner abducts and extends the upper hip while allowing it to drop into adduction",
        "Patient in seated position, examiner extends the knee while the patient slumps the thoracic spine"
    ],
    165: [
        "Patient in supine lying, hip flexed to 90°, examiner internally rotates and adducts the hip with axial compression",
        "Patient in prone lying, examiner passively hyperextends the hip while palpating the lumbar facet joints",
        "Patient in side-lying, examiner forcefully abducts the hip against maximal manual isometric resistance",
        "Patient in standing position, examiner applies downward axial compression through the bilateral shoulders"
    ],
    166: [
        "Eversion Stress Test (Talar Tilt in Eversion) and External Rotation Stress Test (Kleiger Test) of the ankle",
        "Anterior Drawer Test performed in 20° of plantarflexion and Talar Tilt Test performed in pure inversion",
        "Thompson Squeeze Test of the calf muscle belly and Windlass Test of the first metatarsophalangeal joint",
        "Squeeze Test of the mid-calf fibula and Posterior Drawer Test performed with the knee flexed at 90°"
    ],
    167: [
        "Patient seated, forearm pronated, examiner resists active wrist extension with radial deviation (Cozen's test)",
        "Patient seated, forearm supinated, examiner resists active wrist flexion with ulnar deviation (Golfer's test)",
        "Patient supine, arm abducted, examiner applies posterior directed force over the anterior humeral head",
        "Patient standing, arm elevated in scapular plane with thumb pointed down, examiner applies downward force"
    ],
    168: [
        "Passive wrist flexion with elbow extension and forearm pronation reproducing pain over the lateral epicondyle",
        "Resisted isometric contraction of the pronator teres muscle reproducing tingling in the median nerve",
        "Tapping over the ulnar nerve behind the medial epicondyle reproducing paresthesia in the little finger",
        "Passive forced hyperextension of the elbow reproducing sharp pain deep inside the olecranon fossa"
    ],
    169: [
        "Passive forearm Supination with the elbow held in 90° of Flexion (biceps tendon becomes taut)",
        "Passive forearm Pronation with the elbow held in full Extension (biceps tendon becomes slack)",
        "Resisted forearm Pronation with the elbow held in full Extension (triceps tendon becomes taut)",
        "Resisted shoulder Abduction with the elbow held in 90° of Flexion (deltoid tendon becomes taut)"
    ],
    170: [
        "Anterior translation of the lateral tibial plateau on the lateral femoral condyle during the loading response phase",
        "Posterior subluxation of the medial tibial plateau behind the medial femoral condyle during terminal stance",
        "Lateral subluxation of the patella over the trochlear groove during active terminal knee extension movement",
        "Pure vertical compression of the medial meniscus between the femoral condyle and tibial plateau surfaces"
    ],
    171: [
        "Dynamic high-load isometric and heavy slow resistance (HSR) loading of the gastrocnemius-soleus complex",
        "Continuous passive bed rest and non-weight-bearing immobilization in a rigid walking boot for twelve weeks",
        "Routine high-dose intratendinous corticosteroid injections administered every two weeks without exercise",
        "High-velocity ballistic drop jumps from 60 cm plyometric boxes performed daily to muscular failure"
    ],
    172: [
        "A large-amplitude rhythmic oscillatory movement performed within the mid-range of available joint excursion",
        "A small-amplitude oscillatory technique delivered at the very beginning of the available range of motion",
        "A high-velocity manipulative thrust applied past the anatomical limit of available joint excursion",
        "A continuous static traction force maintained for thirty minutes using mechanical pulley systems"
    ],
    173: [
        "Patient sits slumped, flexes cervical spine, extends knee, and dorsiflexes ankle; symptom relief with neck extension",
        "Patient lies supine, performs bilateral straight leg raise to 90°, and holds the breath for two minutes",
        "Patient lies prone, flexes both knees to 90°, and hyperextends the lumbar spine against manual resistance",
        "Patient stands upright, side-bends to the painful side, and rotates the head to the contralateral side"
    ],
    174: [
        "Pain centralization: distal radiating symptoms retreat toward the lumbar spine midline with repeated extension",
        "Pain peripheralization: localized back pain radiates down into the distal foot during repeated extension",
        "Static pain constancy: pain intensity remains completely unchanged regardless of directional movement loading",
        "Motor block: immediate complete paralysis of the lower extremity following repeated directional movements"
    ],
    176: [
        "Gastrocnemius and Soleus calf muscles contracting eccentrically to control forward tibial advancement",
        "Quadriceps Femoris muscle group contracting concentrically to accelerate forward body momentum",
        "Hamstring muscle group contracting isometrically to lock the knee joint in full extension posture",
        "Tibialis Anterior muscle contracting concentrically to elevate the medial longitudinal arch"
    ],
    177: [
        "Hip moves into ~20° of Extension; Knee flexes to ~40°–45°; Ankle rapidly Plantarflexes to ~20°",
        "Hip flexes to ~30°; Knee extends to full 0°; Ankle maintains neutral Dorsiflexion at 0°",
        "Hip abducts to ~15°; Knee flexes to ~90°; Ankle fully inverts into ~25° of Inversion",
        "Hip extends to ~45°; Knee hyperextends to ~10°; Ankle dorsiflexes to ~30° of Dorsiflexion"
    ],
    178: [
        "Anterior Deltoid, Supraspinatus, Serratus Anterior, and Upper/Lower Trapezius upward rotators",
        "Pectoralis Major, Latissimus Dorsi, Teres Major, and Subscapularis internal rotator muscles",
        "Rhomboid Major, Rhomboid Minor, Levator Scapulae, and Pectoralis Minor downward rotators",
        "Biceps Brachii, Coracobrachialis, Triceps Brachii long head, and Brachialis flexor muscles"
    ],
    179: [
        "The convex trochlea of the humerus glides posteriorly on the fixed concave trochlear notch of the ulna",
        "The concave trochlear notch of the ulna rolls and glides anteriorly on the fixed convex trochlea humeri",
        "The concave trochlear notch of the ulna rolls anteriorly and glides posteriorly on the convex humerus",
        "The convex radial head rolls and glides posteriorly on the fixed concave capitulum of the humerus"
    ],
    180: [
        "Posterior Deltoid, Infraspinatus, Teres Minor, and Rhomboid muscles horizontal stabilizers",
        "Pectoralis Major, Anterior Deltoid, Coracobrachialis, and Subscapularis flexor muscles",
        "Upper Trapezius, Levator Scapulae, Serratus Anterior, and Subclavius elevation muscles",
        "Triceps Brachii, Latissimus Dorsi, Teres Major, and Lower Trapezius depressor muscles"
    ],
    181: [
        "Posterolateral Corner (PLC) injury with secondary disruption of the Posterior Cruciate Ligament (PCL)",
        "Isolated complete rupture of the Anterior Cruciate Ligament (ACL) without secondary rotatory laxity",
        "Isolated Grade III sprain of the Superficial Medial Collateral Ligament (sMCL) at femoral origin",
        "Patellar tendon complete rupture at the inferior pole of the patella with proximal patella alta"
    ],
    182: [
        "Restricting active open-chain hamstring contractions for 6 to 8 weeks to avoid posterior tibial graft strain",
        "Initiating heavy open-chain hamstring curls with maximal 1RM loads on post-operative day one immediately",
        "Immobilizing the knee in 90° of continuous flexion in a rigid cylinder plaster cast for eight weeks",
        "Performing aggressive passive knee hyperextension stretching beyond 10° of recurvatum twice daily"
    ],
    183: [
        "Bony humeral retroversion with posterior capsular tightness (physiological non-pathological adaptation)",
        "Pathological posterior capsular contracture requiring immediate arthroscopic surgical capsular release",
        "Complete structural rupture of the subscapularis tendon with anterior glenohumeral dislocation",
        "Severe septic arthritis of the glenohumeral joint requiring emergency intravenous antibiotic therapy"
    ],
    184: [
        "Dynamic rotator cuff strengthening, periscapular neuromuscular control, and sleeper stretching for posterior capsule",
        "High-force passive stretching of the anterior joint capsule into extreme external rotation beyond 140°",
        "Immobilizing the throwing shoulder in a rigid abduction sling for eight consecutive weeks without exercise",
        "Applying superficial ice packs over the subacromial space without performing any active physical therapy"
    ],
    185: [
        "Contralateral pelvic drop (Trendelenburg sign) and dynamic knee valgus driven by Gluteus Medius weakness",
        "Excessive hip extension and knee hyperextension driven by overactive Hamstring muscle group recruitment",
        "Excessive ankle supination and high longitudinal arch elevation driven by Tibialis Posterior spasticity",
        "Anterior pelvic tilt and lumbar hyperextension driven exclusively by isolated Rectus Abdominis weakness"
    ],
    186: [
        "Targeted hip abductor and external rotator strengthening combined with running cadence retraining (+7.5% to 10%)",
        "Continuous passive motorized knee stretching on a mechanical table for six consecutive weeks without exercise",
        "Heavy open-chain knee extensions performed strictly from 90° to 0° with maximal resistance loads to failure",
        "Running daily marathons on hard asphalt road surfaces while wearing heavy weighted combat boots"
    ],
    187: [
        "Medial Epicondylalgia ('Golfer's Elbow' / tendinopathy of Pronator Teres and Flexor Carpi Radialis)",
        "Lateral Epicondylalgia (Tennis Elbow involving Extensor Carpi Radialis Brevis and Extensor Digitorum)",
        "Posterior interosseous nerve entrapment under the Arcade of Frohse with radial tunnel syndrome",
        "Complete avulsion rupture of the triceps brachii tendon insertion at the olecranon process"
    ],
    188: [
        "Isolated eccentric loading of the wrist flexor and pronator musculature using a flexible rubber resistance bar",
        "Forceful high-velocity manipulation of the ulnar nerve behind the medial epicondyle into full extension",
        "Applying continuous shortwave diathermy over the lateral epicondyle for sixty consecutive minutes daily",
        "Immobilizing the entire upper extremity in a long-arm plaster cast for twelve consecutive weeks"
    ],
    189: [
        "Chronic Ankle Instability (CAI) with combined mechanical ligamentous laxity and sensorimotor deficits",
        "Acute undisplaced bimalleolar fracture of the distal tibia and fibula requiring emergency open reduction",
        "Deep vein thrombosis of the posterior tibial vein with complete occlusion of venous drainage channels",
        "Complete avulsion rupture of the Achilles tendon insertion from the posterior calcaneal tuberosity"
    ],
    190: [
        "Multi-component neuromuscular balance training, wobble-board drills, perturbation, and dynamic cutting progressions",
        "Complete non-weight-bearing bed rest and immobilization in a rigid walking cast for six consecutive months",
        "Routine surgical reconstruction of the lateral ankle ligaments on all patients regardless of rehab trial",
        "Applying superficial heat packs over the lateral malleolus without performing any active rehabilitation"
    ],
    191: [
        "Sever's Disease (Calcaneal Apophysitis / Traction Osteochondrosis of the secondary calcaneal center)",
        "Plantar Fasciopathy with proximal fascial micro-tears and calcaneal traction spur formation",
        "Stress fracture of the distal fifth metatarsal styloid process (Jones fracture non-union)",
        "Tarsal Tunnel Syndrome with compression of the medial and lateral plantar nerve branches"
    ],
    192: [
        "Sever's disease is self-limiting and resolves completely upon skeletal maturity with zero long-term disability",
        "Sever's disease is a progressive malignant condition requiring immediate surgical resection of the heel",
        "The athlete must permanently retire from all physical activity and sports participation for life",
        "The athlete will require lifelong dependence on external wheelchair mobility due to bone failure"
    ],
    194: [
        "Anterior tibial cortex is on the tension side of the bone and has poor vascularity, leading to high non-union rates",
        "Anterior tibial cortex is composed exclusively of soft hyaline cartilage that dissolves under body weight",
        "Anterior tibial cortex fractures always heal spontaneously within 48 hours without any training modification",
        "Anterior tibial cortex is on the compression side where bone formation occurs excessively within days"
    ],
    195: [
        "LSI ≥ 90% across quadriceps/hamstrings and hop tests, high psychological readiness (ACL-RSI > 65), and symmetry",
        "LSI ≥ 50% on quadriceps isokinetic testing with ongoing 20° dynamic knee valgus collapse during jump landings",
        "Passing a simple 10-meter straight-line jogging test without swelling regardless of strength testing scores",
        "Mandatory 10-year post-operative rest period regardless of physical recovery and objective testing results"
    ],
    196: [
        "Biological graft remodeling and ligamentization require 12–24 months; early return increases secondary tear rates",
        "Athletes lose cardiovascular aerobic conditioning completely if they return to competitive matches after 6 months",
        "Bone mineral density around the tibial and femoral tunnels drops to absolute zero between 6 and 12 months post-op",
        "World Anti-Doping Agency regulations strictly ban sports participation within 12 months of any joint surgery"
    ],
    197: [
        "High external knee valgus moment, internal hip rotation, and shallow knee flexion landing increase peak ACL strain",
        "Deep knee flexion landings (>60°) with neutral frontal knee alignment generate maximal dangerous ACL strain",
        "External hip rotation combined with wide foot placement completely eliminates all ground reaction forces",
        "Knee valgus moments have zero biomechanical interaction with anterior cruciate ligament tensile loading"
    ],
    198: [
        "Video self-modeling feedback and augmented external focus cues encouraging deeper knee flexion and neutral alignment",
        "Instructing the athlete to keep the knee completely stiff and straight upon ground contact to absorb force",
        "Applying ice packs to the knee while walking backwards on a flat track without any neuromuscular coaching cues",
        "Immobilizing the lower extremity in a rigid long-leg brace locked in full extension during all sports drills"
    ],
    200: [
        "Relative rest from fast bowling for 8–12 weeks, lumbo-pelvic core stabilization in neutral spine, and graded return",
        "Immediate return to bowling 100 overs per week with aggressive lumbar hyperextension stretching on the field",
        "Immediate posterior lumbar spinal fusion surgery with pedicle screw fixation within 24 hours of diagnosis",
        "Permanent complete bed rest for five consecutive years in a rigid full-body plaster jacket immobilization"
    ]
}

new_data = []
for q in DATA_TEST_2:
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

print(f"Test 2 New Stats: Avg Ratio = {sum(ratios)/len(ratios):.2f}, Worst Ratio = {max(ratios):.2f}, Max Diff = {max(diffs)}")

with open("data_test2.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 2 (100 Questions)\n")
    f.write("# Balanced Distractors, Symmetrical Lengths, No Simplistic Foils, Standard Book Citations\n\n")
    f.write("DATA_TEST_2 = " + json.dumps(new_data, indent=4) + "\n")
print("Saved data_test2.py")
