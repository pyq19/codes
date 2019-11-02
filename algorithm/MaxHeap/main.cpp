#include <algorithm>
#include <cassert>
#include <cmath>
#include <ctime>
#include <iostream>
#include <string>

using namespace std;

template <typename Item> class MaxHeap {
private:
  Item *data; // 元素中的内容
  int count;  // 数量

public:
  MaxHeap(int capacity) {
    data = new Item[capacity + 1];
    count = 0;
  }
  ~MaxHeap() { delete[] data; }

  int size() { return count; }

  bool isEmpty() { return count == 0; }
};

int main() {
  MaxHeap<int> maxheap = MaxHeap<int>(100); // 传入的 100 是开辟了 100 的空间
  cout << maxheap.size() << endl; // 输出: 0 表示元素的个数是 0

  return 0;
}