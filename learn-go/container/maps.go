// map 的操作
// 创建: make(map[string]int)
// 获取元素: m[key]
// key不存在时, 获得value类型的初始值
// 用value, ok := m[key]来判断是否存在key
// map 的遍历不保证顺序

// map 的key
// 除了slice, map, function 的内建类型都可以作为key
// struct 类型不包含slice, map, function 也可以作为key
package main

import "fmt"

func main() {
	m := map[string]string{
		"name":    "wrq",
		"course":  "golang",
		"site":    "imooc",
		"quality": "notbad",
	}

	m2 := make(map[string]int)

	var m3 map[string]int

	fmt.Println(m, m2, m3)
	// map[site:imooc quality:notbad name:wrq course:golang] map[] map[]

	fmt.Println("traversing map")
	for k, v := range m {
		fmt.Println(k, v)
	}
	// traversing map
	// name wrq
	// course golang
	// site imooc
	// quality notbad

	fmt.Println("getting value")
	courseName := m["course"]
	fmt.Println(courseName)

	causeName := m["cause"] // not exist
	fmt.Println(causeName)

	courseName, ok := m["course"]
	fmt.Println(courseName, ok)
	// golang true

	cs, ok := m["cause"] // not exist
	fmt.Println(cs, ok)
	//  false

	if cs2, ok := m["cause"]; ok {
		fmt.Println(cs2, ok)
	} else {
		fmt.Println("key does not exist")
	}

	fmt.Println("deleting values")
	name, ok := m["name"]
	fmt.Println(name, ok)

	delete(m, "name")
	name, ok = m["name"]
	fmt.Println(name, ok)
	// deleting values
	// wrq true
	// false
}
