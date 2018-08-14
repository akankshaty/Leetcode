from collections import Counter

class Solution:
    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        if not s:
            return []
        
        res = []
        n = len(s)
        m = len(p)
        flag = 0
        i =0
        
        pC = Counter(p)
        sC = Counter(s[:m-1])
        
        for i in range(m-1,n):
            sC[s[i]] += 1
            
            if sC == pC:
                res.append(i-m+1)
                 
             
            sC[s[i-m+1]] -= 1
            if sC[s[i-m+1]] == 0:
                del sC[s[i-m+1]] 
                
        return res
            