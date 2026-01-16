
# Only one


def only_one(*args):
    true = 0
    if len(args) == 0:
        return False
    
    for t in args:
        if t is True:
            true +=1
            
    if true > 1 or true == 0:
        return False
    else:
        return True
        