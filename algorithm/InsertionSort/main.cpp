#include <iostream>
#include "SortTestHelper.h"
#include "SelectionSort.h"

using namespace std;

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

int main()
{
    int n = 10000;
    int *arr = SortTestHelper::generateNearlyOrderedArray(n, 100);
    int *arr2 = SortTestHelper::copyIntArray(arr, n);

    SortTestHelper::testSort("Insertion Sort", insertionSort, arr, n);
    SortTestHelper::testSort("Selection Sort", selectionSort, arr2, n);

    delete[] arr;
    delete[] arr2;

    return 0;
}