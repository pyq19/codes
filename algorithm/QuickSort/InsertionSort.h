template <typename T>
void insertionSort(T arr[], int n)
{
    // 从 i = 1 开始
    for (int i = 1; i < n; i++)
    {
        // 寻找元素 arr[i] 合适的插入位置
        // 向前找  > 0 原因是最后要 j = 1 和索引为0的元素做比较
        T e = arr[i];
        int j; // 保存元素应该插入的位置
        for (j = i; j > 0 && arr[j - 1] > e; j--)
            arr[j] = arr[j - 1];
        arr[j] = e; // 此时 j 为最终位置
    }
}

// 对 arr[l...r] 范围的数组进行插入排序
template <typename T>
void insertionSort(T arr[], int l, int r)
{
    for (int i = l + 1; i <= r; i++)
    {
        T e = arr[i];
        int j;
        for (j = i; j > l && arr[j - 1] > e; j--)
            arr[j] = arr[j - 1];
        arr[j] = e;
    }
    return;
}