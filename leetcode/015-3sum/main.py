# coding:utf8
# https://time.geekbang.org/course/detail/130-42705


def threeSum(nums):
    if len(nums) < 3:
        return []
    nums.sort()
    res = set()
    for i, v in enumerate(nums[:-2]):
        # 这段没看懂
        # if i >= 1 and v == nums[i-1]:
        #     continue
        d = {}
        for x in nums[i+1:]:
            if x not in d:
                d[-v-x] = 1
            else:
                res.add((v, -v-x, x))
    return map(list, res)


class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """

        if len(nums) < 3:
            return []
        nums.sort()
        res = set()
        for i, a in enumerate(nums[:-2]):
            seen = set()
            for b in nums[i+1:]:
                c = -(a+b)  # TODO 还是不理解
                if b not in seen:  # TODO 还是不理解
                    seen.add(c)  # TODO 还是不理解
                else:
                    res.add((a, b, c))
        return map(list, res)


nums = [-1, 0, 1, 2, -1, -4]
print(nums)
print(Solution().threeSum(nums))
print(threeSum(nums))
