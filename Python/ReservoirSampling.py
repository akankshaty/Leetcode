def reservoir(M,N):
    
    if not M or M > len(N):
        return []
    
    random.seed(random.randint(0,100))
    
    res = [0] * M
    
    for i in range(0,M):
        res[i] = N[i]
        
    print(i)   
    for i in range(i,len(N)):
        j = random.randint(0,i)
        if j < M:
            res[j] = N[i]
            
    return res