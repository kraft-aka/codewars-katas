
# Incrementer


def incrementer(nums):
    if len(nums) == 0:
        return []
    else:
        output = []
        for i,el in enumerate(nums):
            num = el + i+1
            print(num)
            if len(str(num)) > 1:
                output.append(int(str(num)[-1]))
            else:
                output.append(num)    
        return output 