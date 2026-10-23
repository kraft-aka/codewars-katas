def remove_rotten(bag_of_fruits):
    fresh = []
    if bag_of_fruits is None:
        return fresh
    for i in bag_of_fruits:
        if i.startswith("rotten"):
            fresh_fruit = i.split("rotten")[1].lower()
            fresh.append(fresh_fruit)
        else:
            fresh.append(i)
    return fresh