def evil(n):
    b_n = (f"{n:b}").count("1")
    if b_n % 2 == 0:
        return "It's Evil!"
    else:
        return "It's Odious!"