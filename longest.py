def longest(a1, a2):
    unique_one = set(a1)
    unique_two = set(a2)
    unique_one.update(unique_two)
    return "".join(sorted(list(unique_one)))