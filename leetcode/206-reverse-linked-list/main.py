# coding:utf8
# https://leetcode.com/problems/reverse-linked-list/


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        """迭代 iteratively"""
        cur = head
        pre = None
        while cur:
            nxt = cur.next
            # 1 -> 2 -> 3 -> 4 -> 5 -> NULL
            # cur  nxt

            cur.next = pre
            # None <- 1   2 -> 3 -> 4 -> 5 -> NULL
            #   pre  cur nxt

            pre = cur
            # None <- 1    2 -> 3 -> 4 -> 5 -> NULL
            #    (pre)cur nxt

            cur = nxt
            # None <- 1    2 -> 3 -> 4 -> 5 -> NULL
            #        pre (cur)nxt

        return pre


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        """TODO 递归 recursively"""
