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
    /*
    float b[4] = {4.4, 3.3, 2.2, 1.1};
    selectionSort(b, 4);
    for (int i = 0; i < 4; i++)
        cout << b[i] << " ";
    cout << endl;

    string c[4] = {"D", "C", "B", "A"};
    selectionSort(c, 4);
    for (int i = 0; i < 4; i++)
        cout << c[i] << " ";
    cout << endl;

    Student d[4] = {{"D", 90}, {"C", 100}, {"B", 95}, {"A", 95}};
    selectionSort(d, 4);
    for (int i = 0; i < 4; i++)
        cout << d[i];
    cout << endl;
    */

    int n = 10000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    selectionSort(arr, n);
    SortTestHelper::printArray(arr, n);

    delete[] arr;

    return 0;
}
