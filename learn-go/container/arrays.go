package container

import "fmt"

func printArray(arr [5]int) {
	// func f(arr [10]int)会拷贝数组
	arr[0] = 100
	for i, v := range arr {
		fmt.Println(i, v)
	}
}

func printArray2(arr *[5]int) {
	arr[0] = 100 // 等同于(*arr[0]) = 100
	for i, v := range arr {
		fmt.Println(i, v)
	}
}

func main() {
	var arr1 [5]int
	arr2 := [3]int{1, 3, 5} // 如果用冒号声明就要给初始值
	arr3 := [...]int{1, 2, 3, 4, 5}
	//arr4 := [...]int{2, 3, 4, 5, 6, 7, 8}
	var grid [4][5]int

	fmt.Println(arr1, arr2, arr3) // [0 0 0 0 0] [1 3 5] [1 2 3 4 5]
	fmt.Println(grid)             // [[0 0 0 0 0] [0 0 0 0 0] [0 0 0 0 0] [0 0 0 0 0]]

	// i 下标，v 值
	for i, v := range arr3 {
		fmt.Println(i, v)
	}

	//printArray(arr4) // error!
	//printArray(arr2) // error!

	fmt.Println("printArray(arr1)")
	printArray(arr1)
	//0 100
	//1 0
	//2 0
	//3 0
	//4 0

	fmt.Println("printArray(arr3)")
	printArray(arr3)
	//0 100
	//1 2
	//2 3
	//3 4
	//4 5
	// 调用func f(arr [10]int) 会拷贝数组

	fmt.Println("arr1 and arr3")
	fmt.Println(arr1, arr3)
	//[0 0 0 0 0] [1 2 3 4 5]

	fmt.Println("printArray2(&arr1)")
	printArray2(&arr1)

	fmt.Println("printArray2(&arr3)")
	printArray2(&arr3)

	fmt.Println("arr1 and arr3")
	fmt.Println(arr1, arr3)
	//printArray2(&arr1)
	//0 100
	//1 0
	//2 0
	//3 0
	//4 0
	//printArray2(&arr3)
	//0 100
	//1 2
	//2 3
	//3 4
	//4 5
	//arr1 and arr3
	//[100 0 0 0 0] [100 2 3 4 5]
}
