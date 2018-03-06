// 值接收者 vs 指针接收者
// 要改变内容必须使用指针接收者
// 结构过大也考虑使用指针接收者
// 一致性: 如果有指针接收者，最好都是指针接收者
// 值接收者是go 语言特有
// 值／指针接收者均可接收值／指针 ?
package main

import "fmt"

type treeNode struct {
	value       int
	left, right *treeNode
}

func createNode(value int) *treeNode {
	return &treeNode{value: value} // go 中，局部变量地址也可以返回  c++ 不可以 不需要知道分配在堆上还是栈上
}

func (node treeNode) print() {
	fmt.Print(node.value, " \n")
}

func (node *treeNode) setValue(value int) {
	if node == nil {
		fmt.Println("Setting value to nil " +
			"node. Ignored.")
		return
	}
	node.value = value // 加不加* 用法都是.value
}

// 中序遍历
func (node *treeNode) traverse() {
	if node == nil {
		return
	}
	node.left.traverse()
	node.print()
	node.right.traverse()
}

//func (node treeNode) print2() {
//	fmt.Println(node)
//}

func main() {
	var root treeNode
	fmt.Println(root) // {0 <nil> <nil>}

	root = treeNode{value: 3}
	root.left = &treeNode{}
	root.right = &treeNode{5, nil, nil}
	root.right.left = new(treeNode)
	root.left.right = createNode(2)

	//root.print() // 3
	root.right.left.setValue(4)

	/*
	root.right.left.print() // 4
	fmt.Println()

	// nodes := []treeNode{
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
	var pRoot2 *treeNode
	pRoot2.setValue(200)
	pRoot2 = &root
	pRoot2.setValue(300)
	pRoot2.print()
	// Setting value to nil node. Ignored.
	// 300
	*/

	root.traverse() // 0 2 3 4 5
}
