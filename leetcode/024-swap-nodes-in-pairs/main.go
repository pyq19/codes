package main

/*
https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
说明:

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
*/

type ListNode struct {
	Val  int
	Next *ListNode
}

func swapPairs(head *ListNode) *ListNode {
	/*
			  cur  next  last
		pre -> 1 -> 2 -> null

		2 -> 1
		1 -> last
		pre -> 2

			 next  cur   last
		pre -> 2 -> 1 -> null
	*/
	dummyHead := &ListNode{Val: -1, Next: head}
	pre := dummyHead
	for pre.Next != nil && pre.Next.Next != nil {
		cur := pre.Next
		next := cur.Next
		last := next.Next

		next.Next = cur
		cur.Next = last
		pre.Next = next

		pre = cur
	}
	res := dummyHead.Next
	dummyHead.Next = nil
	return res
}

func main() {}
