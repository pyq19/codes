package container

import "fmt"

func printSlice(s []int) {
	fmt.Printf("%v, len=%d, cap=%d\n",
		s, len(s), cap(s))
}

func main() {
	fmt.Println("Creating slice")
	var s []int // Zero value for slice is nil

	for i := 0; i < 100; i++ {
		printSlice(s)
		s = append(s, 2*i+1)
	}
	fmt.Println(s)

	s1 := []int{2, 4, 6, 8}
	printSlice(s1)
	// [2 4 6 8], len=4, cap=4

	s2 := make([]int, 16)     // len 16
	s3 := make([]int, 10, 32) // len 10, cap 32

	printSlice(s2)
	printSlice(s3)
	// [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0], len=16, cap=16
	// [0 0 0 0 0 0 0 0 0 0], len=10, cap=32

	fmt.Println("Copying slice")
	copy(s2, s1)
	printSlice(s2)
	// [2 4 6 8 0 0 0 0 0 0 0 0 0 0 0 0], len=16, cap=16

	fmt.Println("Deleting elements from slice")
	s2 = append(s2[:3], s2[4:]...)
	printSlice(s2)
	// [2 4 6 0 0 0 0 0 0 0 0 0 0 0 0], len=15, cap=16 // 把 8 删掉了

	fmt.Println("Popping from front")
	front := s2[0]
	s2 = s2[1:]
	fmt.Println(front)
	printSlice(s2)
	// Popping from front
	// 2
	// [4 6 0 0 0 0 0 0 0 0 0 0 0 0], len=14, cap=15

	fmt.Println("Popping from back")
	tail := s2[len(s2)-1]
	s2 = s2[:len(s2)-1]
	fmt.Println(tail)
	printSlice(s2)
	// Popping from back
	// 0
	// [4 6 0 0 0 0 0 0 0 0 0 0 0], len=13, cap=15
}
