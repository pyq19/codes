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

/******** 三路快排 **************/
// 将 arr[l...r] 分为 < v; == v; > v 三部分
// 之后递归对 < v; > v 两部分继续进行三路快速排序
template <typename T> void __quickSort3Ways(T arr[], int l, int r) {
  if (r - l <= 15) {
    insertionSort(arr, l, r);
    return;
  }

  // partition
  swap(
      arr[l],
      arr[rand() % (r - l + 1) + l]); // l 和 r 之间随机选择一个元素， 和 l 交换
  T v = arr[l];
  int lt = l;     // arr[l + 1...lt] < v
  int gt = r + 1; // arr[gt...r] > v
  int i = l + 1;  // arr[lt + 1 ... i) == v
  while (i < gt) {
    // TODO 这部分代码思路不清楚. 关键是索引没弄清楚.
    // https://coding.imooc.com/lesson/71.html#mid=1461
    // 三路快速排序 8:38
    // arr[l+1...lt] < v; arr[lt+1...i-1] == v;   arr[gt...r] > v;
    // arr = [.|.......|......|.......|.......]
    //        v      lt        i       gt    r
    // | 分割的 5 部分 分别是
    // 1. v; 2. <v; 3. ==v; 4. 未处理; 5. >v
    if (arr[i] < v) {
      swap(arr[i], arr[lt + 1]);
      lt++;
      i++;
    } else if (arr[i] > v) {
      swap(arr[i], arr[gt - 1]);
      gt--;
    } else { // arr[i] == v
      i++;
    }
  }
  // 将 l 这个元素与 lt（等于 v）的这个元素交换
  swap(arr[l], arr[lt]);
  __quickSort3Ways(arr, l, lt - 1);
  __quickSort3Ways(arr, gt, r);
}

template <typename T> void quickSort3Ways(T arr[], int n) {
  srand(time(NULL)); // 使用随机的方式确定快速排序的标定点, 设立随机种子
  __quickSort3Ways(arr, 0,
                   n - 1); // arr: 要处理的数字, 0: 头位置, n - 1: 尾位置
}

int main() {
  int n = 1000000;

  // 测试 1: 一般性测试
  cout << "Test for Random Array, size = " << n << ", random range [0, " << n
       << "]" << endl;
  int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
  int *arr2 = SortTestHelper::copyIntArray(arr1, n);
  int *arr3 = SortTestHelper::copyIntArray(arr1, n);

  SortTestHelper::testSort("Merge Sort", mergeSort, arr1, n);
  SortTestHelper::testSort("Quick Sort 2", quickSort2, arr2, n);
  SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr3, n);

  delete[] arr1;
  delete[] arr2;
  delete[] arr3;

  cout << endl;

  // 测试 2: 测试近乎有序的数组
  int swapTimes = 100;
  cout << "Test for Random Nearly Ordered Array, size = " << n
       << ", swap time = " << swapTimes << endl;
  arr1 = SortTestHelper::generateNearlyOrderedArray(n, swapTimes);
  arr2 = SortTestHelper::copyIntArray(arr1, n);
  arr3 = SortTestHelper::copyIntArray(arr1, n);

  SortTestHelper::testSort("Merge Sort", mergeSort, arr1, n);
  SortTestHelper::testSort("Quick Sort 2", quickSort2, arr2, n);
  SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr3, n);

  delete[] arr1;
  delete[] arr2;
  delete[] arr3;

  cout << endl;

  // 测试 3: 测试存在包含大量相同元素的数组
  cout << "Test for Random Array, size = " << n << ", random range [0, 10]"
       << endl;
  arr1 = SortTestHelper::generateRandomArray(n, 0, 10);
  arr2 = SortTestHelper::copyIntArray(arr1, n);
  arr3 = SortTestHelper::copyIntArray(arr1, n);

  SortTestHelper::testSort("Merge Sort", mergeSort, arr1, n);
  SortTestHelper::testSort("Quick Sort 2", quickSort2, arr2, n);
  SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr3, n);

  delete[] arr1;
  delete[] arr2;
  delete[] arr3;

  cout << endl;

  return 0;
}