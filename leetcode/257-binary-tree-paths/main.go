package main

import (
	"fmt"
	"reflect"
)

/*
TODO
二叉树的所有路径
https://leetcode-cn.com/problems/binary-tree-paths/description/
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
*/

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// type stringSlice []string

// func sliceToArray(slice stringSlice) []string {
// 	arr := make([]string, len(slice))
// 	copy(arr[:], slice)
// 	return arr
// }

func binaryTreePaths(root *TreeNode) []string {
	// var res []string

	return nil
}

func main() {
	res := make([]string, 0)
	res = append(res, "aaa")
	fmt.Println(reflect.TypeOf(res))
	fmt.Println(res)

	slice := []byte("abcdefgh")

	fmt.Println("------")
	var arr [4]byte
	copy(arr[:], slice[:4])
	fmt.Println(arr)

	// fmt.Println("------")
	// fmt.Println(sliceToArray([]string{"asd", "666"}))
}
