package main

import (
	"fmt"
	"math"
)

/*
反转整数
https://leetcode-cn.com/problems/reverse-integer/description/

给定一个 32 位有符号整数，将整数中的数字进行反转。

示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。

*/

func reverse(x int) int {
	sign := 1
	if x < 0 {
		sign = -1
		x = -1 * x
	}

	res := 0
	for x > 0 {
		tmp := x % 10
		res = res*10 + tmp
		x = x / 10
	}

	res = res * sign
	if res > math.MaxInt32 || res < math.MinInt32 {
		return 0
	}
	return res
}

func main() {
	fmt.Println(123 % 10) // 3
	fmt.Println(123 / 10) // 12
}
