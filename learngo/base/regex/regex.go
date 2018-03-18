package main

import (
	"fmt"
	"regexp"
)

const text = "My email is pyq225@gmail.com123RR"

func main() {
	re := regexp.MustCompile(`[a-zA-Z0-9]+@.+\.[a-zA-Z0-9]+`)
	match := re.FindString(text)
	fmt.Println(match)
	// pyq225@gmail.com123RR
}
