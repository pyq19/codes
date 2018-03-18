package main

import (
	"fmt"
	"regexp"
)

const text = `
my email is pyq225@gmail.com123
email1 is abc@def.org
email2 is kkk@aaa.com
`

func main() {
	re := regexp.MustCompile(`[a-zA-Z0-9]+@[a-zA-Z0-9\.]+\.[a-zA-Z0-9]+`)
	match := re.FindAllString(text, -1)
	fmt.Println(match)
	// [pyq225@gmail.com123 abc@def.org kkk@aaa.com]

}
