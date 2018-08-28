#include <iostream>
#include "Student.h"
#include "SortTestHelper.h"

using namespace std;

template <typename T>
void selectionSort(T arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        int minIndex = i;
        // 寻找 [i, n) 区间最小值
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIndex])
                minIndex = j;
        swap(arr[i], arr[minIndex]);
    }
}

int main()
{
    int n = 100000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    // selectionSort(arr, n);
    // SortTestHelper::printArray(arr, n);

    SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);
    delete[] arr;

    return 0;
}
