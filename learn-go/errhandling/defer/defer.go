// 何时使用defer:
// Open/Close  Lock/Unlock  PrintHeader/PrintFooter
package main

import (
	"bufio"
	"fmt"
	"learngo/functional/fib"
	"os"
)

//func tryDefer() {
//	defer fmt.Println(1)
//	defer fmt.Println(2)
//	fmt.Println(3)
//	panic("error occurred")
//	fmt.Println(4)
//}
//panic: error occurred
//3
//
//2
//1

func tryDefer() {
	for i := 0; i < 100; i++ {
		defer fmt.Println(i)
		if i == 30 {
			panic("printed too many")
		}
	}
}

// 30
// ...
// 0
// panic: printed too many

func writeFile(filename string) {
	file, err := os.OpenFile(
		filename, os.O_EXCL|os.O_CREATE, 0666)

	//err = errors.New("this is a custom error")
	// panic: this is a custom error

	if err != nil {
		//fmt.Println("Error:", err)
		if pathError, ok := err.(*os.PathError); !ok {
			panic(err)
		} else {
			fmt.Printf("%s, %s, %s\n",
				pathError.Op,
				pathError.Path,
				pathError.Err)
		}
		return
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	defer writer.Flush()

	f := fib.Fibonacci()
	for i := 0; i < 20; i++ {
		fmt.Fprintln(writer, f())
	}
}

func main() {
	//tryDefer()
	writeFile("fib.txt")
}
