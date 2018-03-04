package main

import (
	"fmt"
	"reflect"
	"runtime"
	"math"
)

func eval(a, b int, op string) (int, error) {
	switch op {
	case "+":
		return a + b, nil
	case "-":
		return a - b, nil
	case "*":
		return a * b, nil
	case "/":
		q, _ := div(a, b)
		return q, nil
	default:
		return 0, fmt.Errorf(
			"unsupported operation: %s", op)
	}
}

//func div(a, b int) (int, int) {
//	return a / b, a % b
//}

//func div(a, b int) (q, r int) {
//	q = a / b
//	r = a % b
//	return
//}

func div(a, b int) (q, r int) {
	return a / b, a % b
}

func pow(a, b int) int {
	return int(math.Pow(float64(a), float64(b)))
}

// op 是一个参数，类型为func(int, int) int的函数; a, b 是另外两个参数，类型int.
func apply(op func(int, int) int, a, b int) int {
	p := reflect.ValueOf(op).Pointer()
	opName := runtime.FuncForPC(p).Name()
	fmt.Printf("Calling function %s with args "+
		"(%d, %d)\n", opName, a, b)
	return op(a, b)
}

// 可变参数列表
func sum(numbers ...int) int {
	s := 0
	for i := range numbers {
		s += numbers[i]
	}
	return s
}

func main() {
	if result, err := eval(3, 4, "*"); err != nil {
		fmt.Println("Error: ", err)
	} else {
		fmt.Println(result)
	}
	q, r := div(13, 3)
	fmt.Println(q, r) // 4 1

	fmt.Println(apply(pow, 3, 4))
	//Calling function main.pow with args (3, 4)
	//81

	// 匿名函数
	fmt.Println(apply(
		func(a int, b int) int {
			return int(math.Pow(float64(a), float64(b)))
		}, 3, 4))
	//Calling function main.main.func1 with args (3, 4)
	//81

	fmt.Println(sum(1, 2, 3, 4, 5)) // 15
}
