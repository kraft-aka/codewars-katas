
# Fix string case

def solve(s):
    up = []
    low = []
    for i in s:
        if i.isupper():
            up.append(i)
        else:
            low.append(i)
            
    if len(up) > len(low):
        return s.upper()
    elif len(up) < len(low):
        return s.lower()
    else:
        return s.lower()