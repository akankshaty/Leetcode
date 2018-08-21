class Solution:
    def toLowerCase(self, str):
        """
        :type str: str
        :rtype: str
        """
        if not str:
            return str
        
        res = ""
        for each in str:
            if ord(each) > 64 and ord(each) < 91:
                res += chr(ord(each) + 32)
                
            else:
                res += each
                
        return res