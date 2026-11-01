def guess_my_number(guess, number = '123-451-2345'):
    output = ""
    for i in number:
        if i in guess:
            output += i
        elif i == "-":
             output += "-"
        else:
            output += "#"
    return output