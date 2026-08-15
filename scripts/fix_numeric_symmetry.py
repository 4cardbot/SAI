import json
import re

# Fix numeric symmetry in Mock Test 11 and Mock Test 12

def fix_test_11():
    with open('mock_tests/mock_test_11.json') as f:
        qs = json.load(f)

    for q in qs:
        # t11-a1-006: VE/VO2 and VE/VCO2
        if q['id'] == 't11-a1-006':
            # make sure all options have VE/VO2 or numbers
            c = q['correct']
            opts = [
                "A concurrent decrease in both VE/VO2 and VE/VCO2 ventilatory equivalent ratios",
                "A sharp increase in VE/VCO2 accompanied by an abrupt decline in expired PetCO2",
                "A stable plateau in PetCO2 accompanied by a progressive decrease in VE/VO2 ratio",
                "A complete cessation of VE/VO2 minute ventilation during maximal peak effort"
            ]
            final_opts = []
            rem = [opts[0], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[1])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t11-a1-024: 1.96 standard deviations
        elif q['id'] == 't11-a1-024':
            c = q['correct']
            opts = [
                "The mean difference plus and minus 1.96 standard deviations of differences",
                "The Pearson correlation coefficient squared multiplied by 100 percent of sample",
                "The exact p-value resulting from 2-way repeated measures analysis of variance",
                "The proportion of 95 percent true positive scores relative to false positive rates"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t11-a1-030: 0.3 to 0.5 degrees C
        elif q['id'] == 't11-a1-030':
            c = q['correct']
            opts = [
                "An increase in resting core body temperature of approximately 0.3 to 0.5 degrees C",
                "A drop in resting basal body temperature of approximately 0.5 to 1.0 degrees C",
                "A complete suppression of resting metabolic rate by approximately 20 to 30 percent",
                "An elevation in maximal ventilatory anaerobic capacity by approximately 50 percent"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t11-b-006: Ottawa rules or tests
        elif q['id'] == 't11-b-006':
            # No numbers in options
            pass

        # t11-b-009: 10RM DeLorme / Oxford
        elif q['id'] == 't11-b-009':
            c = q['correct']
            opts = [
                "Oxford begins at 100% 10RM and decreases to 75% and 50% 10RM with fatigue",
                "Oxford begins at 50% 10RM and increases to 75% and 100% 10RM for warm-up",
                "Oxford utilizes exclusively isometric holds at 100% 1RM for 60 seconds",
                "Oxford requires performing 100 continuous repetitions using 10% 10RM load"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t11-b-010: 3 sets of 15 reps
        elif q['id'] == 't11-b-010':
            c = q['correct']
            opts = [
                "3 sets of 15 repetitions performed twice daily for 12 weeks with knee straight and bent",
                "1 set of 10 repetitions performed once weekly for 12 weeks with zero pain allowed",
                "5 sets of 5 repetitions performed every 2 days for 12 weeks with heavy concentric loads",
                "8 sets of 20 repetitions performed once monthly for 12 weeks using aquatic immersion"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t11-c-002: LSI >=90%
        elif q['id'] == 't11-c-002':
            c = q['correct']
            opts = [
                "Pain-free H-test, eccentric strength symmetry >=90%, and full-speed sprints",
                "Pain-free passive hip flexion with >=50% strength without testing criteria",
                "Ability to complete 5 bodyweight squats with >=80% symmetry without balance loss",
                "Resolution of skin ecchymosis with >=60% symmetry regardless of weakness"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t11-c-009: LSI >=90%
        elif q['id'] == 't11-c-009':
            c = q['correct']
            opts = [
                "Withhold match clearance until quad LSI >=90% and valgus landing deficit resolves",
                "Clear immediately for unrestricted competitive match play at 8 months post-surgery",
                "Refer immediately for revision ACL reconstruction surgery after 8 months of failure",
                "Advise the athlete to permanently retire from all multidirectional sports at 8 months"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t11-c-014: 5% to 10%
        elif q['id'] == 't11-c-014':
            c = q['correct']
            opts = [
                "Increasing running cadence by 5% to 10% to reduce impact loading peaks",
                "Decreasing step rate by 15% to 20% to encourage longer overstriding steps",
                "Switching exclusively to heavy 10% downhill trail running on uneven ground",
                "Instructing the runner to land strictly at 15 degrees lateral calcaneal angle"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

    with open('mock_tests/mock_test_11.json', 'w') as f:
        json.dump(qs, f, indent=2)
    print("Fixed Test 11 numeric symmetry")

def fix_test_12():
    with open('mock_tests/mock_test_12.json') as f:
        qs = json.load(f)

    for q in qs:
        # t12-a1-001: mTORC1 / AMPK
        if q['id'] == 't12-a1-001':
            c = q['correct']
            opts = [
                "Endurance-activated AMPK phosphorylates TSC2, inhibiting mTORC1 protein synthesis",
                "Strength-activated mTORC1 phosphorylates ActRIIB, suppressing mitochondrial biogenesis",
                "Endurance-activated calcineurin blocks GLUT4, disrupting sarcolemmal calcium reuptake",
                "Strength-activated protein kinase A blocks MCT1, depleting glycogen granules in muscle"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a1-004: 80 to 85 percent 1RM
        elif q['id'] == 't12-a1-004':
            c = q['correct']
            opts = [
                "Prioritizing heavy resistance training at 80% to 85% 1RM to elevate force F0",
                "Prioritizing high-velocity unweighted sprinting at 0% to 10% 1RM to elevate V0",
                "Prioritizing low-intensity aerobic endurance cycling at 40% to 50% VO2max daily",
                "Avoiding all lower extremity resistance exercise below 20% 1RM for neural rest"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a1-006: 150 mL/min
        elif q['id'] == 't12-a1-006':
            c = q['correct']
            opts = [
                "A plateau in oxygen uptake with increase under 150 mL/min despite increased workload",
                "Heart rate remaining below 70% of age-predicted maximal heart rate during test",
                "Respiratory exchange ratio remaining strictly below 0.85 at final test termination",
                "Blood lactate concentration remaining below 2.0 mmol/L during maximal peak exercise"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a1-010: ~28 days
        elif q['id'] == 't12-a1-010':
            c = q['correct']
            opts = [
                "Low-dose daily dosing achieves identical muscle PCr saturation after ~28 days",
                "Low-dose daily dosing never increases muscle creatine stores after 28 days",
                "Rapid loading permanently reduces glomerular filtration rate after 5 days",
                "Rapid loading produces 10 times greater maximal strength gains after 7 days"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a1-019: Stage N3
        elif q['id'] == 't12-a1-019':
            c = q['correct']
            opts = [
                "Slow-Wave Sleep (Stage N3 non-REM)",
                "Rapid Eye Movement sleep (Stage R)",
                "Light transitional sleep (Stage N1 non-REM)",
                "Intermediate spindle sleep (Stage N2 non-REM)"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a1-022: >30%
        elif q['id'] == 't12-a1-022':
            c = q['correct']
            opts = [
                "A decrease in the T/C ratio of greater than 30%",
                "An increase in the T/C ratio of greater than 50%",
                "A decrease in the T/C ratio of less than 5%",
                "An increase in the T/C ratio of exactly 100%"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a1-030: 60 to 90 minutes
        elif q['id'] == 't12-a1-030':
            c = q['correct']
            opts = [
                "Daily exercise in heat for 60 to 90 minutes daily for 10 to 14 consecutive days",
                "Single dry sauna exposure for 10 to 15 minutes on the morning of competition",
                "Passive cold water immersion for 30 to 45 minutes daily for 30 consecutive days",
                "Fasting without water intake for 24 to 48 hours prior to departure flight"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a2-001: Rs 5 lakh
        elif q['id'] == 't12-a2-001':
            c = q['correct']
            opts = [
                "Annual financial assistance of Rs 5 lakh per annum for up to 8 years",
                "One-time cash prize reward of Rs 50,000 for winning 1 school medal",
                "Monthly training stipend of Rs 10,000 per month for up to 2 years",
                "Lifetime pension grant of Rs 1 lakh per month starting from 18 years"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-a2-003: 1600 mcg
        elif q['id'] == 't12-a2-003':
            c = q['correct']
            opts = [
                "Maximum of 1600 micrograms over 24 hours of delivery",
                "Maximum of 400 micrograms over 24 hours of delivery",
                "Maximum of 5000 micrograms over 24 hours of delivery",
                "Maximum of 0 micrograms over 24 hours (prohibited)"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-b-004: Position 1 vs Position 2
        elif q['id'] == 't12-b-004':
            c = q['correct']
            opts = [
                "Pain elicited in Position 1 (thumb down) that is eliminated in Position 2 (thumb up)",
                "Pain elicited in Position 1 (thumb down) and equal pain in Position 2 (thumb up)",
                "Tingling elicited in Position 1 (thumb down) and numbness in Position 2 (thumb up)",
                "Sulcus gap elicited in Position 1 (thumb down) and clicks in Position 2 (thumb up)"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-b-008: 120 degrees
        elif q['id'] == 't12-b-008':
            c = q['correct']
            opts = [
                "Arm placed in 120 degrees abduction, 90 degrees ER, resisting active elbow flexion",
                "Arm placed in 30 degrees adduction, 45 degrees IR, resisting downward extension",
                "Arm placed in 0 degrees adduction, 0 degrees ER, resisting active forearm pronation",
                "Arm placed in 90 degrees abduction, 90 degrees IR, resisting active arm lift-off"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-b-010: 3 seconds
        elif q['id'] == 't12-b-010':
            c = q['correct']
            opts = [
                "Controlled slow tempo (3 seconds concentric and 3 seconds eccentric per rep)",
                "Ballistic explosive movement (1 second concentric and 0 seconds eccentric per rep)",
                "Ultra-slow isometric hold (30 seconds concentric and 30 seconds eccentric per rep)",
                "Variable random tempo (5 seconds concentric and 15 seconds eccentric per rep)"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-b-014: 30 to 0 degrees
        elif q['id'] == 't12-b-014':
            c = q['correct']
            opts = [
                "OKC extensions from 30 to 0 degrees produce peak anterior tibial shear force",
                "OKC extensions from 90 to 45 degrees produce complete hamstring muscle paralysis",
                "OKC extensions from 60 to 30 degrees produce severe PCL compressive stresses",
                "OKC extensions from 45 to 15 degrees eliminate all quadriceps motor recruitment"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-b-019: 40 to 45 degrees
        elif q['id'] == 't12-b-019':
            c = q['correct']
            opts = [
                "Initial 40 to 45 degrees occurs in lumbar spine, followed by 60 degrees pelvic tilt",
                "Initial 60 to 70 degrees occurs via pelvic tilt, followed by 30 degrees extension",
                "Initial 20 to 30 degrees occurs at knees, followed by 50 degrees lumbar lordosis",
                "Initial 10 to 15 degrees occurs at ankles, followed by 80 degrees hip abduction"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-b-020: 60 and 90 degrees
        elif q['id'] == 't12-b-020':
            c = q['correct']
            opts = [
                "Between 60 and 90 degrees of knee flexion",
                "Between 0 and 15 degrees of knee flexion",
                "Between 10 and 20 degrees of knee hyperextension",
                "Between 120 and 140 degrees of knee flexion"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-b-030: 1.5 to 2.0 m/s
        elif q['id'] == 't12-b-030':
            c = q['correct']
            opts = [
                "NCV decreases by approximately 1.5 to 2.0 m/s for every 1 degree C temperature drop",
                "NCV increases exponentially to over 200 m/s for every 1 degree C temperature drop",
                "NCV remains completely unaltered until temperature drops by 15 degrees C in tissue",
                "NCV drops to 0 m/s permanently after 2 minutes of ice application to skin"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

        # t12-c-014: 5 to 10 percent
        elif q['id'] == 't12-c-014':
            c = q['correct']
            opts = [
                "Gluteus medius strengthening, running cadence increase of 5% to 10%, and step widening",
                "Solely passive foam rolling of the ITB for 60 minutes daily without hip exercises",
                "Immobilization in a long-leg cylinder cast for 6 weeks with complete sport rest",
                "Immediate surgical release and transection of the ITB within 48 hours of symptoms"
            ]
            final_opts = []
            rem = [opts[1], opts[2], opts[3]]
            rem_i = 0
            for pos in range(4):
                if pos == c:
                    final_opts.append(opts[0])
                else:
                    final_opts.append(rem[rem_i])
                    rem_i += 1
            q['options'] = final_opts

    with open('mock_tests/mock_test_12.json', 'w') as f:
        json.dump(qs, f, indent=2)
    print("Fixed Test 12 numeric symmetry")

if __name__ == '__main__':
    fix_test_11()
    fix_test_12()
