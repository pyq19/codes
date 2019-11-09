# coding:utf8
# https://leetcode.com/problems/binary-tree-inorder-traversal/


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None:
            return []
        left_list = self.inorderTraversal(root.left)
        left_list.append(root.val)
        right_list = self.inorderTraversal(root.right)
        return left_list + right_list

# TODO 更多种解法
