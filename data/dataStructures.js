
export const dataStructures = {
  title: 'Cấu Trúc Dữ Liệu',
  description: 'Nền tảng của lập trình hiệu quả: Mảng, Danh sách liên kết, Cây, và Đồ thị.',
  icon: '🔗',
  content: [
    { type: 'paragraph', text: 'Cấu trúc dữ liệu là cách tổ chức, quản lý và lưu trữ dữ liệu để có thể truy cập và sửa đổi một cách hiệu quả.' },
    { type: 'heading', level: 4, text: '1. Stack (Ngăn xếp - LIFO)' },
    { type: 'paragraph', text: 'Hoạt động theo nguyên tắc "Vào sau, ra trước" (Last-In, First-Out).' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    stack<int> s;
    s.push(1);
    s.push(2);
    s.pop(); // Xóa 2
    // cout << s.top(); // Truy cập 1
    return 0;
}`,
        javascript: `class Stack {
  constructor() { this.items = []; }
  push(element) { this.items.push(element); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}`,
        python: `stack = []
stack.append(1)
stack.append(2)
stack.pop() # Trả về 2
# Phần tử trên cùng là stack[-1]`,
        java: `import java.util.Stack;

Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.pop(); // trả về 2
// stack.peek(); // trả về 1`
    }},
    { type: 'heading', level: 4, text: '2. Queue (Hàng đợi - FIFO)' },
    { type: 'paragraph', text: 'Hoạt động theo nguyên tắc "Vào trước, ra trước" (First-In, First-Out).' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    queue<int> q;
    q.push(1); // Thêm 1
    q.push(2); // Thêm 2
    q.pop();   // Xóa 1
    // cout << q.front(); // Truy cập 2
    return 0;
}`,
        javascript: `class Queue {
  constructor() { this.items = []; }
  enqueue(element) { this.items.push(element); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}`,
        python: `from collections import deque

queue = deque()
queue.append(1)
queue.append(2)
queue.popleft() # Trả về 1`,
        java: `import java.util.LinkedList;
import java.util.Queue;

Queue<Integer> queue = new LinkedList<>();
queue.add(1);
queue.add(2);
queue.remove(); // trả về 1
// queue.peek(); // trả về 2`
    }},
  ]
};
