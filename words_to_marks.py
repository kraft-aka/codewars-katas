def words_to_marks(s):
    res = 0
    for i in s:
        res += ord(i)-96
    return res
        