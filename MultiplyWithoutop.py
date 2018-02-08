# -*- coding: utf-8 -*-


#Multiply two positive integers without using * operator

def helper(small,big):
    if small == 0:
        return 0
    if small == 1:
        return big
    
    s = small >> 1
    halfprod = helper(s,big)
    if small%2 == 0:
        return halfprod + halfprod
    else:
        return halfprod + halfprod + big

def multiply(a,b):
    small = b if a > b else a
    big = a if a > b else b
    return helper(small,big)

#Code to check the above function
ans = multiply(32,32)
print(ans)





    