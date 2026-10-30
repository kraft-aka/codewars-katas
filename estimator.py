def estimator(ob, st):
    costs = 0
    skip = 0
    for i in range(len(ob)):
        if skip > 0:
            skip -= 1
            continue
        if i + 2 < len(ob) and ob[i]==1 and ob[i+1]==1 and ob[i+2]==1:
            costs +=10
            skip +=2
        elif i + 1 < len(ob) and ob[i]==1 and ob[i+1]==1:
            costs += 5
            skip +=1
        elif ob[i] == 1:
            costs +=2
        else:
            costs += 0
    return st >= costs