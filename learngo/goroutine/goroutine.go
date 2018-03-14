package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {
	var a [10]int
	for i := 0; i < 10; i++ {
		go func(i int) {
			for {
				// Printf 是io操作，有协程切换
				//fmt.Printf("Hello from goroutine %d\n", i)

				// 没有协程切换，交不出控制权，死循环
				a[i]++
				// 手动交出控制权
				runtime.Gosched()
			}
		}(i)

		//go func() { // race condition // go run -race goroutine.go
		//	for {
		//
		//	}
		//}()
	}
	time.Sleep(time.Millisecond)
	fmt.Println(a)
}
