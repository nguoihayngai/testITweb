
export const maxSubarraySum = {
  title: 'Tổng Dãy Con Lớn Nhất',
  description: 'Tìm dãy con liền kề trong một mảng có tổng lớn nhất. Giải quyết bằng thuật toán Kadane.',
  icon: '➕',
  content: [
    { type: 'paragraph', text: 'Cho một mảng số nguyên, tìm một dãy con liền kề (chứa ít nhất một phần tử) có tổng lớn nhất và trả về tổng đó.' },
    { type: 'paragraph', text: 'Ví dụ: Với mảng `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` dãy con `[4, -1, 2, 1]` có tổng lớn nhất là 6.' },
    { type: 'heading', level: 4, text: 'Thuật Toán Kadane' },
    { type: 'paragraph', text: 'Đây là một thuật toán hiệu quả với độ phức tạp O(n). Ta duyệt qua mảng và duy trì hai biến:\n* `current_max`: tổng của dãy con lớn nhất kết thúc tại vị trí hiện tại.\n* `global_max`: tổng lớn nhất tìm được cho đến nay.' },
    { type: 'paragraph', text: 'Tại mỗi vị trí `i`, `current_max` được cập nhật bằng `max(nums[i], current_max + nums[i])`. Điều này có nghĩa là ta quyết định xem nên bắt đầu một dãy con mới từ `nums[i]` hay tiếp tục mở rộng dãy con cũ. Sau đó, `global_max` được cập nhật nếu `current_max` lớn hơn.' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(const vector<int>& nums) {
    int global_max = nums[0];
    int current_max = nums[0];
    for (size_t i = 1; i < nums.size(); i++) {
        current_max = max(nums[i], current_max + nums[i]);
        if (current_max > global_max) {
            global_max = current_max;
        }
    }
    return global_max;
}`
    }},
  ]
};
