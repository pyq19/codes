package main

import "fmt"

/*
https://leetcode-cn.com/problems/valid-parentheses/description/
20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false

示例 5:
输入: "{[]}"
输出: true
*/

func isValid(s string) bool {
	str := []string{}
	for _, chr := range s {
		c := string(chr)
		if c == "(" || c == "{" || c == "[" {
			str = append(str, c)
		} else if c == ")" {
			if len(str) > 0 && str[len(str)-1] == "(" {
				str = str[:len(str)-1]
			} else {
				return false
			}
		} else if c == "}" {
			if len(str) > 0 && str[len(str)-1] == "{" {
				str = str[:len(str)-1]
			} else {
				return false
			}
		} else if c == "]" {
			if len(str) > 0 && str[len(str)-1] == "[" {
				str = str[:len(str)-1]
			} else {
				return false
			}
		} else {
			return false
		}
	}
	if len(str) > 0 {
		return false
	}
	return true
}

func main() {
	str := "asd"
	for _, s := range str {
		fmt.Println(string(s))
	}
}
