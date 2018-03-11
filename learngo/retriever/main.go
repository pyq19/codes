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

type Poster interface {
	Post(url string, form map[string]string) string
}

const url = "http:// www.imooc.com"

func download(r Retriever) string {
	return r.Get(url)
}

func post(poster Poster) {
	poster.Post(url,
		map[string]string{
			"name":   "wrq",
			"course": "golang",
		})
}

type RetrieverPoster interface {
	Retriever
	Poster
}

func session(s RetrieverPoster) string {
	s.Post(url, map[string]string{
		"contents": "another faked imooc.com",
	})
	return s.Get(url)
}

func main() {
	var r Retriever

	retriever := mock.Retriever{"this is a fake imooc.com"} // 实现者只要实现Get方法
	r = &retriever
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

	if mockRetriever, ok := r.(*mock.Retriever); ok {
		fmt.Println(mockRetriever.Contents)
	} else {
		fmt.Println("not a mock retriever")
	}
	// not a mock retriever

	// 接口变量里 可以有<实现者的类型> 或<实现者的指针>

	fmt.Println("Try a session")
	fmt.Println(session(&retriever))
}

func inspect(r Retriever) {
	fmt.Printf("%T %v\n", r, r)
	switch v := r.(type) {
	case *mock.Retriever:
		fmt.Println("Contents:", v.Contents)
	case *real.Retriever:
		fmt.Println("UserAgent:", v.UserAgent)
	}

}
