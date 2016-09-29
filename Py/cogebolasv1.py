import math
import sys

def cp(num):
    res = 0
    if (num >= 0):
        res += 1 + math.floor(num/2)
        num-=3
        res += cp(num)
    return res

sys.setrecursionlimit(100000000)
print(cp(100000))
