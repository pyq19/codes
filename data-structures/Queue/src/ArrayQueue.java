public class ArrayQueue<E> implements Queue<E> {

    private Array<E> array;

    public ArrayQueue(int capacity) {
        array = new Array<E>(capacity);
    }

    public ArrayQueue() {
        array = new Array<E>();
    }

    @Override
    public int getSize() {
        return array.getSize();
    }

    @Override
    public boolean isEmpty() {
        return array.isEmpty();
    }

    public int getCapacity() {
        return array.getCapacity();
    }

    @Override
    public void enqueue(E e) {
        array.addLast(e);
    }

    @Override
    public E dequeue() {
        return array.removeFirst();
    }

    @Override
    public E getFront() {
        return array.getFirst();
    }

    @Override
    public String toString() {
        StringBuilder res = new StringBuilder();
        res.append("Queue: ");
        res.append("front [");
        for (int i = 0; i < array.getSize(); i++) {
            res.append(array.get(i));
            if (i != array.getSize() - 1) {
                res.append(", ");
            }
        }
        res.append("] tail");
        return res.toString();
    }

    public static void main(String[] args) {
        ArrayQueue<Integer> queue = new ArrayQueue<Integer>();
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
    Queue: front [0] tail
    Queue: front [0, 1] tail
    Queue: front [0, 1, 2] tail
    Queue: front [1, 2] tail
    Queue: front [1, 2, 3] tail
    Queue: front [1, 2, 3, 4] tail
    Queue: front [1, 2, 3, 4, 5] tail
    Queue: front [2, 3, 4, 5] tail
    Queue: front [2, 3, 4, 5, 6] tail
    Queue: front [2, 3, 4, 5, 6, 7] tail
    Queue: front [2, 3, 4, 5, 6, 7, 8] tail
    Queue: front [3, 4, 5, 6, 7, 8] tail
    Queue: front [3, 4, 5, 6, 7, 8, 9] tail
    */
}
