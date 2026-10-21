def tail_swap(st):
    s1= st[0][:str(st[0]).index(":")]+":"+ st[1].split(":")[1]
    s2= st[1][:str(st[1]).index(":")]+":"+ st[0].split(":")[1]
    return [s1,s2]