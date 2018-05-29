public class LoopQueue<E> implements Queue<E> {

    private E[] data;
    private int front, tail;
    private int size;

    public LoopQueue(int capacity) {
        data = (E[]) new Object[capacity + 1];
        front = 0;
        tail = 0;
        size = 0;
    }

    public LoopQueue() {
        this(10);
    }

    public int getCapacity() {
        return data.length - 1;
    }

    @Override
    public boolean isEmpty() {
        return front == tail;
    }

    @Override
    public int getSize() {
        return size;
    }

    @Override
    public void enqueue(E e) {
        if ((tail + 1) % data.length == front) {
            resize(getCapacity() * 2);
        }

        data[tail] = e;
        tail = (tail + 1) % data.length;
        size++;
    }

    private void resize(int newCapacity) {
        E[] newData = (E[]) new Object[newCapacity + 1];
        for (int i = 0; i < size; i++) {
            newData[i] = data[(i + front) % data.length];
        }
        data = newData;
        front = 0;
        tail = size;
    }

    @Override
    public E dequeue() {
        if (isEmpty()) {
            throw new IllegalArgumentException("Cannot dequeue from an empty queue");
        }
        E ret = data[front];
        data[front] = null;
        front = (front + 1) % data.length;
        size--;
        if (size == getCapacity() / 4 && getCapacity() / 2 != 0) {
            resize(getCapacity() / 2);
        }
        return ret;
    }

    @Override
    public E getFront() {
        if (isEmpty()) {
            throw new IllegalArgumentException("Queue is empty");
        }
        return data[front];
    }

    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();
        res.append(String.format("Queue : size = %d, capacity = %d\n", size, getCapacity()));
        res.append("front [");
        for (int i = front; i != tail; i = (i + 1) % data.length) {
            res.append(data[i]);
            if ((i + 1) % data.length != tail) {
                res.append(", ");
            }
        }
        res.append("] tail");
        return res.toString();
    }

    public static void main(String[] args) {
        LoopQueue<Integer> queue = new LoopQueue<Integer>();
        for (int i = 0; i < 10; i++) {
            queue.enqueue(i);
            System.out.println(queue);

            if (i % 3 == 2) {
                queue.dequeue();
                System.out.println(queue);
            }
        }
    }
    /*
    Queue : size = 1, capacity = 10
    front [0] tail
    Queue : size = 2, capacity = 10
    front [0, 1] tail
    Queue : size = 3, capacity = 10
    front [0, 1, 2] tail
    Queue : size = 2, capacity = 5
    front [1, 2] tail
    Queue : size = 3, capacity = 5
    front [1, 2, 3] tail
    Queue : size = 4, capacity = 5
    front [1, 2, 3, 4] tail
    Queue : size = 5, capacity = 5
    front [1, 2, 3, 4, 5] tail
    Queue : size = 4, capacity = 5
    front [2, 3, 4, 5] tail
    Queue : size = 5, capacity = 5
    front [2, 3, 4, 5, 6] tail
    Queue : size = 6, capacity = 10
    front [2, 3, 4, 5, 6, 7] tail
    Queue : size = 7, capacity = 10
    front [2, 3, 4, 5, 6, 7, 8] tail
    Queue : size = 6, capacity = 10
    front [3, 4, 5, 6, 7, 8] tail
    Queue : size = 7, capacity = 10
    front [3, 4, 5, 6, 7, 8, 9] tail
     */
}
