import json
import re

filler_patterns = [
    r'during progressive athletic',
    r'evaluated during physical',
    r'according to established evidence-based',
    r'in elite performance evaluation',
    r'under standardized sports clinical',
    r'standardized clinical assessment',
    r'across 1 to 2 trials',
    r'dental surgery for sports fans',
    r'stadium ticketing',
    r'trade lawsuits'
]

def final_audit():
    print("=================================================================")
    print("        RUNNING FINAL COMPREHENSIVE AUDIT ON ALL 10 TESTS        ")
    print("=================================================================")
    
    total_q_count = 0
    total_issues = 0
    
    for t in range(1, 11):
        filename = f'mock_tests/mock_test_{t}.json'
        with open(filename) as f:
            qs = json.load(f)
            
        total_q_count += len(qs)
        test_issues = []
        
        # Check counts
        sec_counts = {'A1': 0, 'A2': 0, 'B': 0, 'C': 0}
        correct_counts = [0, 0, 0, 0]
        
        for idx, q in enumerate(qs):
            sec = q.get('section')
            sec_counts[sec] = sec_counts.get(sec, 0) + 1
            corr = q.get('correct')
            correct_counts[corr] += 1
            opts = q.get('options', [])
            
            # Check 4 options
            if len(opts) != 4:
                test_issues.append((q['id'], f"Options count is {len(opts)}, expected 4"))
            if len(set(opts)) != 4:
                test_issues.append((q['id'], "Duplicate options detected"))
                
            # Check filler patterns
            for opt in opts:
                for pat in filler_patterns:
                    if re.search(pat, opt, re.IGNORECASE):
                        test_issues.append((q['id'], f"Option contains filler pattern '{pat}': {opt[:50]}..."))
                        
            # Check explanation
            exp = q.get('explanation', '')
            if len(exp.strip()) < 20:
                test_issues.append((q['id'], "Explanation is too short"))
                
        # Check Section distribution
        expected_sec = {'A1': 32, 'A2': 8, 'B': 40, 'C': 20}
        if sec_counts != expected_sec:
            test_issues.append((f"Test {t}", f"Section distribution mismatch: {sec_counts} vs {expected_sec}"))
            
        # Check key distribution
        if correct_counts != [25, 25, 25, 25]:
            test_issues.append((f"Test {t}", f"Key distribution mismatch: {correct_counts}"))
            
        print(f"Test {t:2d}: {len(qs)} Questions | Sections: {sec_counts} | Key Dist: {correct_counts} | Issues: {len(test_issues)}")
        if test_issues:
            for iss in test_issues:
                print(f"   - [{iss[0]}]: {iss[1]}")
                total_issues += 1
                
    print("\n-----------------------------------------------------------------")
    print(f"Total Questions Verified: {total_q_count}")
    print(f"Total Structural / Distractor Issues: {total_issues}")
    print("-----------------------------------------------------------------")

if __name__ == '__main__':
    final_audit()
