// TODO 错误答案！
// 会有整型溢出 overflow int
package main

import (
	"fmt"
	"math"
	"strconv"
)

/*
https://leetcode-cn.com/problems/add-two-numbers/description/
给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

type ListNode struct {
	Val  int
	Next *ListNode
}

func linkedConvertToInt(l *ListNode) int {
	res := []int{}
	for {
		if l.Next == nil {
			res = append(res, l.Val)
			break
		}
		res = append(res, l.Val)
		l = l.Next
	}
	total := 0
	for index, num := range res {
		total += num * int(math.Pow10(index))
	}
	return total
}

func Reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func intConvertToLinked(i int) *ListNode {
	if i == 0 {
		return &ListNode{Val: 0, Next: nil}
	}
	is := Reverse(strconv.Itoa(i))
	isl := []int{}
	for _, val := range is {
		isi, _ := strconv.Atoi(string(val))
		isl = append(isl, isi)
	}
	iss := []*ListNode{}
	for _, val := range isl {
		iss = append(iss, &ListNode{Val: val, Next: nil})
	}
	for index, _ := range iss {
		if index == len(iss)-1 {
			break
		}
		iss[index].Next = iss[index+1]
	}
	if len(iss) == 0 {
		return nil
	}
	return iss[0]
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	i1 := linkedConvertToInt(l1)
	i2 := linkedConvertToInt(l2)
	i3 := i1 + i2
	return intConvertToLinked(i3)
}

func printLinked(l *ListNode) {
	for {
		fmt.Print(l.Val)
		if l.Next == nil {
			break
		}
		l = l.Next
		fmt.Printf("->")
	}
	fmt.Println()
}

func main() {
	// i1 := 2432432432432432432432432432432432432432432432432432432432439
	// i2 := 5642432432432432432432432432432432432432432432432432432439999
	l1 := intConvertToLinked(189)
	printLinked(l1)
	l2 := intConvertToLinked(8)
	printLinked(l2)

	r3 := addTwoNumbers(l1, l2)
	printLinked(r3)
}
