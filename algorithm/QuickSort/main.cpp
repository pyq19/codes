#include "MergeSort.h"
#include "SortTestHelper.h"
#include <iostream>

using namespace std;

// 对 arr[l...r] 部分进行 partition 操作
// 返回 p，使得 arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
template <typename T> int __partition(T arr[], int l, int r) {
  swap(arr[l], arr[rand() % (r - l + 1) + l]); // 生成从 l 到 r 前闭后闭的索引
  T v = arr[l];

  // arr[l+1...j] < v; arr[j+1...i) > v
  int j = l;
  for (int i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      swap(arr[j + 1], arr[i]);
      j++;
    }
  }
  swap(arr[l], arr[j]);
  return j;
}

// 对 arr[l...r] 部分进行 partition 操作
// 返回 p，使得 arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
template <typename T> int __partition2(T arr[], int l, int r) {
  swap(arr[l], arr[rand() % (r - l + 1) + l]);
  T v = arr[l];

  // arr[l+1...i] <= v; arr(j...r] >= v
  int i = l + 1, j = r;
  while (true) {
    while (i <= r && arr[i] < v)
      i++;
    while (j >= l + 1 && arr[j] > v)
      j--;
    if (i > j)
      break;
    swap(arr[i], arr[j]);
    i++;
    j--;
  }

  swap(arr[l], arr[j]);
  return j;
}

// 对 arr[l...r] 部分进行快速排序
template <typename T> void __quickSort(T arr[], int l, int r) {
  if (l >= r)
    return;

  int p = __partition(arr, l, r);
  __quickSort(arr, l, p - 1);
  __quickSort(arr, p + 1, r);
}

template <typename T> void quickSort(T arr[], int n) {
  srand(time(NULL));
  __quickSort(arr, 0, n - 1);
}

/******** 双路快排 **************/
// 对 arr[l...r] 部分进行快速排序
template <typename T> void __quickSort2(T arr[], int l, int r) {
  if (l >= r)
    return;

  int p = __partition2(arr, l, r);
  __quickSort2(arr, l, p - 1);
  __quickSort2(arr, p + 1, r);
}

template <typename T> void quickSort2(T arr[], int n) {
  srand(time(NULL));
  __quickSort2(arr, 0, n - 1);
}

int main() {
  int n = 1000000;

  cout << "Test for Random Array, size = " << n << ", random range [0, " << n
       << "]" << endl;
  int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
  int *arr2 = SortTestHelper::copyIntArray(arr1, n);
  int *arr3 = SortTestHelper::copyIntArray(arr1, n);

  SortTestHelper::testSort("Merge Sort", mergeSort, arr1, n);
  SortTestHelper::testSort("Quick Sort", quickSort, arr2, n);
  SortTestHelper::testSort("Quick Sort 2", quickSort2, arr3, n);

  delete[] arr1;
  delete[] arr2;
  delete[] arr3;

  cout << endl;

  int swapTimes = 100;
  cout << "Test for Random Nearly Ordered Array, size = " << n
       << ", swap time = " << swapTimes << endl;
  arr1 = SortTestHelper::generateNearlyOrderedArray(n, swapTimes);
  arr2 = SortTestHelper::copyIntArray(arr1, n);
  arr3 = SortTestHelper::copyIntArray(arr1, n);

  SortTestHelper::testSort("Merge Sort", mergeSort, arr1, n);
  SortTestHelper::testSort("Quick Sort", quickSort, arr2, n);
  SortTestHelper::testSort("Quick Sort 2", quickSort2, arr3, n);

  delete[] arr1;
  delete[] arr2;
  delete[] arr3;

  cout << endl;

  cout << "Test for Random Array, size = " << n << ", random range [0, 10]"
       << endl;
  arr1 = SortTestHelper::generateRandomArray(n, 0, 10);
  arr2 = SortTestHelper::copyIntArray(arr1, n);
  arr3 = SortTestHelper::copyIntArray(arr1, n);

  SortTestHelper::testSort("Merge Sort", mergeSort, arr1, n);
  // SortTestHelper::testSort("Quick Sort", quickSort, arr2, n);
  SortTestHelper::testSort("Quick Sort 2", quickSort2, arr3, n);

  delete[] arr1;
  delete[] arr2;
  delete[] arr3;

  cout << endl;

  return 0;
}