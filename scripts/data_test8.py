# Data for Mock Test 8 (100 Questions)
# Section A1: Q701 - Q732 (32 Questions)
# Section A2: Q733 - Q740 (8 Questions)
# Section B: Q741 - Q780 (40 Questions)
# Section C: Q781 - Q800 (20 Questions)

DATA_TEST_8 = [
    # SECTION A1: BASIC SPORTS SCIENCE (32 QUESTIONS)
    {
        "id": 701,
        "section": "A1",
        "text": "In the physiological mechanisms of skeletal muscle hypertrophy, which mechanical stimulus is considered the primary initiator of intracellular anabolic signaling cascades (mTORC1)?",
        "options": [
            "High mechanical tension (sarcolemmal mechanosensing via costameres, focal adhesion kinase, and integrins)",
            "Complete depletion of cellular water causing severe intracellular dehydration",
            "Severe accumulation of systemic urea in the bloodstream during resting sleep",
            "Downregulation of all ribosomal RNA transcription factors within myonuclei"
        ],
        "correct": 0,
        "explanation": "Mechanical tension is the primary driver of muscle hypertrophy. Mechanosensors (integrins/costameric focal adhesions) convert mechanical strain into intracellular biochemical signals (mechanotransduction), directly activating mTORC1 and downstream protein translation.",
        "source": "Essentials of Strength Training and Conditioning (NSCA) - G. Gregory Haff & N. Travis Triplett / Schoenfeld"
    },
    {
        "id": 702,
        "section": "A1",
        "text": "In the force-velocity relationship of skeletal muscle (A.V. Hill curve), why does eccentric muscle action generate significantly higher maximum force output than maximal isometric or concentric actions?",
        "options": [
            "Mechanical cross-bridge forcible detachment, increased active stiffness of the giant structural protein titin, and strain-dependent cross-bridge binding kinetics",
            "Complete absence of actin-myosin cross-bridge formation during eccentric lengthening",
            "Massive consumption of cellular ATP accelerating cross-bridge detachment rates 10-fold",
            "Selective recruitment of non-contractile connective tissue collagen fibers exclusively"
        ],
        "correct": 0,
        "explanation": "During eccentric lengthening, cross-bridges are forcibly detached against mechanical resistance (higher force per cross-bridge), and titin acts as a dynamic molecular spring that stiffens in the presence of calcium, producing up to 120–140% of isometric force.",
        "source": "Essentials of Strength Training and Conditioning (NSCA) - G. Gregory Haff & N. Travis Triplett / Herzog"
    },
    {
        "id": 703,
        "section": "A1",
        "text": "In designing strength training programs, what is 'Cluster Set Training' and what is its primary neuromuscular advantage?",
        "options": [
            "Introducing short intra-set rest intervals (e.g., 15–30 seconds) between individual repetitions or clusters of 2–3 reps, allowing partial PCr replenishment and maintenance of peak movement velocity and power",
            "Performing 50 continuous repetitions without any rest to induce maximal metabolic acidosis",
            "Performing resistance exercises only on weekends while resting completely on weekdays",
            "Training only the upper extremity muscles while completely ignoring the lower body"
        ],
        "correct": 0,
        "explanation": "Cluster sets incorporate short rest intervals (15–30s) within a set (e.g., $3 \\times (2+2+2)$ with 20s inter-repetition rest). This permits partial PCr resynthesis, mitigating fatigue and preserving high barbell velocity and power output.",
        "source": "Essentials of Strength Training and Conditioning (NSCA) - G. Gregory Haff & N. Travis Triplett / Haff et al."
    },
    {
        "id": 704,
        "section": "A1",
        "text": "In the physiological response to resistance training, 'Myonuclear Addition' (Satellite Cell Activation) is essential for:",
        "options": [
            "Sustaining extreme muscle fiber hypertrophy beyond the 'Myonuclear Domain' limit (~15–20% increase in fiber cross-sectional area)",
            "Preventing skeletal muscle fibers from ever contracting during athletic competition",
            "Converting skeletal muscle fibers into bone-forming osteoblast cells",
            "Eliminating all mitochondrial organelles from within the sarcoplasm"
        ],
        "correct": 0,
        "explanation": "The myonuclear domain theory posits that each myonucleus can govern a finite volume of sarcoplasm. For substantial hypertrophy (>15–20%), satellite cells proliferate and fuse into muscle fibers, donating new nuclei to maintain transcriptional capacity.",
        "source": "Essentials of Strength Training and Conditioning (NSCA) - G. Gregory Haff & N. Travis Triplett"
    },
    {
        "id": 705,
        "section": "A1",
        "text": "In respiratory exercise physiology, what is the 'Ventilatory Threshold 1' (VT1 / Aerobic Threshold) during an incremental exercise test?",
        "options": [
            "The point during exercise where pulmonary ventilation ($V_E$) begins to increase disproportionately relative to oxygen consumption ($VO_2$), reflecting the buffering of excess $H^+$ ions by bicarbonate ($V_E/VO_2$ rises while $V_E/VCO_2$ remains stable)",
            "The absolute maximum ventilation achieved at voluntary exhaustion where $V_E$ exceeds 200 L/min",
            "The baseline resting ventilation recorded when the athlete is asleep in bed",
            "The point where blood oxygen saturation drops below 50% in the pulmonary artery"
        ],
        "correct": 0,
        "explanation": "VT1 corresponds to the intensity where blood lactate first begins to rise above baseline (~2 mmol/L). Buffering of $H^+$ by bicarbonate generates excess $CO_2$, stimulating ventilation such that $V_E/VO_2$ increases without an increase in $V_E/VCO_2$.",
        "source": "Exercise Physiology - McArdle, Katch & Katch / Wasserman"
    },
    {
        "id": 706,
        "section": "A1",
        "text": "What is the primary physiological mechanism explaining 'Exercise-Induced Arterial Hypoxemia' (EIAH) observed in some highly trained elite endurance athletes during maximal exercise?",
        "options": [
            "Extremely high cardiac output and rapid pulmonary capillary transit time (<0.4–0.5 seconds), preventing complete alveolar-capillary oxygen diffusion equilibrium, combined with exercise-induced interstitial pulmonary edema",
            "Severe bronchospasm caused by complete absence of surfactant in the pulmonary alveoli",
            "Massive shunting of deoxygenated venous blood directly into the left atrium through a patent foramen ovale",
            "Sudden destruction of circulating hemoglobin molecules by high air resistance"
        ],
        "correct": 0,
        "explanation": "In elite endurance athletes with massive cardiac outputs ($Q > 35–40$ L/min), red blood cell transit time through pulmonary capillaries drops below the ~0.4s required for complete diffusion equilibration, leading to desaturation ($SpO_2 < 92\%$).",
        "source": "Exercise Physiology - Kenney, Wilmore & Costill / Dempsey et al."
    },
    {
        "id": 707,
        "section": "A1",
        "text": "In the cardiovascular regulation during exercise, the 'Exercise Pressor Reflex' is mediated by which two peripheral sensory afferent fiber groups originating within contracting skeletal muscle?",
        "options": [
            "Group III (thinly myelinated mechanoreceptors sensitive to mechanical distortion/contraction) and Group IV (unmyelinated metaboreceptors sensitive to local chemical metabolites like lactic acid, ATP, bradykinin, and diprotons)",
            "Group Ia and Ib muscle spindle and Golgi tendon organ large myelinated proprioceptors",
            "Cranial nerve X parasympathetic efferent motor fibers and vagal preganglionic fibers",
            "Cutaneous Pacinian corpuscles sensitive strictly to atmospheric barometric pressure"
        ],
        "correct": 0,
        "explanation": "The Exercise Pressor Reflex is driven by Group III (mechanoreflex) and Group IV (metaboreflex) muscle afferents, which project to the brainstem cardiovascular centers to increase sympathetic outflow, heart rate, and blood pressure.",
        "source": "Exercise Physiology - McArdle, Katch & Katch / Mitchell et al."
    },
    {
        "id": 708,
        "section": "A1",
        "text": "What is the biochemical role of 'AMP-Activated Protein Kinase' (AMPK) during strenuous endurance exercise?",
        "options": [
            "Functions as a cellular energy sensor (activated by high AMP/ATP and ADP/ATP ratios) that upregulates ATP-generating pathways (GLUT4 translocation, fatty acid oxidation, mitochondrial biogenesis via PGC-1alpha) while inhibiting ATP-consuming anabolic pathways",
            "Directly stimulates muscle protein synthesis by activating the mTORC1 pathway",
            "Converts circulating blood glucose into rigid glycogen crystals inside the cell nucleus",
            "Completely shuts down all cellular respiration and induces cellular apoptosis"
        ],
        "correct": 0,
        "explanation": "AMPK acts as the master cellular energy gauge. Activated by metabolic depletion (high AMP:ATP), it stimulates catabolic energy-yielding pathways (glucose uptake, beta-oxidation, PGC-1a biogenesis) while suppressing anabolic pathways like protein synthesis (via TSC2/raptor phosphorylation).",
        "source": "Exercise Physiology - Kenney, Wilmore & Costill / Hardie"
    },
    {
        "id": 709,
        "section": "A1",
        "text": "In altitude physiology, what is the primary hormonal response triggered by the activation of 'Hypoxia-Inducible Factor 1-alpha' (HIF-1alpha) in renal interstitial peritubular cells?",
        "options": [
            "Upregulation and secretion of Erythropoietin (EPO), stimulating bone marrow erythroblasts to increase red blood cell production and total hemoglobin mass",
            "Massive release of insulin into the bloodstream causing severe systemic hypoglycemia",
            "Suppression of all adrenal steroidogenesis leading to acute Addisonian crisis",
            "Direct secretion of thyroid stimulating hormone into the pulmonary alveoli"
        ],
        "correct": 0,
        "explanation": "Hypoxia stabilizes the transcription factor HIF-1alpha, which translocates to the nucleus and drives transcription of the EPO gene in the kidneys, stimulating marrow erythropoiesis to expand oxygen-carrying capacity.",
        "source": "Exercise Physiology - McArdle, Katch & Katch / Semenza"
    },
    {
        "id": 710,
        "section": "A1",
        "text": "In sports nutrition, what is the recommended carbohydrate intake for athletes engaging in prolonged endurance competition lasting >2.5 to 3 hours to maximize exogenous carbohydrate oxidation up to 90 g/hour?",
        "options": [
            "Multiple Transportable Carbohydrates (e.g., 2:1 glucose-to-fructose ratio) utilizing both SGLT1 and GLUT5 intestinal transporters simultaneously",
            "Consuming pure glucose alone at 120 grams per hour to saturate the SGLT1 transporter",
            "Zero carbohydrate intake during the race, relying purely on dietary medium-chain triglycerides",
            "Consuming insoluble dietary cellulose and fiber bars every 15 minutes during the race"
        ],
        "correct": 0,
        "explanation": "Intestinal SGLT1 transporters saturate at ~60 g/h for glucose. Adding fructose (which uses separate GLUT5 transporters) in a 2:1 ratio increases total exogenous carbohydrate absorption and oxidation rates up to 90–100+ g/h without GI distress.",
        "source": "Sports Nutrition - Asker Jeukendrup & Michael Gleeson / Jeukendrup"
    },
    {
        "id": 711,
        "section": "A1",
        "text": "What is the established ergogenic dosing protocol and primary mechanism of action of 'Caffeine' supplementation in sports performance?",
        "options": [
            "3 to 6 mg/kg body mass consumed 60 minutes pre-exercise, acting primarily as an Adenosine Receptor Antagonist ($A_1$ and $A_{2A}$) in the central nervous system to reduce perceived exertion and enhance motor unit firing",
            "50 mg/kg body mass consumed immediately during competition to stimulate direct cardiac hypertrophy",
            "0.1 mg/kg body mass taken once monthly to alter skeletal muscle bone density",
            "Caffeine acts purely by neutralizing blood lactic acid in peripheral capillaries"
        ],
        "correct": 0,
        "explanation": "Caffeine at 3–6 mg/kg taken 60 min pre-exercise competitively antagonizes central adenosine receptors, blunting pain/effort perception, enhancing central motor drive, and increasing motor unit excitability.",
        "source": "Sports Nutrition - Asker Jeukendrup & Michael Gleeson / Guest et al."
    },
    {
        "id": 712,
        "section": "A1",
        "text": "In the Female Athlete Triad and RED-S, what is the pathophysiological mechanism linking Low Energy Availability (LEA) to 'Functional Hypothalamic Amenorrhea' (FHA)?",
        "options": [
            "Suppression of pulsatile Gonadotropin-Releasing Hormone (GnRH) secretion by the hypothalamus, leading to decreased LH and FSH secretion, anovulation, and hypoestrogenism",
            "Direct mechanical destruction of the ovarian follicles by strenuous running vibrations",
            "Massive overproduction of prolactin and estrogen from the thyroid gland",
            "Acute bacterial infection of the endometrium caused by sweat accumulation"
        ],
        "correct": 0,
        "explanation": "Energy deficiency suppresses hypothalamic GnRH pulsatility (via kisspeptin/leptin signaling deficits), reducing pituitary LH/FSH secretion, resulting in low circulating estradiol and functional hypothalamic amenorrhea.",
        "source": "Sports Nutrition - Asker Jeukendrup & Michael Gleeson / De Souza et al."
    },
    {
        "id": 713,
        "section": "A1",
        "text": "In kinanthropometric profiling, how is the 'Mesomorphy' component calculated in the Heath-Carter anthropometric somatotype method?",
        "options": [
            "From standing height, humerus and femur biepicondylar breadths, and arm (flexed/tensed) and calf girths corrected for skinfold thickness",
            "Exclusively from the sum of 8 skinfold thicknesses divided by total body weight",
            "From the ratio of sitting height to standing height multiplied by 100",
            "From scale body mass measured on an underwater hydrostatic weighing platform"
        ],
        "correct": 0,
        "explanation": "Heath-Carter anthropometric Mesomorphy uses: Stature, Humerus breadth, Femur breadth, Arm girth (minus triceps skinfold), and Calf girth (minus medial calf skinfold), quantifying musculoskeletal robusticity relative to height.",
        "source": "Kinanthropometry and Exercise Physiology - Roger Eston & Thomas Reilly / ISAK"
    },
    {
        "id": 714,
        "section": "A1",
        "text": "In body composition assessment using Hydrostatic (Underwater) Weighing or Air Displacement Plethysmography (BOD POD), Siri's equation converts body density ($Db$) to body fat percentage ($\\text{\\%BF}$) based on what standard formula?",
        "options": [
            "$\\text{\\%BF} = (495 / Db) - 450$",
            "$\\text{\\%BF} = (100 \\times Db) - 200$",
            "$\\text{\\%BF} = (Db / 495) + 450$",
            "$\\text{\\%BF} = (Db \\times 1.96) / \\sqrt{2}$"
        ],
        "correct": 0,
        "explanation": "Siri's equation $(\\text{\\%Fat} = [4.95/Db - 4.50] \\times 100 = 495/Db - 450)$ assumes a two-compartment model where fat-free mass density is constant at 1.100 g/cm3 and fat mass density is 0.900 g/cm3.",
        "source": "Kinanthropometry and Exercise Physiology - Roger Eston & Thomas Reilly / Siri"
    },
    {
        "id": 715,
        "section": "A1",
        "text": "In the Assessment of Bone Age in adolescent athletes, which radiographic skeletal method is considered the international clinical gold standard?",
        "options": [
            "Tanner-Whitehouse 3 (TW3) or Greulich-Pyle assessment of the left wrist and hand radiograph",
            "Computed tomography (CT) scan of the cervical vertebrae and skull bones",
            "Plain radiograph of the bilateral patellae and proximal fibulae",
            "Ultrasound imaging of the calcaneal tuberosity apophysis only"
        ],
        "correct": 0,
        "explanation": "The Greulich-Pyle atlas and Tanner-Whitehouse 3 (TW3) scoring system of left hand/wrist radiographs evaluate epiphyseal ossification and fusion of carpal, metacarpal, and phalangeal bones to determine skeletal maturity.",
        "source": "Kinanthropometry and Exercise Physiology - Roger Eston & Thomas Reilly / TW3"
    },
    {
        "id": 716,
        "section": "A1",
        "text": "In sports biomechanics, what is the 'Stretch-Shortening Cycle' (SSC) classification differentiating 'Fast SSC' from 'Slow SSC' movements?",
        "options": [
            "Fast SSC involves ground contact times <250 milliseconds (e.g., sprinting, drop jumps), whereas Slow SSC involves ground contact times >250 milliseconds (e.g., countermovement jumps, basketball rebounds)",
            "Fast SSC occurs only during swimming while Slow SSC occurs only during running",
            "Fast SSC produces zero mechanical power while Slow SSC produces maximum power",
            "Fast SSC uses slow-twitch fibers while Slow SSC uses fast-twitch fibers exclusively"
        ],
        "correct": 0,
        "explanation": "SSC actions are categorized by ground contact time: Fast SSC (<250 ms, high tendon stiffness, rapid stretch reflex) vs Slow SSC (>250 ms, larger angular displacements, greater active muscle work).",
        "source": "Essentials of Strength Training and Conditioning (NSCA) - G. Gregory Haff & N. Travis Triplett / Schmidtbleicher"
    },
    {
        "id": 717,
        "section": "A1",
        "text": "In the Multidimensional Theory of Anxiety in sports psychology, how are 'Cognitive State Anxiety' and 'Somatic State Anxiety' related to athletic performance?",
        "options": [
            "Cognitive anxiety (worry/negative expectations) has a negative linear relationship with performance, while Somatic anxiety (physiological arousal/jitters) exhibits an Inverted-U relationship",
            "Cognitive anxiety has an Inverted-U relationship while Somatic anxiety is always positive",
            "Both cognitive and somatic anxiety have an identical positive linear relationship with performance",
            "Neither cognitive nor somatic anxiety has any measurable impact on sports performance"
        ],
        "correct": 0,
        "explanation": "Martens' Multidimensional Anxiety Theory demonstrates that cognitive anxiety has a negative linear relationship with performance, whereas somatic anxiety follows an inverted-U curve (moderate somatic arousal is optimal).",
        "source": "Foundations of Sport and Exercise Psychology - Robert S. Weinberg & Daniel Gould / Martens et al."
    },
    {
        "id": 718,
        "section": "A1",
        "text": "In sports psychology, what is the 'Broad-External' attentional focus style according to Robert Nideffer's Attentional Model?",
        "options": [
            "Rapidly assessing an expansive, dynamic competitive environment with multiple moving cues (e.g., a soccer playmaker or basketball point guard scanning defending players)",
            "Focusing narrowly on a single external target (e.g., a golf ball or archery bullseye)",
            "Systematically analyzing internal tactical strategy and motor movement plans",
            "Monitoring internal bodily sensations such as heart rate and muscle breathing"
        ],
        "correct": 0,
        "explanation": "Nideffer's model classifies attention along two dimensions (Width: Broad/Narrow, Direction: Internal/External). Broad-External focus allows athletes to quickly assess changing field environments (scanning players/open space).",
        "source": "Foundations of Sport and Exercise Psychology - Robert S. Weinberg & Daniel Gould / Nideffer"
    },
    {
        "id": 719,
        "section": "A1",
        "text": "In goal-setting theory (Locke & Latham), why are 'Process Goals' superior to pure 'Outcome Goals' for reducing competition anxiety and optimizing performance in athletes?",
        "options": [
            "Process goals focus on specific controllable movement behaviors and technical actions (e.g., 'keep elbow high on follow-through'), providing direct self-efficacy and minimizing anxiety over uncontrollable winning outcomes",
            "Outcome goals are 100% controllable by the athlete under all competition conditions",
            "Process goals completely eliminate the desire of the athlete to win championship medals",
            "Process goals can only be formulated by the head coach and never by the athlete"
        ],
        "correct": 0,
        "explanation": "Process goals focus on controllable technical actions and execution behaviors during performance, fostering high self-efficacy and reducing outcome anxiety (which is contingent on opponent performance and external factors).",
        "source": "Foundations of Sport and Exercise Psychology - Robert S. Weinberg & Daniel Gould / Locke & Latham"
    },
    {
        "id": 720,
        "section": "A1",
        "text": "In team cohesion research (Carron et al.), what is 'Task Cohesion' in sports squads?",
        "options": [
            "The degree to which members of a team work together cooperatively to achieve common athletic performance goals and tactical objectives",
            "The degree to which team members socialize and form personal friendships off the field",
            "The total number of individual team players who share identical dietary habits",
            "The requirement that all team members live in the same residential dormitory"
        ],
        "correct": 0,
        "explanation": "Carron distinguishes Task Cohesion (commitment of the group to achieve instrumental sports goals) from Social Cohesion (interpersonal attraction and friendship), with task cohesion correlating most strongly with success.",
        "source": "Foundations of Sport and Exercise Psychology - Robert S. Weinberg & Daniel Gould / Carron et al."
    },
    {
        "id": 721,
        "section": "A1",
        "text": "In athletic monitoring, what does the 'Reactive Strength Index' (RSI) calculated from a Drop Jump test quantify?",
        "options": [
            "The ratio of Jump Height (in meters) to Ground Contact Time (in seconds), evaluating the athlete's fast stretch-shortening cycle capability ($RSI = \\text{Jump Height} / \\text{Contact Time}$)",
            "The athlete's resting blood pressure divided by their standing body height",
            "The total distance run during a 90-minute competitive football match in kilometers",
            "The maximum isometric force produced during an isometric mid-thigh pull test"
        ],
        "correct": 0,
        "explanation": "RSI $(RSI = \\text{Jump Height} / \\text{Contact Time})$ from drop jump testing quantifies fast SSC capacity: the ability to rapidly transition from eccentric braking to concentric propulsion in <250ms.",
        "source": "Monitoring Training and Performance in Athletes - Mike McGuigan / Young"
    },
    {
        "id": 722,
        "section": "A1",
        "text": "In velocity-based monitoring, what is the 'Velocity Loss' threshold typically prescribed during resistance sets to optimize explosive power development while minimizing neuromuscular fatigue?",
        "options": [
            "10% to 20% velocity loss (stopping the set once barbell velocity drops 10–20% below the first/fastest repetition)",
            "50% to 60% velocity loss (grinding repetitions to complete concentric muscular failure)",
            "100% velocity loss (holding the barbell completely stationary in an isometric stall)",
            "Barbell velocity loss is completely unmeasurable with modern linear position transducers"
        ],
        "correct": 0,
        "explanation": "Velocity loss monitoring (Sanchez-Medina & Gonzalez-Badillo): 10–20% velocity loss preserves high movement quality and power with low metabolic/neuromuscular fatigue, whereas >30–40% loss induces high metabolic fatigue and muscle damage.",
        "source": "Monitoring Training and Performance in Athletes - Mike McGuigan / Gonzalez-Badillo"
    },
    {
        "id": 723,
        "section": "A1",
        "text": "In heart rate variability (HRV) analysis, which time-domain metric is the most robust and widely used index of cardiac parasympathetic (vagal) tone in field sports?",
        "options": [
            "Root Mean Square of Successive Differences (RMSSD) between adjacent normal R-R intervals",
            "Total number of cardiac heartbeats recorded over an entire calendar month",
            "Peak systolic blood pressure recorded during high-intensity treadmill testing",
            "The ratio of blood hematocrit to plasma volume in peripheral capillary blood"
        ],
        "correct": 0,
        "explanation": "RMSSD reflects beat-to-beat parasympathetic regulation of the sinoatrial node. Its natural log transform (lnRMSSD) is the gold standard daily morning metric for tracking athletic recovery and autonomic fatigue.",
        "source": "Monitoring Training and Performance in Athletes - Mike McGuigan / Plews et al."
    },
    {
        "id": 724,
        "section": "A1",
        "text": "In athletic recovery, what is the primary physiological mechanism by which 'Pneumatic Intermittent Compression' boots (e.g., NormaTec) promote post-exercise metabolic waste clearance?",
        "options": [
            "Sequential distal-to-proximal peristaltic pneumatic pressure waves that accelerate venous return, stimulate lymphatic drainage, and reduce lower extremity fluid stasis",
            "Heating the underlying bone marrow to 50 degrees Celsius via radiant microwave fields",
            "Direct electrical depolarization of all motor nerves to induce prolonged tetanic spasm",
            "Freezing subcutaneous adipose tissue to eliminate dietary body fat stores"
        ],
        "correct": 0,
        "explanation": "Intermittent pneumatic compression applies sequential peristaltic gradient pressure from foot to thigh, enhancing venous return, clearing interstitial lymph fluid, reducing swelling, and improving perceived muscle recovery.",
        "source": "Monitoring Training and Performance in Athletes - Mike McGuigan / Sands et al."
    },
    {
        "id": 725,
        "section": "A1",
        "text": "In clinical biostatistics, what does the 'Positive Likelihood Ratio' ($LR+$) of a diagnostic test express?",
        "options": [
            "The ratio of the probability of a positive test result in diseased/injured individuals to the probability of a positive test result in non-diseased individuals ($LR+ = \\text{Sensitivity} / (1 - \\text{Specificity})$)",
            "The total number of patients who test negative in a randomized clinical control trial",
            "The percentage of missing data points in an epidemiological sports database",
            "The probability that a study author will win an international research award"
        ],
        "correct": 0,
        "explanation": "Positive Likelihood Ratio $(LR+ = \\text{Sensitivity} / [1 - \\text{Specificity}])$ quantifies how much a positive test increases the odds of disease: $LR+ > 10$ provides large, often conclusive diagnostic shifts.",
        "source": "Foundations of Clinical Research - Leslie G. Portney / Sackett et al."
    },
    {
        "id": 726,
        "section": "A1",
        "text": "In sports research methodology, what is the 'Standard Error of Measurement' (SEM)?",
        "options": [
            "The absolute index of reliability expressing the standard deviation of measurement errors around a true score in the original units of measurement ($SEM = SD \\times \\sqrt{1 - ICC}$)",
            "The total number of test subjects who withdraw from a clinical study protocol",
            "The mathematical mean of a perfectly symmetrical bimodal distribution",
            "The monetary cost of calibrating a linear position transducer in the laboratory"
        ],
        "correct": 0,
        "explanation": "SEM $(SEM = SD \\times \\sqrt{1 - ICC})$ quantifies absolute measurement precision in the test's native units, establishing the baseline error threshold needed to calculate Minimal Detectable Change (MDC).",
        "source": "Foundations of Clinical Research - Leslie G. Portney / Weir"
    },
    {
        "id": 727,
        "section": "A1",
        "text": "In clinical research, what is 'Allocation Concealment' and why is it distinct from 'Blinding' in randomized controlled trials?",
        "options": [
            "Allocation concealment prevents investigators and participants from knowing or predicting the upcoming group assignment BEFORE randomization (preventing selection bias), whereas blinding prevents knowledge of treatment assignment AFTER randomization",
            "Allocation concealment means the patients are never informed of what disease they have",
            "Blinding is performed only on laboratory animals and never on human sports participants",
            "Allocation concealment and blinding are identical terms for statistical data deletion"
        ],
        "correct": 0,
        "explanation": "Allocation concealment (e.g., sequentially numbered opaque sealed envelopes or central computer randomization) protects the randomization sequence before allocation, preventing selection bias, whereas blinding occurs post-randomization.",
        "source": "Foundations of Clinical Research - Leslie G. Portney / Schulz & Grimes"
    },
    {
        "id": 728,
        "section": "A1",
        "text": "In meta-analyses of sports science interventions, what does the '$I^2$' statistic quantify?",
        "options": [
            "The percentage of total variation across studies that is due to true statistical heterogeneity rather than random chance / sampling error ($I^2 = 100\\% \\times (Q - df) / Q$)",
            "The average age of all athletes participating across the combined clinical research studies",
            "The exact number of research publications cited in the systematic review bibliography",
            "The statistical power of a single two-sample Student t-test calculation"
        ],
        "correct": 0,
        "explanation": "Higgins' $I^2$ statistic describes the percentage of total variation across studies caused by true heterogeneity rather than sampling error: ~25% = low, 50% = moderate, and 75%+ = high heterogeneity.",
        "source": "Foundations of Clinical Research - Leslie G. Portney / Higgins et al."
    },
    {
        "id": 729,
        "section": "A1",
        "text": "In female athlete health and sports physiology, what physiological changes occur during the 'Mid-Luteal Phase' of the eumenorrheic menstrual cycle that may impact thermoregulation?",
        "options": [
            "Elevated Progesterone levels increase resting baseline core body temperature by approximately 0.3°C to 0.5°C, increasing cardiovascular strain during exercise in hot environments",
            "Complete cessation of all cutaneous sweating and peripheral blood circulation",
            "Profound reduction in heart rate and blood pressure below basal metabolic levels",
            "Immediate conversion of all skeletal muscle fibers into pure slow-twitch Type I fibers"
        ],
        "correct": 0,
        "explanation": "During the mid-luteal phase, high progesterone shifts the hypothalamic thermoregulatory set-point, raising baseline core temperature by 0.3–0.5°C and delaying the onset of sweating, increasing thermoregulatory strain in the heat.",
        "source": "Exercise Physiology - McArdle, Katch & Katch / Constantini et al."
    },
    {
        "id": 730,
        "section": "A1",
        "text": "In athletic performance, what is the 'Bilateral Deficit' (BLD)?",
        "options": [
            "The phenomenon where the maximal force produced by both limbs contracting simultaneously (bilateral) is LESS than the sum of the maximal forces produced by each limb contracting independently (unilateral)",
            "A structural difference in anatomical limb length exceeding 5 centimeters between legs",
            "Complete paralysis of one side of the body following acute sports concussive head injury",
            "The reduction in running speed that occurs when running on wet synthetic athletic tracks"
        ],
        "correct": 0,
        "explanation": "Bilateral Deficit (BLD) occurs when bilateral maximal strength is less than the sum of unilateral strengths: $(BL\\ Force < UL_{Left} + UL_{Right})$. It is common in untrained or unilaterally trained athletes due to neural inhibition.",
        "source": "Essentials of Strength Training and Conditioning (NSCA) - G. Gregory Haff & N. Travis Triplett / Howard & Enoka"
    },
    {
        "id": 731,
        "section": "A1",
        "text": "In sports biomechanics, what does 'Ground Reaction Force' (GRF) Impulse quantify during sprinting and jumping?",
        "options": [
            "The integral of force over time ($J = \\int F \\, dt$), representing the change in momentum ($\\Delta p = m \\Delta v$) applied to the athlete's center of mass",
            "The instantaneous electrical voltage generated by contracting skeletal muscle sarcomeres",
            "The maximum depth of shoe sole compression measured in millimeters on force plates",
            "The atmospheric air resistance experienced by an athlete running into a headwind"
        ],
        "correct": 0,
        "explanation": "Impulse is the product of force and the time over which it acts ($J = F \\times \\Delta t$). According to the impulse-momentum theorem ($J = m \\Delta v$), increasing net impulse is the direct biomechanical determinant of sprint velocity and jump height.",
        "source": "Essentials of Strength Training and Conditioning (NSCA) - G. Gregory Haff & N. Travis Triplett / Morin"
    },
    {
        "id": 732,
        "section": "A1",
        "text": "In athlete monitoring, what is the 'Rating of Perceived Exertion' (RPE) Borg CR-10 scale standardly used for?",
        "options": [
            "Quantifying subjective training intensity on a 0 (rest) to 10 (maximal exertion) category-ratio scale, which is multiplied by session duration to compute session-RPE internal training load",
            "Measuring scale body weight before and after athletic competition matches",
            "Assessing the percentage of body fat on the abdominal wall via caliper testing",
            "Rating the aesthetic appearance of team uniforms during international tournament play"
        ],
        "correct": 0,
        "explanation": "Gunnar Borg's Category-Ratio 10 (CR-10) scale provides a valid subjective measure of exertion anchored from 0 (Rest) to 10 (Maximal). Foster's sRPE method multiplies CR-10 by session minutes to quantify internal load.",
        "source": "Monitoring Training and Performance in Athletes - Mike McGuigan / Borg / Foster"
    },

    # SECTION A2: GENERAL SPORTS AWARENESS & GOVERNANCE (8 QUESTIONS)
    {
        "id": 733,
        "section": "A2",
        "text": "Under the Target Olympic Podium Scheme (TOPS), what monthly Out-of-Pocket Allowance (OPA) is provided to Core Group athletes by the Sports Authority of India?",
        "options": [
            "₹50,000 per month as Out-of-Pocket Allowance for daily personal and incidental expenses",
            "₹5,000 per year paid at the end of the Olympic cycle",
            "₹10,00,000 per week deposited directly into commercial overseas equity funds",
            "TOPS athletes do not receive any financial monthly stipend or pocket allowance"
        ],
        "correct": 0,
        "explanation": "Core Group athletes under TOPS receive a monthly Out-of-Pocket Allowance (OPA) of ₹50,000 to cover daily miscellaneous and personal expenses, in addition to full funding for customized training, equipment, and coaching.",
        "source": "MYAS Annual Report / Sports Authority of India TOPS Guidelines"
    },
    {
        "id": 734,
        "section": "A2",
        "text": "Under the National Sports Development Code of India (2011), what is the mandatory requirement for National Sports Federations (NSFs) regarding annual audited accounts and transparency?",
        "options": [
            "Submitting annual audited accounts by chartered accountants and publishing them on the federation's official website under proactive RTI (Right to Information) compliance",
            "Keeping all financial transactions and bank accounts strictly confidential from the public",
            "Federations are exempt from maintaining accounting books or undergoing annual financial audits",
            "Submitting financial records only once every 50 years to international governing bodies"
        ],
        "correct": 0,
        "explanation": "The 2011 Sports Code requires NSFs to maintain audited accounts by CAG-empanelled CAs, display balance sheets proactively on their websites, and comply with the Right to Information (RTI) Act as public authorities.",
        "source": "National Sports Development Code of India (2011) - MYAS"
    },
    {
        "id": 735,
        "section": "A2",
        "text": "Under the World Anti-Doping Code, what is the 'Therapeutic Use Exemption' (TUE) granting process for athletes who have legitimate diagnosed medical conditions requiring a prohibited substance?",
        "options": [
            "Submitting a comprehensive medical dossier to a TUE Committee (TUEC) of independent physicians showing that the substance is medically necessary and will not produce extra performance enhancement",
            "Verbally informing the team physiotherapist in the locker room 5 minutes before the competition",
            "Purchasing an over-the-counter exemption certificate from a private commercial pharmacy",
            "Athletes with medical conditions are completely barred from participating in competitive sports"
        ],
        "correct": 0,
        "explanation": "Under WADA International Standard for TUE (ISTUE), an athlete must apply to their NADO/IF TUEC with documented medical evidence demonstrating that the prohibited substance is essential to treat a diagnosed condition and returns them to a normal health state without unfair enhancement.",
        "source": "WADA International Standard for Therapeutic Use Exemptions / NADA India"
    },
    {
        "id": 736,
        "section": "A2",
        "text": "In Anti-Doping sample collection, what is the minimum specific gravity threshold required for a urine sample to be deemed valid for laboratory analysis under WADA guidelines?",
        "options": [
            "Specific Gravity ≥ 1.005 (or ≥ 1.003 if measured with a digital refractometer for volumes ≥ 150 mL)",
            "Specific Gravity must be exactly 2.500 across all collected athlete samples",
            "Specific Gravity < 1.001 indicating pure distilled water without any dissolved solutes",
            "Urine specific gravity is never measured during doping control collection protocols"
        ],
        "correct": 0,
        "explanation": "Under WADA ISTI guidelines, a urine sample must have a specific gravity of at least 1.005 (or 1.003 if volume $\\ge 150$ mL via refractometer). If dilute, the DCO must collect additional samples until a suitable specimen is provided.",
        "source": "WADA International Standard for Testing and Investigations / NADA India"
    },
    {
        "id": 737,
        "section": "A2",
        "text": "Which American city will host the Games of the XXXIV Olympiad in the year 2028?",
        "options": [
            "Los Angeles, California, United States (LA 2028)",
            "New York City, New York, United States",
            "Chicago, Illinois, United States",
            "Miami, Florida, United States"
        ],
        "correct": 0,
        "explanation": "The 2028 Summer Olympic and Paralympic Games will be hosted by Los Angeles, California, USA (LA 2028).",
        "source": "International Olympic Committee (IOC) Official Records"
    },
    {
        "id": 738,
        "section": "A2",
        "text": "In the governance of Indian sports, what is the role of the 'Sports Authority of India' (SAI) established in 1984?",
        "options": [
            "The apex national sports body under MYAS responsible for athlete talent scouting, operating National Centres of Excellence (NCOEs), sports science infrastructure, and managing national coaching camps",
            "A private commercial corporation that manufactures sports footwear for retail export",
            "A sovereign judicial court that passes criminal sentences on international athletes",
            "An international airline company that transports sports tourists across continents"
        ],
        "correct": 0,
        "explanation": "SAI is the premier sports development body under MYAS, managing 10 regional centres, NCOEs, national stadiums, high-performance sports science support, and national coaching camps.",
        "source": "Sports Authority of India Official Portal / MYAS Annual Report"
    },
    {
        "id": 739,
        "section": "A2",
        "text": "Under the National Sports Awards scheme of India, the 'Dronacharya Award' is conferred on:",
        "options": [
            "Eminent sports coaches who have successfully trained athletes/teams to achieve outstanding results in international competitions",
            "Active junior athletes who have won medals at school national championships",
            "Corporate business executives who sponsor commercial sports advertisements",
            "Sports journalists who write match reports in national newspapers"
        ],
        "correct": 0,
        "explanation": "The Dronacharya Award (instituted in 1985) is India's highest coaching honor, recognizing coaches for outstanding work on a consistent basis and enabling sportspersons to excel in international events.",
        "source": "Ministry of Youth Affairs and Sports (MYAS) Scheme for Dronacharya Award"
    },
    {
        "id": 740,
        "section": "A2",
        "text": "Under the National Doping Control Regulations, what is the composition and function of the 'Anti-Doping Disciplinary Panel' (ADDP)?",
        "options": [
            "A quasi-judicial panel comprising a legal expert (retired judge/advocate), a medical expert, and an eminent sportsperson that conducts hearings and renders binding disciplinary verdicts on alleged ADRVs",
            "A laboratory team that analyzes blood samples with gas chromatography-mass spectrometry",
            "A security branch that patrols sports hostel dormitories at night",
            "A marketing committee that designs posters for anti-doping awareness campaigns"
        ],
        "correct": 0,
        "explanation": "The ADDP is an independent quasi-judicial body constituted under the National Anti-Doping Act, comprising legal, medical, and sports experts to adjudicate Anti-Doping Rule Violations and impose sanctions.",
        "source": "National Anti-Doping Act, 2022 / NADA India Guidelines"
    },

    # SECTION B: APPLIED SPORTS PHYSIOTHERAPY DOMAIN (40 QUESTIONS)
    {
        "id": 741,
        "section": "B",
        "text": "The 'McMurray Test' is performed to detect meniscal tears in the knee. What maneuver specifically tests the Posterior Horn of the Medial Meniscus?",
        "options": [
            "Fully flexing the knee, applying External Tibial Rotation and Valgus Stress, and slowly extending the knee while palpating the posteromedial joint line for a palpable click or pain reproduction",
            "Fully flexing the knee, applying Internal Tibial Rotation and Varus Stress, and extending the knee",
            "Applying pure anterior translation of the proximal tibia in 20° of knee flexion",
            "Applying downward axial compression on the patella in full knee hyperextension"
        ],
        "correct": 0,
        "explanation": "In McMurray's test, external tibial rotation with valgus stress brings the posterior horn of the medial meniscus between the femoral condyle and tibial plateau; a palpable click or pain during extension is diagnostic.",
        "source": "Orthopedic Physical Assessment - David J. Magee"
    },
    {
        "id": 742,
        "section": "B",
        "text": "The 'Apley's Grind Test' (Compression Test) vs 'Apley's Distraction Test' in the prone position with the knee at 90° flexion differentiates:",
        "options": [
            "Meniscal pathology (pain with axial COMPRESSION and rotation) from Collateral Ligament pathology (pain with axial DISTRACTION and rotation)",
            "Patellar tendinitis from quadriceps tendon rupture",
            "Anterior cruciate ligament tear from posterior cruciate ligament rupture",
            "Deep vein thrombosis from gastrocnemius muscle belly strain"
        ],
        "correct": 0,
        "explanation": "Apley's maneuver: Axial downward compression + rotation compresses the menisci (pain = meniscal tear). Axial upward distraction + rotation offloads menisci while stressing collateral ligaments/capsule (pain = ligamentous sprain).",
        "source": "Orthopedic Physical Assessment - David J. Magee"
    },
    {
        "id": 743,
        "section": "B",
        "text": "The 'Jobe Relocation Test' (Modified Fowler Sign) is performed immediately following a positive Anterior Apprehension test of the shoulder by:",
        "options": [
            "Applying a posteriorly directed stabilizing force over the anterior humeral head, which relieves the patient's apprehension and pain and allows greater external rotation",
            "Forcefully pulling the arm into pure adduction and internal rotation across the chest",
            "Applying high-velocity axial distraction to dislocate the humeral head inferiorly",
            "Placing an ice pack directly over the clavicle while the patient stands upright"
        ],
        "correct": 0,
        "explanation": "The Jobe Relocation test applies a posterior force to the anterior proximal humerus, preventing anterior subluxation; immediate relief of apprehension and increased pain-free external rotation confirms anterior capsulolabral instability.",
        "source": "Orthopedic Physical Assessment - David J. Magee / Jobe et al."
    },
    {
        "id": 744,
        "section": "B",
        "text": "The 'Cozen's Test' and 'Mill's Test' are clinical orthopedic tests used to diagnose:",
        "options": [
            "Lateral Epicondylalgia (Tennis Elbow - Extensor Carpi Radialis Brevis origin pathology)",
            "Medial Epicondylalgia (Golfer's Elbow - Flexor Carpi Radialis pathology)",
            "Carpal Tunnel Syndrome (Median nerve compression at the flexor retinaculum)",
            "Cubital Tunnel Syndrome (Ulnar nerve compression at the medial epicondyle)"
        ],
        "correct": 0,
        "explanation": "Cozen's test (resisted wrist extension with radial deviation and pronation) and Mill's test (passive wrist flexion, forearm pronation, and elbow extension) stress the ECRB tendon origin at the lateral epicondyle.",
        "source": "Orthopedic Physical Assessment - David J. Magee"
    },
    {
        "id": 745,
        "section": "B",
        "text": "The 'Thomas Test' is performed to assess hip flexor contracture. If the extended thigh remains elevated off the examination table while the knee flexes to 90°, and extending the knee allows the thigh to drop flat to the table, the tightness is localized to:",
        "options": [
            "Rectus Femoris muscle (two-joint hip flexor / knee extensor)",
            "Iliopsoas muscle belly (one-joint primary hip flexor)",
            "Tensor Fasciae Latae / Iliotibial Band complex",
            "Pectineus and Adductor Brevis medial muscles"
        ],
        "correct": 0,
        "explanation": "In the modified Thomas test, if the thigh touches the table when the knee is extended (slackening the rectus femoris across the knee) but elevates when the knee is flexed to 90°, isolated Rectus Femoris contracture is confirmed.",
        "source": "Orthopedic Physical Assessment - David J. Magee"
    },
    {
        "id": 746,
        "section": "B",
        "text": "The 'Ober's Test' evaluates contracture or tightness of which lower extremity soft-tissue structure?",
        "options": [
            "Iliotibial Band (ITB) and Tensor Fasciae Latae (TFL)",
            "Hamstring muscle group (semitendinosus and semimembranosus)",
            "Iliopsoas muscle complex inside the retroperitoneal space",
            "Gastrocnemius and Soleus deep calf compartment musculature"
        ],
        "correct": 0,
        "explanation": "Ober's test (patient side-lying, examiner abducts and extends the tested hip with knee flexed to 90°, then allows the thigh to drop into adduction): failure of the knee to adduct past the table midline indicates ITB/TFL contracture.",
        "source": "Orthopedic Physical Assessment - David J. Magee"
    },
    {
        "id": 747,
        "section": "B",
        "text": "The 'Thompson Test' (Simmonds' Squeeze Test) is diagnostic for complete rupture of the Achilles tendon when:",
        "options": [
            "Squeezing the calf muscle belly in the prone position FAILS to elicit passive plantarflexion of the foot (loss of mechanical continuity)",
            "Squeezing the calf elicits normal brisk ankle plantarflexion of 20°",
            "Squeezing the calf causes immediate severe ankle dorsiflexion",
            "The patient can perform 50 single-leg calf raises without any pain"
        ],
        "correct": 0,
        "explanation": "Thompson/Simmonds test: with patient prone and feet hanging off the table, squeezing the calf normally produces passive plantarflexion. Absence of foot movement confirms complete rupture of the Achilles tendon.",
        "source": "Orthopedic Physical Assessment - David J. Magee / Thompson & Doherty"
    },
    {
        "id": 748,
        "section": "B",
        "text": "The 'FADIR Test' (Flexion, Adduction, Internal Rotation) of the hip is the primary physical assessment screening test for:",
        "options": [
            "Femoroacetabular Impingement (FAI - Cam or Pincer morphology) and Anterior Acetabular Labral Tears",
            "Sacroiliac joint anterior ligamentous sprain",
            "Trochanteric bursitis over the lateral greater trochanter",
            "Hamstring avulsion fracture from the ischial tuberosity"
        ],
        "correct": 0,
        "explanation": "The FADIR test flexes the hip to 90°, adducts, and internally rotates, jamming the femoral head-neck junction against the anterosuperior acetabular rim. Groin pain reproduction is highly sensitive (>95%) for FAI and labral tears.",
        "source": "Orthopedic Physical Assessment - David J. Magee / Ganz et al."
    },
    {
        "id": 749,
        "section": "B",
        "text": "In the daily adjustable progressive resistance exercise (DAPRE) system (Kenneth Knight), how is the resistance for Set 4 and the next training session determined?",
        "options": [
            "Based on the exact number of repetitions completed to failure in Set 3 using an objective adjustment chart (e.g., 5–6 reps = keep weight; 7–10 reps = add 5–10 lbs; 11+ reps = add 10–15 lbs)",
            "By arbitrarily doubling the weight every single day regardless of performance",
            "By asking the patient to guess how much weight they would like to lift",
            "By decreasing the resistance by 50% after every single completed set"
        ],
        "correct": 0,
        "explanation": "Knight's DAPRE protocol utilizes a 4-set system with an objective autoregulation table: the number of repetitions achieved in Set 3 (at 100% estimated 6RM) dictates the exact load for Set 4 and the starting working weight for the next session.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby / Knight"
    },
    {
        "id": 750,
        "section": "B",
        "text": "In the rehabilitation of hamstring strains, what is the 'Nordic Hamstring Exercise' (NHE) and what is its primary biomechanical stimulus?",
        "options": [
            "A partner-assisted bilateral kneeling exercise where the athlete slowly lowers their torso forward, generating supramaximal eccentric contraction of the hamstrings at long muscle-tendon lengths",
            "A seated leg curl performed with rapid concentric contractions on an isokinetic dynamometer",
            "A passive hamstring stretch held for 10 minutes continuously while seated on the floor",
            "A standing high-knee marching drill performed with zero external resistance"
        ],
        "correct": 0,
        "explanation": "The Nordic Hamstring Exercise produces supramaximal eccentric torque as the hamstrings resist forward torso fall, stimulating sarcomerogenesis (fascicle lengthening) and reducing hamstring strain injury incidence by up to 51%.",
        "source": "Therapeutic Exercise - Kisner & Colby / Brukner & Khan / Petersen et al."
    },
    {
        "id": 751,
        "section": "B",
        "text": "In manual therapy according to Maitland, what defines a 'Grade III' joint mobilization technique?",
        "options": [
            "A large-amplitude rhythmic oscillatory movement performed moving deep into tissue resistance (stiffness) up to the limit of available joint range",
            "A small-amplitude oscillation performed within the pain-free starting range of movement",
            "A high-velocity thrust manipulation performed under general hospital anesthesia",
            "A gentle vibration technique held for 5 seconds to reduce skin temperature"
        ],
        "correct": 0,
        "explanation": "Maitland Grade III is a large-amplitude oscillation moving from mid-range deep into tissue resistance (stretching the joint capsule and periarticular adhesions), used to treat joint stiffness dominant conditions.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby"
    },
    {
        "id": 752,
        "section": "B",
        "text": "In PNF stretching, what is the neurophysiological mechanism underlying 'Agonist Contraction' (AC) stretching?",
        "options": [
            "Reciprocal Inhibition: actively contracting the opposing agonist muscle fires muscle spindle Ia afferents, which activate spinal inhibitory interneurons to relax the tight antagonist muscle",
            "Autogenic inhibition mediated by Golgi tendon organs in the non-contracting limb",
            "Direct sympathetic vasoconstriction shutting down arterial blood flow to the muscle",
            "Complete destruction of all alpha motor neuron cell bodies in the ventral horn"
        ],
        "correct": 0,
        "explanation": "Agonist Contraction utilizes reciprocal inhibition (Sherrington): contracting the agonist muscle (e.g., quadriceps) fires Ia afferents that excite Ia inhibitory interneurons, inhibiting alpha motoneurons of the antagonist (hamstrings) to facilitate stretch.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby"
    },
    {
        "id": 753,
        "section": "B",
        "text": "In shoulder rehabilitation, what are the 'Blackburn Exercises' designed to recruit and strengthen?",
        "options": [
            "Prone shoulder retraction and elevation exercises targeting the Posterior Rotator Cuff, Lower Trapezius, and Middle Trapezius muscles",
            "Heavy overhead barbell bench press exercises targeting the anterior deltoid",
            "Seated internal rotation exercises targeting the subscapularis exclusively",
            "Standing bicep curls performed with heavy dumbbells to muscular failure"
        ],
        "correct": 0,
        "explanation": "Blackburn exercises (prone $T, Y, W, L$ positions with thumb pointing up) systematically activate the lower trapezius, middle trapezius, infraspinatus, and supraspinatus with high EMG-to-upper trapezius ratios.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby / Blackburn et al."
    },
    {
        "id": 754,
        "section": "B",
        "text": "In the McKenzie Method (MDT), what characterizes the 'Dysfunction Syndrome' of spinal pain?",
        "options": [
            "Pain produced strictly at the end-range of restricted movement caused by mechanically contracted, scarred, or shortened adaptive tissue, with NO rapid centralization or rapid change in ROM on repeated testing",
            "Constant unremitting pain that radiates down into both legs during bed rest",
            "Pain caused by an acute herniated disc that centralizes immediately with 10 repetitions",
            "Pain produced only when the athlete is sleeping in a completely neutral posture"
        ],
        "correct": 0,
        "explanation": "Dysfunction Syndrome in MDT results from structural contracture/adhesion of periarticular tissue: pain is felt consistently at end-range (not in mid-range), does not centralize rapidly, and requires progressive remodeling stretching over weeks.",
        "source": "Physiotherapy in Musculoskeletal Conditions - Prof. P.P. Mohanty / McKenzie"
    },
    {
        "id": 755,
        "section": "B",
        "text": "In kinesiology, what is the 'Convex-Concave Rule' for the Talocrural Joint during active open-chain ankle Dorsiflexion?",
        "options": [
            "The convex talus rolls anteriorly and glides (slides) POSTERIORLY in the opposite direction within the concave tibiofibular mortise",
            "The convex talus rolls anteriorly and glides anteriorly in the exact same direction",
            "The concave mortise rolls posteriorly and glides anteriorly on the fixed talar dome",
            "The talus undergoes pure superior vertical elevation without any anterior-posterior roll"
        ],
        "correct": 0,
        "explanation": "In open-chain ankle dorsiflexion, the convex trochlea of the talus moves within the concave mortise. By Kaltenborn's convex-concave rule, the talus rolls anteriorly and slides posteriorly.",
        "source": "Kinesiology of the Musculoskeletal System - Donald A. Neumann"
    },
    {
        "id": 756,
        "section": "B",
        "text": "In human gait, what is the 'Third Ankle Rocker' (Forefoot Rocker / Toe Rocker) during the Pre-Swing / Push-Off phase?",
        "options": [
            "The body rolls forward over the metatarsophalangeal joints, with elastic recoil of the Achilles tendon and concentric plantarflexion generating propulsive push-off force",
            "The heel strikes the ground and decelerates forward tibial momentum",
            "The foot remains completely flat on the floor while the knee hyperextends",
            "The entire lower limb swings in the air without any contact with the ground"
        ],
        "correct": 0,
        "explanation": "The 3rd rocker (forefoot/toe rocker) occurs from heel-off to toe-off: the MTP joints act as a fulcrum, the plantar fascia tightens via windlass mechanism, and calf recoil propels the limb into swing.",
        "source": "Gait Analysis: Normal and Pathological Function - Jacquelin Perry & Judith M. Burnfield"
    },
    {
        "id": 757,
        "section": "B",
        "text": "In patellofemoral biomechanics, what is the 'Q-Angle' (Quadriceps Angle), and what are the standard normal values in adult males and females?",
        "options": [
            "The angle formed by a line from the ASIS to the midpoint of the patella and a line from the patella to the tibial tuberosity (Normal: 10°–14° in males, 15°–18° in females)",
            "The angle between the femur and the vertical ground line (Normal: 45° in both sexes)",
            "The angle of the ankle joint in maximum dorsiflexion (Normal: 90° in all adults)",
            "The angle of thoracic ribcage rotation during maximum deep inhalation"
        ],
        "correct": 0,
        "explanation": "The Q-angle quantifies the lateral pull vector of the quadriceps on the patella. Normal values are 10°–14° for males and 15°–18° for females (due to wider pelvis); values >20° increase lateral patellar subluxation risk.",
        "source": "Orthopedic Physical Assessment - David J. Magee / Neumann"
    },
    {
        "id": 758,
        "section": "B",
        "text": "An 'Antalgic Gait' is characterized by:",
        "options": [
            "A shortened stance phase on the painful involved limb, with a rapid, hurried step onto the uninvolved limb to minimize weight-bearing duration and pain",
            "Excessive hip and knee flexion to clear a paralyzed dropping foot from the floor",
            "Rhythmic lateral trunk lurching over the stance hip due to gluteus medius paralysis",
            "Hyper-extension of the bilateral knees during the terminal swing flight phase"
        ],
        "correct": 0,
        "explanation": "Antalgic gait is a pain-avoidance adaptation: the athlete shortens the stance time on the injured extremity to unload the painful structure as quickly as possible, producing an asymmetrical, abbreviated step cadence.",
        "source": "Gait Analysis: Normal and Pathological Function - Jacquelin Perry & Judith M. Burnfield"
    },
    {
        "id": 759,
        "section": "B",
        "text": "In hip biomechanics, what is the clinical consequence of an excessive 'Femoral Anteversion' angle (>20°–25°)?",
        "options": [
            "Increased internal hip rotation range of motion, decreased external rotation, in-toeing ('pigeon-toed') gait, and increased dynamic knee valgus moment",
            "Marked limitation of internal rotation with excessive external rotation and out-toeing gait",
            "Complete structural dislocation of the femoral head out of the obturator foramen",
            "Loss of all sagittal hip flexion range of motion during athletic sprinting"
        ],
        "correct": 0,
        "explanation": "Normal femoral anteversion is 8°–15°. Excessive anteversion (>20°–25°) directs the femoral head anteriorly; the athlete compensates by internally rotating the limb to seat the head in the acetabulum, producing in-toeing and higher valgus strain.",
        "source": "Kinesiology of the Musculoskeletal System - Donald A. Neumann / Magee"
    },
    {
        "id": 760,
        "section": "B",
        "text": "In scapular kinematics, what is 'Scapular Dyskinesis' and how is Type I Dyskinesis (Kibler Classification) clinically identified?",
        "options": [
            "Prominence of the Inferior Medial Scapular Angle (Inferior Angle Dyskinesis), indicating anterior tipping and loss of lower trapezius/serratus anterior motor control",
            "Prominence of the entire Medial Scapular Border (Medial Border Dyskinesis)",
            "Superior migration of the entire scapula with excessive upper trapezius dominance",
            "Symmetrical scapular movement without any structural or kinematic abnormalities"
        ],
        "correct": 0,
        "explanation": "Kibler's classification: Type I = Inferior medial border prominence (inferior angle tipping, lower trap weakness); Type II = Entire medial border prominence (winging, serratus weakness); Type III = Superior border prominence.",
        "source": "Orthopedic Physical Assessment - David J. Magee / Kibler et al."
    },
    {
        "id": 761,
        "section": "B",
        "text": "During the 'Initial Swing' (Acceleration) phase of normal walking gait, which muscle group contracts concentrically to advance the trailing limb forward?",
        "options": [
            "Hip Flexors (Iliopsoas, Rectus Femoris) and Pretibial Ankle Dorsiflexors (Tibialis Anterior)",
            "Hip Extensors (Gluteus Maximus) and Hamstrings posterior kinetic chain",
            "Quadriceps femoris contracting eccentrically to lock the knee in hyperextension",
            "Gastrocnemius and Soleus contracting isometrically to anchor the heel to the floor"
        ],
        "correct": 0,
        "explanation": "Initial Swing begins when the foot leaves the ground: the iliopsoas/rectus femoris contract concentrically to accelerate the thigh forward, while the tibialis anterior dorsiflexes the ankle to ensure ground clearance.",
        "source": "Gait Analysis: Normal and Pathological Function - Jacquelin Perry & Judith M. Burnfield"
    },
    {
        "id": 762,
        "section": "B",
        "text": "In kinesiology, what is 'Active Insufficiency' of a multi-joint muscle?",
        "options": [
            "The inability of a multi-joint muscle to exert maximal active tension when it is maximally shortened across all the joints it crosses simultaneously (e.g., Hamstrings producing weak knee flexion when the hip is already fully extended)",
            "The inability of a muscle to lengthen fully across all joints simultaneously due to passive tension",
            "A permanent structural severance of the motor nerve axon leading to flaccid paralysis",
            "Complete energetic depletion of ATP inside the sarcoplasmic reticulum"
        ],
        "correct": 0,
        "explanation": "Active insufficiency occurs when a multi-joint muscle shortens over all its joints simultaneously, placing its sarcomeres at extreme short lengths where actin filaments overlap excessively and tension capacity drops drastically.",
        "source": "Kinesiology of the Musculoskeletal System - Donald A. Neumann"
    },
    {
        "id": 763,
        "section": "B",
        "text": "In therapeutic electrotherapy, what is the 'Accommodation' phenomenon in peripheral nerve fibers during electrical stimulation?",
        "options": [
            "An increase in the depolarization threshold of a nerve fiber when exposed to a slowly rising current (such as a triangular or galvanic wave), requiring higher amplitude to trigger an action potential",
            "The complete destruction of the nerve myelin sheath by high-frequency radio waves",
            "The rapid growth of new collateral nerve axons within 5 minutes of stimulation",
            "The conversion of motor nerves into sensory receptor cells under direct current"
        ],
        "correct": 0,
        "explanation": "Accommodation: if an electrical stimulus rises slowly, the resting membrane potential adapts (inactivation of voltage-gated Na+ channels and opening of K+ channels), increasing the threshold required to initiate an action potential.",
        "source": "Electrotherapy: Evidence-Based Practice - Tim Watson"
    },
    {
        "id": 764,
        "section": "B",
        "text": "In therapeutic ultrasound, what is 'Acoustic Microstreaming' and 'Stable Cavitation'?",
        "options": [
            "Non-thermal physical mechanical effects: microscopic fluid movement around oscillating gas bubbles and cell membranes that increases cell membrane permeability, protein synthesis, and cellular repair",
            "Rapid thermal boiling and vaporization of synovial fluid inside the joint cavity",
            "Violent implosion and collapse of gas bubbles causing extensive tissue necrosis",
            "Direct electrical depolarization of sensory nociceptor nerve endings"
        ],
        "correct": 0,
        "explanation": "Stable cavitation (rhythmic oscillation of gas bubbles without collapse) and acoustic microstreaming (unidirectional fluid currents) are non-thermal ultrasound mechanisms that alter cellular membrane permeability, upregulating fibroblast repair.",
        "source": "Electrotherapy: Evidence-Based Practice - Tim Watson"
    },
    {
        "id": 765,
        "section": "B",
        "text": "In shortwave diathermy, what is the clinical distinction between 'Inductive Coil' (Magnetic Field) applicators and 'Capacitive Plate' (Electric Field) applicators?",
        "options": [
            "Inductive coils heat deep, high-conductivity, low-impedance tissues (muscle and blood vessels) via eddy currents, whereas Capacitive plates heat superficial high-impedance tissues (subcutaneous fat) via electric fields",
            "Capacitive plates penetrate 10 times deeper than inductive coils in all human tissues",
            "Inductive coils produce ionizing radiation that fractures bone trabeculae",
            "There is zero physical or thermal difference between inductive and capacitive diathermy"
        ],
        "correct": 0,
        "explanation": "Inductive diathermy generates magnetic fields that induce circular eddy currents in high-conductivity tissues (muscle/vascular beds), heating deep muscle without overheating subcutaneous fat (which occurs under capacitive electric fields).",
        "source": "Electrotherapy: Evidence-Based Practice - Tim Watson"
    },
    {
        "id": 766,
        "section": "B",
        "text": "In cryotherapy, what is the primary clinical advantage of 'Cryokinetics' (combining cold application with active exercise) in acute sports injury rehabilitation?",
        "options": [
            "Cold induced local analgesia numbs pain, allowing the athlete to perform early, pain-free active progressive functional exercise and neuromuscular retraining without tissue irritation",
            "Cold completely freezes the joint capsule in a rigid, immobile close-packed position",
            "Active exercise during icing permanently destroys all nociceptive sensory nerve endings",
            "Cryokinetics is strictly contraindicated in all musculoskeletal sports conditions"
        ],
        "correct": 0,
        "explanation": "Cryokinetics (Knight): applying ice until numbness is achieved allows the athlete to initiate early, pain-free active range of motion and functional exercises, preventing arthrogenic inhibition, muscle atrophy, and joint stiffness.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby / Knight"
    },
    {
        "id": 767,
        "section": "B",
        "text": "In neuromuscular electrical stimulation, what is the 'Order of Motor Unit Recruitment' under electrical stimulation compared to normal physiological voluntary contraction?",
        "options": [
            "Electrical stimulation recruits large, fast-twitch Type II motor units first (non-selective / reversed Henneman order) due to lower axon resistance in large-diameter axons, whereas voluntary contraction recruits small Type I units first",
            "Electrical stimulation recruits small Type I slow-twitch units first, identical to voluntary recruitment",
            "Electrical stimulation recruits smooth involuntary muscle fibers exclusively",
            "Electrical stimulation never recruits any motor units under any frequency parameters"
        ],
        "correct": 0,
        "explanation": "In NMES, large-diameter axons (innervating Type II fibers) have lower internal electrical resistance to externally applied current, causing them to depolarize first—reversing Henneman's normal size principle and causing rapid fatigue.",
        "source": "Electrotherapy: Evidence-Based Practice - Tim Watson"
    },
    {
        "id": 768,
        "section": "B",
        "text": "In neuro-rehabilitation, what is the 'Task-Specific Training' approach (Locomotor Training / Body-Weight-Supported Treadmill Training - BWSTT)?",
        "options": [
            "Practicing repetitive, intensive, task-specific walking stepping movements on a treadmill with harness unweighting to stimulate the spinal Central Pattern Generator (CPG) and drive neuroplastic locomotor recovery",
            "Immobilizing the lower extremities in plaster casts while the patient performs arm cycling",
            "Applying passive heat packs to the lumbar spine for 60 minutes without active stepping",
            "Relying exclusively on seated leg extension gym machine training"
        ],
        "correct": 0,
        "explanation": "BWSTT uses partial unweighting to allow intensive, repetitive, task-specific stepping, providing sensory afferent cues (hip extension/load) that stimulate spinal Central Pattern Generators (CPGs) and supraspinal neuroplasticity.",
        "source": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz / Barbeau et al."
    },
    {
        "id": 769,
        "section": "B",
        "text": "In Proprioceptive Neuromuscular Facilitation (PNF), the 'D1 Flexion' pattern of the Upper Extremity consists of which combined triplanar movements?",
        "options": [
            "Shoulder Flexion, Adduction, and External Rotation with forearm Supination and wrist/finger Flexion ('hand to opposite ear / feeding pattern')",
            "Shoulder Extension, Abduction, and Internal Rotation with forearm Pronation",
            "Shoulder Flexion, Abduction, and External Rotation with forearm Supination ('waiter tray pattern')",
            "Shoulder Extension, Adduction, and Internal Rotation with wrist Extension"
        ],
        "correct": 0,
        "explanation": "PNF UE D1 Flexion (picking up an apple and putting it in the mouth): Shoulder Flexion + Adduction + External Rotation, Forearm Supination, Wrist/Finger Flexion toward the contralateral ear.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby / Knott & Voss"
    },
    {
        "id": 770,
        "section": "B",
        "text": "In stroke rehabilitation, what is the 'Pusher Syndrome' (Contraversive Pushing)?",
        "options": [
            "A clinical disorder where the patient actively pushes strongly with the non-paretic limbs toward the hemiparetic side, resisting any physical attempt to correct posture toward midline",
            "A condition where the patient refuses to walk due to visual blindness",
            "A sudden loss of all sensation in the bilateral feet caused by peripheral neuropathy",
            "An involuntary tremor of the upper extremity elicited during goal-directed finger pointing"
        ],
        "correct": 0,
        "explanation": "Pusher Syndrome (Karnath): damage to the posterolateral thalamus alters perceived body verticality (~18° tilted toward the lesion side), leading patients to actively push away from the sound side toward the paralyzed side.",
        "source": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz / Karnath"
    },
    {
        "id": 771,
        "section": "B",
        "text": "In sensory ataxia and balance rehabilitation, what constitutes the 'Romberg Test' and what signifies a positive test?",
        "options": [
            "The patient stands with feet together and eyes open (stable), then closes the eyes: marked instability, swaying, or loss of balance with EYES CLOSED indicates sensory proprioceptive loss (dorsal column pathology)",
            "The patient falls immediately with eyes open, indicating a pure cerebellar vermis lesion",
            "The patient demonstrates high-amplitude resting tremor of the hands in sitting",
            "The patient cannot hear a tuning fork held near the external auditory canal"
        ],
        "correct": 0,
        "explanation": "Romberg's sign: patient stands with feet together; stability with eyes open followed by loss of balance upon eye closure confirms intact cerebellar function but loss of dorsal column somatosensory/proprioceptive input.",
        "source": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz"
    },
    {
        "id": 772,
        "section": "B",
        "text": "In Parkinson's disease neurorehabilitation, what is the 'LSVT BIG' protocol?",
        "options": [
            "An intensive, amplitude-focused physical therapy exercise program retraining large-amplitude whole-body movements to overcome Parkinsonian hypokinesia and bradykinesia",
            "A low-intensity bed rest protocol designed to reduce resting metabolic energy expenditure",
            "A surgical brain ablation procedure performed to destroy the substantia nigra",
            "A pharmaceutical protocol involving continuous intravenous high-dose steroid infusions"
        ],
        "correct": 0,
        "explanation": "LSVT BIG is an intensive (4 days/week for 4 weeks) amplitude-based behavioral training program that uses high physical effort and maximal amplitude movements to recalibrate motor output and overcome hypokinesia.",
        "source": "Physical Rehabilitation - Susan B. O'Sullivan & Thomas J. Schmitz / Fox et al."
    },
    {
        "id": 773,
        "section": "B",
        "text": "When performing Upper Limb Neurodynamic Testing for the Axillary / Musculocutaneous Nerve roots, what sensitizing movement confirms neural involvement when arm symptoms are reproduced?",
        "options": [
            "Contralateral Cervical Lateral Flexion (which increases neural tension and aggravates symptoms) versus Ipsilateral Cervical Lateral Flexion (which relieves tension)",
            "Deep inspiration held for 60 continuous seconds",
            "Passive plantarflexion of the ipsilateral great toe",
            "Applying ice to the contralateral quadriceps muscle belly"
        ],
        "correct": 0,
        "explanation": "Contralateral cervical lateral flexion increases tension along the entire brachial plexus and nerve roots, serving as the standard structural differentiating maneuver to confirm a neurogenic source.",
        "source": "Physiotherapy in Musculoskeletal Conditions - Prof. P.P. Mohanty / Butler"
    },
    {
        "id": 774,
        "section": "B",
        "text": "In Butler's clinical neurodynamics, what is the anatomical site of the 'Tarsal Tunnel' where the Posterior Tibial Nerve can become entrapped in athletes?",
        "options": [
            "Behind and below the Medial Malleolus, beneath the flexor retinaculum (laciniate ligament)",
            "Beneath the anterior inferior tibiofibular ligament on the anterolateral ankle",
            "Inside the popliteal fossa between the two heads of the gastrocnemius",
            "Along the dorsum of the foot over the intermediate cuneiform bone"
        ],
        "correct": 0,
        "explanation": "The tarsal tunnel lies posteroinferior to the medial malleolus under the flexor retinaculum, containing the Tibialis posterior, Flexor digitorum longus, Posterior tibial artery/veins, Tibial nerve, and Flexor hallucis longus ('Tom, Dick, ANd Harry').",
        "source": "Physiotherapy in Musculoskeletal Conditions - Prof. P.P. Mohanty / Magee"
    },
    {
        "id": 775,
        "section": "B",
        "text": "In Kaltenborn manual therapy, what is the 'Traction Grade III' (Stretch Traction)?",
        "options": [
            "An applied passive traction force that takes up all joint slack and applies sufficient force to stretch the joint capsule and surrounding periarticular soft tissues, used to increase joint mobility",
            "A very small amplitude traction that relieves compressive joint forces without separating surfaces",
            "A traction force that completely dislocates the joint permanently out of its anatomical socket",
            "A traction force applied exclusively to fracture osteophyte bone spurs"
        ],
        "correct": 0,
        "explanation": "Kaltenborn Traction: Grade I = Nullifies joint compressive forces (piccolo); Grade II = Takes up capsule slack ('tightens the joint'); Grade III = Stretches capsular and ligamentous tissue to increase joint play.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby / Kaltenborn"
    },
    {
        "id": 776,
        "section": "B",
        "text": "In Cyriax's manual medicine, what constitutes a 'Non-Capsular Pattern' of joint restriction, and what does it typically indicate?",
        "options": [
            "A limitation of movement in one or two directions that does NOT follow the characteristic capsular proportion, indicating an isolated internal derangement (e.g., loose body or meniscal fragment) or extra-articular lesion",
            "A proportional limitation of all joint movements indicating diffuse rheumatoid arthritis",
            "A complete loss of all joint range of motion caused by total joint fibrous ankylosis",
            "A painless hypermobility where range of motion is double normal physiological limits"
        ],
        "correct": 0,
        "explanation": "A non-capsular pattern (limitation in one or two isolated directions only) indicates a localized lesion: internal derangement (loose body/meniscal tear), extra-articular lesion (isolated muscle strain/bursitis), or localized capsular adhesion.",
        "source": "Physiotherapy in Musculoskeletal Conditions - Prof. P.P. Mohanty / Cyriax"
    },
    {
        "id": 777,
        "section": "B",
        "text": "What is the Close-Packed Position of the Radiocarpal (Wrist) Joint where articular stability is maximal?",
        "options": [
            "Full active Wrist Extension with slight Radial Deviation",
            "Full active Wrist Flexion with maximal Ulnar Deviation",
            "Neutral 0° position with forearm held in full pronation",
            "90° of elbow flexion with the fingers tightly clenched in a fist"
        ],
        "correct": 0,
        "explanation": "The close-packed position of the radiocarpal wrist joint is full extension with slight radial deviation, where carpal bones are tightly compressed against the distal radius and radioulnar articular disc.",
        "source": "Kinesiology of the Musculoskeletal System - Donald A. Neumann"
    },
    {
        "id": 778,
        "section": "B",
        "text": "In Mulligan's concept for treating acute painful cervical rotation, what Natural Apophyseal Glide (NAG) / Sustained Natural Apophyseal Glide (SNAG) technique is applied?",
        "options": [
            "A sustained facet glide along the articular plane (anterior-superior along the 45° facet incline) maintained while the patient actively rotates the head pain-free into the previously restricted range",
            "A forceful high-velocity thrust manipulation into extreme hyperextension and side-bending",
            "Continuous axial compression pushing the cervical vertebrae directly down into the thoracic spine",
            "Passive immobilization of the neck in a rigid cervical collar for 6 consecutive months"
        ],
        "correct": 0,
        "explanation": "Mulligan Cervical SNAG: the therapist applies a sustained thumb glide along the 45° facet incline plane of the involved cervical vertebra while the patient performs active, pain-free rotation, restoring movement instantly (PILL rule).",
        "source": "Physiotherapy in Musculoskeletal Conditions - Prof. P.P. Mohanty / Mulligan"
    },
    {
        "id": 779,
        "section": "B",
        "text": "In core stability assessment, what is the 'Prone Instability Test' (PIT) of the lumbar spine?",
        "options": [
            "Posterior-to-anterior (PA) pressure is applied to a lumbar spinous process while patient's legs rest on floor (pain elicited); the patient then lifts their legs off the floor and PA pressure is reapplied: REDUCTION of pain indicates clinical lumbar instability that will respond to stabilization exercises",
            "The patient stands on one leg and jumps 3 meters into the air",
            "The patient performs 100 continuous sit-ups on a decline bench without resting",
            "Applying ice to the lumbar spine to check for thermal sensory paresthesia"
        ],
        "correct": 0,
        "explanation": "Prone Instability Test (Hicks): PA pressure on the lumbar spine elicits pain with legs on floor. When the patient lifts legs (activating deep paraspinal/gluteal stabilizers), muscular contraction stabilizes the segment and abolishes pain, predicting success with stabilization exercises.",
        "source": "Orthopedic Physical Assessment - David J. Magee / Hicks et al."
    },
    {
        "id": 780,
        "section": "B",
        "text": "In thoracic spine physical therapy, what is 'Thoracic Outlet Syndrome' (TOS) and which three anatomical spaces can cause neurovascular compression of the brachial plexus and subclavian vessels?",
        "options": [
            "1. Interscalene Triangle (anterior and middle scalene), 2. Costoclavicular Space (clavicle and 1st rib), and 3. Retropectoralis Minor Space (under pectoralis minor tendon)",
            "1. Carpal tunnel, 2. Cubital tunnel, and 3. Guyon's canal in the wrist and elbow",
            "1. Femoral triangle, 2. Popliteal fossa, and 3. Tarsal tunnel in the lower limb",
            "1. Suboccipital triangle, 2. Mastoid notch, and 3. Foramen magnum in the skull"
        ],
        "correct": 0,
        "explanation": "TOS involves compression of the brachial plexus (C5-T1) and/or subclavian vessels across three anatomical entrapment tunnels: the Interscalene triangle, Costoclavicular space, and Subcoracoid/Retropectoralis minor space.",
        "source": "Orthopedic Physical Assessment - David J. Magee / Mohanty"
    },

    # SECTION C: SPORTS-RELATED CASE STUDIES (20 QUESTIONS)
    {
        "id": 781,
        "section": "C",
        "text": "Case Vignette 1: A 27-year-old international soccer winger clutched his posterior right thigh during a high-speed counter-attack sprint. MRI demonstrates a Grade 2c muscle-tendon junction strain of the Biceps Femoris long head with intramyofascial edema and disruption of the central tendon aponeurosis. What clinical significance does central tendon (aponeurosis) involvement have regarding return-to-play timelines compared to isolated myofascial tears?",
        "options": [
            "Central tendon/aponeurotic involvement is associated with significantly longer recovery times (typically 6–12 weeks vs 2–4 weeks) and up to a 3-fold higher rate of secondary re-tear if rehabilitated prematurely",
            "Central tendon injuries heal completely within 24 hours without any need for rehabilitation",
            "Central tendon tears require immediate emergency leg amputation to prevent systemic shock",
            "Central tendon tears allow immediate return to full contact match play the next morning"
        ],
        "correct": 0,
        "explanation": "Pollock's British Athletics Muscle Injury Classification (BAMIC): 'c' injuries (intratendinous/aponeurotic) carry poor collagen vascularity, substantially prolonged recovery times (mean ~70+ days), and high reinjury risk compared to pure myofascial 'a' or 'b' strains.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Pollock et al."
    },
    {
        "id": 782,
        "section": "C",
        "text": "Case Vignette 1 (Continued): As part of this soccer player's late-stage functional rehab, which objective running metric monitored via GPS indicates adequate restoration of high-speed running tolerance prior to match play clearance?",
        "options": [
            "Accumulating >95% of pre-injury maximal sprinting velocity ($V\\max$) in training and completing repeated sprint bouts (>25 km/h) totaling ≥100% of typical match high-speed running volume without post-session soreness",
            "Jogging continuously at 5 km/h on soft grass for 10 minutes only",
            "Performing 500 seated hamstring curls on a gym machine without running",
            "Wearing heavy weighted boots while walking backward on an indoor treadmill"
        ],
        "correct": 0,
        "explanation": "Rehabilitation progression requires progressive high-speed running exposure: reaching near-maximum velocity (≥95% $V\\max$) and matching typical match high-speed running distance (>25 km/h) to ensure tissue capacity at high eccentric lengthening rates.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Mendiguchia et al."
    },
    {
        "id": 783,
        "section": "C",
        "text": "Case Vignette 2: A 23-year-old elite water polo player presents with anterior shoulder pain during the cocking phase of throwing. Clinical assessment reveals positive anterior apprehension test, positive relocation test, and a Glenohumeral Internal Rotation Deficit (GIRD) of 22° compared to the non-throwing shoulder. Total Arc of Motion is identical between shoulders (180° dominant: 120° ER / 60° IR; 180° non-dominant: 95° ER / 85° IR). What does this preserved Total Arc of Motion indicate regarding the throwing shoulder adaptations?",
        "options": [
            "Benign physiological adaptation (humeral retroversion with posterior capsular shift), where external rotation gain equals internal rotation loss, maintaining normal total rotational motion without pathological capsular contracture",
            "Pathological capsular contracture requiring immediate surgical posterior capsular release",
            "Acute complete rupture of the subscapularis tendon with anterior shoulder dislocation",
            "Severe septic arthritis of the glenohumeral joint requiring emergency IV antibiotics"
        ],
        "correct": 0,
        "explanation": "Wilk et al. demonstrated that when Total Rotational Motion Arc (ER + IR) is preserved (within 5° of non-throwing arm), GIRD represents benign bony humeral retroversion with anterior capsular laxity, NOT pathological posterior capsular contracture.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Wilk et al."
    },
    {
        "id": 784,
        "section": "C",
        "text": "Case Vignette 2 (Continued): What specific exercise intervention is indicated for this overhead thrower with physiological GIRD to maintain dynamic anterior glenohumeral stability?",
        "options": [
            "Dynamic rotator cuff strengthening (focusing on Subscapularis anterior containment), rhythmic stabilization in the 90/90 position, and periscapular neuromuscular control drills",
            "Aggressive high-force anterior capsular stretching to maximize external rotation past 150°",
            "Immobilizing the shoulder in a rigid abduction brace for 6 consecutive months",
            "Applying ice packs to the subacromial space without performing active exercises"
        ],
        "correct": 0,
        "explanation": "Management of throwers with physiological GIRD and anterior laxity focuses on enhancing dynamic anterior restraint (subscapularis force couple), dynamic rhythmic stabilization, and scapular upward rotation control.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Wilk et al."
    },
    {
        "id": 785,
        "section": "C",
        "text": "Case Vignette 3: A 22-year-old elite female middle-distance runner presents with retropatellar and peripatellar knee pain of 6 months duration. Biomechanical 3D running analysis reveals excessive peak contralateral pelvic drop (Trendelenburg sign = 9°), excessive peak hip adduction (18°), and peak dynamic knee valgus of 14°. What proximal kinetic chain muscle weakness is driving this lower extremity collapse?",
        "options": [
            "Gluteus Medius and Gluteus Maximus of the ipsilateral stance limb",
            "Iliopsoas and Rectus Femoris of the contralateral swinging extremity",
            "Gastrocnemius and Soleus deep calf muscles of the bilateral limbs equally",
            "Tibialis Anterior muscle belly in the anterior lower leg"
        ],
        "correct": 0,
        "explanation": "Proximal gluteal weakness (gluteus medius abductor and gluteus maximus external rotator) fails to control the pelvis and femur in the frontal/transverse planes, driving contralateral pelvic drop, femoral adduction/internal rotation, and dynamic knee valgus.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Powers"
    },
    {
        "id": 786,
        "section": "C",
        "text": "Case Vignette 3 (Continued): In designing an evidence-based corrective exercise program for this runner with PFPS, what progressive exercise sequence should be implemented?",
        "options": [
            "Non-weight-bearing isolated gluteal activation (clamshells, side-lying abduction) -> Weight-bearing closed-chain functional strengthening (single-leg squats, step-downs) -> Running gait retraining (cadence increase by 7.5–10% and verbal biofeedback to narrow step width)",
            "Continuous passive knee traction on a motorized table for 8 consecutive weeks",
            "Heavy leg extensions performed strictly on an open-chain gym machine to muscular failure",
            "Running daily marathons while wearing heavy weighted iron combat boots"
        ],
        "correct": 0,
        "explanation": "Progressive PFPS management: isolated gluteal motor activation -> functional single-leg closed-chain loading -> gait retraining (increasing cadence by 7.5–10% reduces peak knee energy absorption and patellofemoral joint stress).",
        "source": "Brukner & Khan's Clinical Sports Medicine / Neal et al. / Powers"
    },
    {
        "id": 787,
        "section": "C",
        "text": "Case Vignette 4: A 34-year-old elite golf professional presents with medial elbow pain that is aggravated during the impact and follow-through phases of the golf swing. Palpation reveals localized point tenderness directly over the common flexor tendon origin at the medial epicondyle, with sharp pain reproduced during resisted wrist flexion with forearm pronation. What is the clinical diagnosis?",
        "options": [
            "Medial Epicondylalgia ('Golfer's Elbow' / Medial Tendinopathy of Pronator Teres and Flexor Carpi Radialis)",
            "Lateral Epicondylalgia (Tennis Elbow involving the Extensor Carpi Radialis Brevis)",
            "Posterior interosseous nerve entrapment under the Arcade of Frohse",
            "Complete rupture of the triceps brachii tendon at the olecranon"
        ],
        "correct": 0,
        "explanation": "Medial epicondylalgia (Golfer's elbow) is a tendinopathy of the common flexor-pronator tendon origin (primarily Pronator Teres and Flexor Carpi Radialis) at the medial epicondyle, stressed by repetitive wrist flexion and pronation.",
        "source": "Brukner & Khan's Clinical Sports Medicine"
    },
    {
        "id": 788,
        "section": "C",
        "text": "Case Vignette 4 (Continued): What evidence-based active eccentric exercise using a flexible rubber resistance bar (the 'Reverse Tyler Twist') is clinically prescribed to treat medial epicondylalgia?",
        "options": [
            "Isolated eccentric loading of the wrist flexors and pronator teres using the rubber bar to produce controlled eccentric lengthening of the medial forearm musculature",
            "High-force passive stretching of the ulnar nerve behind the medial epicondyle",
            "Applying continuous heat packs over the lateral epicondyle exclusively",
            "Immobilizing the entire arm in a full-length fiberglass cast for 6 months"
        ],
        "correct": 0,
        "explanation": "The Reverse Tyler Twist utilizes a flexible resistance bar (FlexBar) to perform isolated eccentric contractions of the wrist flexor and pronator group, promoting collagen remodeling and restoring grip strength in medial epicondylalgia.",
        "source": "Therapeutic Exercise: Foundations and Techniques - Carolyn Kisner & Lynn Allen Colby"
    },
    {
        "id": 789,
        "section": "C",
        "text": "Case Vignette 5: A 20-year-old elite basketball player experiences recurrent lateral ankle 'giving way' episodes during cutting movements. Biomechanical testing reveals a Cumberland Ankle Instability Tool (CAIT) score of 14/30, severe dynamic postural sway on the Star Excursion Balance Test (SEBT), and delayed peroneal muscle reaction time on an unstable perturbation platform. What condition is diagnosed?",
        "options": [
            "Chronic Ankle Instability (CAI) with combined mechanical laxity and sensorimotor / proprioceptive deficits",
            "Acute transverse fracture of the distal tibial plafond requiring surgical plating",
            "Deep vein thrombosis of the anterior tibial vein with complete occlusion",
            "Complete avulsion of the Achilles tendon from the calcaneal tuberosity"
        ],
        "correct": 0,
        "explanation": "CAIT score <24, recurrent giving-way episodes, impaired single-leg dynamic reach (SEBT), and delayed peroneal neuromuscular firing characterize Chronic Ankle Instability (CAI).",
        "source": "Brukner & Khan's Clinical Sports Medicine / Hertel"
    },
    {
        "id": 790,
        "section": "C",
        "text": "Case Vignette 5 (Continued): According to the International Ankle Consortium consensus guidelines, what multi-component exercise rehabilitation protocol is proven to restore postural control and prevent recurrent sprains in CAI?",
        "options": [
            "Progressive multi-directional balance and wobble-board training, unexpected perturbation surface drills, and dynamic agility cutting progressions with dual-task cognitive loading",
            "Passive bed rest for 6 consecutive months without any active weight-bearing exercises",
            "Wearing a rigid plaster cast 24 hours a day while avoiding all ankle movement",
            "Applying superficial ice packs to the lateral malleolus once monthly"
        ],
        "correct": 0,
        "explanation": "International Ankle Consortium Level 1 evidence strongly recommends dynamic balance training, perturbation training, jump-landing mechanics, and reactive agility drills to restore sensorimotor control in CAI.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Gribble et al."
    },
    {
        "id": 791,
        "section": "C",
        "text": "Case Vignette 6: An 11-year-old junior competitive tennis player reports bilateral posterior heel pain during and after sprint drills. On physical examination, there is exquisite pain on the Calcaneal Squeeze Test (compressing medial and lateral calcaneal walls), reduced ankle dorsiflexion range (5° with knee straight), and tight gastrocnemius-soleus complex. What is the diagnosis?",
        "options": [
            "Sever's Disease (Calcaneal Apophysitis / Traction Osteochondrosis)",
            "Stress fracture of the proximal first metatarsal bone",
            "Complete rupture of the plantaris muscle tendon belly",
            "Acute compartment syndrome of the deep posterior calf compartment"
        ],
        "correct": 0,
        "explanation": "Sever's disease (calcaneal apophysitis) is a traction osteochondrosis of the secondary calcaneal ossification center caused by repetitive Achilles tendon pull in growing children (ages 8–12), diagnosed by a positive Calcaneal Squeeze test.",
        "source": "Brukner & Khan's Clinical Sports Medicine"
    },
    {
        "id": 792,
        "section": "C",
        "text": "Case Vignette 6 (Continued): What parent and coach education regarding prognosis and athletic participation should be provided for this young athlete with Sever's disease?",
        "options": [
            "Sever's disease is a self-limiting, benign condition that resolves completely upon skeletal maturation and fusion of the calcaneal apophysis (typically by ages 14–15), with zero long-term structural or athletic disability",
            "Sever's disease is a malignant bone condition requiring permanent retirement from all physical sports",
            "The child must undergo immediate surgical amputation of the calcaneus within 48 hours",
            "The child will never be able to run or walk without crutches for the rest of their life"
        ],
        "correct": 0,
        "explanation": "Sever's is benign and self-limiting, resolving completely once the calcaneal growth plate ossifies (~14–15 yrs). Education and reassurance alleviate parent anxiety, managed simply with load modification and heel lifts.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Scharfbillig et al."
    },
    {
        "id": 793,
        "section": "C",
        "text": "Case Vignette 7: A 21-year-old elite female long-distance runner presents with acute localized pain over the anterior mid-shaft of the left tibia that hurts during walking and awakens her at night. Examination reveals pinpoint focal tenderness (<1 cm) and a palpable periosteal callus over the anterior tibial cortex. Tuning fork vibration over the focal site reproduces sharp severe pain. Plain lateral radiograph reveals a localized horizontal lucency through the anterior cortex ('The Dreaded Black Line'). What is the diagnosis?",
        "options": [
            "Anterior Tibial Cortex Stress Fracture (High-Risk Bone Stress Injury)",
            "Medial Tibial Stress Syndrome (MTSS / Shin Splints)",
            "Gastrocnemius medial head muscle tear (Tennis Leg)",
            "Deep vein thrombosis in the anterior tibial vein"
        ],
        "correct": 0,
        "explanation": "The 'dreaded black line' on the anterior tibial cortex represents an anterior cortex stress fracture. Because the anterior cortex is on the tension side of the tibia and has poor blood supply, it is classified as high-risk for non-union or complete fracture.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Boden et al."
    },
    {
        "id": 794,
        "section": "C",
        "text": "Case Vignette 7 (Continued): Why is an Anterior Tibial Cortex Stress Fracture categorized as a 'High-Risk' bone stress injury, and what is the definitive management protocol if conservative non-weight-bearing immobilization fails?",
        "options": [
            "The anterior cortex is subject to constant tensile (bending) stress during running and has poor periosteal vascularity, leading to high non-union rates; recalcitrant cases require surgical Intramedullary (IM) Nailing or tension-band plating",
            "It transforms the tibia into soft cartilage within 24 hours requiring external amputation",
            "It heals completely in 2 days if the athlete continues running 20 km daily",
            "It requires immediate surgical replacement of the entire knee joint with a prosthetic implant"
        ],
        "correct": 0,
        "explanation": "Anterior tibial cortex fractures are high-risk because tensile bending forces constantly distract the fracture gap, and poor vascular supply impairs healing. Refractory non-unions mandate surgical intramedullary nailing.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Bahr et al."
    },
    {
        "id": 795,
        "section": "C",
        "text": "Case Vignette 8: A 23-year-old professional male soccer midfielder is evaluated at 12 months post-ACL reconstruction. Objective testing shows: Quadriceps Limb Symmetry Index (LSI) = 96%, Hamstring LSI = 94%, Single Hop for Distance LSI = 95%, Triple Hop LSI = 97%, ACL-RSI psychological readiness score = 84/100, and 3D motion capture reveals symmetrical landing mechanics with zero dynamic knee valgus. Is this athlete ready for full unrestricted return to competitive match play?",
        "options": [
            "Yes, the athlete satisfies all physical, functional, biomechanical, and psychological criteria (LSI ≥ 90%, ACL-RSI > 65%, symmetrical landing) and has completed sports-specific contact training without symptoms",
            "No, an athlete must remain out of sports competition for a mandatory minimum of 10 years post-surgery",
            "No, limb symmetry index must exceed 300% across all functional hop testing batteries",
            "Yes, but only if all resistance training exercises are permanently discontinued from training"
        ],
        "correct": 0,
        "explanation": "The athlete meets all evidence-based return-to-sport criteria: strength and hop LSI >90%, high psychological readiness (ACL-RSI >65%), symmetrical landing biomechanics, and completion of full sport-specific training.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Ardern et al."
    },
    {
        "id": 796,
        "section": "C",
        "text": "Case Vignette 8 (Continued): Why is delaying full clearance to competitive pivoting match play until at least 9 to 12 months post-ACL reconstruction strongly advocated by sports medicine consensus guidelines?",
        "options": [
            "Biological graft ligamentization, maturation, and biological re-innervation continue up to 12–24 months; returning prior to 9 months is associated with up to a 7-fold higher secondary ACL rupture rate (51% risk reduction per month delayed up to 9 months)",
            "Athletes forget tactical soccer formations if they return to play before 12 months",
            "Skeletal bone mineral density drops to absolute zero between 6 and 9 months post-op",
            "WADA regulations strictly ban sports participation within 12 months of any orthopedic surgery"
        ],
        "correct": 0,
        "explanation": "Grindem et al. demonstrated that secondary ACL injury rates decrease by 51% for every month return to sport is delayed until 9 months post-op; biological graft remodeling (ligamentization) requires adequate time to regain tensile stiffness.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Grindem et al."
    },
    {
        "id": 797,
        "section": "C",
        "text": "Case Vignette 9: During real-time 3D motion capture analysis of a 45° sidestep cutting maneuver in a male handball player recovering from knee injury, the analyst measures an external knee abduction (valgus) moment of 1.9 Nm/kg, accompanied by 25° of internal hip rotation and shallow knee flexion landing (16°). What does this biomechanical movement profile indicate regarding ACL loading?",
        "options": [
            "This combination (high knee valgus moment, hip internal rotation, and shallow knee flexion landing) produces extreme peak tensile strain on the ACL and represents a high-risk non-contact injury mechanism",
            "The athlete demonstrates optimal force attenuation with minimal anterior cruciate ligament loading",
            "The athlete has zero mechanical ground reaction force passing through the knee joint during the cut",
            "Shallow knee flexion landings completely protect the cruciate ligaments from mechanical strain"
        ],
        "correct": 0,
        "explanation": "Biomechanical studies (Hewett, Markolf) confirm that shallow knee flexion (<20°), high external knee abduction moments (valgus), and internal hip rotation generate maximal multiplanar peak strain on the ACL.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Hewett et al."
    },
    {
        "id": 798,
        "section": "C",
        "text": "Case Vignette 9 (Continued): What specific neuromuscular feedback intervention (e.g., using video playback or real-time visual feedback) is most effective to modify this athlete's cutting mechanics and reduce ACL strain?",
        "options": [
            "Video self-modeling feedback and augmented external focus cues encouraging deeper knee flexion (>30°–45°), neutral knee alignment over the 2nd toe, and softer ground landings",
            "Instructing the athlete to keep the knee completely straight and stiff upon ground impact to absorb force",
            "Applying ice packs to the knee while walking backwards on a flat running track without coaching cues",
            "Completely immobilizing the ankle in 90° of plantarflexion using a rigid plastic cast"
        ],
        "correct": 0,
        "explanation": "Video feedback and external attentional cues ('land softly', 'bend knees deeper', 'point knee over shoe laces') successfully alter motor programs, increasing knee flexion and reducing peak valgus moments during high-speed cutting.",
        "source": "Physical Rehabilitation - Susan B. O'Sullivan / Brukner & Khan / Gokeler et al."
    },
    {
        "id": 799,
        "section": "C",
        "text": "Case Vignette 10: A 17-year-old junior cricket fast bowler experiences acute low back pain during an intensive bowling camp. Single-leg hyperextension test on the left leg is painful. MRI (T2-weighted/STIR sequence) reveals high signal (bone marrow edema) in the left L4 pars interarticularis without a complete cortical fracture line. What is the clinical diagnosis and bone stress staging?",
        "options": [
            "Early/Active (Grade I) Pre-Fracture Spondylolysis (Stress Reaction of the Pars Interarticularis)",
            "Chronic ununited spondylolytic non-union with sclerotic bone margins and pseudoarthrosis",
            "Degenerative spondylolisthesis with Meyerding Grade IV anterior vertebral slip",
            "Thoracic Scheuermann's disease with anterior vertebral wedging and kyphosis"
        ],
        "correct": 0,
        "explanation": "MRI STIR hyperintensity (bone marrow edema) in the pars interarticularis without a cortical fracture line indicates an active early-stage pars stress reaction (pre-fracture spondylolysis), which has the highest potential for complete bony healing if rested early.",
        "source": "Brukner & Khan's Clinical Sports Medicine"
    },
    {
        "id": 800,
        "section": "C",
        "text": "Case Vignette 10 (Continued): What is the optimal management and return-to-bowling timeline for this young fast bowler to achieve complete bony healing and prevent progression to non-union?",
        "options": [
            "Relative rest from all fast bowling and lumbar hyperextension for 8 to 12 weeks, deep core/trunk stabilization in neutral spine, followed by technical bowling action correction and progressive bowling workload reintroduction",
            "Immediate return to bowling 100 overs per week with heavy spinal hyperextension stretching on the pitch",
            "Immediate posterior lumbar spinal fusion surgery with pedicle screws and rods within 24 hours of diagnosis",
            "Permanent total bed rest for 5 consecutive years in a rigid full-body fiberglass cast"
        ],
        "correct": 0,
        "explanation": "Early-stage active pars lesions heal with high rates (up to 90–100%) under strict relative rest from bowling (typically 8–12 weeks), neutral spine stabilization (multifidus/transversus), biomechanical bowling action remediation (reducing mixed action / hyperextension), and gradual graded return.",
        "source": "Brukner & Khan's Clinical Sports Medicine / Engstrom et al."
    }
]
