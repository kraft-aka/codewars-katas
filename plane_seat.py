def plane_seat(a):
    num = int(a[:-1])
    char = a[-1]
    seat, a = None, None
    if num in range(1,21):
        seat = "Front"
    if num in range(21,41):
        seat = "Middle"
    if num in range(41, 61):
        seat = "Back"
    if char in ["A","B","C"]:
        a = "Left"
    if char in ["D","E","F"]:
        a = "Middle"
    if char in ["G", "H","K"]:
        a = "Right"
    if num > 60 or a is None:
        return "No Seat!!"
    
    return f"{seat}-{a}"