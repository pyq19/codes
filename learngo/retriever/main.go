package main

import (
	"fmt"
	"learngo/retriever/mock"
	"learngo/retriever/real"
)

type Retriever interface {
	Get(url string) string
}

func download(r Retriever) string {
	return r.Get("http:// www.imooc.com")
}

func main() {
	//fmt.Println(download(mock.Retriever{"this is a fake imooc.com"}))
	var r Retriever
	r = mock.Retriever{"this is a fake imooc.com"} // 实现者只要实现Get方法
	r = real.Retriever{}
	fmt.Println(download(r))

}
