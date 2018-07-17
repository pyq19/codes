package main

/*
https://leetcode-cn.com/problems/remove-linked-list-elements/description/
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
*/

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeElements(head *ListNode, val int) *ListNode {
	dummyHead := &ListNode{Val: -1, Next: head}
	cur := dummyHead
	for cur.Next != nil {
		if cur.Next.Val == val {
			delNode := cur.Next
			cur.Next = delNode.Next
			delNode.Next = nil
		} else {
			cur = cur.Next
		}
	}
	res := dummyHead.Next
	dummyHead.Next = nil
	return res
}

func main() {}
