def nerdify(txt):
    res = ""
    for i in txt:
        if i == "a" or i == "A":
            res += "4"
        elif i == "e" or i == "E":
            res += "3"
        elif i == "l":
            res += "1"
        else:
            res += i
    return res