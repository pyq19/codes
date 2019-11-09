# coding:utf8
# https://leetcode.com/problems/single-number/


from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        """TODO 用 XOR 解法
        https://leetcode.com/problems/single-number/discuss/42997/My-O(n)-solution-using-XOR
        """


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        """难点: 不用额外空间"""
        nums.sort()
        length = len(nums)
        for i, v in enumerate(nums):
            if i % 2 == 1:
                continue
            j = i + 1
            if j >= length:
                return v
            if nums[i] == nums[j]:
                continue
            return v


nums = [4, 1, 2, 1, 2]  # return 4
# nums = [2, 2, 1]  # return 1

print(Solution().singleNumber(nums))
