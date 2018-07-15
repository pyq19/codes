package main

import (
	"fmt"
)

/*
无重复字符的最长子串
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
给定一个字符串，找出不含有重复字符的最长子串的长度。

示例：

给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
*/

func lengthOfLongestSubstring(s string) int {
	freq := make(map[string]int)
	res := 0
	l, r := 0, -1
	for l < len(s) {
		if r+1 < len(s) && freq[string(s[r+1])] == 0 {
			r = r + 1
			freq[string(s[r])] = freq[string(s[r])] + 1
		} else {
			freq[string(s[l])] = freq[string(s[l])] - 1
			l = l + 1
		}
		if res < r-l+1 {
			res = r - l + 1
		}
	}
	return res
}

func main() {
	fmt.Println(lengthOfLongestSubstring("pwwkew"))
}
