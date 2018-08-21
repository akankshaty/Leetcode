class Solution:
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        
        INT_MAX = pow(2,31)-1
        INT_MIN = pow(-2,31)
        
        str=str.strip()
        if len(str) < 1:
            return 0

        sign = 1
        i = 0
        if ord(str[0]) == 43:
            i = 1
            sign = 1
                
        if ord(str[0]) == 45:
            i = 1
            sign = -1

        if not i and not (ord(str[0]) > 47 and ord(str[0]) < 58):
            return 0

        j = i
        while j < len(str) and (ord(str[j]) > 47 and ord(str[j]) < 58):
            j += 1
            
        res = 0
        p = j-i-1
        for k in range(i,j):
            num = ord(str[k]) - ord('0')
            res += (num * pow(10,p))
            p -= 1
        
        if res > INT_MAX:
            if sign == -1:
                return INT_MIN
        
            else:
                return INT_MAX
            
        res *= sign
        return res
        