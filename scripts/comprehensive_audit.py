import json
import glob
import re

def audit():
    all_issues = []
    
    for t in range(1, 11):
        filename = f'mock_tests/mock_test_{t}.json'
        with open(filename) as f:
            qs = json.load(f)
        
        for i, q in enumerate(qs):
            qid = q['id']
            sec = q['section']
            topic = q.get('topic', '')
            subtopic = q.get('subtopic', '')
            stem = q['text']
            opts = q['options']
            corr = q['correct']
            exp = q['explanation']
            
            # 1. Basic structural checks
            if len(opts) != 4:
                all_issues.append((t, qid, 'structural', f'Does not have 4 options: {len(opts)}'))
            if corr not in [0, 1, 2, 3]:
                all_issues.append((t, qid, 'structural', f'Invalid correct index: {corr}'))
            if len(set(opts)) != len(opts):
                all_issues.append((t, qid, 'structural', 'Duplicate options present'))
                
            # 2. Check if marked correct option contains obvious wrong signals
            corr_text = opts[corr].lower()
            exp_lower = exp.lower()
            
            for j, o in enumerate(opts):
                if j != corr:
                    o_clean = re.sub(r'\(.*?\)', '', o).strip().lower()
                    if len(o_clean) > 20 and o_clean in exp_lower and corr_text not in exp_lower:
                        all_issues.append((t, qid, 'mismatch_direct', f"Option {j} ('{o[:40]}...') appears verbatim in explanation, but marked correct is {corr} ('{opts[corr][:40]}...')"))
            
    print(f"\nTotal potential direct mismatch issues found: {len(all_issues)}")
    for iss in all_issues:
        print(f"Test {iss[0]} | {iss[1]} [{iss[2]}]: {iss[3]}")

if __name__ == '__main__':
    audit()
