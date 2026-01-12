# Vowel Count

def get_count(s):
    count = 0
    vowels = ['a', 'e', 'o', 'i', 'u']
    for char in s:
        if char in vowels:
            count +=1
    return count