# coding:utf8
# https://leetcode.com/problems/top-k-frequent-elements/


from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # TODO
        pass


nums = [1, 1, 1, 2, 2, 3]
k = 2
print(Solution().topKFrequent(nums, k))
# Output: [1,2]

nums = [1]
k = 1
print(Solution().topKFrequent(nums, k))
# Output: [1]

nums = [4, 1, -1, 2, -1, 2, 3]
k = 2
print(Solution().topKFrequent(nums, k))
# Output: [-1,2]
