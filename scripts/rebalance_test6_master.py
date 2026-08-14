import json
from data_test6 import DATA_TEST_6

fixes_test6 = {
    501: [
        "Hydrolyzes phosphocreatine to rapidly resynthesize ATP during initial all-out maximal sprint exercise",
        "Pumps sodium ions into the mitochondrial matrix to generate high-energy ATP molecules during all-out sprinting",
        "Transports glucose molecules across the sarcolemma via active facilitated carrier diffusion channels",
        "Synthesizes structural titin and nebulin filaments within contracting skeletal muscle sarcomeres"
    ],
    502: [
        "Motor units are recruited in strict order of increasing size: small slow-twitch Type I before large fast-twitch Type II",
        "Large fast-twitch Type IIx motor units are always recruited first during low-intensity steady-state walking bouts",
        "Motor units are recruited completely at random without any regard to mechanical load or movement velocity",
        "Motor unit recruitment is determined entirely by environmental ambient barometric air pressure conditions"
    ],
    503: [
        "Glycolysis in the cytoplasm breaks down glucose to pyruvate, generating a net of 2 ATP and 2 NADH molecules",
        "Glycolysis occurs exclusively inside the mitochondrial matrix, generating 36 ATP molecules directly from fatty acids",
        "Glycolysis converts amino acids directly into gaseous carbon dioxide without producing any usable ATP energy",
        "Glycolysis requires supramaximal oxygen delivery to synthesize glycogen polymers inside active contracting myofibrils"
    ],
    504: [
        "Cardiac Output is the product of Stroke Volume and Heart Rate ($Q = SV \\times HR$), reaching ~20–25 L/min in elite athletes",
        "Cardiac Output is calculated by dividing total peripheral vascular resistance by resting mean arterial blood pressure",
        "Cardiac Output is the total volume of air inhaled and exhaled per minute during maximal cardiopulmonary testing",
        "Cardiac Output remains completely constant at 5 L/min during both resting states and supramaximal exercise bouts"
    ],
    505: [
        "Oxygen consumption remains elevated post-exercise to replenish PCr, clear metabolites, and restore elevated body temperature",
        "The athlete continues to perform anaerobic lactic glycolysis for several hours after training has completely ceased",
        "The pulmonary lungs completely shut down alveolar gas exchange to prevent respiratory heat dissipation",
        "All cellular mitochondria are temporarily degraded and must be newly resynthesized following exercise"
    ],
    506: [
        "The product of force and moment arm ($\tau = F \times d_{\perp}$), determining the rotational turning effect about a joint axis",
        "The linear rate of change of momentum of the body center of mass during horizontal sprint running acceleration",
        "The total mechanical energy converted into radiant heat during post-exercise recovery stabilization phases",
        "The gravitational pull exerted by the Earth's center of mass upon the human skeleton during the aerial flight phase"
    ],
    507: [
        "Eccentric hamstring contraction to decelerate the advancing shank and prepare the limb for initial ground contact",
        "Concentric quadriceps contraction to hyperextend the knee and maximize flight time during sprint running",
        "Isometric contraction of the gastrocnemius to lock the ankle in maximal rigid plantarflexion posture",
        "Complete electrical silence of all lower extremity muscles to allow passive ballistic swing trajectory"
    ],
    508: [
        "30 to 60 grams of carbohydrate per hour, using single or multiple transportable carbohydrate solutions (e.g., 6–8% drinks)",
        "5 to 10 grams of carbohydrate per hour consumed exclusively as high-fiber solid snack bars to prevent gastric emptying spikes",
        "120 to 150 grams of carbohydrate per hour using pure crystalline fructose to saturate hepatic fructokinase transport pathways",
        "Zero carbohydrate intake, relying entirely on dietary saturated fats and exogenous medium-chain triglyceride supplementation"
    ],
    509: [
        "On the anterior midline of the thigh, midway between the Inguinal Fold and the superior border of the Patella",
        "2 cm lateral to the greater trochanter of the femur along a horizontal plane parallel to the floor surface",
        "Over the medial femoral condyle along the joint line of the tibiofemoral joint in standing posture",
        "Along the posterior midline of the hamstring muscle belly 5 cm proximal to the popliteal crease line"
    ],
    510: [
        "High linearity, slender fragile limbs, narrow thoracic dimensions, low subcutaneous adiposity, and minimal muscular development",
        "Predominant relative adiposity, spherical soft body contours, large abdominal girth, and high subcutaneous fat accumulation",
        "Dominant musculoskeletal robusticity, broad shoulder girdle dimensions, dense bone structure, and large muscular contours",
        "Balanced physical proportions where fatness, muscularity, and linearity contribute in equal mathematical ratios on charts"
    ],
    511: [
        "Athletic performance is optimal at moderate arousal and deteriorates if arousal is too high or too low (Yerkes-Dodson)",
        "Performance increases linearly with arousal, reaching maximal execution at extreme panic and hyper-arousal levels",
        "Arousal has zero measurable impact on athletic motor skill execution, decision making, or physical performance",
        "High arousal causes immediate complete structural paralysis of all peripheral skeletal muscle motor units"
    ],
    512: [
        "The ratio of Acute Training Load (1 week) to Chronic Training Load (4 weeks), evaluating fatigue versus fitness balance",
        "The ratio of resting heart rate to maximal heart rate during an incremental cardiopulmonary exercise test battery",
        "The percentage of fast-twitch Type IIx muscle fibers present within the gastrocnemius muscle belly by biopsy",
        "The difference between left-limb and right-limb ground reaction force impulses during unilateral jump landing"
    ],
    513: [
        "The dispersion of individual data values around the sample mean, with $\pm 1 \\text{ SD}$ containing ~68.2% of data points",
        "The probability that an investigator will obtain a statistically significant experimental p-value in a trial",
        "The percentage of study participants who experience an adverse allergic reaction to an experimental drug",
        "The mathematical difference between the highest data value and the lowest data value in an unsorted sample"
    ],
    514: [
        "The updated probability that a patient has the condition after the physical test result is known (combining Pre-Test and LR)",
        "The probability that a diagnostic laboratory will lose the patient's biological specimen during processing",
        "The percentage of patients who experience a complete spontaneous cure without any medical rehabilitation",
        "The mathematical difference between the baseline pre-test score and the follow-up post-intervention score"
    ],
    515: [
        "An injury of the same type and to the same anatomical site occurring after full return to participation from index injury",
        "An injury occurring to a completely different anatomical joint on the contralateral lower extremity limb",
        "A minor skin abrasion occurring during warm-up that causes zero loss of sports training or match play time",
        "Any chronic medical condition that was diagnosed prior to the athlete beginning their competitive sports career"
    ],
    516: [
        "Induces peripheral vasoconstriction, reduces hydrostatic microvascular filtration, and blunts secondary inflammatory DOMS",
        "Permanently destroys subcutaneous adipose tissue layers through continuous shivering thermogenesis and skin freezing",
        "Completely eliminates the biological requirement for post-exercise dietary carbohydrate and protein replenishment",
        "Induces immediate complete central hypnosis to suppress pre-competition cognitive arousal and state anxiety before matches"
    ],
    517: [
        "Increases erythrocyte 2,3-DPG, shifting the O2-hemoglobin curve rightward to enhance peripheral tissue O2 unloading",
        "Directly stimulates beta-2 adrenergic receptors to trigger acute free fatty acid mobilization and systemic thermogenesis",
        "Inactivates mitochondrial pyruvate dehydrogenase to prevent cellular lactic acid production during all-out sprinting",
        "Suppresses hepatic gluconeogenesis to maintain constant circulating blood glucose concentrations during exercise"
    ],
    518: [
        "The athlete's neuromuscular braking strategy: ability to absorb kinetic energy during eccentric deceleration before propulsion",
        "The total mechanical energy converted into radiant heat during post-jump landing stabilization and relaxation phases",
        "The percentage of fast-twitch Type IIx muscle fibers present within the gastrocnemius muscle belly determined by biopsy",
        "The lateral shear force vector generated across the first metatarsophalangeal joint during terminal push-off"
    ],
    519: [
        "A 10% to 15% velocity loss cutoff, which terminates sets before significant neuromuscular fatigue or velocity drop occurs",
        "A 50% to 60% velocity loss cutoff, which trains every set to complete muscular exhaustion and failure on machines",
        "A 100% velocity loss cutoff, where the barbell stops moving completely for ten consecutive minutes on the rack",
        "Velocity stop cutoffs have zero interaction with neuromuscular fatigue, power adaptations, or hypertrophy gains"
    ],
    520: [
        "Category P1 (Prohibited in Particular Sports); prohibited In-Competition in Archery, Shooting, Automobile, and Golf",
        "Category S1 (Anabolic Agents); prohibited at all times in all weightlifting and track and field athletics disciplines",
        "Category S6 (Stimulants); prohibited In-Competition only above specified analytical laboratory threshold limits",
        "Category S9 (Glucocorticoids); prohibited exclusively via systemic oral, intravenous, and rectal administration routes"
    ],
    521: [
        "Enhancing dynamic neuromuscular control, promoting soft landings with knee/hip flexion, and eliminating valgus moments",
        "Completely freezing the knee joint in full hyperextension during all athletic jump landings to avoid knee flexion",
        "Selectively atrophying the quadriceps muscle to allow unconstrained passive knee flexion during cutting steps",
        "Replacing all connective tissue collagen fibrils with rigid inorganic hydroxyapatite bone mineral matrix layers"
    ],
    522: [
        "The ratio of the relative separation velocity of the ball after impact to the relative approach velocity before impact",
        "The total mass of the ball divided by the surface area of the playing field in square meters during competition",
        "The rate of thermal energy dissipation from the athlete's body into the atmosphere during prolonged sports play",
        "The gravitational acceleration pulling on the ball during the apex of its parabolic projectile flight trajectory"
    ],
    523: [
        "Neuromuscular fatigue: the athlete requires longer contraction time to produce the same or lower jump height",
        "Exceptional neuromuscular readiness and high reactive strength capacity for maximum tournament match play",
        "Complete structural rupture of the patellar tendon requiring immediate surgical reconstruction and repair",
        "Total exhaustion of all intracellular glycogen stores requiring immediate intravenous dextrose fluid therapy"
    ],
    524: [
        "The selective publication of studies with positive results over negative findings, evaluated graphically using a Funnel Plot",
        "The publication of scientific research papers in open-access online digital repositories without peer review",
        "The tendency of research study participants to drop out of longitudinal clinical trials due to relocation",
        "The calculation error occurring when computing sample variance across multiple independent study groups in trials"
    ],
    525: [
        "A 6-stage model extending Van Mechelen's model to include implementation context, personal factors, and real-world compliance",
        "A surgical protocol for arthroscopic anterior cruciate ligament reconstruction in elite professional soccer cohorts",
        "A commercial marketing strategy for selling athletic footwear and sports apparel across urban shopping centers",
        "A method of electric shock therapy applied to peripheral muscles to eliminate spasticity and restore normal reflexes"
    ],
    526: [
        "Renal excretion of Bicarbonate ions ($HCO_3^-$) in urine, compensating for respiratory alkalosis and returning pH toward normal",
        "Renal retention of hydrogen ions causing severe systemic metabolic acidosis and dehydration within the first 6 hours",
        "Complete cessation of all urine production by shutting down renal glomeruli filtration to preserve blood volume",
        "Direct conversion of urea into insoluble calcium hydroxyapatite crystals within the bladder to buffer nitrogen waste"
    ],
    527: [
        "Binds to Troponin C to trigger tropomyosin movement away from actin binding sites, initiating cross-bridge cycling",
        "Directly converts into muscle glycogen granules inside fast-twitch Type IIx muscle fibers during training bouts",
        "Inhibits the enzyme glycogen phosphorylase to prevent hepatic carbohydrate breakdown during aerobic exercise",
        "Acts as an extracellular buffering agent to neutralize lactic acid accumulation in the bloodstream during sprints"
    ],
    528: [
        "Under high pressure, athletes shift from automated procedural control to conscious, step-by-step explicit monitoring",
        "Athletes experience instantaneous complete paralysis of all peripheral skeletal muscles during competition bouts",
        "Pressure causes complete destruction of long-term memory storage in the temporal lobes within seconds",
        "Choking occurs only when an athlete has zero physiological arousal or state anxiety during major tournaments"
    ],
    529: [
        "Elevated risk of secondary re-injury or persistent compensatory biomechanical loading, requiring targeted unilateral training",
        "Optimal bilateral symmetry and full physical readiness for unrestricted competitive match play in all sports",
        "Complete structural failure of the contralateral uninjured extremity cruciate ligaments and meniscal horns",
        "The athlete has zero percentage of Type II fast-twitch muscle fibers in both lower extremity limbs by biopsy"
    ],
    530: [
        "Occurs when the decision to perform reference standard (MRI/surgery) depends on index physical test result, distorting accuracy",
        "The intentional falsification of laboratory test results by clinical researchers to achieve significant p-values",
        "The loss of study participants due to relocation to a different geographical country during longitudinal trials",
        "The mathematical calculation error occurring when computing test likelihood ratios across multiple diagnostic trials"
    ],
    531: [
        "All randomized participants are analyzed in the groups to which they were originally allocated, preserving randomization",
        "Only participants who completed 100% of all assigned exercise interventions are analyzed in the final trial report",
        "Participants are allowed to choose which treatment group they prefer after study completion and data collection",
        "Data analysis is performed exclusively on participants who experienced a complete cure without any side effects"
    ],
    532: [
        "Reduces the incidence of non-contact ACL tears by up to 50% to 70% by eliminating dynamic knee valgus collapse",
        "Completely eliminates all bone fractures across an entire competitive athletic career in contact sports",
        "Increases maximal sprinting velocity by 25 meters per second within three training days of commencing drills",
        "Prevents all acute facial lacerations and dental fractures during competitive match play in team sports"
    ],
    533: [
        "A nationwide behavioral campaign to encourage citizens and athletes to incorporate physical activity and fitness into daily life",
        "A commercial retail marketing program selling fitness tracking devices across urban cities to generate corporate revenue",
        "A medical division that performs mandatory orthopedic surgeries on national team athletes prior to major tournaments",
        "An international trade organization that exports sports footwear to foreign countries in accordance with trade laws"
    ],
    534: [
        "Tokyo, Japan (hosting the Games of the XXXII Olympiad in July–August 2021)",
        "Kyoto, Japan (candidate city for international cultural and sports games)",
        "Osaka, Japan (host city for national multi-sport championship events)",
        "Hiroshima, Japan (host city for Asian regional sports championship games)"
    ],
    535: [
        "Threatening, intimidating, or retaliating against any person who has reported in good faith information relating to an alleged ADRV",
        "Purchasing sealed commercial sports electrolyte drinks from a licensed supermarket in accordance with food regulations",
        "Carrying a certified medical kit containing sterile gauze and bandages into an athletic stadium during team training",
        "Transporting sports equipment and team jerseys across state borders for competition in authorized tournaments"
    ],
    536: [
        "Category S6; strictly prohibited In-Competition (all non-specified and specified central nervous system stimulants)",
        "Category S1; prohibited at all times in all powerlifting and bodybuilding disciplines with zero exemptions permitted",
        "Category P1; prohibited exclusively in target archery and precision rifle shooting events during official matches",
        "Category S9; prohibited exclusively via systemic oral, intravenous, and rectal administration routes in sports"
    ],
    537: [
        "Every NSF must submit annual audited accounts audited by a CAG empaneled Chartered Accountant and publish them online",
        "NSFs are completely exempt from financial audits if they participate in international games and championship events",
        "Financial audits are conducted only once every twenty years during general elections under sports code rules",
        "Accounts are reviewed exclusively by municipal revenue tax collection officers without public disclosure"
    ],
    538: [
        "Outstanding achievements in adventure activities across Land, Sea, Air, and Lifetime Achievement categories",
        "Winning an individual gold medal in Olympic track and field sprint events over four Olympic tournament cycles",
        "Lifetime contribution to sports journalism across national news channels over thirty consecutive years",
        "Coaching excellence and mentoring junior athletes in municipal sports clubs to achieve national standards"
    ],
    539: [
        "Providing integrated sports physiotherapy, strength & conditioning, anthropometry, nutrition, biomechanics, and psychology",
        "Selling commercial sportswear and footwear to visiting sports spectators during major national tournament matches",
        "Managing stadium ticket distribution and security operations on tournament match days in major metropolitan cities",
        "Conducting chemical doping testing on athlete urine and blood samples in WADA-accredited analytical laboratories"
    ],
    540: [
        "The use or attempted use of a prohibited substance/method, established by any reliable evidentiary means (e.g., admissions, ABP)",
        "Drinking commercial bottled mineral water during an official tournament match in accordance with competition rules",
        "Applying topical petroleum jelly to prevent skin chafing during long-distance marathons in warm ambient conditions",
        "Consuming carbohydrate energy gels provided at official race hydration stations during sanctioned road races"
    ],
    541: [
        "Anterior Talofibular Ligament (ATFL); with ankle in 10°–20° plantarflexion, examiner translates talus anteriorly (>3 mm translation)",
        "Calcaneofibular Ligament (CFL); with ankle in full dorsiflexion, examiner forcefully inverts the calcaneus against resistance",
        "Deltoid Ligament; with ankle in neutral, examiner forcefully everts the hindfoot to evaluate medial tibiotalar stability",
        "Anterior Inferior Tibiofibular Ligament; with ankle neutral, examiner externally rotates foot to splay distal syndesmosis"
    ],
    542: [
        "Calcaneofibular Ligament (CFL), which is taut in neutral dorsiflexion (0°) and primary restraint to hindfoot inversion",
        "Anterior Talofibular Ligament (ATFL), which is taut exclusively in 30° of plantarflexion during inversion stress",
        "Deltoid ligament superficial band along the medial malleolus which resists hindfoot eversion and external rotation",
        "Posterior talofibular ligament along the posterior talar process which resists extreme ankle dorsiflexion forces"
    ],
    543: [
        "Subscapularis muscle (inability to actively lift the dorsum of the hand away from the mid-lumbar spine in internal rotation)",
        "Supraspinatus muscle tendon insertion at the superior facet of the greater tuberosity during active arm elevation",
        "Infraspinatus muscle belly along the infraspinous fossa of the dorsal scapula during resisted external rotation",
        "Teres minor muscle along the lateral axillary scapular border during external rotation in ninety degrees abduction"
    ],
    544: [
        "Isolates Supraspinatus with identical EMG activation while significantly reducing subacromial pain and deltoid compensation",
        "Completely paralyzes the deltoid muscle to allow pure supraspinatus evaluation without any muscular substitution",
        "Places the long head of the biceps tendon under supramaximal tensile failure strain to test superior labral integrity",
        "Permanently eliminates the risk of anterior glenohumeral joint subluxation during provocative orthopedic examination"
    ],
    545: [
        "Iliopsoas and Rectus Femoris (Hip Flexors); with contralateral hip flexed to chest, involved thigh fails to extend flat",
        "Gluteus Maximus and Hamstrings hip extensor group; with knee flexed, hip fails to achieve ninety degrees flexion",
        "Adductor Longus and Gracilis medial groin muscle group; with knee extended, thigh fails to achieve forty degrees abduction",
        "Gastrocnemius and Soleus deep calf plantarflexors; with knee extended, ankle fails to achieve ten degrees dorsiflexion"
    ],
    546: [
        "Iliotibial Band (ITB) and Tensor Fasciae Latae (TFL); in side-lying, abducted/extended thigh fails to drop below horizontal",
        "Iliopsoas muscle belly along the pelvic brim; in prone lying, extended hip fails to achieve twenty degrees hyperextension",
        "Rectus femoris muscle belly along the anterior thigh; in prone lying, flexed knee fails to achieve ninety degrees flexion",
        "Biceps femoris long head tendon at the ischium; in supine lying, extended leg fails to achieve seventy degrees elevation"
    ],
    547: [
        "Plantar Fasciopathy (Plantar Fasciitis / Enthesopathy of the Plantar Fascia at the calcaneal tuberosity insertion)",
        "Tarsal Tunnel Syndrome involving compression of the posterior tibial nerve under the flexor retinaculum at ankle",
        "Stress fracture of the distal fifth metatarsal styloid process with localized cortical lucency on radiographs",
        "Calcaneal Achilles tendon paratenonitis with localized crepitus and swelling along the subcutaneous tendon sheath"
    ],
    548: [
        "Scapholunate Ligament Dissociation / Instability (releasing dorsal thumb pressure produces a painful dorsal clunk)",
        "Triangular Fibrocartilage Complex (TFCC) central tear with ulnar-sided wrist pain and clicking on pronosupination",
        "Carpal Tunnel Syndrome involving median nerve compression beneath the transverse carpal ligament flexor retinaculum",
        "De Quervain's tenosynovitis in the first dorsal compartment involving abductor pollicis longus and extensor brevis"
    ],
    549: [
        "Rehabilitation exercises, loading progressions, and recovery modalities must be customized to each athlete's unique status",
        "All athletes recovering from orthopedic injuries must perform identical exercise routines regardless of individual traits",
        "Rehabilitation exercises should only be performed while the athlete is completely isolated in dark quiet recovery rooms",
        "Exercise resistance must be identical across all athletes regardless of body weight, training history, or injury severity"
    ],
    550: [
        "Concentric and eccentric loading progressions with monitored pain-guided activity, progressing to energy-storage plyometrics",
        "Complete bed rest and non-weight-bearing immobilization in a rigid walking boot for six consecutive months in bed",
        "High-velocity drop jumps from 60 cm plyometric boxes onto hard wooden floors performed three times daily to failure",
        "Continuous passive motorized stretching of the ankle into maximal dorsiflexion on a mechanical table for eight weeks"
    ],
    551: [
        "A small-amplitude rhythmic oscillatory movement performed just before reaching pathological end-range resistance limit",
        "A large-amplitude oscillation performed within the pain-free initial starting range of movement to relieve acute pain",
        "A high-velocity manipulation thrust performed past the anatomical limit of available range to realign joint surfaces",
        "A continuous static traction force maintained for twenty minutes with mechanical motorized pulley weight systems"
    ],
    552: [
        "Applying repeated quick stretches followed by isometric/concentric contractions within the active pattern to facilitate units",
        "A rapid ballistic bouncing stretch performed at maximum velocity to trigger the stretch reflex loop in muscles",
        "A continuous electrical shock applied to the tendon to cause permanent muscle denervation and spasticity relief",
        "A passive static stretch held for two hours while the patient is sleeping under hospital sedation protocols"
    ],
    553: [
        "Pain is permitted up to 5/10 during exercise, provided pain subsides by next morning and morning stiffness does not worsen",
        "Pain must be kept at absolute 0/10 at all times; any feeling of discomfort requires complete cessation of rehabilitation drills",
        "Pain must reach at least 9/10 during every set to ensure adequate mechanical stimulus for tendon collagen synthesis and healing",
        "Pain is ignored completely and the athlete continues maximum competitive training regardless of reported symptom severity"
    ],
    554: [
        "Lateral translation of trunk relative to pelvis; named according to direction of trunk displacement (Right Shift = trunk right)",
        "A lateral curvature of the spine caused by structural hemivertebrae bone anomalies and congenital wedge deformities",
        "A complete dislocation of the sacroiliac joint requiring open surgical reduction and internal stabilization plating",
        "A lateral shift is named according to the side where the athlete carries their sports gear bag during tournament travel"
    ],
    555: [
        "The concave fovea of the radial head rolls and glides (slides) ANTERIORLY in the same direction on the convex capitulum",
        "The concave fovea of the radial head rolls anteriorly and glides posteriorly in opposite directions on the capitulum",
        "The convex capitulum rolls anteriorly and glides posteriorly on the fixed concave fovea of the radial head surface",
        "The radial head undergoes pure medial translation without any angular rolling motion across the humeroradial joint"
    ],
    556: [
        "The ankle plantarflexes rapidly to ~20° while 1st MTP extends to ~60°, utilizing Achilles recoil to propel into swing",
        "The ankle dorsiflexes past 45° while the knee locks in complete hyperextension to minimize metabolic energy expenditure",
        "The subtalar joint fully pronates to convert the foot into a loose, flexible shock absorber during terminal propulsion",
        "The foot remains completely flat on the floor while the body center of mass moves backward behind the stance heel"
    ],
    557: [
        "Begins when the swinging limb is opposite the stance limb and continues until the tibia is vertical to the floor",
        "The initial period of double support where both feet are flat on the ground absorbing ground impact forces",
        "The aerial flight phase where neither foot is in contact with the ground during maximal sprinting acceleration",
        "The terminal period of stance where the heel lifts off the floor while metatarsophalangeal joints extend"
    ],
    558: [
        "Bilateral alternating lateral trunk lurching and pelvic drop during walking, caused by bilateral Gluteus Medius weakness",
        "Excessive hip and knee flexion during the swing phase to clear a paralyzed dropping foot (classic Steppage gait)",
        "Walking entirely on the heel with the ankle locked in maximal dorsiflexion throughout the entire stance phase duration",
        "Hyperextension of the bilateral knees during the terminal swing flight phase of sprinting to absorb landing shocks"
    ],
    559: [
        "The First Ray comprises First Metatarsal and Medial Cuneiform; Plantarflexion couples with slight Eversion and Abduction",
        "The First Ray comprises calcaneus and cuboid bones moving in pure sagittal flexion without any coupled triplanar motion",
        "The First Ray is the tendon of the Achilles inserting into the posterior calcaneus along the subcutaneous paratenon sheath",
        "The First Ray comprises five proximal phalanges moving in pure transverse plane rotation during push-off propulsion"
    ],
    560: [
        "Rotator Cuff muscles (Infraspinatus, Teres Minor, Subscapularis) inferior pull counterbalancing superior shear of Deltoid",
        "Pectoralis Major and Latissimus Dorsi pulling the humerus into anterior dislocation against the glenoid labrum margin",
        "Upper Trapezius and Levator Scapulae elevating the clavicle and acromion while Rhomboids downwardly rotate the scapula",
        "Rhomboid Major and Serratus Anterior downward rotators pulling the inferior scapular angle into medial winging"
    ],
    561: [
        "Approximately 60° of active/passive First MTP Extension (Dorsiflexion) to engage Windlass mechanism and allow smooth roll-over",
        "Approximately 45° of 1st MTP plantarflexion to dig the great toe into the ground and absorb downward compressive force",
        "Complete rigid immobilization of the 1st MTP in 0° neutral position to prevent any sagittal plane joint motion during push-off",
        "Maximal active abduction of the great toe past 90° to expand the forefoot contact surface area during terminal stance"
    ],
    562: [
        "Anteromedial (AM) Bundle of the Anterior Cruciate Ligament (which tightens in flexion, while the PL bundle relaxes)",
        "Posterolateral (PL) Bundle of the ACL which is taut exclusively in full terminal knee extension and recurvatum",
        "Superficial medial collateral ligament along the medial joint line which resists pure coronal plane valgus stress",
        "Popliteus tendon along the posterolateral joint capsule which unlocks the knee during initiation of active flexion"
    ],
    563: [
        "Selectively depolarizes large A-beta sensory afferents, activating inhibitory interneurons to close Spinal Pain Gate",
        "Depolarizes motor nerves to trigger massive systemic beta-endorphin release from the pituitary gland into circulation",
        "Thermally cauterizes cutaneous nociceptors using focused microwave radiofrequency ablation and localized heating",
        "Blocks neuromuscular acetylcholine release at the motor end-plate junction to cause temporary muscle flaccidity"
    ],
    564: [
        "Maximum acoustic intensity delivered at peak of beam averaged over treatment time, representing true heating potential",
        "The electrical voltage output from the main wall power supply unit during continuous wave ultrasound generation",
        "The acoustic sound frequency emitted by the ultrasound generator measured in Megahertz across the transducer crystal",
        "The rate of battery drainage during deep tissue ultrasound application measured in milliampere-hours of operation"
    ],
    565: [
        "Motorized passive movement device that promotes synovial fluid circulation and reduces early post-operative stiffness",
        "A heavy weightlifting machine that builds maximal 1RM quadriceps strength through progressive overload resistance",
        "An electrical shock device that completely paralyzes the femoral nerve to eliminate post-operative muscle spasm",
        "A surgical tool used to resect torn meniscus fragments inside the joint during arthroscopic debridement procedures"
    ],
    566: [
        "Immersing ankle in ice water (0°–10°C) until numb (~12–15 min), followed by 3–5 min of active exercise, repeating 3–5 cycles",
        "Continuous ice immersion held for 8 consecutive hours without active movement to completely eliminate local edema",
        "Applying hot packs alternating with ice packs every 30 seconds for ten consecutive days without exercise therapy",
        "Immobilizing the ankle in a rigid plaster cast for twelve consecutive weeks with strict non-weight-bearing in bed"
    ],
    567: [
        "A 1:3 to 1:5 On-Off Ratio (e.g., 10s On, 50s Off), providing adequate metabolic recovery between stimulated tetanic contractions",
        "A continuous 100% On mode (10 minutes continuous stimulation without any rest) to maximize rapid muscle hypertrophy",
        "A 1:1 ratio (10 seconds On, 10 seconds Off) used for maximal 1RM strength training on isokinetic dynamometer units",
        "Duty cycle parameters have zero effect on muscular fatigue, metabolic recovery, or stimulated force production"
    ],
    568: [
        "Severe Spasticity reaches its peak, and voluntary limb movement occurs ONLY within classic Stereotypical Synergy Patterns",
        "Flaccid paralysis with completely absent reflexes and zero voluntary movement across all extremity joints (Stage 1)",
        "Spasticity begins to decline and movements deviating from basic synergy become possible with coordination (Stage 4)",
        "Normal motor coordination and speed with completely normal movement execution across all functional tasks (Stage 6)"
    ],
    569: [
        "Shoulder Extension, Adduction, and Internal Rotation with forearm Pronation and wrist/finger Flexion ('sheathing sword')",
        "Shoulder Flexion, Abduction, and External Rotation with forearm Supination and wrist/finger Extension ('drawing sword')",
        "Shoulder Flexion, Adduction, and External Rotation with wrist Extension and forearm Supination in the diagonal plane",
        "Shoulder Extension, Abduction, and External Rotation with wrist Flexion and forearm Pronation in the diagonal plane"
    ],
    570: [
        "Sliding elongates nerve bed at one joint while slackening at adjacent joint, producing excursion with minimal strain",
        "Sliding involves stretching the nerve simultaneously across all joints to maximal mechanical tensile limit",
        "Tensioning completely severs the peripheral nerve to relieve internal neural compression and ischemic pain",
        "There is zero biomechanical or clinical difference between sliding techniques and tensioning techniques in rehab"
    ],
    571: [
        "Habituation exercises: moving rapidly from sitting to side-lying on each side and holding 30s, 5 reps twice daily",
        "Continuous passive cervical mechanical traction held for 60 minutes on a hospital couch without active movement",
        "Applying ice packs to the bilateral temples while lying stationary in supine in a dark quiet room for two hours",
        "Performing 500 maximal resistance barbell squats to recalibrate inner ear semicircular canal balance receptors"
    ],
    572: [
        "T1 = Abductor Digiti Minimi (Little Finger Abduction - assessing intrinsic hand muscle innervation)",
        "T1 = Biceps Brachii (Elbow Flexion - assessing musculocutaneous nerve upper trunk innervation)",
        "T1 = Triceps Brachii (Elbow Extension - assessing radial nerve middle trunk motor innervation)",
        "T1 = Quadriceps Femoris (Knee Extension - assessing femoral nerve lumbar plexus motor innervation)"
    ],
    573: [
        "Patient sits erect on edge of table with hands clasped behind back, then slumps into thoracic and lumbar flexion",
        "Patient lies prone on the examination table and performs active bilateral knee flexion against manual resistance",
        "Patient stands upright and performs maximal cervical spine hyperextension while holding a deep inspiration",
        "Patient lies supine and elevates both legs simultaneously into bilateral straight leg raise to ninety degrees"
    ],
    574: [
        "Side-lying or supine lying -> Hip Extension, Abduction, and External Rotation (stretching obturator nerve in groin)",
        "Prone lying -> Passive knee flexion to 90° with ankle full dorsiflexion and eversion (stretching femoral nerve)",
        "Supine lying -> Straight leg raise to 70° with full ankle plantarflexion and inversion (stretching peroneal nerve)",
        "Sitting erect -> Neck flexion with active bilateral fist clenching and thoracic extension (stretching median nerve)"
    ],
    575: [
        "Posterior Glide of the convex humeral head on the concave glenoid fossa to increase flexion and internal rotation",
        "Anterior Glide of the convex humeral head on the concave glenoid fossa to increase flexion and internal rotation",
        "Superior Glide of the convex humeral head on the concave glenoid fossa to increase flexion and internal rotation",
        "Inferior Glide applied exclusively to increase shoulder adduction and horizontal extension across the body"
    ],
    576: [
        "A rubbery, springy rebound mechanical stop before full range, pathognomonic for Internal Joint Derangement (meniscus)",
        "An abrupt hard unyielding stop when bone contacts bone during full terminal joint extension without pain",
        "A soft yielding spongy stop caused by muscle approximation during terminal joint flexion in muscular subjects",
        "Movement stopping due to intense acute pain before reaching any mechanical resistance barrier (empty end-feel)"
    ],
    577: [
        "90° of active Shoulder Abduction in the scapular plane (where CC and AC ligaments achieve maximal tension)",
        "Full shoulder extension with hand behind the back (where anterior glenohumeral capsule is placed on stretch)",
        "Neutral 0° anatomical position at the side of the torso (where all periarticular ligaments are relatively relaxed)",
        "Full shoulder adduction across the chest in horizontal adduction (where posterior capsule is maximally stretched)"
    ],
    578: [
        "Therapist applies sustained Postero-Inferior glide to humeral head with belt while patient actively internally rotates",
        "Therapist applies forceful high-velocity manipulation into maximal external rotation under general anesthesia",
        "Therapist applies continuous axial downward compression through the acromion while patient remains stationary",
        "Patient remains completely stationary in bed with a rigid plaster cast locked in 90° of external rotation"
    ],
    579: [
        "Hands under lumbar lordosis to maintain neutral spine, one knee flexed, elevating head/shoulders with low compression",
        "Performing 100 rapid full trunk sit-ups with straight legs on an inclined decline bench to muscular failure",
        "Continuous passive lumbar hyperextension held for 30 minutes on a mechanical motorized traction couch",
        "Maximal 1RM barbell good-morning lifts performed with fully rounded spinal posture and heavy resistance"
    ],
    580: [
        "Passive rotation in maximal flexion is restricted by $\ge 10^\circ$ compared to opposite side and reproduces headache",
        "Passive neck extension reproducing sharp electrical paresthesia radiating down both upper extremities into fingers",
        "Lateral cervical side-bending producing severe episodic rotary vertigo and downbeating spontaneous nystagmus",
        "Resisted isometric neck rotation producing localized muscular fatigue in the upper trapezius muscle belly"
    ],
    581: [
        "Early surgical anatomical suture anchor / transosseous refixation of the pectoralis major tendon within 2 to 4 weeks",
        "Permanent conservative immobilization with passive range of motion exercises only in an external abduction brace",
        "Rigid shoulder casting locked in 90° of continuous abduction for six consecutive months without any surgery",
        "Superficial therapeutic ultrasound and hot packs applied over the anterior chest wall twice every single day"
    ],
    582: [
        "Restricting combined shoulder abduction and external rotation in a protective sling to prevent excessive tensile strain",
        "Performing heavy barbell bench press lifting with maximal 1RM loads on post-operative day one immediately after repair",
        "Maintaining the shoulder in extreme hyperextension and full external rotation twenty-four hours a day without rest",
        "Performing 500 overhead dumbbell military presses with maximal loads on a flat gym bench twice every single day"
    ],
    583: [
        "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints' - Traction Periostitis along the posteromedial tibial margin)",
        "Anterior Tibial Cortex Stress Fracture with complete cortical lucency line on standing plain lateral radiographs",
        "Deep vein thrombosis of the posterior tibial vein with complete occlusion of lower extremity venous drainage channels",
        "Acute compartment syndrome of the deep posterior compartment with severe ischemic pain and nerve paresthesias"
    ],
    584: [
        "MTSS has diffuse tenderness (≥5 cm) without focal fracture; Stress Fracture has pinpoint focal tenderness (<1–2 cm) with fracture",
        "MTSS always requires emergency open surgical reduction and internal plating; Stress Fracture heals in 24 hours without rest",
        "MTSS occurs exclusively in the bilateral patellae of adolescent swimmers; Stress Fracture occurs exclusively in the ribs of rowers",
        "MTSS produces severe bilateral foot drop paralysis; Stress Fracture produces complete sensory loss over the whole lower limb"
    ],
    585: [
        "Combined Posterior Cruciate Ligament (PCL) and Posterolateral Corner (PLC) rupture with severe multi-ligament laxity",
        "Isolated superficial medial collateral ligament (sMCL) Grade I sprain without any secondary rotatory joint instability",
        "Isolated anterior cruciate ligament (ACL) mid-substance disruption without any secondary meniscal or capsular tears",
        "Patellar tendon complete rupture at the inferior pole of the patella with proximal patellar displacement and patella alta"
    ],
    586: [
        "Active open-chain hamstring contractions are strictly restricted for 6 weeks, as hamstrings produce posterior tibial shear",
        "Hamstring strengthening with maximal 1RM resistance loads must begin immediately on post-operative day one after surgery",
        "The knee must be immobilized in 120° of continuous flexion in a rigid cylinder plaster cast for eight consecutive weeks",
        "Passive knee hyperextension stretching beyond 10° of recurvatum is performed forcefully three times daily without brace"
    ],
    587: [
        "Central tendon/aponeurotic involvement carries longer recovery times (6–12 weeks vs 2–4 weeks) and 3-fold higher re-tear rate",
        "Central tendon injuries heal completely within 24 hours without any need for structured physical rehabilitation drills",
        "Central tendon tears require immediate emergency open surgical reconstruction and suture anchor refixation in all cases",
        "Central tendon tears allow immediate unrestricted return to full contact match play the next morning without testing"
    ],
    588: [
        "Accumulating >95% max sprinting velocity in training and completing repeated sprint bouts matching match running volume",
        "Jogging continuously at 5 km/h on soft grass for 10 minutes only without performing any high-speed sprint running drills",
        "Performing 500 seated hamstring curls on a gym machine without running or field-based functional agility drills",
        "Wearing heavy weighted iron combat boots while walking backward on an indoor motorized treadmill for thirty minutes"
    ],
    589: [
        "Benign physiological adaptation (humeral retroversion with posterior capsular shift), preserving total rotational motion",
        "Pathological posterior capsular contracture requiring immediate arthroscopic surgical capsular release and debridement",
        "Acute complete structural rupture of the subscapularis tendon with anterior glenohumeral joint subluxation tear",
        "Severe pyogenic septic arthritis of the glenohumeral joint requiring emergency intravenous antibiotic hospitalization"
    ],
    590: [
        "Dynamic rotator cuff strengthening, rhythmic stabilization in 90/90 position, and periscapular neuromuscular control drills",
        "Aggressive high-force passive anterior capsular stretching into extreme external rotation beyond 150° in abduction plane",
        "Immobilizing the throwing shoulder in a rigid abduction brace for eight consecutive weeks without active physical therapy",
        "Applying superficial ice packs over the subacromial space without performing any active or passive exercise rehabilitation"
    ],
    591: [
        "Gluteus Medius and Gluteus Maximus of the ipsilateral stance limb (hip abductor and external rotator weakness)",
        "Iliopsoas and Rectus Femoris of the contralateral swinging extremity (hip flexor and knee extensor tightness)",
        "Gastrocnemius and Soleus deep calf musculature of the bilateral limbs equally (plantarflexor contracture)",
        "Tibialis Anterior and Extensor Digitorum Longus muscle bellies in the anterior lower leg (dorsiflexor palsy)"
    ],
    592: [
        "Isolated gluteal activation -> Closed-chain functional loading -> Running gait retraining (increasing cadence by 7.5–10%)",
        "Continuous passive motorized knee stretching on a mechanical table for eight consecutive weeks without active exercise",
        "Heavy open-chain knee extensions performed strictly from 90° to 0° with maximal resistance loads to muscular failure",
        "Running daily marathons on hard concrete road surfaces while wearing heavy weighted combat boots without warm-up drills"
    ],
    593: [
        "Medial Epicondylalgia ('Golfer's Elbow' / tendinopathy of Pronator Teres and Flexor Carpi Radialis tendon origin)",
        "Lateral Epicondylalgia ('Tennis Elbow' / tendinopathy of Extensor Carpi Radialis Brevis and Extensor Digitorum)",
        "Posterior interosseous nerve entrapment under the Arcade of Frohse with radial tunnel motor neuropathy syndrome",
        "Complete avulsion rupture of the triceps brachii tendon insertion at the superior aspect of olecranon process"
    ],
    594: [
        "Isolated eccentric loading of the wrist flexors and pronator teres using a flexible rubber resistance bar device",
        "Forceful high-velocity manipulation of the ulnar nerve behind the medial epicondyle into forced elbow extension",
        "Applying continuous shortwave diathermy over the lateral epicondyle for sixty consecutive minutes every single day",
        "Immobilizing the entire upper extremity in a long-arm fiberglass cast for twelve consecutive weeks without movement"
    ],
    595: [
        "Chronic Ankle Instability (CAI) with combined mechanical ligamentous laxity and sensorimotor proprioceptive deficits",
        "Acute undisplaced bimalleolar fracture of the distal tibia and fibula requiring emergency open surgical reduction",
        "Deep vein thrombosis of the anterior tibial vein with complete occlusion of lower extremity venous drainage channels",
        "Complete avulsion rupture of the Achilles tendon insertion from the posterior superior calcaneal tuberosity"
    ],
    596: [
        "Progressive multi-directional balance, wobble-board drills, perturbation training, and reactive dynamic agility cutting",
        "Complete non-weight-bearing bed rest and immobilization in a rigid walking cast for six consecutive months in bed",
        "Routine surgical reconstruction of the lateral ankle ligaments on all patients regardless of structured rehab trial",
        "Applying superficial ice packs over the lateral malleolus once monthly without performing any active physical therapy"
    ],
    597: [
        "Sever's Disease (Calcaneal Apophysitis / Traction Osteochondrosis of the secondary calcaneal ossification center)",
        "Plantar Fasciopathy with proximal fascial micro-tears and calcaneal traction spur formation at medial tuberosity",
        "Stress fracture of the distal fifth metatarsal styloid process (Jones fracture non-union with sclerosis)",
        "Tarsal Tunnel Syndrome with compression of the medial and lateral plantar nerve branches under retinaculum"
    ],
    598: [
        "Sever's disease is self-limiting and resolves completely upon skeletal maturity with zero long-term disability",
        "Sever's disease is a progressive malignant condition requiring immediate surgical amputation of the calcaneus",
        "The athlete must permanently retire from all physical activity and competitive sports participation for life",
        "The athlete will require lifelong dependence on external wheelchair mobility due to complete calcaneal failure"
    ],
    599: [
        "Anterior Tibial Cortex Stress Fracture (High-Risk Bone Stress Injury with high risk of non-union/displacement)",
        "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints' - benign traction periostitis along posteromedial border)",
        "Gastrocnemius medial head muscle belly tear (Tennis Leg with localized calf pain and intramuscular hematoma)",
        "Deep vein thrombosis of the anterior tibial vein with venous occlusion and severe lower extremity edema"
    ],
    600: [
        "The anterior cortex is subject to high tensile bending forces and has poor vascularity; refractory cases require IM Nailing",
        "The anterior cortex is on the compression side and heals spontaneously within 48 hours without any training modification",
        "It requires immediate surgical amputation of the lower leg to prevent malignant osteosarcoma bone transformation in tissues",
        "It is treated with aggressive daily marathon running on concrete road surfaces while wearing weighted iron combat boots"
    ]
}

new_data_6 = []
for q in DATA_TEST_6:
    qid = q["id"]
    if qid in fixes_test6:
        q_copy = dict(q)
        q_copy["options"] = fixes_test6[qid]
        q_copy["correct"] = 0
        new_data_6.append(q_copy)
    else:
        new_data_6.append(q)

ratios = []
diffs = []
for q in new_data_6:
    lens = [len(o) for o in q["options"]]
    r = max(lens) / max(min(lens), 1)
    d = max(lens) - min(lens)
    ratios.append(r)
    diffs.append(d)

print(f"Test 6 Overhauled Stats: Avg Ratio = {sum(ratios)/len(ratios):.2f}, Worst Ratio = {max(ratios):.2f}, Max Diff = {max(diffs)}")

with open("data_test6.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 6 (100 Questions)\n")
    f.write("# Balanced Distractors, Symmetrical Lengths, No Simplistic Foils, Standard Book Citations\n\n")
    f.write("DATA_TEST_6 = " + json.dumps(new_data_6, indent=4) + "\n")
print("Saved data_test6.py")
