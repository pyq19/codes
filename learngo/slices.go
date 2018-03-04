package main

import "fmt"

func updateSlice(s []int) {
	s[0] = 100
}

func main() {
	arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	fmt.Println("arr[2:6] = ", arr[2:6])
	fmt.Println("arr[:6] = ", arr[:6])
	fmt.Println("arr[2:] = ", arr[2:])
	fmt.Println("arr[:] = ", arr[:])
	//arr[2:6] =  [2 3 4 5]
	//arr[:6] =  [0 1 2 3 4 5]
	//arr[2:] =  [2 3 4 5 6 7]
	//arr[:] =  [0 1 2 3 4 5 6 7]

	s1 := arr[2:]
	fmt.Println("s1 = ", s1)
	s2 := arr[:]
	fmt.Println("s2 = ", s2)
	//s1 =  [2 3 4 5 6 7]
	//s2 =  [0 1 2 3 4 5 6 7]

	fmt.Println("After updateSlice(s1)")
	updateSlice(s1)
	fmt.Println(s1)
	fmt.Println(arr)
	//After updateSlice(s1)
	//[100 3 4 5 6 7]
	//[0 1 100 3 4 5 6 7]

	fmt.Println("After updateSlice(s2)")
	updateSlice(s2)
	fmt.Println(s2)
	fmt.Println(arr)
	//After updateSlice(s2)
	//[100 1 100 3 4 5 6 7]
	//[100 1 100 3 4 5 6 7]

	// slice 本身没有数据，是对底层array 的一个view
	arr6 := [...]int{0, 1, 2, 3, 4, 5}
	s := arr6[2:6]
	s[0] = 10
	fmt.Println(arr6) // arr6 值变为[0 1 10 3 4 5]

	fmt.Println("Reslice")
	// s2: [100 1 100 3 4 5 6 7]
	fmt.Println(s2)
	fmt.Println(s2[2:5])
	s2 = s2[:5]
	fmt.Println(s2)
	s2 = s2[2:]
	fmt.Println(s2)
	// Reslice
	// [100 1 100 3 4 5 6 7]
	// [100 3 4]  // s2[2:5] -> [2:5) 前闭后开
	// [100 1 100 3 4]
	// [100 3 4]

	fmt.Println("Extending slice")
	arr[0], arr[2] = 0, 2
	fmt.Println(arr)
	s1 = arr[2:6]
	s2 = s1[3:5]
	fmt.Println("s1 = ", s1)
	fmt.Println("s2 = ", s2)
	//Extending slice
	//[0 1 2 3 4 5 6 7]
	//s1 =  [2 3 4 5]
	//s2 =  [5 6] // !!! s1[4]会报错但是slice可以取出来
	// slice 可以向后扩展，但不可以向前扩展
	// s[i]不可以超越len(s)，向后扩展不可以超越底层数组cap(s)
	fmt.Printf("s1=%v, len(s1)=%d, cap(s1)=%d\n",
		s1, len(s1), cap(s1))
	//s1=[2 3 4 5], len(s1)=4, cap(s1)=6
	fmt.Printf("s2=%v, len(s2)=%d, cap(s2)=%d\n",
		s2, len(s2), cap(s2))
	//s2=[5 6], len(s2)=2, cap(s2)=3
	fmt.Println("arr =", arr)
	//arr = [0 1 2 3 4 5 6 7]
}
