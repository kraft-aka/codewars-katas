def center(mat):
    flatList = sum(mat,[])
    idx = len(sum(mat, []))//2
    if len(flatList) % 2 != 0:
        return flatList[idx]
    else:
        return None