package main

import (
	"fmt"
)

/*
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

func main() {
	res := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Println(res)
}

func twoSum(nums []int, target int) []int {
	for index, num := range nums {
		for lastIndex, lastNum := range nums[index+1:] {
			if (num + lastNum) == target {
				return []int{index, lastIndex + index + 1}
			}
		}
	}
	return nil
}
