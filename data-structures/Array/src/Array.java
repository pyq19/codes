public class Array {
    private int[] data;
    private int size;

    // 构造函数，传入数组的容量 capacity 构造 Array
    public Array(int capacity) {
        data = new int[capacity];
        size = 0;
    }

    // 无参数的构造函数，默认数组的容量 capacity = 10
    public Array() {
        this(10);
    }

    // 获取数组中的元素个数
    public int getSize() {
        return size;
    }

    // 获取数组的容量
    public int getCapacity() {
        return data.length;
    }

    // 返回数组是否为空
    public boolean isEmpty() {
        return size == 0;
    }

    // 向所有元素后添加一个新元素
    public void addList(int e) {
        add(size, e);
    }

    // 在所有元素前添加一个新元素
    public void addFirst(int e) {
        add(0, e);
    }

    // 在 index 个位置插入一个新元素 e
    public void add(int index, int e) {
        if (size == data.length) {
            throw new IllegalArgumentException("Add failed. Array is full.");
        }
        if (index < 0 || index > size) {
            throw new IllegalArgumentException("Add failed. Required index >= 0 and index <= size.");
        }

        // 每个元素往后挪一个位置，直到 index
        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }
        data[index] = e;
        size++;
    }
}
