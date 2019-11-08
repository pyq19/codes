# coding:utf8
# https://leetcode.com/problems/maximum-depth-of-binary-tree/


class TreeNode:
    """Definition for a binary tree node."""

    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:

    def maxDepth(self, root: TreeNode) -> int:

        if root is None or root.val is None:
            return 0

        left_depth = self.maxDepth(root.left)
        right_depth = self.maxDepth(root.right)

        if left_depth > right_depth:
            return left_depth + 1
        else:
            return right_depth + 1
