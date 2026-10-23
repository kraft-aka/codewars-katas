def even_chars(st): 
    # your code here
    if len(st) < 2 or len(st) > 100:
        return "invalid string"
    evens = []
    for i in range(len(st)):
        if i % 2 != 0:
            evens.append(st[i])
    return evens

    