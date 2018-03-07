package queue

type Queue []int

func (q *Queue) Push(v int) {
	*q = append(*q, v) // 指针接收者可以改变原来值
}

func (q *Queue) Pop() int {
	head := (*q)[0]
	*q = (*q)[1:]
	return head
}

func (q *Queue) IsEmpty() bool {
	return len(*q) == 0
}
