package main

import (
	"fmt"
	"learngo/tree"

	"golang.org/x/tools/container/intsets"
)

type myTreeNode struct {
	node *tree.Node
}

// 后序遍历
func (myNode *myTreeNode) postOrder() {
	if myNode == nil || myNode.node == nil {
		return
	}
	left := myTreeNode{myNode.node.Left}
	right := myTreeNode{myNode.node.Right}
	left.postOrder()
	right.postOrder()
	myNode.node.Print()
}

func testSparse() {
	s := intsets.Sparse{}
	s.Insert(1)
	s.Insert(1000)
	s.Insert(1000000)
	fmt.Println(s.Has(1000))
	fmt.Println(s.Has(10000))
}

func main() {
	var root tree.Node
	fmt.Println(root) // {0 <nil> <nil>}

	root = tree.Node{Value: 3}
	root.Left = &tree.Node{}
	root.Right = &tree.Node{5, nil, nil}
	root.Right.Left = new(tree.Node)
	root.Left.Right = tree.CreateNode(2)

	//root.print() // 3
	root.Right.Left.SetValue(4)

	/*
		root.right.left.print() // 4
		fmt.Println()

		// nodes := []Node{
		// 	{value: 3},
		// 	{},
		// 	{6, nil, &root},
		// }
		// fmt.Println(nodes)
		// [{3 <nil> <nil>} {0 <nil> <nil>} {6 <nil> 0xc420080080}]

		fmt.Println("----------")

		root.print() // 3
		root.setValue(100)
		pRoot := &root
		pRoot.print() // 100
		//pRoot.print2() // {100 0xc4200800a0 0xc4200800c0}
		pRoot.setValue(200)
		pRoot.print() // 200

		fmt.Println("----------")
		var pRoot2 *Node
		pRoot2.setValue(200)
		pRoot2 = &root
		pRoot2.setValue(300)
		pRoot2.print()
		// Setting value to nil node. Ignored.
		// 300
	*/

	root.Traverse() // 0 2 3 4 5
	fmt.Println("-----")
	myroot := myTreeNode{&root}
	myroot.postOrder()
	fmt.Println("-----")
	testSparse()
	// true
	// false

	fmt.Println("-----")
	nodeCount := 0
	root.TraverseFunc(func(node *tree.Node) {
		nodeCount++
	})
	fmt.Println("Node count:", nodeCount)
}
