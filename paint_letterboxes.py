# Letterbox Paint-Squad


def paint_letterboxes(start, finish):
    arr = list(range(start,finish+1))
    unpacked = sum(list(map(lambda x:list(str(x)),arr)), [])
    zero = 0
    one= 0
    two = 0
    three= 0
    four = 0
    five = 0
    six = 0
    seven = 0
    eight = 0
    nine = 0
    
    for i in unpacked:
        if i=='0':
            zero +=1
        if i=='1':
            one +=1
        if i=='2':
            two +=1
        if i=='3':
            three +=1
        if i=='4':
            four +=1
        if i=='5':
            five +=1
        if i=='6':
            six +=1
        if i=='7':
            seven +=1
        if i=='8':
            eight +=1
        if i=='9':
            nine +=1
    return [zero,one, two, three, four, five, six, seven,eight,nine]