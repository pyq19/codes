package tree

import "fmt"

// 中序遍历
func (node *Node) Traverse() {
	node.TraverseFunc(func(n *Node) {
		n.Print()
	})
	fmt.Println()
}

func (node *Node) TraverseFunc(f func(*Node)) {
	if node == nil {
		return
	}
	//node.Left.Traverse()
	//node.Print()
	//node.Right.Traverse()
	node.Left.TraverseFunc(f)
	f(node)
	node.Right.TraverseFunc(f)
}
