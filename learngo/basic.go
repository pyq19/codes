package main

import (
	"fmt"
	"math"
	"math/cmplx"
)

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

func euler() {
	//fmt.Println(cmplx.Pow(math.E, 1i*math.Pi) + 1)
	//(0+1.2246467991473532e-16i)
	fmt.Printf("%.3f\n", cmplx.Exp(1i*math.Pi)+1)
	//(0.000+0.000i)
}

func triangle() {
	// 强制类型转换
	var a, b int = 3, 4
	var c int
	c = int(math.Sqrt(float64(a*a + b*b)))
	fmt.Println(c) // 5
}

func main() {
	fmt.Println("hello world")
	variableZeroValue()
	variableIntitialValue()
	variableTypeDeduction()
	variableShorter()
	fmt.Println(aa, ss, bb)

	euler()
	triangle()
}
