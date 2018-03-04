// 2-1 变量定义
package main

import "fmt"

var (
	aa = 3
	ss = "kkk"
	bb = true
)

//bb := true // wrong!

func variableZeroValue() {
	var a int
	var s string
	fmt.Printf("%d %q\n", a, s)
}

func variableIntitialValue() {
	var a, b int = 3, 4
	var s string = "abc"
	fmt.Println(a, b, s)
}

func variableTypeDeduction() {
	var a, b, c, s = 3, 4, true, "def"
	fmt.Println(a, b, c, s)
}

func variableShorter() {
	a, b, c, s := 3, 4, true, "def"
	b = 5
	fmt.Println(a, b, c, s)
}

func main() {
	fmt.Println("hello world")
	variableZeroValue()
	variableIntitialValue()
	variableTypeDeduction()
	fmt.Println(aa, ss, bb)
}
