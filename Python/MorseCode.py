class Solution:
    def uniqueMorseRepresentations(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        
        if not words:
            return 0
        
        morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

        res = set()
        for each in words:
            temp = ""
            for i in range(len(each)):
                temp += morse[ord(each[i]) - 97]
            res.add(temp)
        
        return len(res)