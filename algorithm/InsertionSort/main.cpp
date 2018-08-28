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
        // 看是否比前一个元素小，是的话交换位置
        // arr[j] < arr[j-1] 是提前终止循环的条件之一
        for (int j = i; j > 0 && arr[j] < arr[j - 1]; j--)
            swap(arr[j], arr[j - 1]);
    }
}

int main()
{
    int n = 10000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    int *arr2 = SortTestHelper::copyIntArray(arr, n);

    SortTestHelper::testSort("Insertion Sort", insertionSort, arr, n);
    SortTestHelper::testSort("Selection Sort", selectionSort, arr2, n);

    delete[] arr;
    delete[] arr2;

    return 0;
}