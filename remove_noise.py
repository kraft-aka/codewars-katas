

def remove_noise(st):
    output = ''
    for i in st:
        if i not in list('%$&/#·@|º\ª'):
            output += i
    return output