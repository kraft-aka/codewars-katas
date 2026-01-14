# Remove First and Last Character Part Two

def array(string):
    if string is None:
        return None
    values = string.split(',')
    if len(values) <= 2:
        return None
    else:
        return ' '.join(values[1:-1])