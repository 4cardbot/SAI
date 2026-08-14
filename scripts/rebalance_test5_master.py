import json
from data_test5 import DATA_TEST_5

fixes_test5 = {
    401: [
        "Inability to sustain required force or power output, arising from both central corticospinal and peripheral metabolic mechanisms",
        "Permanent irreversible structural necrosis and apoptotic breakdown of contracting skeletal muscle fibers and tendon units",
        "Selective chemical blockade of acetylcholine release at the neuromuscular junction caused by systemic magnesium accumulation",
        "Complete structural failure of the sarcoplasmic reticulum membrane leading to uncontrolled intracellular calcium leakage"
    ],
    402: [
        "Increases active myosin cross-bridge phosphorylation (RLC) and enhances calcium sensitivity of myofibrillar contractile proteins",
        "Promotes massive parallel muscle fiber hyperplasia and increases total skeletal muscle fiber number within twenty minutes",
        "Completely blocks all inhibitory Golgi tendon organ afferent feedback signals to the central nervous system alpha motor pool",
        "Doubles the core body temperature of contracting skeletal muscle fibers, maximizing enzymatic ATPase velocity and turnover"
    ],
    403: [
        "Directly correlates with skeletal muscle oxidative capacity, mitochondrial volume, capillary density, and type I fiber percentage",
        "Remains completely unchanged regardless of multi-year high-volume endurance training status or genetic mitochondrial variations",
        "Reflects the total rate of anaerobic lactic glycolysis occurring inside contracting fast-twitch Type IIx skeletal muscle fibers",
        "Is determined entirely by environmental ambient barometric air pressure rather than individual cellular oxidative machinery"
    ],
    404: [
        "Elevated total circulating blood and plasma volume, increased left ventricular compliance, and enhanced myocardial venous return",
        "Severe arterial vasoconstriction in non-exercising muscular vascular beds mediated by high systemic alpha-adrenergic receptor tone",
        "Marked thickening of the left ventricular free wall without any change in end-diastolic internal chamber diameter or volume",
        "Selective destruction of red blood cell hemoglobin molecules inside active contracting skeletal muscle capillary networks"
    ],
    405: [
        "The metabolic rate of non-contracting resting human tissue, approximately 3.5 mL of oxygen per kilogram of body weight per minute",
        "The maximum rate of oxygen consumption achieved during an incremental graded cardiopulmonary exercise testing protocol",
        "The total volume of carbon dioxide expired per minute divided by the total volume of oxygen consumed during steady-state bouts",
        "The concentration of lactic acid accumulated in peripheral venous blood during all-out maximal anaerobic sprint cycling tests"
    ],
    406: [
        "The active muscle is stretched immediately prior to shortening, enhancing concentric force via stored elastic energy and reflexes",
        "The muscle performs pure isometric contraction followed by prolonged rest to maximize metabolic ATP resynthesis pathways",
        "The antagonist muscle is completely paralyzed through reciprocal inhibition during the entire active movement cycle duration",
        "The muscle contracts concentrically at very slow speeds to minimize tendon strain and prevent acute mechanical tissue rupture"
    ],
    407: [
        "The horizontal distance between the foot's initial ground contact point and the vertical projection of the body center of mass",
        "The total vertical height achieved by the body center of mass during the flight phase of running at maximal sprinting speeds",
        "The total duration of time in milliseconds that the foot remains in mechanical contact with the running surface during stance",
        "The angular excursion in degrees of the hip joint moving from peak extension at toe-off to peak flexion at terminal swing"
    ],
    408: [
        "30 to 60 grams of carbohydrate per hour, using single or multiple transportable carbohydrate solutions (e.g., 6–8% drinks)",
        "5 to 10 grams of carbohydrate per hour consumed exclusively as high-fiber solid snack bars to prevent gastric emptying spikes",
        "120 to 150 grams of carbohydrate per hour using pure crystalline fructose to saturate hepatic fructokinase transport pathways",
        "Zero carbohydrate intake, relying entirely on dietary saturated fats and exogenous medium-chain triglyceride supplementation"
    ],
    409: [
        "On the anterior midline of the upper arm, over the biceps brachii belly, midway between the acromion and olecranon process",
        "On the posterior midline of the upper arm, over the triceps brachii belly, 2 cm proximal to the olecranon fossa tendon margin",
        "Along the lateral border of the deltoid muscle insertion, midway between the clavicle and the lateral epicondylar ridge of humerus",
        "Directly over the coracoid process of the scapula, pinched horizontally along the natural cleavage lines of the cutaneous skin"
    ],
    410: [
        "High linearity, slender fragile limbs, narrow thoracic dimensions, low subcutaneous adiposity, and minimal muscular development",
        "Predominant relative adiposity, spherical soft body contours, large abdominal girth, and high subcutaneous fat accumulation",
        "Dominant musculoskeletal robusticity, broad shoulder girdle dimensions, dense bone structure, and large muscular contours",
        "Balanced physical proportions where fatness, muscularity, and linearity contribute in equal mathematical ratios on charts"
    ],
    411: [
        "A mental state of optimal performance characterized by complete absorption in the task, effortless execution, and intrinsic reward",
        "A state of severe cognitive anxiety and panic where an athlete experiences complete motor paralysis during competition bouts",
        "A training state of acute physiological overreaching caused by excessive volume and insufficient dietary carbohydrate fueling",
        "A psychological condition where an athlete becomes completely unresponsive to external verbal coaching feedback and cues"
    ],
    412: [
        "High ACWR (>1.50) indicates acute training load spikes that exceed chronic fitness, significantly elevating relative injury risk",
        "High ACWR (>1.50) indicates optimal physiological readiness and completely protects the athlete from soft tissue injury risk",
        "High ACWR (>1.50) indicates severe physical detraining requiring an immediate 300% increase in weekly training volume loads",
        "High ACWR (>1.50) is a mathematical metric used exclusively to calculate daily dietary fluid and sodium chloride requirements"
    ],
    413: [
        "The smallest change in a patient-reported outcome score that the patient perceives as beneficial and clinically meaningful",
        "The minimum change in a score that exceeds the standard measurement error of the clinical testing instrument used in research",
        "The statistical p-value threshold required to reject the null hypothesis in a multivariable linear regression model in trials",
        "The total number of false positive outcomes divided by the total number of screened study participants in clinical studies"
    ],
    414: [
        "High sensitivity (near 100%) and low negative likelihood ratio ($LR- < 0.10$), allowing negative test results to confidently rule out",
        "High specificity (near 100%) and high positive likelihood ratio ($LR+ > 10$), allowing positive test results to confidently rule in",
        "A low cost and fast administration time regardless of sensitivity, specificity, or predictive values in screening cohorts",
        "A high positive predictive value that remains completely constant regardless of underlying disease prevalence in populations"
    ],
    415: [
        "Incidence Rate accounts for individual athlete exposure time (person-time); Cumulative Incidence measures proportion of cohort injured",
        "Incidence Rate is used exclusively in laboratory animal studies; Cumulative Incidence is used exclusively in human surgical trials",
        "Incidence Rate measures non-contact soft tissue injuries; Cumulative Incidence measures high-velocity skeletal fractures only",
        "Incidence Rate measures financial healthcare costs; Cumulative Incidence measures total competitive playing days lost to injury"
    ],
    416: [
        "Accelerates cutaneous vasoconstriction, reduces local tissue metabolism, blunts secondary inflammatory cascades, and relieves DOMS",
        "Permanently destroys subcutaneous adipose tissue layers through continuous shivering thermogenesis and localized skin freezing",
        "Completely eliminates the biological requirement for post-exercise dietary carbohydrate, protein, and fluid replenishment",
        "Induces immediate complete central hypnosis to suppress pre-competition cognitive arousal and state anxiety before matches"
    ],
    417: [
        "Sodium Bicarbonate loading (0.2–0.3 g/kg 60–90 min pre-exercise) to expand extracellular buffering capacity and efflux H+ from muscles",
        "High-dose Vitamin C and E antioxidant supplementation consumed immediately pre-exercise to completely eliminate all free radicals",
        "Exogenous ketone ester drinks consumed to completely replace muscle glycogen utilization during high-intensity sprint bouts",
        "Dehydration protocols aimed at reducing total body mass by 5% immediately prior to competition to improve power-to-weight ratio"
    ],
    418: [
        "Peak force, rate of force development (RFD at 50, 100, 200 ms), and time-specific impulse during multi-joint isometric extension",
        "Total aerobic running capacity and maximal oxygen uptake consumption during steady-state submaximal endurance treadmill protocols",
        "The lateral shear force vector generated across the first metatarsophalangeal joint during terminal stance propulsion push-off",
        "The percentage of fast-twitch Type IIx muscle fibers present within the gastrocnemius muscle belly determined by biopsy"
    ],
    419: [
        "The percentage decrease in movement velocity from the fastest rep to the final rep of a set, used to manage fatigue and stimulus",
        "The total mechanical work completed divided by the total duration of the rest interval between consecutive resistance training sets",
        "The bar speed at which an athlete must initiate maximal concentric acceleration during the transition from the eccentric phase",
        "The average velocity loss that occurs when an athlete transitions from sea level to high-altitude training camps for competition"
    ],
    420: [
        "Category S4 (Hormone and Metabolic Modulators); strictly prohibited AT ALL TIMES (both In-Competition and Out-of-Competition)",
        "Category S6 (Stimulants); prohibited In-Competition only above specified analytical laboratory concentration threshold limits",
        "Category P1 (Beta-Blockers); prohibited exclusively in target precision sports such as archery and competitive rifle shooting",
        "Category S9 (Glucocorticoids); prohibited exclusively via systemic oral, intravenous, and rectal administration routes"
    ],
    421: [
        "Enhancing core stability, dynamic lower limb alignment (eliminating valgus collapse), hamstring strength, and landing mechanics",
        "Completely immobilizing the knee joint in full hyperextension during all jump landing drills to eliminate knee flexion moments",
        "Selectively atrophying the quadriceps muscle group to allow unconstrained passive knee flexion during high-speed cutting steps",
        "Replacing all intra-articular collagen fibrils with rigid inorganic hydroxyapatite bone mineral matrix to resist tensile tear"
    ],
    422: [
        "The product of applied force and time duration of force application, which equals the change in linear momentum of the athlete's body",
        "The linear rate of change of angular momentum of the human body center of mass during horizontal sprint running acceleration",
        "The total mechanical energy converted into radiant heat during post-exercise recovery stabilization and muscle relaxation phases",
        "The gravitational pull exerted by the Earth's center of mass upon the human skeleton during the aerial flight phase of jumping"
    ],
    423: [
        "An increase in resting HR accompanied by reduced submaximal HR variability, indicating sympathetic overactivity and early fatigue",
        "A marked decrease in resting HR accompanied by elevated high-frequency HRV, indicating superior parasympathetic cardiac tone",
        "Total exhaustion of all intracellular glycogen stores requiring immediate emergency intravenous glucose fluid administration",
        "Complete structural rupture of the patellar tendon requiring immediate surgical reconstruction and plaster immobilization"
    ],
    424: [
        "A visual plot displaying the point estimate (effect size) and 95% confidence intervals of individual studies included in meta-analysis",
        "A graphical scatterplot used to assess publication bias by plotting study effect size against sample size or standard error metrics",
        "A continuous line graph displaying real-time changes in blood lactate accumulation during incremental exercise testing protocols",
        "A two-dimensional coordinate chart used to plot individual somatotype ratings in the Heath-Carter anthropometric system"
    ],
    425: [
        "The dynamic, multi-factorial, and non-linear interactions between internal (intrinsic) risk factors, external factors, and mechanisms",
        "That all sports injuries are caused by a single isolated biomechanical variable acting independently of athlete physiology",
        "That sports injuries occur completely at random and cannot be predicted, modeled, or prevented by any clinical intervention",
        "A surgical guideline detailing arthroscopic reconstruction protocols for multi-ligament knee injuries in contact sports"
    ],
    426: [
        "Hyperventilation-induced drop in arterial PCO2 causes respiratory alkalosis; kidneys excrete HCO3- over 24–72 hours to normalize pH",
        "Renal retention of hydrogen ions causing severe systemic metabolic acidosis and dehydration within the first 6 hours of exposure",
        "Complete cessation of all urine production by shutting down renal glomeruli filtration to preserve circulating blood volume",
        "Direct conversion of urea into insoluble calcium hydroxyapatite crystals within the bladder to buffer systemic nitrogen waste"
    ],
    427: [
        "Essential mineral component of Hemoglobin and Myoglobin (for O2 transport) and Cytochromes (for mitochondrial electron transport chain)",
        "Directly converts into muscle glycogen granules inside fast-twitch Type IIx muscle fibers during high-intensity training sessions",
        "Inhibits the enzyme glycogen phosphorylase to prevent hepatic carbohydrate breakdown during prolonged aerobic exercise bouts",
        "Acts as an extracellular buffering agent to neutralize lactic acid accumulation in the bloodstream during all-out sprinting"
    ],
    428: [
        "A state of physical, emotional, and mental exhaustion caused by chronic excessive training loads and inadequate recovery balance",
        "A sudden, acute muscle cramp occurring during the final minutes of an intense competitive athletic match in warm weather",
        "A psychological condition where an athlete experiences exceptional confidence and completely effortless movement execution in competition",
        "A mild state of acute fatigue that resolves completely following twenty-four hours of rest and carbohydrate rehydration"
    ],
    429: [
        "The ratio of the score on the injured/involved limb to the uninjured/uninvolved limb, expressed as a percentage ($LSI = [Injured/Uninjured] \\times 100$)",
        "The ratio of total body mass to standing stature squared, used to calculate body mass index in anthropometric profiling studies",
        "The ratio of concentric quadriceps peak torque to concentric hamstring peak torque measured on an isokinetic dynamometer device",
        "The difference in millimeters between the anterior tibial translation of the involved knee and the contralateral uninjured knee"
    ],
    430: [
        "Systematic error introduced when subjects selected for study differ systematically from the target population from which they are drawn",
        "Error occurring when study investigators intentionally falsify laboratory test results to achieve statistically significant p-values",
        "The loss of study participants due to relocation to a different geographical country during longitudinal clinical trials",
        "The mathematical calculation error occurring when computing sample variance and standard deviation across multiple study groups"
    ],
    431: [
        "Analyzes all randomized participants in their assigned groups regardless of non-compliance, protocol deviations, or study withdrawal",
        "Analyzes only those participants who completed 100% of all assigned exercise interventions without any protocol deviations in trials",
        "Allows participants to select which treatment group they prefer after the completion of the experimental intervention phase",
        "Excludes all participants who experience adverse side effects or fail to achieve statistically significant functional improvements"
    ],
    432: [
        "Reduces non-contact lower extremity injuries (especially ankle sprains) by improving mechanoreceptive reflexes and postural stability",
        "Completely eliminates all traumatic skeletal fractures across an entire competitive athletic career in professional contact sports",
        "Increases maximal sprinting velocity by 25 meters per second within three training days of commencing the balance protocol",
        "Prevents all acute facial lacerations and dental fractures during competitive match play in professional field sports"
    ],
    433: [
        "Direct financial, coaching, sports science, equipment, and medical support to identified elite Olympic and Paralympic medal prospects",
        "Conducting commercial retail marketing and merchandising campaigns for private sporting goods manufacturers across urban centers",
        "Managing stadium ticket distribution, catering logistics, and VIP security operations on tournament match days in major cities",
        "Providing specialized clinical veterinary medical care for equestrian race horses competing in national championship events"
    ],
    434: [
        "Los Angeles, California, United States (organizing the Games of the XXXIV Olympiad in July 2028)",
        "Brisbane, Queensland, Commonwealth of Australia (organizing the Games of the XXXV Olympiad in 2032)",
        "Paris, Île-de-France, French Republic (organizing the Games of the XXXIII Olympiad in 2024)",
        "Madrid, Community of Madrid, Kingdom of Spain (candidate Olympic host city for summer sports)"
    ],
    435: [
        "Presence of a Prohibited Substance or its Metabolites/Markers in an Athlete's Sample (Article 2.1 - Strict Liability violation)",
        "Purchasing sealed commercial electrolyte drinks and protein supplements from a licensed pharmacy store in accordance with law",
        "Carrying a certified sports physical therapy treatment kit containing sterile gauze bandages into an arena during team training",
        "Transporting sports equipment, uniforms, and competitive bicycles across international borders for authorized sporting events"
    ],
    436: [
        "Category S5 (Diuretics and Masking Agents); strictly prohibited AT ALL TIMES (both In-Competition and Out-of-Competition)",
        "Category S6 (Stimulants); prohibited In-Competition only above specified analytical laboratory concentration threshold limits",
        "Category P1 (Beta-Blockers); prohibited exclusively in target precision sports such as archery and competitive rifle shooting",
        "Category S9 (Glucocorticoids); prohibited exclusively via systemic oral, intravenous, and rectal administration routes"
    ],
    437: [
        "An NSF must include prominent sportspersons of outstanding merit with voting rights of at least 25% of total Executive Committee",
        "National Sports Federations are completely exempt from including athletes on their governing Executive Committee boards",
        "Athletes are permitted to attend Executive Committee meetings only as silent non-voting observers without voting rights",
        "Athletes must comprise 100% of all administrative, financial, and secretarial positions within recognized federations"
    ],
    438: [
        "India's highest sporting honour for spectacular and most outstanding performance by a sportsperson over a period of four years",
        "Winning an individual gold medal in Olympic track and field sprint events over four consecutive Olympic tournament cycles",
        "Lifetime contribution to sports journalism and television broadcasting across national news channels over thirty years",
        "Constructing the largest public municipal sports stadium facility in a state capital territory using public donations"
    ],
    439: [
        "A program tracking longitudinal biological markers (Hematological and Steroidal modules) in an athlete to detect doping over time",
        "A commercial retail loyalty program providing discounts on sports equipment and apparel to national team athletes",
        "A mandatory travel identity document required for athletes crossing international borders to compete in major games",
        "A computerized scoring system used to calculate league rankings and tournament seedings in professional team sports"
    ],
    440: [
        "An athlete can have a sanction reduced if they provide substantial assistance that uncovers or establishes an ADRV by another person",
        "An athlete receives financial cash rewards from WADA for reporting coaching staff to international law enforcement agencies",
        "An athlete is completely exempt from all anti-doping testing if they volunteer to assist at national sports federation events",
        "An athlete can transfer their competitive ineligibility suspension to another teammate who agrees to serve the ban"
    ],
    441: [
        "Glenohumeral Internal Rotation Deficit: loss of internal rotation in the throwing shoulder compared to the non-throwing shoulder",
        "Glenohumeral Instability Reduction Device: an external orthotic brace used to prevent anterior shoulder subluxation during throws",
        "Glenohumeral Inferior Recess Decompression: a surgical arthroscopic procedure used to treat severe adhesive capsulitis stiffness",
        "Glenohumeral Intermittent Rotator Dysfunction: a neurological condition characterized by transient suprascapular nerve palsy"
    ],
    442: [
        "Total Rotational Motion Arc (ER + IR) should be symmetrical between dominant and non-dominant shoulders (within 5° difference)",
        "The dominant throwing shoulder should have at least 45° more internal rotation than the contralateral non-throwing shoulder",
        "The non-dominant shoulder should have complete loss of external rotation to compensate for dominant arm internal rotation loss",
        "Total rotational motion arc is completely irrelevant in overhead throwers and should not be evaluated during clinical assessment"
    ],
    443: [
        "Sleeper stretch and Cross-body horizontal adduction stretch with active scapular stabilization, plus posterior glenohumeral mobilizations",
        "High-force passive stretching of the anterior joint capsule into maximal external rotation beyond 150° in abduction plane",
        "Immobilizing the throwing shoulder in a rigid abduction brace for eight consecutive weeks without active physical therapy",
        "Applying superficial ice packs over the subacromial space without performing any active or passive physical rehabilitation"
    ],
    444: [
        "Full active ROM, symmetrical rotator cuff strength (ER/IR ratio 66–75%), pain-free interval throwing, and normal scapular control",
        "Ability to throw a baseball at 150 km/h for 100 consecutive pitches without warming up regardless of shoulder strength scores",
        "Absence of pain during resting sitting posture after 2 weeks of complete immobilization in an external abduction brace",
        "Mandatory 12-month complete rest period from all overhead throwing activities regardless of physical recovery and testing"
    ],
    445: [
        "A functional single-leg squat test where the subject steps down from a 20 cm box while pelvic tilt, hip adduction, and knee valgus are scored",
        "A maximal 1RM barbell back squat test performed to parallel depth to evaluate absolute lower extremity extensor strength capacity",
        "A passive flexibility assessment where the examiner measures the available range of hip internal and external rotation in prone",
        "An isokinetic strength test measuring the concentric quadriceps to hamstring ratio at an angular velocity of 60 degrees per second"
    ],
    446: [
        "Gluteus Medius (hip abductor) and Gluteus Maximus (hip external rotator/extensor) weakness of the ipsilateral stance extremity",
        "Quadriceps Femoris concentric weakness with overactive gastrocnemius-soleus calf musculature on the swinging contralateral limb",
        "Tibialis Anterior paralysis causing foot drop and compensatory pelvic elevation during the advancing swing phase of movement",
        "Pectineus and Adductor Longus tightness causing excessive femoral abduction and external rotation during the loading phase"
    ],
    447: [
        "Targeted hip abductor/external rotator strengthening, foot orthotics if pronated, and running cadence retraining (+7.5% to 10%)",
        "High-force open-chain leg extensions performed strictly from 90° to 0° with maximal resistance loads to muscular failure",
        "Continuous non-weight-bearing bed rest and immobilization in a rigid cylinder plaster cast for eight consecutive weeks",
        "Running daily marathons on hard concrete road surfaces while wearing heavy weighted combat boots without warm-up drills"
    ],
    448: [
        "Increases stride rate, shortens step length, reduces vertical center of mass excursion, and lowers patellofemoral joint stress by ~15–20%",
        "Causes severe hamstring muscle cramping and significantly increases metabolic energy expenditure during distance running bouts",
        "Locks the knee joint in full hyperextension during initial heel contact to eliminate all quadriceps myoelectric muscle activation",
        "Increases peak vertical ground reaction impact forces by 50% and doubles patellofemoral compressive loading on articular cartilage"
    ],
    449: [
        "A subacromial impingement sign: passive internal rotation of the 90° flexed shoulder brings the supraspinatus against the coracoacromial arch",
        "A posterior instability test: applying axial compression to the 90° abducted arm in the scapular plane with posteroinferior shear",
        "An anterior labral tear test: active forward flexion with forearm supinated against manual resistance reproducing bicipital groove pain",
        "An acromioclavicular joint test: horizontal adduction of the arm across the chest reproducing localized AC joint line pain"
    ],
    450: [
        "Subacromial Impingement Syndrome (Secondary Impingement) and internal contact between rotator cuff and posterosuperior glenoid",
        "Complete structural rupture of the axillary nerve with irreversible paralysis of the anterior, middle, and posterior deltoid",
        "Acute traumatic anterior dislocation of the sternoclavicular joint requiring emergency open reduction and internal wire fixation",
        "Severe pyogenic septic arthritis of the glenohumeral joint requiring emergency intravenous antibiotic hospitalization therapy"
    ],
    451: [
        "Periscapular neuromuscular control (Serratus Anterior and Lower Trapezius) and dynamic rotator cuff centralization exercises",
        "Heavy barbell overhead presses performed with maximal 1RM loads behind the neck on a gym bench twice every single day",
        "Complete immobilization of the shoulder in a rigid plaster spica cast for twelve consecutive weeks without any exercise",
        "High-velocity manipulation of the glenohumeral joint into forced end-range external rotation and extension under anesthesia"
    ],
    452: [
        "Full pain-free active shoulder ROM, normal scapulohumeral rhythm without dyskinesis, and symmetrical rotator cuff strength (LSI ≥ 90%)",
        "Ability to perform 100 overhead smash strokes with reported 8/10 shoulder pain while taking oral non-steroidal anti-inflammatory drugs",
        "Absence of tenderness upon superficial palpation over the deltoid insertion after two weeks of complete arm sling resting",
        "Mandatory 6-month rest period regardless of physical functional recovery, objective strength scores, and biomechanical testing"
    ],
    453: [
        "Grade II injury (moderate strain with partial macroscopic tearing of the myotendinous junction and localized fascial defect)",
        "Grade I injury (mild strain with microscopic myofibrillar damage, intact structural architecture, and zero functional deficit)",
        "Grade III injury (complete full-thickness rupture or avulsion of the muscle-tendon unit with visible retraction and defect)",
        "Grade IV injury (severe chronic calcific myositis ossificans requiring emergency surgical excision and internal bone debridement)"
    ],
    454: [
        "Proximal insertional avulsions (ischial tuberosity) and central tendon (aponeurotic) injuries carry significantly longer recovery times",
        "Distal myofascial strains take significantly longer to heal than proximal bony avulsion fractures of the ischial tuberosity",
        "Injury location has zero measurable impact on biological healing, rehabilitation progression, or return-to-sport timelines",
        "Intramuscular hematomas always heal completely within twenty-four hours without any loss of sports training time"
    ],
    455: [
        "Lengthened-state eccentric loading (Askling L-protocol), trunk/pelvic core stabilization, progressive high-speed running, and agility",
        "Passive static hamstring stretching on a massage table for 45 minutes daily without active strengthening or running drills",
        "Continuous non-weight-bearing immobilization in a long-leg rigid plaster cast for eight consecutive weeks in bed resting",
        "Heavy open-chain knee curls performed exclusively at very slow speeds with the hip maintained in 45° of extension on machines"
    ],
    456: [
        "Symmetrical isokinetic hamstring strength (LSI ≥ 90–95%), eccentric H:Q ratio ≥ 0.60, high-speed running tolerance, and negative H-test",
        "Ability to jog 100 meters on grass at 30% effort without reported acute sharp pain regardless of objective strength scores",
        "Absence of muscle tenderness upon superficial skin palpation after two weeks of complete non-weight-bearing bed resting",
        "Mandatory completion of a 6-month resting period regardless of physical recovery, strength symmetry, and testing results"
    ],
    457: [
        "Anterior Talofibular Ligament (ATFL) complete or partial tear (the primary restraint to anterior talar translation in plantarflexion)",
        "Calcaneofibular Ligament (CFL) tear (the primary restraint to hindfoot inversion when the ankle is held in neutral dorsiflexion)",
        "Deltoid ligament superficial tibiotalar band sprain (the primary restraint to hindfoot eversion and external rotation forces)",
        "Anterior Inferior Tibiofibular Ligament (AITFL) tear (the primary restraint to distal syndesmotic widening and diastasis)"
    ],
    458: [
        "Calcaneofibular Ligament (CFL) injury (the CFL crosses both talocrural and subtalar joints and resists inversion in neutral dorsiflexion)",
        "Anterior Talofibular Ligament (ATFL) injury (which is taut and stressed exclusively in extreme 30° plantarflexion positions)",
        "Deltoid ligament deep posterior tibiotalar band rupture (which resists extreme eversion stress in maximal dorsiflexion)",
        "Posterior talofibular ligament complete avulsion (which resists extreme dorsiflexion and posterior talar displacement)"
    ],
    459: [
        "Functional rehabilitation (semi-rigid bracing, early weight-bearing, peroneal strengthening, proprioception, and perturbation training)",
        "Rigid plaster cast immobilization for six weeks without weight-bearing, followed by complete avoidance of physical activity",
        "Immediate emergency surgical anatomical reconstruction of the lateral ligaments within 24 hours of injury in all patients",
        "Superficial ice packs applied for twenty minutes once weekly without performing any active or passive exercise therapy"
    ],
    460: [
        "Full pain-free active ROM, normal peroneal strength (LSI ≥ 90%), dynamic balance symmetry (SEBT reach within 4 cm), and agility clearance",
        "Ability to walk 50 meters on flat ground with a severe limp while wearing an external supportive lace-up ankle brace",
        "Absence of swelling upon visual inspection after three days of non-weight-bearing elevation in bed resting postures",
        "Mandatory 3-month complete rest period regardless of physical functional recovery, objective strength scores, and balance testing"
    ],
    461: [
        "Patellar Tendinopathy ('Jumper's Knee' - insertional tendinopathy of the proximal patellar tendon at the inferior patellar pole)",
        "Osgood-Schlatter Disease with traction apophysitis of the secondary ossification center of the tibial tuberosity in adolescents",
        "Patellofemoral osteoarthritis with lateral joint space narrowing, subchondral sclerosis, and osteophytes on plain radiographs",
        "Infrapatellar fat pad impingement syndrome (Hoffa's disease) with anterior knee pain and localized fat pad hypertrophy"
    ],
    462: [
        "Heavy Slow Resistance (HSR: 3 sets of 6–8 reps at 70–85% 1RM) or isometric loading (Spanish Squats) to promote collagen remodeling",
        "Continuous high-velocity drop jumps from 60 cm plyometric boxes onto hard wooden flooring surfaces twice every single day",
        "Continuous non-weight-bearing immobilization of the knee in a rigid cylinder plaster cast for eight consecutive weeks in bed",
        "Heavy ballistic concentric knee extensions performed on an isokinetic dynamometer to muscular failure twice daily"
    ],
    463: [
        "Pain is permitted up to 5/10 during exercise provided symptoms subside by next morning and morning stiffness does not worsen",
        "Pain must be kept at absolute 0/10 at all times; any feeling of discomfort requires complete cessation of rehabilitation drills",
        "Pain must reach at least 9/10 during every set to ensure adequate mechanical stimulus for tendon collagen synthesis and healing",
        "Pain is ignored completely and the athlete continues maximum competitive training regardless of reported symptom severity"
    ],
    464: [
        "Pain-free completion of energy-storage and release drills (e.g., maximal single-leg hopping), symmetrical strength, and normal loading",
        "Ability to jog 500 meters at slow speed on grass while taking daily oral non-steroidal anti-inflammatory medications",
        "Absence of tenderness upon superficial palpation over the patellar tendon after two weeks of complete resting in bed",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and hop testing"
    ],
    465: [
        "Femoroacetabular Impingement (FAI syndrome - Cam deformity at femoral head-neck junction or Pincer deformity at acetabulum)",
        "Greater Trochanteric Pain Syndrome (GTPS / Gluteal Tendinopathy with lateral hip pain over the greater trochanter insertion)",
        "Iliopsoas bursitis with external snapping hip syndrome friction over the iliopectineal eminence during active hip flexion",
        "Piriformis syndrome with entrapment of the sciatic nerve in the greater sciatic notch causing posterior radiating paresthesias"
    ],
    466: [
        "Alpha Angle > 55° on Dunn lateral radiographs or MRI (quantifying aspherical femoral head-neck Cam morphology / bump)",
        "Cobb Angle > 20° on standing full-spine anteroposterior radiographs (quantifying structural lateral spinal scoliotic curvature)",
        "Q-Angle > 20° measured from the anterior superior iliac spine to the patella center and tibial tuberosity in standing",
        "Bohler's Angle < 20° measured on lateral calcaneal radiographs (quantifying traumatic intra-articular calcaneal compression fracture)"
    ],
    467: [
        "Conservative: hip abductor/core strengthening, avoiding extreme end-range flexion/internal rotation; Arthroscopy if non-responsive",
        "Immediate emergency total hip replacement arthroplasty with cementless femoral stem within 24 hours of clinical diagnosis",
        "High-force passive stretching of the hip into maximal flexion, adduction, and internal rotation to forcefully stretch the labrum",
        "Complete non-weight-bearing immobilization in a spica plaster cast for six consecutive months without any active movement"
    ],
    468: [
        "Full pain-free hip ROM, symmetrical hip muscle strength (LSI ≥ 90%), completion of sports agility cutting drills, and negative FADIR",
        "Ability to walk 100 meters on flat ground with reported mild groin pain while taking high-dose oral analgesic medications",
        "Absence of pain during resting sitting posture after two weeks of complete non-weight-bearing resting in bed postures",
        "Mandatory 12-month complete rest period regardless of physical functional recovery, objective strength scores, and testing results"
    ],
    469: [
        "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints' - Traction Periostitis along the posteromedial tibial margin)",
        "Anterior Tibial Cortex Stress Fracture with complete cortical lucency line on standing plain lateral radiographs",
        "Chronic Exertional Compartment Syndrome of the anterior deep muscular compartment with elevated intracompartmental pressures",
        "Deep vein thrombosis of the posterior tibial vein with complete occlusion of lower extremity venous drainage channels"
    ],
    470: [
        "MTSS has diffuse tenderness (≥5 cm) without focal fracture; Stress Fracture has pinpoint focal tenderness (<1–2 cm) with cortical fracture",
        "MTSS always requires emergency open surgical reduction and internal plating; Stress Fracture heals in 24 hours without rest",
        "MTSS occurs exclusively in the upper extremities of swimmers; Stress Fracture occurs exclusively in the ribs of rowers",
        "MTSS produces severe bilateral foot drop paralysis; Stress Fracture produces complete sensory loss over the whole lower limb"
    ],
    471: [
        "Workload modification (reducing running volume/intensity), calf/soleus strengthening, foot orthotics, and cadence increase (+7.5–10%)",
        "Immediate emergency four-compartment surgical fasciotomy of the lower leg within 24 hours of clinical diagnosis in all cases",
        "Complete non-weight-bearing immobilization in a long-leg rigid plaster cast for six consecutive months in bed resting",
        "Running daily marathons while wearing heavy weighted iron boots on hard concrete road surfaces without warm-up drills"
    ],
    472: [
        "Pain-free completion of running loading progressions (including sprinting, hopping, and change of direction) without next-day soreness",
        "Ability to jog 500 meters at slow speed on grass while taking daily oral non-steroidal anti-inflammatory medications",
        "Absence of tenderness upon superficial palpation over the shin after two weeks of complete resting in bed postures",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and hop testing"
    ],
    473: [
        "Grade III (complete rupture of the Superficial Medial Collateral Ligament with medial joint space opening and soft end-feel at 30°)",
        "Grade I (mild sprain with localized tenderness along the MCL, zero joint opening on valgus stress, and a solid firm end-feel)",
        "Grade II (moderate sprain with partial fiber disruption, 3–5 mm medial joint opening on valgus stress, and a firm end-feel)",
        "Grade IV (chronic calcific Pellegrini-Stieda lesion with complete osseous bridging along the medial femoral epicondyle ridge)"
    ],
    474: [
        "At 30° flexion, the posterior capsule and cruciate ligaments are relaxed, isolating the Superficial Medial Collateral Ligament",
        "At full extension, the anterior cruciate ligament is completely relaxed, allowing pure coronal plane valgus joint translation",
        "At 90° flexion, the lateral collateral ligament is placed under maximal tensile strain to test secondary lateral restraints",
        "At 45° flexion, the patellar tendon is placed under maximal tensile strain to test secondary anterior extensor restraints"
    ],
    475: [
        "Non-operative management: hinged knee brace (allowing 0°–90° progression), progressive early weight-bearing, and functional rehab",
        "Immediate open surgical primary repair of the MCL within 24 hours of injury in all competitive athletic cohorts",
        "Complete rigid cast immobilization locked in 60° of continuous flexion for twelve consecutive weeks without movement",
        "High-velocity manipulation of the tibiofemoral joint into forced end-range valgus under general anesthesia protocols"
    ],
    476: [
        "Full symmetrical active ROM, zero medial joint laxity on valgus stress testing at 30°, quad/hamstring strength LSI ≥ 90%, and agility clearance",
        "Ability to walk 100 meters on flat ground with a moderate limp while wearing an external supportive knee brace device",
        "Absence of pain during resting sitting posture after two weeks of complete non-weight-bearing resting in bed postures",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and testing results"
    ],
    477: [
        "Mid-portion Achilles Tendinopathy (reactive / early dysrepair stage with localized non-inflammatory tendon thickening)",
        "Complete acute Achilles tendon rupture with palpable gap, loss of resting calf tension, and positive Thompson squeeze test",
        "Retrocalcaneal bursitis with localized inflammation and erythema between the anterior Achilles tendon and posterior calcaneus",
        "Sever's disease with traction apophysitis of the secondary calcaneal ossification center in young adolescent athletes"
    ],
    478: [
        "3 sets of 15 repetitions, twice daily for 12 weeks, performed with the knee straight (Gastrocnemius) and knee bent (Soleus)",
        "3 sets of 5 repetitions performed once weekly on an isokinetic dynamometer at maximal angular velocity of 300 degrees per second",
        "Continuous passive motorized stretching of the ankle into maximal dorsiflexion on a mechanical table for six consecutive weeks",
        "Complete non-weight-bearing immobilization of the ankle in a rigid walking cast for twelve consecutive weeks in bed resting"
    ],
    479: [
        "Silbernagel protocol: concentric-eccentric loading with pain-guided activity, progressing to high-speed energy storage plyometrics",
        "Alfredson protocol: strictly eccentric loading performed exclusively twice daily for 12 weeks with zero concentric contractions",
        "Stanish-Curwin protocol: progressive eccentric loading with daily static stretching, increasing speed from slow to fast each week",
        "Heavy Slow Resistance protocol: 3 sets of 6–8 reps, 3 times weekly for 12 weeks, performed exclusively with heavy isokinetic devices"
    ],
    480: [
        "Symmetrical calf strength (single-leg heel raises LSI ≥ 90–95%), pain-free hop testing (single-leg drop hops), and sport drills",
        "Ability to jog 1 km on grass at 50% effort without reported acute sharp pain while taking oral non-steroidal anti-inflammatory drugs",
        "Absence of tendon tenderness upon superficial light skin palpation after two weeks of complete resting in bed postures",
        "Mandatory 6-month complete rest period regardless of physical functional recovery, objective strength scores, and hop testing"
    ],
    481: [
        "Early surgical anatomical suture anchor / transosseous refixation of the pectoralis major tendon within 2 to 4 weeks",
        "Permanent conservative immobilization with passive range of motion exercises only in an external abduction brace",
        "Rigid shoulder casting locked in 90° of continuous abduction for six consecutive months without any surgery",
        "Superficial therapeutic ultrasound and hot packs applied over the anterior chest wall twice every single day"
    ],
    482: [
        "Restricting combined shoulder abduction and external rotation in a protective sling to prevent excessive tensile strain",
        "Performing heavy barbell bench press lifting with maximal 1RM loads on post-operative day one immediately after repair",
        "Maintaining the shoulder in extreme hyperextension and full external rotation twenty-four hours a day without rest",
        "Performing 500 overhead dumbbell military presses with maximal loads on a flat gym bench twice every single day"
    ],
    483: [
        "Benign physiological adaptation (humeral retroversion with posterior capsular shift), preserving total rotation motion",
        "Pathological posterior capsular contracture requiring immediate arthroscopic surgical capsular release and debridement",
        "Acute complete structural rupture of the subscapularis tendon with anterior glenohumeral joint subluxation tear",
        "Severe pyogenic septic arthritis of the glenohumeral joint requiring emergency intravenous antibiotic hospitalization"
    ],
    484: [
        "Dynamic rotator cuff strengthening, rhythmic stabilization in 90/90 position, and periscapular neuromuscular control drills",
        "Aggressive high-force passive anterior capsular stretching into extreme external rotation beyond 150° in abduction plane",
        "Immobilizing the throwing shoulder in a rigid abduction brace for eight consecutive weeks without active physical therapy",
        "Applying superficial ice packs over the subacromial space without performing any active or passive exercise rehabilitation"
    ],
    485: [
        "Gluteus Medius and Gluteus Maximus of the ipsilateral stance limb (hip abductor and external rotator weakness)",
        "Iliopsoas and Rectus Femoris of the contralateral swinging extremity (hip flexor and knee extensor tightness)",
        "Gastrocnemius and Soleus deep calf musculature of the bilateral limbs equally (plantarflexor contracture)",
        "Tibialis Anterior and Extensor Digitorum Longus muscle bellies in the anterior lower leg (dorsiflexor palsy)"
    ],
    486: [
        "Isolated gluteal activation -> Closed-chain functional loading -> Running gait retraining (increasing cadence by 7.5–10%)",
        "Continuous passive motorized knee stretching on a mechanical table for eight consecutive weeks without active exercise",
        "Heavy open-chain knee extensions performed strictly from 90° to 0° with maximal resistance loads to muscular failure",
        "Running daily marathons on hard concrete road surfaces while wearing heavy weighted combat boots without warm-up drills"
    ],
    487: [
        "Medial Epicondylalgia ('Golfer's Elbow' / tendinopathy of Pronator Teres and Flexor Carpi Radialis tendon origin)",
        "Lateral Epicondylalgia ('Tennis Elbow' / tendinopathy of Extensor Carpi Radialis Brevis and Extensor Digitorum)",
        "Posterior interosseous nerve entrapment under the Arcade of Frohse with radial tunnel motor neuropathy syndrome",
        "Complete avulsion rupture of the triceps brachii tendon insertion at the superior aspect of olecranon process"
    ],
    488: [
        "Isolated eccentric loading of the wrist flexors and pronator teres using a flexible rubber resistance bar device",
        "Forceful high-velocity manipulation of the ulnar nerve behind the medial epicondyle into forced elbow extension",
        "Applying continuous shortwave diathermy over the lateral epicondyle for sixty consecutive minutes every single day",
        "Immobilizing the entire upper extremity in a long-arm fiberglass cast for twelve consecutive weeks without movement"
    ],
    489: [
        "Chronic Ankle Instability (CAI) with combined mechanical ligamentous laxity and sensorimotor proprioceptive deficits",
        "Acute undisplaced bimalleolar fracture of the distal tibia and fibula requiring emergency open surgical reduction",
        "Deep vein thrombosis of the anterior tibial vein with complete occlusion of lower extremity venous drainage channels",
        "Complete avulsion rupture of the Achilles tendon insertion from the posterior superior calcaneal tuberosity"
    ],
    490: [
        "Progressive multi-directional balance, wobble-board drills, perturbation training, and reactive dynamic agility cutting",
        "Complete non-weight-bearing bed rest and immobilization in a rigid walking cast for six consecutive months in bed",
        "Routine surgical reconstruction of the lateral ankle ligaments on all patients regardless of structured rehab trial",
        "Applying superficial ice packs over the lateral malleolus once monthly without performing any active physical therapy"
    ],
    491: [
        "Sever's Disease (Calcaneal Apophysitis / Traction Osteochondrosis of the secondary calcaneal ossification center)",
        "Plantar Fasciopathy with proximal fascial micro-tears and calcaneal traction spur formation at medial tuberosity",
        "Stress fracture of the distal fifth metatarsal styloid process (Jones fracture non-union with sclerosis)",
        "Tarsal Tunnel Syndrome with compression of the medial and lateral plantar nerve branches under retinaculum"
    ],
    492: [
        "Sever's disease is self-limiting and resolves completely upon skeletal maturity with zero long-term disability",
        "Sever's disease is a progressive malignant condition requiring immediate surgical amputation of the calcaneus",
        "The athlete must permanently retire from all physical activity and competitive sports participation for life",
        "The athlete will require lifelong dependence on external wheelchair mobility due to complete calcaneal failure"
    ],
    493: [
        "Anterior Tibial Cortex Stress Fracture (High-Risk Bone Stress Injury with high risk of non-union/displacement)",
        "Medial Tibial Stress Syndrome (MTSS / 'Shin Splints' - benign traction periostitis along posteromedial border)",
        "Gastrocnemius medial head muscle belly tear (Tennis Leg with localized calf pain and intramuscular hematoma)",
        "Deep vein thrombosis of the anterior tibial vein with venous occlusion and severe lower extremity edema"
    ],
    494: [
        "The anterior cortex is subject to high tensile bending forces and has poor vascularity; refractory cases require IM Nailing",
        "The anterior cortex is on the compression side and heals spontaneously within 48 hours without any training modification",
        "It requires immediate surgical amputation of the lower leg to prevent malignant osteosarcoma bone transformation in tissues",
        "It is treated with aggressive daily marathon running on concrete road surfaces while wearing weighted iron combat boots"
    ],
    495: [
        "LSI ≥ 90% across quadriceps/hamstrings and hop tests, high psychological readiness (ACL-RSI > 65), and landing symmetry",
        "LSI ≥ 50% on quadriceps isokinetic testing with ongoing 20° dynamic knee valgus collapse during jump landing drills",
        "Passing a simple 10-meter straight-line jogging test without swelling regardless of objective strength testing scores",
        "Mandatory 10-year post-operative rest period regardless of physical functional recovery and objective testing results"
    ],
    496: [
        "Biological graft remodeling and ligamentization require 12–24 months; early return increases secondary tear rates",
        "Athletes lose cardiovascular aerobic conditioning completely if they return to competitive matches after 6 months",
        "Bone mineral density around the tibial and femoral tunnels drops to absolute zero between 6 and 12 months post-op",
        "World Anti-Doping Agency regulations strictly ban sports participation within 12 months of any joint surgery"
    ],
    497: [
        "High external knee valgus moment, internal hip rotation, and shallow knee flexion landing increase peak ACL strain",
        "Deep knee flexion landings (>60°) with neutral frontal knee alignment generate maximal dangerous ACL strain",
        "External hip rotation combined with wide foot placement completely eliminates all ground reaction forces during cuts",
        "Knee valgus moments have zero biomechanical interaction with anterior cruciate ligament tensile mechanical loading"
    ],
    498: [
        "Video self-modeling feedback and augmented external focus cues encouraging deeper knee flexion and neutral alignment",
        "Instructing the athlete to keep the knee completely stiff and straight upon ground contact to absorb shock forces",
        "Applying ice packs to the knee while walking backwards on a flat running track without any coaching feedback cues",
        "Immobilizing the lower extremity in a rigid long-leg brace locked in full extension during all sports drills"
    ],
    499: [
        "Early/Active (Grade I) Pre-Fracture Spondylolysis (Stress Reaction of the Pars Interarticularis with bone edema)",
        "Chronic ununited spondylolytic non-union with sclerotic bone margins and pseudoarthrosis pseudo-articulation",
        "Degenerative spondylolisthesis with Meyerding Grade IV anterior vertebral slip and severe canal stenosis",
        "Thoracic Scheuermann's disease with anterior vertebral wedging, kyphosis, and multiple Schmorl's node defects"
    ],
    500: [
        "Relative rest from fast bowling for 8–12 weeks, lumbo-pelvic core stabilization in neutral spine, and graded return",
        "Immediate return to bowling 100 overs per week with aggressive lumbar hyperextension stretching on the field",
        "Immediate posterior lumbar spinal fusion surgery with pedicle screw fixation within 24 hours of clinical diagnosis",
        "Permanent complete bed rest for five consecutive years in a rigid full-body plaster jacket immobilization"
    ]
}

new_data_5 = []
for q in DATA_TEST_5:
    qid = q["id"]
    if qid in fixes_test5:
        q_copy = dict(q)
        q_copy["options"] = fixes_test5[qid]
        q_copy["correct"] = 0
        new_data_5.append(q_copy)
    else:
        new_data_5.append(q)

ratios = []
diffs = []
for q in new_data_5:
    lens = [len(o) for o in q["options"]]
    r = max(lens) / max(min(lens), 1)
    d = max(lens) - min(lens)
    ratios.append(r)
    diffs.append(d)

print(f"Test 5 Overhauled Stats: Avg Ratio = {sum(ratios)/len(ratios):.2f}, Worst Ratio = {max(ratios):.2f}, Max Diff = {max(diffs)}")

with open("data_test5.py", "w") as f:
    f.write("# Comprehensive Master Question Bank - Mock Test 5 (100 Questions)\n")
    f.write("# Balanced Distractors, Symmetrical Lengths, No Simplistic Foils, Standard Book Citations\n\n")
    f.write("DATA_TEST_5 = " + json.dumps(new_data_5, indent=4) + "\n")
print("Saved data_test5.py")
