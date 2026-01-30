
export const searching = {
  title: 'Thuật Toán Tìm Kiếm',
  description: 'Khám phá các phương pháp tìm kiếm phần tử trong tập dữ liệu, bao gồm tìm kiếm tuyến tính và nhị phân.',
  icon: '🔍',
  content: [
    { type: 'paragraph', text: 'Thuật toán tìm kiếm được sử dụng để truy xuất một phần tử cụ thể từ bất kỳ cấu trúc dữ liệu nào.' },
    { type: 'heading', level: 4, text: '1. Linear Search (Tìm kiếm tuyến tính)' },
    { type: 'paragraph', text: 'Duyệt qua từng phần tử cho đến khi tìm thấy. Độ phức tạp: O(n).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
using namespace std;

int linearSearch(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == target) {
            return i; // Trả về chỉ số
        }
    }
    return -1; // Không tìm thấy
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
    }},
    { type: 'heading', level: 4, text: '2. Binary Search (Tìm kiếm nhị phân)' },
    { type: 'paragraph', text: 'Yêu cầu mảng phải được sắp xếp. Chia đôi khoảng tìm kiếm ở mỗi bước. Độ phức tạp: O(log n).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
using namespace std;

int binarySearch(const vector<int>& arr, int target) {
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
    }},
  ]
};
