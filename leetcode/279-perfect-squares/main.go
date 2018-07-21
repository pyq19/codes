package main

/*
TODO
完全平方数
https://leetcode-cn.com/problems/perfect-squares/description/
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.

对问题建模：
整个问题转化为一个图论问题，从 n 到 0 ，每个数字表示一个节点，如果两个数字 x 到 y 相差一个完全平方数，
则连接一条边，就得到一个无权图。原问题转化成，求这个无权图中从 n 到 0 的最短路径。
*/

func numSquares(n int) int {

	return 0
}

func main() {}
