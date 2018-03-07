// 值接收者 vs 指针接收者
// 要改变内容必须使用指针接收者
// 结构过大也考虑使用指针接收者
// 一致性: 如果有指针接收者，最好都是指针接收者
// 值接收者是go 语言特有
// 值／指针接收者均可接收值／指针 ?
package tree

import "fmt"

type Node struct {
	Value       int
	Left, Right *Node
}

func CreateNode(value int) *Node {
	return &Node{Value: value} // go 中，局部变量地址也可以返回  c++ 不可以 不需要知道分配在堆上还是栈上
}

func (node Node) Print() {
	fmt.Print(node.Value, " \n")
}

func (node *Node) SetValue(value int) {
	if node == nil {
		fmt.Println("Setting value to nil " +
			"node. Ignored.")
		return
	}
	node.Value = value // 加不加* 用法都是.value
}


//func (node Node) print2() {
//	fmt.Println(node)
//}
