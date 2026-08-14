import json
from data_test3 import DATA_TEST_3

fixes_test3 = {
    201: [
        "Enhanced motor unit recruitment, increased motor neuron firing rates, and improved synchronization",
        "Rapid parallel muscle fiber hyperplasia and structural sarcomere proliferation in working myofibrils",
        "Marked proliferation of intramuscular connective tissue and elevated collagen cross-linking density",
        "Selective hypertrophy of slow-twitch Type I oxidative muscle fibers and capillary proliferation"
    ],
    202: [
        "Mechanistic Target of Rapamycin Complex 1 (mTORC1) stimulating downstream p70S6K and 4E-BP1 pathways",
        "AMPK-PGC1alpha pathway stimulating mitochondrial biogenesis and electron transport gene transcription",
        "Ubiquitin-proteasome pathway accelerating myofibrillar protein degradation and muscle fiber atrophy",
        "Calcineurin-NFAT pathway inducing slow-twitch oxidative muscle fiber phenotype gene transformation"
    ],
    205: [
        "RER = 1.00 (indicating 100% carbohydrate oxidation)",
        "RER = 0.70 (indicating 100% lipid and fat oxidation)",
        "RER = 0.85 (indicating 50% fat and 50% carbohydrate)",
        "RER = 0.60 (indicating pure ketone body oxidation)"
    ],
    206: [
        "Mechanical cross-bridge detachment resistance, recruitment of the structural protein Titin, and strain stiffening",
        "Rapid enzymatic hydrolysis of adenosine triphosphate by fast myosin heavy chain adenosine triphosphatases",
        "Selective inhibition of high-threshold Type IIx motor units mediated by the Golgi tendon organ reflex",
        "Complete elimination of passive elastic muscle tension within the parallel collagen connective networks"
    ],
    208: [
        "1.6 to 2.2 grams per kilogram of body weight per day distributed evenly across 4 to 6 daily meals",
        "0.6 to 0.8 grams per kilogram of body weight per day consumed exclusively in one single evening meal",
        "3.5 to 5.0 grams per kilogram of body weight per day consumed exclusively as free amino acid drinks",
        "Zero dietary protein intake, relying completely on high-dose dietary fats and exogenous ketone drinks"
    ],
    209: [
        "On the medial aspect of the calf, at the level of the maximum calf girth, pinched vertically with knee at 90°",
        "On the lateral aspect of the fibular head, at the level of minimum calf girth, pinched horizontally at 0°",
        "Along the posterior midline of the Achilles tendon, at the level of the malleoli, pinched obliquely at 45°",
        "Directly over the tibial tuberosity, at the level of the patellar tendon, pinched vertically with leg flat"
    ],
    210: [
        "A balanced Mesomorph with high muscularity, low relative fatness, and moderate linearity",
        "An extreme Endomorph characterized by predominant relative adiposity and soft contours",
        "A pure Ectomorph characterized by extreme linearity, narrow trunk, and minimal muscle",
        "A central somatotype where fatness, muscularity, and linearity contribute in equal parts"
    ],
    211: [
        "Increases in physiological arousal beyond an optimal threshold cause a sudden, catastrophic drop in performance",
        "High cognitive anxiety linearly enhances fine motor precision and completely eliminates all athletic errors",
        "Performance is completely unaffected by physiological arousal when cognitive state anxiety is highly elevated",
        "Athletes experience instantaneous complete loss of conscious cognitive awareness during tournament matches"
    ],
    212: [
        "DSI = Ballistic Peak Force / Isometric Peak Force; score <0.60 indicates a need for ballistic power training",
        "DSI = Concentric Velocity / Eccentric Velocity; score <0.60 indicates a need for aerobic base conditioning",
        "DSI = Total Body Mass / Barbell Load; score <0.60 indicates a need for immediate caloric dietary restriction",
        "DSI = Vertical Jump Height / Flight Time; score <0.60 indicates a need for non-weight-bearing bed resting"
    ],
    213: [
        "The probability that a patient with a positive test result truly has the pathology ($PPV = TP / [TP + FP]$)",
        "The probability that a patient with a negative test result is truly free of disease ($NPV = TN / [TN + FN]$)",
        "The proportion of patients with the condition who test positive on the index test ($Sens = TP / [TP + FN]$)",
        "The proportion of patients without condition who test negative on index test ($Spec = TN / [TN + FP]$)"
    ],
    214: [
        "A negative test result virtually rules out the target pathology (very strong diagnostic evidence)",
        "A negative test result confirms the presence of the disease with absolute clinical certainty",
        "The diagnostic test has zero clinical utility and should be excluded from clinical examination",
        "The test result indicates a 90% probability of an adverse allergic reaction to physical therapy"
    ],
    215: [
        "Incidence measures new injury cases per unit of exposure; Prevalence measures the proportion of injured athletes",
        "Incidence measures the total financial cost of treatment; Prevalence measures the number of days lost from play",
        "Incidence measures non-contact soft tissue injuries; Prevalence measures direct high-velocity bone fractures",
        "Incidence measures injuries in female athletes; Prevalence measures injuries in male professional athletes"
    ],
    216: [
        "The ratio of true positive probability to false positive probability ($LR+ = \\text{Sensitivity} / [1 - \\text{Specificity}]$)",
        "The ratio of false negative probability to true negative probability ($LR- = [1 - \\text{Sensitivity}] / \\text{Specificity}$)",
        "The ratio of true positive probability to true negative probability ($DOR = [\\text{Sensitivity} \\times \\text{Specificity}] / \\text{Error}$)",
        "The ratio of test sensitivity to positive predictive rate ($PPR = [\\text{Sensitivity} \\times \\text{Prevalence}] / \\text{Total}$)"
    ],
    217: [
        "The proportion of an athletic cohort that develops a new injury ($IP = \\text{New Cases} / \\text{Population at Risk}$)",
        "The total number of injuries per 1,000 player-hours of match play ($IR = \\text{Total Injuries} / \\text{Total Hours}$)",
        "The total number of recurrent injuries occurring within 2 months ($RR = \\text{Recurrent Cases} / \\text{Total Injuries}$)",
        "The average duration of time lost from training per injured player ($Severity = \\text{Days Lost} / \\text{Total Injuries}$)"
    ],
    218: [
        "Creating alternating peripheral vasoconstriction and vasodilation to stimulate venous/lymphatic pumping and reduce muscle edema",
        "Inducing continuous progressive vasoconstriction to completely halt capillary circulation throughout the whole lower extremity",
        "Permanently destroying subcutaneous adipose tissue cells through rapid localized cyclic temperature shocks to the skin",
        "Directly stimulating satellite cell differentiation and myofibrillar protein accretion within fatigued muscle fibers"
    ],
    219: [
        "Increases intramuscular Carnosine concentration, which acts as an intracellular physicochemical buffer against hydrogen ion accumulation",
        "Directly stimulates central nervous system beta-2 adrenergic receptors to trigger acute free fatty acid mobilization and oxidation",
        "Inactivates mitochondrial pyruvate dehydrogenase to prevent cellular lactic acid production during supramaximal sprinting bouts",
        "Suppresses hepatic gluconeogenesis to maintain constant circulating blood glucose concentrations throughout all exercise bouts"
    ],
    220: [
        "High test-retest measurement error and poor trial-to-trial reliability (a reliable athletic test should have a $CV < 5\\%$)",
        "Exceptional test reliability and high diagnostic accuracy suitable for detecting very small changes in athletic performance",
        "That the athlete has achieved a peak state of physical conditioning and is fully prepared for tournament competition play",
        "That the test protocol has zero interaction with sample size or statistical power calculations in clinical sports trials"
    ],
    221: [
        "The mean concentric velocity produced during the final successful repetition of a true 1RM attempt to concentric failure",
        "The highest movement velocity achieved during an unloaded explosive jump squat on a linear position transducer device",
        "The bar speed at which an athlete must terminate a training set to prevent acute neuromuscular fatigue and exhaustion",
        "The average movement velocity maintained during steady-state aerobic jogging on an indoor motorized exercise treadmill"
    ],
    222: [
        "Category S2; strictly prohibited AT ALL TIMES (both In-Competition and Out-of-Competition periods)",
        "Category S6; prohibited In-Competition only above specified analytical laboratory concentration thresholds",
        "Category P1; prohibited exclusively in target precision sports such as archery and rifle shooting events",
        "Category S9; prohibited exclusively via systemic oral and rectal pharmacological administration routes"
    ],
    223: [
        "Increases eccentric hamstring strength and shifts the muscle torque-angle curve toward longer muscle lengths (increasing fascicle length)",
        "Increases concentric quadriceps strength to ensure the knee locks in complete hyperextension during high-speed sprint acceleration",
        "Selectively atrophies the biceps femoris short head to allow unconstrained knee flexion during high-speed cutting maneuvers",
        "Replaces damaged contractile sarcomeres with rigid fibrous scar tissue that resists tensile mechanical stretching and strain"
    ],
    224: [
        "The initial rapid shock wave produced within 10–30 ms of heel strike as the effective lower extremity mass is rapidly decelerated",
        "The total mechanical work generated by the gastrocnemius-soleus complex during the terminal stance propulsion push-off phase",
        "The frictional drag force exerted by the track surface opposing forward horizontal center of mass displacement during stance",
        "The gravitational pull exerted by the Earth's center of mass upon the runner during the aerial flight phase of running"
    ],
    225: [
        "Parasympathetic withdrawal and sympathetic dominance, indicating accumulated systemic fatigue, incomplete recovery, or overreaching",
        "Exceptional cardiovascular aerobic adaptation and high neuromuscular readiness for maximum competitive tournament match play",
        "Total exhaustion of all hepatic glycogen stores requiring immediate intravenous dextrose administration in hospital settings",
        "Structural rupture of the left ventricular myocardium requiring immediate emergency surgical open chest intervention"
    ],
    226: [
        "Failing to reject a false null hypothesis (false negative); Statistical Power ($1 - \\beta$) is the probability of detecting a true effect",
        "Rejecting a true null hypothesis (false positive); Statistical Power ($1 - \\alpha$) is the probability of making a Type I error",
        "The mathematical difference between the baseline pre-test score and the post-intervention follow-up score in clinical trials",
        "The error that occurs when study investigators intentionally falsify data records in a randomized controlled trial setting"
    ],
    227: [
        "1. Establish injury extent -> 2. Identify injury etiology/mechanisms -> 3. Introduce preventive measures -> 4. Assess effectiveness",
        "1. Perform surgery -> 2. Immobilize in cast -> 3. Prescribe pharmacological analgesics -> 4. Retire athlete from sports play",
        "1. Screen athletes with radiographs -> 2. Apply passive modalities -> 3. Administer injections -> 4. Clear for full return",
        "1. Measure maximal 1RM strength -> 2. Prescribe high-volume training -> 3. Test sprint speed -> 4. Evaluate league standing"
    ],
    228: [
        "Cutaneous vasodilation and sudden cessation of the skeletal muscle venous pump, causing peripheral venous pooling and decreased cerebral perfusion",
        "Rapid hyperventilation causing extreme respiratory acidosis and direct chemical suppression of the brainstem respiratory control centers",
        "Excessive intracellular glycogen accumulation in cerebral cortex neurons causing acute localized brain edema and neural dysfunction",
        "Complete cessation of cardiac electrical conduction caused by sudden localized myocardial freezing in cold ambient environmental air"
    ],
    229: [
        "Reduces the oxygen cost of submaximal exercise ($\\dot{V}O_2$) and improves mitochondrial oxidative efficiency via Nitric Oxide-mediated vasodilation",
        "Directly stimulates beta-2 adrenergic receptors to trigger acute free fatty acid mobilization and systemic thermogenesis in tissues",
        "Inhibits mitochondrial pyruvate dehydrogenase to prevent cellular lactic acid production during all-out high-intensity sprinting",
        "Suppresses hepatic gluconeogenesis to maintain constant circulating blood glucose concentrations during prolonged exercise bouts"
    ],
    230: [
        "The final fixation or tracking gaze directed toward a specific target for a critical duration prior to movement initiation, optimizing accuracy",
        "Closing both eyes tightly during the final execution phase of an athletic motor skill to eliminate external visual distractions",
        "A rapid saccadic eye movement scanning multiple irrelevant background objects during intense competitive athletic tournament play",
        "A state of deep hypnosis where the athlete becomes completely unresponsive to external verbal coaching feedback and instructions"
    ],
    231: [
        "Slow stretch-shortening cycle (SSC) capability and neuromuscular movement strategy, evaluating explosive force generation relative to movement duration",
        "Pure maximal isometric force production of the quadriceps femoris without any stretch-shortening cycle contribution during testing",
        "The total aerobic metabolic capacity and running economy of an endurance athlete during steady-state submaximal running exercise",
        "The lateral shear force vector generated across the first metatarsophalangeal joint during terminal stance propulsion push-off"
    ],
    232: [
        "Allocation Concealment prevents selection bias before treatment assignment; Blinding prevents performance and detection bias after assignment",
        "Allocation Concealment is used exclusively in animal studies; Blinding is used exclusively in human surgical clinical trial settings",
        "Allocation Concealment prevents loss to follow-up; Blinding eliminates the necessity for statistical hypothesis testing in trials",
        "Allocation Concealment refers to hiding financial funding sources; Blinding refers to withholding diagnostic laboratory test results"
    ],
    233: [
        "Upgrading state-owned sports training facilities into world-class academies for Olympic disciplines across all Indian States/UTs",
        "Conducting commercial retail marketing and merchandising campaigns for private sporting goods manufacturers across urban centers",
        "Managing stadium ticket distribution, catering logistics, and VIP security operations on tournament match days in major cities",
        "Providing specialized clinical veterinary medical care for equestrian race horses competing in national championship events"
    ],
    234: [
        "Milan and Cortina d'Ampezzo (Lombardy and Veneto regions), Italy",
        "Rome and Florence (Lazio and Tuscany central regions), Italy",
        "Turin and Sestriere (Piedmont western Alpine region), Italy",
        "Naples and Capri (Campania southern Mediterranean region), Italy"
    ],
    235: [
        "Evading sample collection or refusing/failing to submit to sample collection without compelling justification after official notification",
        "Purchasing sealed commercial electrolyte drinks and protein supplements from a licensed pharmacy store in accordance with food law",
        "Carrying a certified sports physical therapy treatment kit containing sterile gauze bandages into an arena during team training",
        "Transporting sports equipment, uniforms, and competitive bicycles across international borders for authorized sporting events"
    ],
    236: [
        "Category S3; prohibited at all times, with strict therapeutic inhaled dosage thresholds permitted for asthma",
        "Category S1; strictly prohibited at all times in all forms with zero therapeutic exemptions permitted in sports",
        "Category P1; prohibited exclusively in target precision sports such as archery and rifle shooting events",
        "Category S6; prohibited exclusively during the 12-hour In-Competition testing window across all Olympic sports"
    ],
    237: [
        "70 years of age (no individual aged 70 or above can be elected or continue as an office bearer)",
        "60 years of age (mandatory retirement upon reaching the standard age of government superannuation)",
        "80 years of age (subject to annual medical fitness certification and general body approval votes)",
        "There is zero age limit specified under the National Sports Development Code of India guidelines"
    ],
    238: [
        "Outstanding coaching contribution over a period of 20 years or more in producing world-class athletes",
        "Winning an individual gold medal in Olympic track and field sprint events over four Olympic cycles",
        "Lifetime contribution to sports journalism and television broadcasting across national news channels",
        "Constructing the largest public municipal sports stadium facility in a state capital territory"
    ],
    239: [
        "A statutory body established by an Act of Parliament empowered to conduct sample collection, investigations, and adjudication",
        "A private non-governmental sports club operating under the Indian Societies Registration Act of 1860 in municipal cities",
        "A commercial pharmaceutical company licensed to manufacture sports electrolyte and nutritional supplements for elite teams",
        "A division of the Ministry of Finance responsible exclusively for collecting customs import duty on foreign sports gear"
    ],
    240: [
        "Four (4) years ineligibility (unless the athlete can establish that the violation was not intentional)",
        "Two (2) years ineligibility with mandatory community service in a sports administration office setting",
        "Six (6) months suspension and a written warning issued by the national sports federation authorities",
        "A mandatory lifetime ban from all competitive sports participation globally without right of appeal"
    ],
    241: [
        "At 20°–30° flexion, hamstring spasm is minimized and the posterior meniscal wedge effect does not block anterior tibial translation",
        "At 90° flexion, the posterior cruciate ligament is completely relaxed, allowing unconstrained pure anteromedial tibial translation",
        "The Lachman test places the medial collateral ligament under supramaximal tensile strain to test secondary capsular restraints",
        "The test selectively isolates the posterolateral bundle of the posterior cruciate ligament in terminal knee hyperextension"
    ],
    242: [
        "The anteriorly subluxated lateral tibial plateau spontaneously reduces posteriorly with a sudden, visible clunk as the ITB shifts",
        "The patella dislocates laterally over the lateral femoral condyle with an audible popping sound and immediate quadriceps spasm",
        "The posterior cruciate ligament slips anteriorly over the intercondylar notch with severe pain and localized joint hemarthrosis",
        "The medial meniscus posterior horn becomes wedged between the tibiofemoral articular surfaces, locking the joint in flexion"
    ],
    243: [
        "Isolated injury to the Posterolateral Corner (PLC: FCL, Popliteus tendon, Popliteofibular ligament)",
        "Combined injury to both the Posterior Cruciate Ligament (PCL) and Posterolateral Corner (PLC) complex",
        "Isolated disruption of the Superficial Medial Collateral Ligament (sMCL) at the tibial insertional site",
        "Isolated complete tear of the Anteromedial bundle of the Anterior Cruciate Ligament (ACL) midsubstance"
    ],
    244: [
        "Long Head of Biceps Brachii Tendon (Tenosynovitis / Tendinopathy) or Superior Labral (SLAP) lesion",
        "Supraspinatus muscle tendon insertion at the superior facet of the greater tuberosity of the humerus",
        "Infraspinatus muscle belly within the infraspinous fossa of the dorsal scapular osseous framework",
        "Subscapularis muscle insertion at the lesser tuberosity of the proximal anterior humeral shaft"
    ],
    245: [
        "Pain deep inside the joint provoked with arm in 90° flexion, 10° adduction, thumb down, and relieved with thumb up (supination)",
        "Pain provoked exclusively when the arm is fully elevated overhead in 180° of abduction with the forearm fully supinated",
        "Pain relieved when the examiner applies downward axial traction on the abducted arm in 90° of horizontal abduction",
        "Pain occurring exclusively over the acromioclavicular joint in both internal and external rotation positions alike"
    ],
    246: [
        "Femoroacetabular Impingement (FAI syndrome - Cam/Pincer) or Anterior Acetabular Labral Tear",
        "Greater Trochanteric Pain Syndrome (GTPS / Gluteal Tendinopathy at greater trochanter)",
        "Iliopsoas bursitis and snapping hip syndrome friction over the iliopectineal eminence",
        "Piriformis syndrome with entrapment of the sciatic nerve in the greater sciatic notch"
    ],
    247: [
        "Anterior groin pain indicates intra-articular Hip pathology; Posterior buttock pain indicates Sacroiliac Joint (SIJ) pathology",
        "Anterior groin pain indicates SIJ pathology; Posterior buttock pain indicates intra-articular hip joint pathology",
        "Anterior groin pain indicates knee cruciate tear; Posterior buttock pain indicates gastrocnemius muscle belly strain",
        "Anterior groin pain indicates Achilles tendinitis; Posterior buttock pain indicates plantar fasciopathy enthesopathy"
    ],
    248: [
        "Achilles Tendon (absence of passive ankle plantarflexion upon squeezing the calf muscle belly indicates complete Achilles rupture)",
        "Plantaris muscle tendon belly within the posterior compartment of the calf (absence of foot inversion upon calf squeeze)",
        "Tibialis posterior muscle tendon behind the medial malleolar groove (absence of navicular elevation upon calf squeeze)",
        "Peroneus longus muscle tendon behind the lateral malleolar groove (absence of first ray depression upon calf squeeze)"
    ],
    249: [
        "De Quervain's Tenosynovitis (stenosing tenosynovitis of Abductor Pollicis Longus and Extensor Pollicis Brevis in 1st compartment)",
        "Carpal Tunnel Syndrome involving compression of the median nerve beneath the transverse carpal ligament flexor retinaculum",
        "Triangular Fibrocartilage Complex (TFCC) tear along the ulnar border of the wrist joint with distal radioulnar instability",
        "Scapholunate ligament dissociation with dorsal scaphoid instability, wrist collapse, and Terry Thomas radiographic sign"
    ],
    250: [
        "Reproduction of tingling, numbness, or paresthesia in the sensory distribution of the Median Nerve within 60 seconds",
        "Reproduction of numbness and paresthesia in the little finger and ulnar border of the ring finger within 60 seconds",
        "Sharp pain localized directly over the anatomical snuffbox without any distal paresthesia or sensory loss symptoms",
        "Immediate complete motor paralysis of all extrinsic wrist and finger extensor muscle groups within 60 seconds"
    ],
    251: [
        "The human body adapts specifically to the physiological, biomechanical, metabolic, and neuromuscular demands placed upon it",
        "All physical training adaptations are completely non-specific and transfer identically across all sports disciplines equally",
        "Exercise resistance must be continuously decreased over time to allow physiological structural cellular adaptations",
        "Athletes must train only while in a state of severe glycogen depletion to force metabolic mitochondrial adaptations"
    ],
    252: [
        "Three eccentric exercises ('The Extender', 'The Diver', 'The Slider') performed at long muscle lengths, accelerating return to sport",
        "Seated short-range leg curls performed strictly on a gym machine with the hip held in 45° of extension to isolate the muscle belly",
        "Passive static hamstring stretching on a massage table for 30 minutes daily without any active eccentric strengthening drills",
        "Complete non-weight-bearing immobilization of the lower extremity in a long-leg rigid plaster cast for eight consecutive weeks"
    ],
    253: [
        "A small-amplitude rhythmic oscillatory movement performed at the beginning of range, used for pain relief via mechanoreceptor gating",
        "A large-amplitude oscillatory movement performed well into the end-range tissue resistance barrier to stretch tight joint capsules",
        "A high-velocity, low-amplitude thrust manipulation performed past the anatomical limit to realign displaced osseous joint surfaces",
        "A continuous static traction force maintained for twenty minutes using external mechanical weight and motorized pulley systems"
    ],
    254: [
        "A large-amplitude rhythmic oscillatory movement performed deep into tissue resistance, stretching the pathological end-range barrier",
        "A small-amplitude oscillation performed within the initial pain-free range of joint excursion to relieve acute inflammatory pain",
        "A high-velocity manipulative thrust applied past the anatomical joint limit to mechanically rupture intra-articular adhesions",
        "A sustained continuous passive stretch maintained for thirty minutes using mechanical traction couches and heavy hanging weights"
    ],
    255: [
        "Isometric contraction of the tight muscle (antagonist) followed by relaxation and stretch, utilizing Autogenic GTO Inhibition",
        "Concentric contraction of the agonist muscle followed by rapid ballistic stretching, utilizing the dynamic stretch reflex loop",
        "Continuous electrical stimulation applied to the motor point to permanently paralyze the intrafusal muscle spindle fiber units",
        "Passive static stretching maintained for two hours while the patient is sleeping under continuous hospital sedation protocols"
    ],
    256: [
        "Mechanical displacement of disc nuclear material causing internal obstruction, characterized by rapid symptom Centralization",
        "Permanent structural contracture of periarticular soft tissues requiring progressive end-range mechanical stretching therapy",
        "Pain produced exclusively by prolonged static poor posture without any internal mechanical joint derangement or disc displacement",
        "Systemic inflammatory autoimmune arthritis requiring continuous high-dose pharmacological immunosuppressive medication regimens"
    ],
    257: [
        "The convex humeral head rolls superiorly and glides (slides) INFERIORLY on the concave glenoid fossa",
        "The convex humeral head rolls superiorly and glides superiorly on the concave glenoid fossa in the same path",
        "The concave glenoid fossa rolls inferiorly on the fixed convex humeral head surface during active elevation",
        "The humeral head undergoes pure anterior translation without any angular rolling motion across the joint surface"
    ],
    258: [
        "The concave tibial plateau rolls and glides (slides) ANTERIORLY in the same direction on the fixed convex femoral condyles",
        "The concave tibial plateau rolls anteriorly and glides posteriorly on the fixed convex femoral condyles in opposite paths",
        "The convex femoral condyles roll anteriorly and glide anteriorly on the fixed concave tibial plateau during movement",
        "The tibial plateau undergoes pure medial translation without any angular rolling across the articular surface"
    ],
    259: [
        "Shock absorption, weight-bearing stability, and preservation of progression via eccentric quadriceps and pretibial action",
        "Propelling the body center of mass forward into the flight phase via concentric gastrocnemius-soleus calf plantarflexion",
        "Locking the knee joint in full hyperextension to minimize metabolic energy expenditure during the single-leg stance phase",
        "Maximizing vertical flight time and elevating the center of mass to prepare for the subsequent advancing swing phase"
    ],
    260: [
        "The pelvis drops downward on the contralateral swing limb side due to weakness or insufficiency of the ipsilateral Gluteus Medius",
        "The trunk hyperextends backward at initial contact to compensate for weakness of the Gluteus Maximus extensor muscle group",
        "The patient excessively flexes the hip and knee during swing to clear a paralyzed dropping foot (classic Steppage gait)",
        "The stance knee collapses into sudden hyperextension (recurvatum) due to weakness of the Quadriceps Femoris muscle group"
    ],
    261: [
        "A backward lurch of the trunk at initial contact to maintain the line of gravity behind the hip axis, compensating for weak extensors",
        "A lateral shift of the trunk over the stance limb to reduce the moment arm of the hip abductor muscle group during single stance",
        "Excessive plantarflexion of the stance ankle to lift the pelvis and allow clearance for a stiff contralateral swing limb",
        "Bilateral alternating lateral trunk sway during walking caused by generalized muscular dystrophy (classic Waddling gait pattern)"
    ],
    262: [
        "Excessive hip and knee flexion during swing to lift the advancing limb and clear a paralyzed or weak dorsiflexing foot",
        "The patient rises onto the toes of the stance limb to create vertical clearance for a stiff contralateral limb (Vaulting)",
        "The swinging limb circumducts outward in a wide semi-circular arc to advance forward in the sagittal plane (Circumduction)",
        "The knee is maintained in continuous rigid hyperextension throughout the entire gait cycle duration to avoid collapse"
    ],
    263: [
        "A 2:1 overall ratio: for every 3° of total arm elevation, ~2° occurs at Glenohumeral joint and ~1° at Scapulothoracic articulation",
        "A 1:1 ratio: glenohumeral elevation and scapulothoracic upward rotation contribute in exact equal proportions across the arc",
        "A 3:1 ratio: glenohumeral elevation contributes 3° for every 1° of scapulothoracic downward rotation throughout elevation",
        "A 1:2 ratio: scapulothoracic upward rotation contributes twice as much motion as glenohumeral elevation during arm movement"
    ],
    264: [
        "Upper Trapezius, Lower Trapezius, and Serratus Anterior upward rotators",
        "Pectoralis Major, Latissimus Dorsi, and Teres Major internal rotators",
        "Rhomboid Major, Rhomboid Minor, and Levator Scapulae downward rotators",
        "Subscapularis, Supraspinatus, and Infraspinatus rotator cuff muscles"
    ],
    265: [
        "In open chain, the Tibia externally rotates on the fixed Femur; in closed chain, Femur internally rotates on fixed Tibia in extension",
        "In open chain, the Tibia internally rotates on the fixed Femur; in closed chain, Femur externally rotates on fixed Tibia in extension",
        "The patella rotates medially by 45° to lock the patellofemoral joint into the lateral trochlear facet groove in terminal extension",
        "The posterior cruciate ligament wraps around the anterior cruciate ligament to lock the joint in full terminal knee flexion"
    ],
    266: [
        "Popliteus muscle (unrotates the locked knee joint)",
        "Vastus Medialis Oblique (VMO) muscle component",
        "Gastrocnemius medial head muscle belly unit",
        "Biceps Femoris long head muscle tendon unit"
    ],
    267: [
        "Constructive interference of two medium-frequency AC currents (e.g., 4000/4100 Hz), generating a 100 Hz beat frequency in deep tissue",
        "Direct application of a high-voltage monophasic direct current through two small active probe electrodes over the motor points",
        "Synchronized application of pulsed shortwave diathermy and therapeutic ultrasound across a single combined transducer sound head",
        "Mechanical vibration delivered by a piezoelectric quartz crystal operating at an acoustic resonant frequency of 1 MHz continuously"
    ],
    268: [
        "A 2500 Hz sinusoidal AC current in 50 bursts/sec (50 Hz burst frequency with 10 ms burst on and 10 ms inter-burst off interval)",
        "A continuous direct galvanic current delivered at 100 mA for thirty consecutive minutes without any programmed rest intervals",
        "A high-voltage monophasic twin-peaked pulsed current with a pulse duration of 20 microseconds delivered at motor threshold",
        "A low-frequency asymmetric biphasic square pulsed current operating at 2 Hz for systemic beta-endorphin release in the brain"
    ],
    269: [
        "The surface area of the piezoelectric crystal face that actually transmits acoustic energy, slightly smaller than the sound head face",
        "The total physical surface area of the aluminum housing encasing the piezoelectric crystal transducer within the sound applicator",
        "The depth in centimeters to which ultrasound acoustic energy penetrates into subcutaneous soft tissue and muscular layers",
        "The maximum electrical voltage output capacity generated by the internal power supply unit during continuous wave emission"
    ],
    270: [
        "The depth in biological tissue at which 50% of the initial ultrasound acoustic energy has been absorbed and attenuated",
        "The distance an ultrasound transducer can be moved across the skin in one second of treatment time without tissue burns",
        "The total duration of time required for tissue temperature to increase by 2 degrees Celsius during continuous ultrasound",
        "The thickness of the coupling gel layer required to prevent acoustic reflection at the transducer-skin interface boundary"
    ],
    271: [
        "High-frequency electromagnetic fields (27.12 MHz) causing ionic oscillation and dipole rotation, generating deep uniform tissue heating",
        "Direct transmission of mechanical acoustic pressure waves through a piezoelectric quartz crystal into subcutaneous tissues",
        "Conduction of heat through superficial hot water pads placed directly in contact with the epidermis over thirty minutes",
        "Emission of ionizing gamma radiation that breaks molecular bonds inside collagen fibrils to soften dense scar adhesions"
    ],
    272: [
        "Cyclic alternating periods of cold-induced vasodilation following initial vasoconstriction during prolonged cold exposure (>15–20 min)",
        "Continuous progressive vasoconstriction that completely shuts down all peripheral microvascular blood flow across the whole limb",
        "Immediate complete paralysis of all sensory thermoreceptors following exposure to ice water immersion baths for five minutes",
        "Permanent dilation of deep muscular arteries with rapid increase in local metabolic rate and localized tissue temperature"
    ],
    273: [
        "Constraining the non-paretic arm in a mitt for 90% of waking hours with intensive repetitive training to overcome 'Learned Non-Use'",
        "Immobilizing the paretic limb in a rigid splint while training the sound limb in functional bilateral coordination motor tasks",
        "Applying continuous sensory transcutaneous electrical nerve stimulation to both arms simultaneously during seated resting",
        "Immobilizing both upper extremities in bilateral casts while performing passive gait re-education on a motorized treadmill"
    ],
    274: [
        "A task-oriented approach emphasizing analysis of missing movement components, practice of specific tasks with feedback, and transfer",
        "Facilitating primitive reflex synergies to elicit involuntary gross movements in flaccid limb stages following acute stroke",
        "Inhibiting abnormal muscle tone using passive neurodevelopmental key points of control exclusively without active training",
        "Applying high-resistance weight training exclusively on open-chain variable resistance gym machines to build maximal hypertrophy"
    ],
    275: [
        "An individualized approach assessing postural control and movement dysfunction, using Key Points of Control to facilitate movement",
        "A heavy weightlifting program performed strictly with maximal 1RM loads on gym machines to induce rapid muscular hypertrophy",
        "A method of electric shock therapy applied to peripheral muscles to eliminate spasticity and restore normal voluntary reflexes",
        "A treatment involving continuous passive mechanical traction on a motorized table for sixty consecutive minutes every session"
    ],
    276: [
        "Shoulder depression -> Abduction (110°) -> Forearm supination -> Wrist/finger extension -> External rotation -> Elbow extension",
        "Shoulder elevation -> Shoulder adduction -> Forearm pronation -> Wrist flexion -> Elbow flexion -> Ipsilateral cervical rotation",
        "Shoulder internal rotation behind back -> Elbow extension -> Forearm pronation -> Wrist ulnar deviation -> Neck hyperextension",
        "Shoulder abduction to 90° -> Elbow flexion to 90° -> Forearm neutral -> Wrist neutral -> Active bilateral fist clenching"
    ],
    277: [
        "Shoulder depression -> Abduction (90°) -> Wrist/finger extension + radial deviation -> Forearm pronation -> Elbow maximal flexion",
        "Shoulder elevation -> Shoulder abduction to 180° -> Forearm supination -> Wrist flexion -> Elbow extension in neutral plane",
        "Shoulder internal rotation behind back -> Elbow extension -> Forearm pronation -> Wrist flexion and ulnar deviation in sitting",
        "Shoulder horizontal adduction -> Elbow extension -> Forearm supination -> Wrist neutral -> Deep diaphragmatic inspiration"
    ],
    278: [
        "Bragard's: adding passive Ankle Dorsiflexion at pain threshold; Neri's: spontaneous knee flexion during trunk forward bending",
        "Bragard's: adding passive ankle plantarflexion; Neri's: adding passive cervical hyperextension during seated slump testing",
        "Bragard's: compressing the anterior superior iliac spine; Neri's: compressing the patellar tendon during knee extension",
        "Bragard's: passive hip internal rotation; Neri's: passive shoulder horizontal abduction during straight leg raising tests"
    ],
    279: [
        "Posterior Semicircular Canal Benign Paroxysmal Positional Vertigo (BPPV), moving otoconia debris from canal back into utricle",
        "Meniere's Disease with persistent endolymphatic hydrops, episodic rotary vertigo, and low-frequency sensorineural deafness",
        "Vestibular Schwannoma (Acoustic Neuroma) causing unilateral sensorineural hearing loss, tinnitus, and facial nerve weakness",
        "Central cerebellar stroke with severe downbeating nystagmus, truncal ataxia, and loss of smooth pursuit eye movements"
    ],
    280: [
        "Sensory Incomplete: Sensory but NO motor function is preserved below the level and includes sacral segments S4–S5 (light touch/DAP)",
        "Complete: No sensory or motor function is preserved in the sacral segments S4–S5 (light touch, pinprick, and DAP all absent)",
        "Motor Incomplete: Motor function is preserved below the neurological level with more than half of key muscles grade <3 (ASIA C)",
        "Motor Incomplete: Motor function is preserved below the neurological level with at least half of key muscles grade ≥3 (ASIA D)"
    ],
    281: [
        "Patellar Tendinopathy ('Jumper's Knee' - Proximal Insertional Enthesopathy of the Patellar Tendon)",
        "Osgood-Schlatter Disease with traction apophysitis of the secondary ossification center of tibial tubercle",
        "Patellofemoral osteoarthritis with lateral joint space loss and subchondral sclerosis on skyline radiographs",
        "Infrapatellar fat pad impingement syndrome (Hoffa's disease) with anterior knee pain and fat pad edema"
    ],
    282: [
        "High-load isometric quadriceps contractions (Spanish Squat / leg press held at 60° for 45s x 5 reps) to reduce cortical inhibition",
        "High-velocity drop jumps from a 60 cm plyometric box onto hard flooring surfaces three times daily to stimulate tendon stiffness",
        "Continuous passive bed rest and non-weight-bearing immobilization in a rigid cylinder plaster cast for eight consecutive weeks",
        "Heavy ballistic concentric knee extensions performed on an isokinetic dynamometer to muscular failure twice every single day"
    ],
    283: [
        "Lateral Epicondylalgia ('Tennis Elbow' - tendinopathy of Extensor Carpi Radialis Brevis [ECRB] tendon origin)",
        "Medial Epicondylalgia ('Golfer's Elbow' - tendinopathy of Pronator Teres and Flexor Carpi Radialis tendon origin)",
        "Posterior interosseous nerve entrapment under the Arcade of Frohse with radial tunnel motor neuropathy syndrome",
        "Complete avulsion rupture of the triceps brachii tendon insertion at the superior aspect of olecranon process"
    ],
    284: [
        "Isolated eccentric wrist extensor loading using the flexible resistance bar, performing 3 sets of 15 repetitions daily",
        "Forceful high-velocity manipulation of the radiohumeral joint into forced extension and pronation to rupture scar tissue",
        "Continuous application of ultrasound at 3 W/cm2 delivered directly over the superficial radial nerve for thirty minutes",
        "Immobilizing the elbow, forearm, and wrist in a long-arm fiberglass cast for twelve consecutive weeks without exercise"
    ],
    285: [
        "Lumbar Spondylolysis (Stress Fracture of the Pars Interarticularis, typically involving L4 or L5 vertebra)",
        "Acute posterolateral lumbar disc herniation with severe S1 nerve root compression and motor foot drop deficits",
        "Degenerative lumbar spinal stenosis with bilateral neurogenic claudication and shopping cart sign on walking",
        "Thoracolumbar Scheuermann's disease with multiple Schmorl's node herniations and anterior vertebral wedging"
    ],
    286: [
        "Magnetic Resonance Imaging (MRI with T2-weighted STIR sequences) or SPECT-CT scan to detect active bone marrow edema",
        "Standard standing anteroposterior and lateral plain radiography of the lumbar spine with oblique pars projections",
        "Superficial diagnostic musculoskeletal ultrasound of the erector spinae muscle belly to evaluate soft tissue edema",
        "Whole-body dual-energy X-ray absorptiometry (DEXA) bone mineral density scan to quantify systemic T-scores and Z-scores"
    ],
    287: [
        "Complete ACL tear; Bone contusions on lateral femoral condyle (sulcus terminalis) and posterolateral tibial plateau",
        "Isolated medial collateral ligament tear; Bone contusions on medial patellar facet and lateral trochlear femoral ridge",
        "Patellar tendon rupture; Bone contusions on anterior tibial tuberosity and distal fibular head styloid process",
        "Posterior cruciate ligament rupture; Bone contusions on anterior medial tibial plateau and posterior intercondylar fossa"
    ],
    288: [
        "Restoring full symmetrical passive knee extension (0°) equal to the healthy knee within the first 1 to 2 weeks post-op",
        "Achieving 140° of deep passive knee flexion within the first 48 hours post-op using high-force passive stretching",
        "Initiating heavy open-chain quadriceps leg extensions from 90° to 0° with maximal loads on post-operative day one",
        "Immobilizing the knee in 45° of continuous flexion in a rigid cylinder plaster cast for six consecutive weeks"
    ],
    289: [
        "Obtain an Ankle Radiograph Series (AP, Lateral, and Mortise views) to rule out malleolar fracture before weight-bearing",
        "Immediately apply hot packs and perform high-velocity subtalar joint manipulation into forced end-range inversion",
        "Instruct the athlete to jog 5 km on a treadmill to test ligament mechanical stability and dynamic functional capacity",
        "Prescribe continuous passive motion on a motorized bed for eight consecutive weeks without any diagnostic imaging"
    ],
    290: [
        "Early functional treatment (semi-rigid bracing, early weight-bearing, and progressive neuromotor exercise) accelerates return",
        "Rigid plaster cast immobilization for six weeks produces superior long-term mechanical ligament tensile strength and stability",
        "Immediate open surgical ligament repair within 48 hours of injury produces superior joint stability and faster return to sport",
        "Complete non-weight-bearing bed rest for eight weeks with continuous passive motion eliminates all long-term complications"
    ],
    291: [
        "Full-thickness, massive Rotator Cuff tear (involving Supraspinatus and Infraspinatus tendons)",
        "Acromioclavicular joint osteoarthritis with inferior osteophyte spurs and local joint line tenderness",
        "Bicipital tenosynovitis within the bicipital groove of the proximal humerus with positive Speed's test",
        "Adhesive capsulitis of the glenohumeral joint with global capsular restriction in a capsular pattern"
    ],
    292: [
        "To protect the repaired tendon-to-bone interface during biological healing (Sharpey fiber maturation) and prevent gap failure",
        "To prevent the development of deep vein thrombosis in the axillary and subclavian venous drainage channels of the limb",
        "Because active arm movements permanently paralyze the long thoracic and spinal accessory motor nerve innervation pathways",
        "Because early movements permanently destroy all systemic osteoblast bone remodeling capacity across the entire skeleton"
    ],
    293: [
        "Anterior Tibial Cortex Stress Fracture (High-Risk Bone Stress Injury with high non-union risk)",
        "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints' - traction periostitis along posteromedial border)",
        "Chronic Exertional Compartment Syndrome (CECS) of the anterior deep muscular fascial compartment",
        "Superficial peroneal nerve entrapment in the deep crural fascia with sensory lateral foot paresthesias"
    ],
    294: [
        "The anterior cortex is subject to high tensile bending forces and has poor vascularity; refractory cases require IM Nailing",
        "The anterior cortex is on the compression side and heals spontaneously within 48 hours without any training modification",
        "It requires immediate surgical amputation of the lower leg to prevent malignant osteosarcoma bone transformation in tissues",
        "It is treated with aggressive daily marathon running on concrete road surfaces while wearing weighted iron combat boots"
    ],
    295: [
        "Intratendinous (c-type) injuries have significantly longer recovery times (median ~70+ days) and up to 3-fold higher reinjury rates",
        "Intratendinous tears heal completely in 48 hours without any structured physical rehabilitation or training modification",
        "Intratendinous tears require immediate emergency open surgical refixation and anchor suturing in all competitive athletes",
        "Intratendinous tears carry zero risk of recurrent injury and allow immediate unrestricted match play clearance the next day"
    ],
    296: [
        "Full active ROM, strength symmetry (LSI ≥ 90–95%), high-speed sprint exposures (≥95% Vmax), and negative Askling H-test",
        "Ability to jog 1 km on grass at 50% effort without reported acute sharp pain regardless of objective strength test scores",
        "Absence of muscle tenderness upon superficial light skin palpation after 2 weeks of complete non-weight-bearing rest",
        "Mandatory completion of a 6-month rest period regardless of physical functional recovery and objective testing results"
    ],
    297: [
        "Physiological anatomical adaptation (humeral retroversion with capsular shift), as Total Motion Arc is symmetrical (<5° diff)",
        "Severe pathological posterior capsular contracture requiring immediate arthroscopic surgical capsular release and debridement",
        "Acute complete full-thickness avulsion of the subscapularis tendon off the lesser tuberosity with anterior joint dislocation",
        "Septic arthritis of the glenohumeral joint requiring emergency intravenous antibiotic hospitalization and surgical joint washout"
    ],
    298: [
        "Sleeper Stretch and Cross-Body stretch with scapular stabilization, combined with posterior glenohumeral joint mobilization",
        "High-force passive stretching of the anterior joint capsule into maximal external rotation beyond 150° in abduction plane",
        "Immobilizing the throwing shoulder in a rigid abduction brace for eight consecutive weeks without active physical therapy",
        "Applying superficial ice packs over the subacromial space without performing any active or passive physical rehabilitation"
    ],
    299: [
        "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints' - Traction Periostitis along the posteromedial tibial margin)",
        "Anterior Tibial Cortex Stress Fracture with complete cortical lucency line on standing plain lateral radiographs",
        "Chronic Exertional Compartment Syndrome of the anterior deep muscular compartment with elevated intracompartmental pressures",
        "Deep vein thrombosis of the posterior tibial vein with complete occlusion of lower extremity venous drainage channels"
    ],
    300: [
        "Running workload modification, soleus strengthening, cadence retraining (+7.5–10% to reduce tibial shock), and orthotics",
        "Immediate emergency surgical fasciotomy of all four lower extremity calf compartments within 24 hours of clinical diagnosis",
        "Complete non-weight-bearing immobilization in a rigid long-leg cylinder plaster cast for six consecutive months in bed",
        "Running daily marathons while wearing heavy weighted iron boots on hard concrete road surfaces without warm-up drills"
    ]
}

new_data_3 = []
for q in DATA_TEST_3:
    qid = q["id"]
    if qid in fixes_test3:
        q_copy = dict(q)
        q_copy["options"] = fixes_test3[qid]
        q_copy["correct"] = 0
        new_data_3.append(q_copy)
    else:
        new_data_3.append(q)

ratios = []
diffs = []
for q in new_data_3:
    lens = [len(o) for o in q["options"]]
    r = max(lens) / max(min(lens), 1)
    d = max(lens) - min(lens)
    ratios.append(r)
    diffs.append(d)

print(f"Test 3 Overhauled Stats: Avg Ratio = {sum(ratios)/len(ratios):.2f}, Worst Ratio = {max(ratios):.2f}, Max Diff = {max(diffs)}")

with open("data_test3.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 3 (100 Questions)\n")
    f.write("# Balanced Distractors, Symmetrical Lengths, No Simplistic Foils, Standard Book Citations\n\n")
    f.write("DATA_TEST_3 = " + json.dumps(new_data_3, indent=4) + "\n")
print("Saved data_test3.py")
