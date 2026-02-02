# Recycle!

def recycle_me(rubbish):
    p = 0
    g = 0
    c = 0
    for i in range(len(rubbish)):
        if rubbish[i] > 0:
            p+=1
        elif rubbish[i] < 0:
            g+=1
        else:
            c+=1
    return (p,g,c)