
export const sorting = {
  title: 'Thuật Toán Sắp Xếp',
  description: 'Tìm hiểu cách sắp xếp dữ liệu hiệu quả với các thuật toán như Bubble Sort, Merge Sort, Quick Sort.',
  icon: '📊',
  content: [
    { type: 'paragraph', text: 'Thuật toán sắp xếp là một trong những khái niệm nền tảng nhất trong khoa học máy tính, dùng để sắp đặt các phần tử của một danh sách theo một thứ tự nhất định (tăng dần, giảm dần).' },
    { type: 'heading', level: 4, text: '1. Bubble Sort (Sắp xếp nổi bọt)' },
    { type: 'paragraph', text: 'Duyệt qua danh sách nhiều lần, so sánh và đổi chỗ các cặp phần tử liền kề nếu chúng sai thứ tự. Độ phức tạp: O(n²).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <utility> // for std::swap
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
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
    }},
    { type: 'heading', level: 4, text: '2. Insertion Sort (Sắp xếp chèn)' },
    { type: 'paragraph', text: 'Lấy từng phần tử và chèn nó vào đúng vị trí trong mảng con đã được sắp xếp. Độ phức tạp: O(n²).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
using namespace std;

void insertionSort(vector<int>& arr) {
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
    }},
    { type: 'heading', level: 4, text: '3. Merge Sort (Sắp xếp trộn)' },
    { type: 'paragraph', text: 'Dựa trên chiến lược "Chia để trị", chia đôi mảng và sắp xếp các mảng con rồi trộn lại. Độ phức tạp: O(n log n).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
using namespace std;

void merge(vector<int>& arr, int l, int m, int r) {
    // Implementation details...
}

void mergeSort(vector<int>& arr, int l, int r) {
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
    }},
    { type: 'heading', level: 4, text: '4. Quick Sort (Sắp xếp nhanh)' },
    { type: 'paragraph', text: 'Cũng là "Chia để trị", chọn một phần tử làm "chốt" (pivot) và phân chia mảng xung quanh chốt. Độ phức tạp: O(n log n) trung bình.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <algorithm>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(vector<int>& arr, int low, int high) {
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
    }},
  ]
};