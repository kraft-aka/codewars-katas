# Merging sorted integer arrays (without duplicates)


def merge_arrays(f, s): 
    return sorted(list(set([*f,*s])))