package main

import (
	"fmt"
)

//func worker(id int, c chan int) {
//	for {
//		fmt.Printf("Worker %d received %c\n", id, <-c)
//	}
//}

func doWork(id int, c chan int, done chan bool) {
	for n := range c {
		fmt.Printf("Worker %d received %c\n", id, n)
		done <- true
	}
}

type worker struct {
	in   chan int
	done chan bool
}

func createWorker(id int) worker {
	w := worker{
		in:   make(chan int),
		done: make(chan bool),
	}
	go doWork(id, w.in, w.done)
	return w
}

func chanDemo() {
	var workers [10]worker
	for i := 0; i < 10; i++ {
		workers[i] = createWorker(i)
	}

	for i, worker := range workers {
		worker.in <- 'a' + i
	}

	for _, worker := range workers {
		<-worker.done
	}

	for i, worker := range workers {
		worker.in <- 'A' + i
	}

	// wait for all of them
	for _, worker := range workers {
		<-worker.done
	}
}

func main() {
	chanDemo()
}
