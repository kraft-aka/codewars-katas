def unused_digits(*n):
    nums = "0123456789"
    given = ""
    missing = ""
    
    for i in n:
        given+=(str(i))
        
    for i in nums:
        if i not in given:
            missing += i
        
    return missing