
import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export const courses = [
    {
     title: 'Lộ trình học lập trình Web',
     description: 'Lộ trình chi tiết để trở thành lập trình viên web chuyên nghiệp cho người mới bắt đầu.',
     author: 'Sơn Đặng (F8 Official)',
     youtubeId: 'zoELAirXMJY',
   },
   {
     title: 'Nhập môn Lập trình Python',
     description: 'Khám phá các khái niệm cơ bản về lập trình, tư duy logic và giải quyết vấn đề với Python.',
     icon: '💻',
     content: (
       <>
         <p>Khóa học này là bước khởi đầu hoàn hảo cho bất kỳ ai muốn bước vào thế giới lập trình. Bạn sẽ học các khái niệm cốt lõi như biến, kiểu dữ liệu, cấu trúc điều khiển (if/else, vòng lặp), và hàm.</p>
         <h4>Nội dung chính:</h4>
         <ul>
           <li>Giới thiệu về tư duy máy tính và giải thuật.</li>
           <li>Cú pháp và ngữ nghĩa cơ bản của ngôn ngữ Python.</li>
           <li>Thực hành giải quyết các bài toán lập trình cơ bản.</li>
           <li>Xây dựng một dự án nhỏ cuối khóa để áp dụng kiến thức.</li>
         </ul>
       </>
     )
   },
    {
     title: 'Lập Trình C++ Cơ Bản',
     description: 'Nắm vững những kiến thức nền tảng và quan trọng nhất của ngôn ngữ lập trình C++.',
     author: '28tech',
     youtubeId: '74B6PXO97Tw',
   },
   {
     title: 'Phát triển Web Hiện đại',
     description: 'Xây dựng các ứng dụng web tương tác và đáp ứng bằng các công nghệ mới nhất như React, Node.js.',
     icon: '🌐',
     content: (
       <>
         <p>Trở thành một nhà phát triển web full-stack bằng cách nắm vững cả frontend và backend. Khóa học tập trung vào các công nghệ phổ biến nhất hiện nay.</p>
         <h4>Công nghệ được học:</h4>
         <ul>
           <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), và thư viện React.</li>
           <li><strong>Backend:</strong> Node.js, Express.js để xây dựng API.</li>
           <li><strong>Cơ sở dữ liệu:</strong> Làm việc với cơ sở dữ liệu NoSQL như MongoDB.</li>
           <li>Triển khai ứng dụng web lên các nền tảng đám mây.</li>
         </ul>
       </>
     )
   },
   {
     title: 'Giới thiệu Machine Learning',
     description: 'Bắt đầu hành trình vào thế giới Trí Tuệ Nhân Tạo với các khái niệm cốt lõi về Học Máy.',
     author: 'Phạm Đình Khánh',
     youtubeId: 'yPo7-n76A4A',
   },
   {
     title: 'An ninh Mạng',
     description: 'Bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa với các kỹ thuật phòng thủ và tấn công mạng.',
     icon: '🛡️',
     content: (
       <>
         <p>Trong một thế giới ngày càng kết nối, an ninh mạng là kỹ năng cực kỳ quan trọng. Khóa học này cung cấp kiến thức toàn diện về cách bảo vệ tài sản số.</p>
         <h4>Chủ đề bao gồm:</h4>
         <ul>
           <li>Các loại tấn công mạng phổ biến (Malware, Phishing, DDoS).</li>
           <li>Bảo mật mạng, mật mã học và chữ ký số.</li>
           <li>Kiểm thử xâm nhập (Penetration Testing) có đạo đức.</li>
           <li>Phân tích và ứng phó với sự cố an ninh.</li>
         </ul>
       </>
     )
   },
 ];
 
 export const algorithms = [
   {
     title: 'Thuật Toán Sắp Xếp',
     description: 'Tìm hiểu cách sắp xếp dữ liệu hiệu quả với các thuật toán như Bubble Sort, Merge Sort, Quick Sort.',
     icon: '📊',
     content: (
       <>
         <p>Thuật toán sắp xếp là một trong những khái niệm nền tảng nhất trong khoa học máy tính, dùng để sắp đặt các phần tử của một danh sách theo một thứ tự nhất định (tăng dần, giảm dần).</p>
         
         <h4>1. Bubble Sort (Sắp xếp nổi bọt)</h4>
         <p>Duyệt qua danh sách nhiều lần, so sánh và đổi chỗ các cặp phần tử liền kề nếu chúng sai thứ tự. Độ phức tạp: O(n²).</p>
         <CodeBlock snippets={{
           cpp: `#include <vector>
#include <utility> // for std::swap

void bubbleSort(std::vector<int>& arr) {
   int n = arr.size();
   for (int i = 0; i < n - 1; i++) {
       for (int j = 0; j < n - i - 1; j++) {
           if (arr[j] > arr[j + 1]) {
               std::swap(arr[j], arr[j + 1]);
           }
       }
   }
}`,
           javascript: `function bubbleSort(arr) {
 let n = arr.length;
 for (let i = 0; i < n - 1; i++) {
   for (let j = 0; j < n - i - 1; j++) {
     if (arr[j] > arr[j + 1]) {
       [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
     }
   }
 }
 return arr;
}`,
           python: `def bubble_sort(arr):
   n = len(arr)
   for i in range(n - 1):
       for j in range(n - i - 1):
           if arr[j] > arr[j + 1]:
               arr[j], arr[j + 1] = arr[j + 1], arr[j]
   return arr`,
           java: `public class Sorter {
   public static void bubbleSort(int[] arr) {
       int n = arr.length;
       for (int i = 0; i < n - 1; i++) {
           for (int j = 0; j < n - i - 1; j++) {
               if (arr[j] > arr[j + 1]) {
                   int temp = arr[j];
                   arr[j] = arr[j + 1];
                   arr[j + 1] = temp;
               }
           }
       }
   }
}`
         }} />

         <h4>2. Insertion Sort (Sắp xếp chèn)</h4>
         <p>Lấy từng phần tử và chèn nó vào đúng vị trí trong mảng con đã được sắp xếp. Độ phức tạp: O(n²).</p>
          <CodeBlock snippets={{
           cpp: `#include <vector>

void insertionSort(std::vector<int>& arr) {
   for (int i = 1; i < arr.size(); i++) {
       int key = arr[i];
       int j = i - 1;
       while (j >= 0 && arr[j] > key) {
           arr[j + 1] = arr[j];
           j = j - 1;
       }
       arr[j + 1] = key;
   }
}`,
           javascript: `function insertionSort(arr) {
 for (let i = 1; i < arr.length; i++) {
   let current = arr[i];
   let j = i - 1;
   while (j >= 0 && arr[j] > current) {
     arr[j + 1] = arr[j];
     j--;
   }
   arr[j + 1] = current;
 }
 return arr;
}`,
           python: `def insertion_sort(arr):
   for i in range(1, len(arr)):
       key = arr[i]
       j = i - 1
       while j >= 0 and key < arr[j]:
           arr[j + 1] = arr[j]
           j -= 1
       arr[j + 1] = key
   return arr`,
           java: `public class Sorter {
   public static void insertionSort(int[] arr) {
       for (int i = 1; i < arr.length; ++i) {
           int key = arr[i];
           int j = i - 1;
           while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j = j - 1;
           }
           arr[j + 1] = key;
       }
   }
}`
         }}/>

         <h4>3. Merge Sort (Sắp xếp trộn)</h4>
         <p>Dựa trên chiến lược "Chia để trị", chia đôi mảng và sắp xếp các mảng con rồi trộn lại. Độ phức tạp: O(n log n).</p>
          <CodeBlock snippets={{
           cpp: `#include <vector>

void merge(std::vector<int>& arr, int l, int m, int r) {
   // Implementation details...
}

void mergeSort(std::vector<int>& arr, int l, int r) {
   if (l < r) {
       int m = l + (r - l) / 2;
       mergeSort(arr, l, m);
       mergeSort(arr, m + 1, r);
       // merge(arr, l, m, r); // Function to merge sorted halves
   }
}
// Note: Full implementation is longer.`,
           javascript: `function mergeSort(arr) {
 if (arr.length <= 1) return arr;
 
 const mid = Math.floor(arr.length / 2);
 const left = mergeSort(arr.slice(0, mid));
 const right = mergeSort(arr.slice(mid));

 return merge(left, right);
}

function merge(left, right) {
 let result = [], i = 0, j = 0;
 while (i < left.length && j < right.length) {
   result.push(left[i] < right[j] ? left[i++] : right[j++]);
 }
 return result.concat(left.slice(i)).concat(right.slice(j));
}`,
           python: `def merge_sort(arr):
   if len(arr) > 1:
       mid = len(arr) // 2
       L = arr[:mid]
       R = arr[mid:]
       merge_sort(L)
       merge_sort(R)
       # Merging logic...
       i = j = k = 0
       while i < len(L) and j < len(R):
           if L[i] < R[j]:
               arr[k] = L[i]
               i += 1
           else:
               arr[k] = R[j]
               j += 1
           k += 1
       # Checking if any element was left
       while i < len(L):
           arr[k] = L[i]
           i += 1
           k += 1
       while j < len(R):
           arr[k] = R[j]
           j += 1
           k += 1
   return arr`,
           java: `public class Sorter {
   void merge(int arr[], int l, int m, int r) { /* ... */ }
   
   void mergeSort(int arr[], int l, int r) {
       if (l < r) {
           int m = (l + r) / 2;
           mergeSort(arr, l, m);
           mergeSort(arr, m + 1, r);
           merge(arr, l, m, r);
       }
   }
}`
         }}/>
         
         <h4>4. Quick Sort (Sắp xếp nhanh)</h4>
         <p>Cũng là "Chia để trị", chọn một phần tử làm "chốt" (pivot) và phân chia mảng xung quanh chốt. Độ phức tạp: O(n log n) trung bình.</p>
          <CodeBlock snippets={{
           cpp: `#include <vector>
#include <algorithm>

int partition(std::vector<int>& arr, int low, int high) {
   int pivot = arr[high];
   int i = (low - 1);
   for (int j = low; j <= high - 1; j++) {
       if (arr[j] < pivot) {
           i++;
           std::swap(arr[i], arr[j]);
       }
   }
   std::swap(arr[i + 1], arr[high]);
   return (i + 1);
}

void quickSort(std::vector<int>& arr, int low, int high) {
   if (low < high) {
       int pi = partition(arr, low, high);
       quickSort(arr, low, pi - 1);
       quickSort(arr, pi + 1, high);
   }
}`,
           javascript: `function quickSort(arr) {
 if (arr.length <= 1) return arr;
 const pivot = arr[arr.length - 1];
 const left = [];
 const right = [];
 for (let i = 0; i < arr.length - 1; i++) {
   arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
 }
 return [...quickSort(left), pivot, ...quickSort(right)];
}`,
           python: `def quick_sort(arr):
   if len(arr) <= 1:
       return arr
   pivot = arr[len(arr) // 2]
   left = [x for x in arr if x < pivot]
   middle = [x for x in arr if x == pivot]
   right = [x for x in arr if x > pivot]
   return quick_sort(left) + middle + quick_sort(right)`,
           java: `public class Sorter {
   int partition(int arr[], int low, int high) { /* ... */ }

   void quickSort(int arr[], int low, int high) {
       if (low < high) {
           int pi = partition(arr, low, high);
           quickSort(arr, low, pi - 1);
           quickSort(arr, pi + 1, high);
       }
   }
}`
         }}/>
       </>
     )
   },
   {
     title: 'Thuật Toán Tìm Kiếm',
     description: 'Khám phá các phương pháp tìm kiếm phần tử trong tập dữ liệu, bao gồm tìm kiếm tuyến tính và nhị phân.',
     icon: '🔍',
     content: (
       <>
         <p>Thuật toán tìm kiếm được sử dụng để truy xuất một phần tử cụ thể từ bất kỳ cấu trúc dữ liệu nào.</p>
         
         <h4>1. Linear Search (Tìm kiếm tuyến tính)</h4>
         <p>Duyệt qua từng phần tử cho đến khi tìm thấy. Độ phức tạp: O(n).</p>
         <CodeBlock snippets={{
           cpp: `#include <vector>
int linearSearch(const std::vector<int>& arr, int target) {
   for (int i = 0; i < arr.size(); ++i) {
       if (arr[i] == target) {
           return i; // Return index
       }
   }
   return -1; // Not found
}`,
           javascript: `function linearSearch(arr, target) {
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === target) {
     return i;
   }
 }
 return -1;
}`,
           python: `def linear_search(arr, target):
   for i in range(len(arr)):
       if arr[i] == target:
           return i
   return -1`,
           java: `public class Searcher {
   public static int linearSearch(int[] arr, int target) {
       for (int i = 0; i < arr.length; i++) {
           if (arr[i] == target) {
               return i;
           }
       }
       return -1;
   }
}`
         }} />

         <h4>2. Binary Search (Tìm kiếm nhị phân)</h4>
         <p>Yêu cầu mảng phải được sắp xếp. Chia đôi khoảng tìm kiếm ở mỗi bước. Độ phức tạp: O(log n).</p>
         <CodeBlock snippets={{
           cpp: `#include <vector>
int binarySearch(const std::vector<int>& arr, int target) {
   int left = 0, right = arr.size() - 1;
   while (left <= right) {
       int mid = left + (right - left) / 2;
       if (arr[mid] == target) return mid;
       if (arr[mid] < target) left = mid + 1;
       else right = mid - 1;
   }
   return -1;
}`,
           javascript: `function binarySearch(sortedArr, target) {
 let left = 0;
 let right = sortedArr.length - 1;
 while (left <= right) {
   let mid = Math.floor((left + right) / 2);
   if (sortedArr[mid] === target) return mid;
   else if (sortedArr[mid] < target) left = mid + 1;
   else right = mid - 1;
 }
 return -1;
}`,
           python: `def binary_search(arr, target):
   left, right = 0, len(arr) - 1
   while left <= right:
       mid = (left + right) // 2
       if arr[mid] == target:
           return mid
       elif arr[mid] < target:
           left = mid + 1
       else:
           right = mid - 1
   return -1`,
           java: `public class Searcher {
   public static int binarySearch(int[] arr, int target) {
       int left = 0, right = arr.length - 1;
       while (left <= right) {
           int mid = left + (right - left) / 2;
           if (arr[mid] == target) return mid;
           if (arr[mid] < target) left = mid + 1;
           else right = mid - 1;
       }
       return -1;
   }
}`
         }}/>
       </>
     )
   },
   {
     title: 'Cấu Trúc Dữ Liệu',
     description: 'Nền tảng của lập trình hiệu quả: Mảng, Danh sách liên kết, Cây, và Đồ thị.',
     icon: '🔗',
     content: (
        <>
         <p>Cấu trúc dữ liệu là cách tổ chức, quản lý và lưu trữ dữ liệu để có thể truy cập và sửa đổi một cách hiệu quả.</p>
         
         <h4>1. Stack (Ngăn xếp - LIFO)</h4>
         <p>Hoạt động theo nguyên tắc "Vào sau, ra trước" (Last-In, First-Out).</p>
         <CodeBlock snippets={{
           cpp: `#include <stack>
#include <iostream>

int main() {
   std::stack<int> s;
   s.push(1);
   s.push(2);
   s.pop(); // Removes 2
   // std::cout << s.top(); // Accesses 1
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
stack.pop() # Returns 2
# Top element is stack[-1]`,
           java: `import java.util.Stack;

Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.pop(); // returns 2
// stack.peek(); // returns 1`
         }}/>
         
         <h4>2. Queue (Hàng đợi - FIFO)</h4>
         <p>Hoạt động theo nguyên tắc "Vào trước, ra trước" (First-In, First-Out).</p>
         <CodeBlock snippets={{
           cpp: `#include <queue>
#include <iostream>

int main() {
   std::queue<int> q;
   q.push(1); // Add 1
   q.push(2); // Add 2
   q.pop();   // Removes 1
   // std::cout << q.front(); // Accesses 2
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
queue.popleft() # Returns 1`,
           java: `import java.util.LinkedList;
import java.util.Queue;

Queue<Integer> queue = new LinkedList<>();
queue.add(1);
queue.add(2);
queue.remove(); // returns 1
// queue.peek(); // returns 2`
         }}/>
       </>
     )
   },
   {
     title: 'Đệ Quy',
     description: 'Nắm vững kỹ thuật giải quyết vấn đề bằng cách chia nhỏ bài toán thành các bài toán con tương tự.',
     icon: '🔄',
     content: (
       <>
         <p>Đệ quy là một kỹ thuật lập trình trong đó một hàm tự gọi lại chính nó để giải quyết một vấn đề.</p>
         <h4>Ví dụ: Tính giai thừa</h4>
         <CodeBlock snippets={{
           cpp: `long long factorial(int n) {
   // Base case
   if (n == 0) {
       return 1;
   }
   // Recursive case
   return n * factorial(n - 1);
}`,
           javascript: `function factorial(n) {
 if (n === 0) {
   return 1; // Base case
 }
 return n * factorial(n - 1); // Recursive case
}`,
           python: `def factorial(n):
   if n == 0:
       return 1  # Base case
   else:
       return n * factorial(n - 1) # Recursive case`,
           java: `public class Recursion {
   public static long factorial(int n) {
       if (n == 0) {
           return 1; // Base case
       } else {
           return n * factorial(n - 1); // Recursive case
       }
   }
}`
         }} />
       </>
     )
   },
   {
     title: 'Con Trỏ & Quản Lý Bộ Nhớ',
     description: 'Hiểu cách con trỏ hoạt động, tham chiếu bộ nhớ và ứng dụng trong các cấu trúc dữ liệu.',
     icon: '👉',
     content: (
       <>
         <p>Con trỏ là một biến lưu trữ địa chỉ bộ nhớ của một biến khác. Trong các ngôn ngữ như Java, Python, JavaScript, khái niệm này được trừu tượng hóa thành "tham chiếu".</p>
         <h4>Ví dụ: Con trỏ (C++) vs Tham chiếu (JS)</h4>
         <CodeBlock snippets={{
           cpp: `#include <iostream>

int main() {
   int var = 20;
   int* ptr = &var; // ptr stores the address of var
   
   // std::cout << "Value of var: " << *ptr;
   *ptr = 30; // Change value at address
   // std::cout << "New value of var: " << var;
   return 0;
}`,
           javascript: `let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references the same object

obj2.name = "Bob";

console.log(obj1.name); // Output: "Bob"`,
           python: `list1 = [1, 2, 3]
list2 = list1 # Both variables reference the same list

list2.append(4)

print(list1) # Output: [1, 2, 3, 4]`,
           java: `class Main {
   public static void main(String[] args) {
       StringBuilder str1 = new StringBuilder("Hello");
       StringBuilder str2 = str1; // Both reference the same object
       
       str2.append(" World");
       
       System.out.println(str1); // Output: Hello World
   }
}`
         }}/>
       </>
     )
   },
   {
     title: 'Quy Hoạch Động',
     description: 'Giải quyết bài toán phức tạp bằng cách chia thành các bài toán con gối nhau và lưu kết quả.',
     icon: '🧩',
     content: (
       <>
         <p>Quy hoạch động là một kỹ thuật tối ưu hóa bằng cách giải quyết các bài toán con và lưu trữ kết quả của chúng để tránh tính toán lại.</p>
         <h4>Ví dụ: Tính số Fibonacci với Memoization</h4>
         <CodeBlock snippets={{
           cpp: `#include <iostream>
#include <map>

std::map<int, long long> memo;

long long fibonacci(int n) {
   if (memo.count(n)) return memo[n];
   if (n <= 1) return n;

   memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
   return memo[n];
}`,
           javascript: `const memo = {};
function fibonacci(n) {
 if (n in memo) return memo[n];
 if (n <= 1) return n;

 memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
 return memo[n];
}`,
           python: `memo = {}
def fibonacci(n):
   if n in memo:
       return memo[n]
   if n <= 1:
       return n
   
   memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
   return memo[n]`,
           java: `import java.util.HashMap;
import java.util.Map;

public class DP {
   private static Map<Integer, Long> memo = new HashMap<>();

   public static long fibonacci(int n) {
       if (memo.containsKey(n)) return memo.get(n);
       if (n <= 1) return n;

       long result = fibonacci(n - 1) + fibonacci(n - 2);
       memo.put(n, result);
       return result;
   }
}`
         }}/>
       </>
     )
   },
   {
     title: 'Cấu Trúc Dữ Liệu Cây',
     description: 'Tìm hiểu về các cấu trúc phân cấp như Cây nhị phân và các phép duyệt cây cơ bản.',
     icon: '🌳',
     content: (
       <>
         <p>Cây là một cấu trúc dữ liệu phân cấp. Cây tìm kiếm nhị phân (BST) là một dạng đặc biệt nơi giá trị các nút con bên trái luôn nhỏ hơn nút cha, và các nút con bên phải luôn lớn hơn.</p>
         <h4>Ví dụ: Triển khai Cây Tìm Kiếm Nhị Phân</h4>
         <CodeBlock snippets={{
           cpp: `struct Node {
   int key;
   Node *left, *right;
};
// Function to create a new BST node
Node* newNode(int item) {
   Node* temp = new Node;
   temp->key = item;
   temp->left = temp->right = nullptr;
   return temp;
}
// Function to insert a new node
Node* insert(Node* node, int key) {
   if (node == nullptr) return newNode(key);
   if (key < node->key)
       node->left = insert(node->left, key);
   else if (key > node->key)
       node->right = insert(node->right, key);
   return node;
}`,
           javascript: `class Node {
 constructor(value) { this.value = value; this.left = null; this.right = null; }
}
class BinarySearchTree {
 constructor() { this.root = null; }
 insert(value) { /* ... implementation ... */ }
}`,
           python: `class Node:
   def __init__(self, key):
       self.left = None
       self.right = None
       self.val = key

def insert(root, key):
   if root is None:
       return Node(key)
   else:
       if root.val < key:
           root.right = insert(root.right, key)
       else:
           root.left = insert(root.left, key)
   return root`,
           java: `class Node {
   int key;
   Node left, right;
   public Node(int item) { key = item; left = right = null; }
}
class BinarySearchTree {
   Node root;
   Node insertRec(Node root, int key) {
       if (root == null) {
           root = new Node(key);
           return root;
       }
       if (key < root.key)
           root.left = insertRec(root.left, key);
       else if (key > root.key)
           root.right = insertRec(root.right, key);
       return root;
   }
}`
         }}/>
       </>
     )
   },
   {
     title: 'Duyệt Đồ Thị (BFS & DFS)',
     description: 'Các phương pháp duyệt qua tất cả các đỉnh của đồ thị. BFS tìm đường đi ngắn nhất trên đồ thị không trọng số.',
     icon: '🕸️',
     content: (
       <>
         <p>BFS (Breadth-First Search) và DFS (Depth-First Search) là hai thuật toán duyệt đồ thị cơ bản.</p>
         <h4>1. BFS - Tìm kiếm theo chiều rộng</h4>
         <p>Sử dụng một hàng đợi (Queue) để khám phá các đỉnh kề trước khi đi sâu hơn.</p>
         <CodeBlock snippets={{
           cpp: `// Assuming graph is represented by std::map<int, std::vector<int>>
void bfs(int startNode, std::map<int, std::vector<int>>& graph) {
   std::set<int> visited;
   std::queue<int> q;

   visited.insert(startNode);
   q.push(startNode);

   while(!q.empty()) {
       int node = q.front();
       q.pop();
       // Process node
       for (int neighbor : graph[node]) {
           if (visited.find(neighbor) == visited.end()) {
               visited.insert(neighbor);
               q.push(neighbor);
           }
       }
   }
}`,
           javascript: `function bfs(graph, startNode) {
 const visited = new Set();
 const queue = [startNode];
 visited.add(startNode);
 while (queue.length > 0) {
   const currentNode = queue.shift();
   // Process currentNode
   for (const neighbor of graph[currentNode]) {
     if (!visited.has(neighbor)) {
       visited.add(neighbor);
       queue.push(neighbor);
     }
   }
 }
}`,
           python: `from collections import deque
def bfs(graph, start_node):
   visited = set()
   queue = deque([start_node])
   visited.add(start_node)
   while queue:
       node = queue.popleft()
       # Process node
       for neighbor in graph[node]:
           if neighbor not in visited:
               visited.add(neighbor)
               queue.append(neighbor)`,
           java: `// Assuming graph is Map<Integer, List<Integer>>
void bfs(int startNode, Map<Integer, List<Integer>> graph) {
   Set<Integer> visited = new HashSet<>();
   Queue<Integer> queue = new LinkedList<>();
   
   visited.add(startNode);
   queue.add(startNode);
   
   while (!queue.isEmpty()) {
       int node = queue.poll();
       // Process node
       for (int neighbor : graph.get(node)) {
           if (!visited.contains(neighbor)) {
               visited.add(neighbor);
               queue.add(neighbor);
           }
       }
   }
}`
         }}/>
         
         <h4>2. DFS - Tìm kiếm theo chiều sâu</h4>
         <p>Sử dụng đệ quy (hoặc một ngăn xếp - Stack) để đi sâu nhất có thể vào một nhánh trước khi quay lui.</p>
         <CodeBlock snippets={{
           cpp: `// Assuming graph representation
void dfs(int node, std::map<int, std::vector<int>>& graph, std::set<int>& visited) {
   visited.insert(node);
   // Process node
   for (int neighbor : graph[node]) {
       if (visited.find(neighbor) == visited.end()) {
           dfs(neighbor, graph, visited);
       }
   }
}`,
           javascript: `function dfs(graph, startNode, visited = new Set()) {
 // Process startNode
 visited.add(startNode);
 for (const neighbor of graph[startNode]) {
   if (!visited.has(neighbor)) {
     dfs(graph, neighbor, visited);
   }
 }
}`,
           python: `def dfs(graph, node, visited=None):
   if visited is None:
       visited = set()
   visited.add(node)
   # Process node
   for neighbor in graph[node]:
       if neighbor not in visited:
           dfs(graph, neighbor, visited)`,
           java: `// Assuming graph representation
void dfs(int node, Map<Integer, List<Integer>> graph, Set<Integer> visited) {
   visited.add(node);
   // Process node
   for (int neighbor : graph.get(node)) {
       if (!visited.contains(neighbor)) {
           dfs(neighbor, graph, visited);
       }
   }
}`
         }}/>
       </>
     )
   },
   {
     title: 'Thuật Toán Dijkstra',
     description: 'Tìm đường đi ngắn nhất từ một đỉnh nguồn đến tất cả các đỉnh khác trong đồ thị có trọng số không âm.',
     icon: '🗺️',
     content: (
       <>
         <p>Thuật toán Dijkstra là một thuật toán tham lam, ở mỗi bước, nó chọn đỉnh chưa được thăm có khoảng cách ngắn nhất từ đỉnh nguồn và cập nhật khoảng cách cho các đỉnh kề của nó.</p>
         <h4>Mô tả thuật toán (Pseudo-code)</h4>
         <CodeBlock snippets={{
           cpp: `// Using a priority queue for efficiency
void dijkstra(int src, int V, std::vector<std::pair<int, int>> adj[]) {
   std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
   std::vector<int> dist(V, INT_MAX);

   pq.push({0, src});
   dist[src] = 0;

   while (!pq.empty()) {
       int u = pq.top().second;
       pq.pop();

       for (auto& x : adj[u]) {
           int v = x.first;
           int weight = x.second;
           if (dist[v] > dist[u] + weight) {
               dist[v] = dist[u] + weight;
               pq.push({dist[v], v});
           }
       }
   }
   // 'dist' array now contains shortest paths from src
}`,
           javascript: `// A full implementation requires a Priority Queue library or custom implementation
function dijkstra(graph, startNode) {
 // 1. Initialize distances with Infinity, 0 for startNode
 // 2. Use a Priority Queue to store [distance, node]
 // 3. While PQ is not empty:
 //    a. Get node with smallest distance
 //    b. For each neighbor:
 //       - Calculate new distance
 //       - If new distance is shorter, update and add to PQ
 // 4. Return distances
}`,
           python: `import heapq

def dijkstra(graph, start):
   distances = {node: float('infinity') for node in graph}
   distances[start] = 0
   pq = [(0, start)]

   while pq:
       current_distance, current_node = heapq.heappop(pq)

       if current_distance > distances[current_node]:
           continue

       for neighbor, weight in graph[current_node].items():
           distance = current_distance + weight
           if distance < distances[neighbor]:
               distances[neighbor] = distance
               heapq.heappush(pq, (distance, neighbor))
   return distances`,
           java: `// A full implementation requires a PriorityQueue
// and a graph representation (e.g., Adjacency List)
// Pseudo-code:
// 1. Create a dist[] array, initialized to infinity.
// 2. Create a PriorityQueue of pairs (distance, vertex).
// 3. Add (0, source) to PQ. dist[source] = 0.
// 4. Loop while PQ is not empty:
//    a. Extract vertex 'u' with minimum distance.
//    b. For each adjacent vertex 'v' of 'u':
//       - If dist[u] + weight < dist[v], update dist[v] and add to PQ.`
         }}/>
       </>
     )
   },
 ];
