package main

/*
TODO 回文数
https://leetcode-cn.com/problems/palindrome-number/description/

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例 2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

进阶:
你能不将整数转为字符串来解决这个问题吗？

*/

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	if x >= 0 && x < 10 {
		return true
	}

	rawX := x

	reversedX := 0
	// 反转x
	for x > 0 {
		tmp := x % 10
		reversedX = reversedX*10 + tmp
		x = x / 10
	}

	// 对比原来的 x 和反转后的 x 每一位
	// 可优化
	for rawX > 0 {
		tmpRaw := rawX % 10
		tmpReversed := reversedX % 10
		if tmpRaw != tmpReversed {
			return false
		}
		rawX = rawX / 10
		reversedX = reversedX / 10
	}

	return true
}

func main() {

}
