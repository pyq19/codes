package main

import (
	"fmt"
	"learngo/retriever/mock"
	"learngo/retriever/real"
	"time"
)

type Retriever interface {
	Get(url string) string
}

func download(r Retriever) string {
	return r.Get("http:// www.imooc.com")
}

func main() {
	var r Retriever

	r = mock.Retriever{"this is a fake imooc.com"} // 实现者只要实现Get方法
	inspect(r)
	//mock.Retriever {this is a fake imooc.com}
	//Contents: this is a fake imooc.com

	r = &real.Retriever{
		UserAgent: "Mozilla/5.0",
		TimeOut:   time.Minute,
	}
	inspect(r)
	//*real.Retriever &{Mozilla/5.0 1m0s}
	//UserAgent: Mozilla/5.0

	// Type assertion 可以通过.(* 取得r里的类型
	realRetriever := r.(*real.Retriever)
	fmt.Println(realRetriever.TimeOut)
	// 1m0s

	if mockRetriever, ok := r.(mock.Retriever); ok {
		fmt.Println(mockRetriever.Contents)
	} else {
		fmt.Println("not a mock retriever")
	}
	// not a mock retriever

	// 接口变量里 可以有<实现者的类型> 或<实现者的指针>
}

func inspect(r Retriever) {
	fmt.Printf("%T %v\n", r, r)
	switch v := r.(type) {
	case mock.Retriever:
		fmt.Println("Contents:", v.Contents)
	case *real.Retriever:
		fmt.Println("UserAgent:", v.UserAgent)
	}

}
