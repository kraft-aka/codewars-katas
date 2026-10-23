def word_search(query, seq):
    found = []
    for i in seq:
        if query.lower() in i.lower():
            found.append(i)
    if len(found) > 0:
        return found
    else:
        return ["None"]    