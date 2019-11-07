# coding:utf8
"""
https://leetcode.com/problems/counting-bits/
给定一个非负整数 num。 对于范围 0 ≤ i ≤ num 中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

示例：
比如给定 num = 5， 应该返回 [0,1,1,2,1,2].

进阶：
    1. 给出时间复杂度为O(n * sizeof(integer)) 的解答非常容易。 但是你可以在线性时间O(n)内用一次遍历做到吗？
    2. 要求算法的空间复杂度为O(n)。
    3. 不适用内置函数
"""

from typing import List


class Solution:
    def countBits(self, num: int) -> List[int]:
        # TODO 动态规划 https://zhanghuimeng.github.io/post/leetcode-338-counting-bits/
        pass


print(Solution().countBits(5))  # [0,1,1,2,1,2]
