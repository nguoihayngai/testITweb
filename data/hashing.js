
export const hashing = {
  title: 'Hash Map (Bảng Băm)',
  description: 'Lưu trữ và truy xuất dữ liệu hiệu quả với cặp khóa-giá trị, đạt tốc độ O(1) trung bình.',
  icon: '🔑',
  content: [
    { type: 'paragraph', text: 'Hash Map (còn gọi là Bảng băm, Dictionary, hoặc Map) là một cấu trúc dữ liệu cực kỳ mạnh mẽ cho phép lưu trữ các cặp (khóa, giá trị). Nó sử dụng một hàm băm để tính toán một chỉ mục (index) vào một mảng, từ đó có thể tìm kiếm, chèn, và xóa dữ liệu với độ phức tạp trung bình là O(1).' },
    { type: 'heading', level: 4, text: 'Ứng dụng 1: Đếm Tần Suất' },
    { type: 'paragraph', text: 'Một trong những ứng dụng phổ biến nhất của hash map là đếm số lần xuất hiện của các phần tử trong một tập hợp.' },
    { type: 'code', snippets: {
        cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 2, 3, 1, 3, 3};
    unordered_map<int, int> freqMap;
    for (int num : nums) {
        freqMap[num]++;
    }
    // freqMap bây giờ là {1: 2, 2: 2, 3: 3}
    // cout << "So lan xuat hien cua so 3: " << freqMap[3]; // In ra 3
    return 0;
}`,
        javascript: `const nums = [1, 2, 2, 3, 1, 3, 3];
const freqMap = new Map();
for (const num of nums) {
  freqMap.set(num, (freqMap.get(num) || 0) + 1);
}
// freqMap bây giờ là Map { 1 => 2, 2 => 2, 3 => 3 }
// console.log("Số lần xuất hiện của số 3:", freqMap.get(3)); // 3`,
        python: `nums = [1, 2, 2, 3, 1, 3, 3]
freq_map = {}
for num in nums:
    freq_map[num] = freq_map.get(num, 0) + 1
# freq_map bây giờ là {1: 2, 2: 2, 3: 3}
# print(f"Số lần xuất hiện của số 3: {freq_map[3]}") # 3`,
        java: `import java.util.HashMap;
import java.util.Map;

int[] nums = {1, 2, 2, 3, 1, 3, 3};
Map<Integer, Integer> freqMap = new HashMap<>();
for (int num : nums) {
    freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
}
// freqMap bây giờ là {1=2, 2=2, 3=3}
// System.out.println("Số lần xuất hiện của số 3: " + freqMap.get(3)); // 3`
    }},
    { type: 'heading', level: 4, text: 'Ứng dụng 2: Bài toán Two Sum' },
    { type: 'paragraph', text: 'Cho một mảng các số nguyên và một số mục tiêu, tìm chỉ số của hai số trong mảng có tổng bằng số mục tiêu. Hash map giúp giải bài toán này trong thời gian O(n).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (map.count(complement)) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    return {}; // Không tìm thấy
}`,
        javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return []; // Không tìm thấy
}`,
        python: `def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return [] # Không tìm thấy`,
        java: `import java.util.HashMap;
import java.util.Map;

public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("Không tìm thấy giải pháp two sum");
}`
    }},
  ]
};
