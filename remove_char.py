# Remove First and Last Character


def remove_char(s):
    if len(s)>2:
        x = s[1:]
        return x[:-1]
    else:
        return ''