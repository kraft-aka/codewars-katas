ef check_exam(arr1,arr2):
    score = []
    for i in range(len(arr1)):
        if arr1[i] == arr2[i]:
            score.append(4)
        elif arr1[i] != arr2[i] and arr2[i] == "":
            score.append(0) 
        else:
            score.append(-1)
    return sum(score) if sum(score) > 0 else 0