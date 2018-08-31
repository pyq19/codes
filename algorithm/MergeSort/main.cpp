#include <iostream>
#include "SortTestHelper.h"
#include "MergeSort.h"

using namespace std;

template <typename T>
void mergeSortBU(T arr[], int n)
{
    for (int sz = 1; sz <= n; sz += sz)
        for (int i = 0; i + sz < n; i += sz + sz)
            // 对 arr[i...i+sz-1] 和 arr[i+sz...i+2*sz-1] 进行归并排序
            __merge(arr, i, i + sz - 1, min(i + sz + sz - 1, n - 1));
}

int main()
{

    return 0;
}