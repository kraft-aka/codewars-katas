# Remove B M W


def remove_bmw(string):
    try:
        output = ''
        chars = 'bmwBMW'
        for letter in string:
            if letter not in chars:
                output += letter
        return output     
    except TypeError:
        return('This program only works for text.')