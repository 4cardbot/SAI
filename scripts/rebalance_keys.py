import json

def balance_test(t_num, target=[25, 25, 25, 25]):
    with open(f'mock_tests/mock_test_{t_num}.json') as f:
        qs = json.load(f)
    
    current_dist = [0, 0, 0, 0]
    for q in qs:
        current_dist[q['correct']] += 1
        
    print(f"Test {t_num} initial: {current_dist}")
    
    # We want to move answers from surplus indices to deficit indices by swapping options in selected questions
    while current_dist != target:
        # Find a surplus index (count > 25) and a deficit index (count < 25)
        surplus_idx = -1
        deficit_idx = -1
        for i in range(4):
            if current_dist[i] > 25 and surplus_idx == -1:
                surplus_idx = i
            if current_dist[i] < 25 and deficit_idx == -1:
                deficit_idx = i
                
        if surplus_idx == -1 or deficit_idx == -1:
            break
            
        # Find a question with correct == surplus_idx that we can swap
        # Choose a question from Section A1 or B that does not have hardcoded letter references in explanation
        swapped = False
        for q in qs:
            if q['correct'] == surplus_idx:
                # Check explanation to make sure it doesn't say "Option A" or "Option B" explicitly
                exp = q['explanation']
                if not any(f"option {chr(65+i)}" in exp.lower() for i in range(4)):
                    # Swap options at surplus_idx and deficit_idx
                    opts = q['options']
                    opts[surplus_idx], opts[deficit_idx] = opts[deficit_idx], opts[surplus_idx]
                    q['correct'] = deficit_idx
                    current_dist[surplus_idx] -= 1
                    current_dist[deficit_idx] += 1
                    swapped = True
                    print(f"  Swapped {q['id']} from index {surplus_idx} to {deficit_idx}")
                    break
        if not swapped:
            print("Could not find a question to swap!")
            break
            
    print(f"Test {t_num} final: {current_dist}")
    with open(f'mock_tests/mock_test_{t_num}.json', 'w') as f:
        json.dump(qs, f, indent=2)

if __name__ == '__main__':
    for t in range(1, 13):
        balance_test(t)
