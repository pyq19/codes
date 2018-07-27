package main

import (
	"fmt"
)

/*
电话号码的字母组合
https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
*/

func main() {
	// res := letterCombinations("23")
	// fmt.Println("--->", res)

	res := letterCombinations("2")
	fmt.Println("--->", res)
}

var letterMap = map[string]string{
	"2": "abc",
	"3": "def",
	"4": "ghi",
	"5": "jkl",
	"6": "mno",
	"7": "pqrs",
	"8": "tuv",
	"9": "wxyz",
}
var res = make([]string, 0)

// s 中保存了此时从 digits[0...index-1] 翻译得到的一个字符串
// 寻找和 digits[index] 匹配的字母，获得 digits[0...index] 翻译得到的解
func findCombination(digits string, index int, s string) {
	// fmt.Println(index, s)
	if index == len(digits) {
		res = append(res, s)
		return
	}

	num := string(digits[index])
	// fmt.Println("num", num)
	letters := letterMap[num]
	for _, l := range letters {
		findCombination(digits, index+1, s+string(l))
		// fmt.Println("letters ->", letters, "|", s, "|", string(l))
	}
}

func letterCombinations(digits string) []string {
	res = make([]string, 0)
	if digits == "" {
		return nil
	}
	findCombination(digits, 0, "")
	return res
}
