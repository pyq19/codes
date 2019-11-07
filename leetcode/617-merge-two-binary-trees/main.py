# coding:utf8
# https://leetcode.com/problems/merge-two-binary-trees/

# TODO


class TreeNode:
    """Definition for a binary tree node."""

    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def mergeTrees(self, t1: TreeNode, t2: TreeNode) -> TreeNode:
        if t1 is None:
            return t2
        if t2 is None:
            return t1
        res = TreeNode(None)
        res.val = t1.val + t2.val
        res.left = self.mergeTrees(t1.left, t2.left)
        res.right = self.mergeTrees(t1.right, t2.right)
        return res
