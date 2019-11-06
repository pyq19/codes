# coding:utf8
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


class Solution:
    def maxProfit(self, prices) -> int:
        length = len(prices)
        if length < 2:
            return 0
        max_profit = 0          # 最大利润
        min_price = prices[0]   # 最低价格
        for i in range(1, length):
            cur = prices[i]
            pre = prices[i - 1]
            # 如果当前价格小于之前的价格
            if cur < pre:
                min_price = min(min_price, cur)
            else:
                # 当前价格大于之前价格, 则计算最大利润
                max_profit = max(max_profit, cur - min_price)
        return max_profit


prices = [7, 6, 4, 3, 1]  # return 0
print(Solution().maxProfit(prices))
prices = [7, 1, 5, 3, 6, 4]  # return 5
print(Solution().maxProfit(prices))
