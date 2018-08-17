package main

import (
	"fmt"
	"regexp"
)

const text = `
my email is pyq225@gmail.com123
email1 is abc@def.org
email2 is kkk@aaa.com
email3 is ddd@adb.com.cn
`

func main() {
	re := regexp.MustCompile(`([a-zA-Z0-9]+)@([a-zA-Z0-9]+)(\.[a-zA-Z0-9.]+)`)
	match := re.FindAllStringSubmatch(text, -1)
	fmt.Println(match)
	// [[pyq225@gmail.com123 pyq225 gmail .com123] [abc@def.org abc def .org] [kkk@aaa.com kkk aaa .com] [ddd@adb.com.cn ddd adb .com.cn]]
	for _, m := range match {
		fmt.Println(m)
	}
	// [pyq225@gmail.com123 pyq225 gmail .com123]
	// [abc@def.org abc def .org]
	// [kkk@aaa.com kkk aaa .com]
	// [ddd@adb.com.cn ddd adb .com.cn]
}
