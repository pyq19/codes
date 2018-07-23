package main

import (
	"strconv"
)

func isPalindrome2(x int) bool {
	if x < 0 {
		return false
	}

	s := strconv.Itoa(x)
	// i 为最左边索引， j 为最右边索引
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		if s[i] != s[j] {
			return false
		}
	}
	return true
}
