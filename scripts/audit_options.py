import json
import glob
import os
import re

def audit_all():
    files = sorted(glob.glob('mock_tests/mock_test_*.json'), key=lambda x: int(re.search(r'\d+', x).group()))
    print(f"Auditing {len(files)} mock test files...")
    
    total_questions = 0
    total_issues = 0
    test_issue_counts = {}

    for f in files:
        test_name = os.path.basename(f)
        with open(f) as fp:
            questions = json.load(fp)
        
        issue_list = []
        for q in questions:
            total_questions += 1
            opts = q['options']
            corr = q['correct']
            corr_opt = opts[corr]
            wrongs = [opts[i] for i in range(4) if i != corr]
            
            # 1. Check parenthetical asymmetry
            corr_has_paren = bool(re.search(r'\(.*?\)', corr_opt))
            wrongs_have_paren = [bool(re.search(r'\(.*?\)', w)) for w in wrongs]
            if corr_has_paren and not all(wrongs_have_paren):
                issue_list.append((q['id'], 'paren_giveaway', f"Correct has parens while {wrongs_have_paren.count(False)} distractors do not"))
            elif not corr_has_paren and any(wrongs_have_paren) and not all(wrongs_have_paren):
                issue_list.append((q['id'], 'paren_inconsistency', "Inconsistent parens in distractors"))
            
            # 2. Check numbers/percentages asymmetry
            corr_has_num = bool(re.search(r'\d+', corr_opt))
            wrongs_have_num = [bool(re.search(r'\d+', w)) for w in wrongs]
            if corr_has_num and not all(wrongs_have_num):
                issue_list.append((q['id'], 'num_giveaway', f"Correct has numbers while {wrongs_have_num.count(False)} distractors do not"))
            
            # 3. Check length asymmetry
            avg_w = sum(len(w) for w in wrongs) / len(wrongs)
            diff = len(corr_opt) - avg_w
            ratio = len(corr_opt) / max(avg_w, 1)
            
            lens = [len(o) for o in opts]
            max_l = max(lens)
            min_l = min(lens)
            
            if ratio > 1.20 and diff > 15:
                issue_list.append((q['id'], 'length_too_long', f"Correct is too long: {len(corr_opt)} vs avg wrong {avg_w:.1f} (ratio {ratio:.2f})"))
            elif ratio < 0.80 and diff < -15:
                issue_list.append((q['id'], 'length_too_short', f"Correct is too short: {len(corr_opt)} vs avg wrong {avg_w:.1f} (ratio {ratio:.2f})"))
            elif max_l > 1.40 * min_l and (max_l - min_l) > 25:
                issue_list.append((q['id'], 'option_spread', f"Option length spread too wide: min {min_l}, max {max_l}"))

        unique_q_issues = set(x[0] for x in issue_list)
        test_issue_counts[test_name] = len(unique_q_issues)
        total_issues += len(unique_q_issues)
        print(f"{test_name}: {len(unique_q_issues)} questions with issues (out of {len(questions)})")
        if issue_list:
            for q_id, kind, msg in issue_list[:3]:
                print(f"   - {q_id} [{kind}]: {msg}")

    print(f"\nTotal questions audited: {total_questions}")
    print(f"Total questions with balance/formatting issues: {total_issues}")
    return total_issues

if __name__ == '__main__':
    audit_all()
