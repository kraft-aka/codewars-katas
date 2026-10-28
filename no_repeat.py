def no_repeat(st):
    seen = []
    for i in st:
        if i not in seen:
            seen.append(i)
        else:
            seen.remove(i)
    return seen[0]