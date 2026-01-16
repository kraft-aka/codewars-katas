# Band name generator


def band_name_generator(name):
    first = name[0]
    last = name[-1]
    if first != last:
        return f'The {first.upper()}{name[1:]}'
    else:
        return f'{first.upper()}{name[1:]}{name[1:]}'
        