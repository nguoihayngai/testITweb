
export const lis = {
  title: 'Dãy Con Tăng Dài Nhất (LIS)',
  description: 'Tìm hiểu hai cách tiếp cận phổ biến để giải quyết bài toán LIS: O(n²) và O(n log n).',
  icon: '📈',
  content: [
    { type: 'paragraph', text: 'Bài toán Dãy Con Tăng Dài Nhất (Longest Increasing Subsequence - LIS) yêu cầu tìm chiều dài của dãy con dài nhất trong một dãy số cho trước, sao cho các phần tử trong dãy con đó được sắp xếp theo thứ tự tăng dần.' },
    { type: 'paragraph', text: 'Ví dụ: Với dãy [10, 22, 9, 33, 21, 50, 41, 60], LIS là [10, 22, 33, 50, 60] và có chiều dài là 5.' },
    
    { type: 'heading', level: 4, text: '1. Quy Hoạch Động - Độ phức tạp O(n²)' },
    { type: 'paragraph', text: 'Đây là cách tiếp cận đơn giản nhất. Gọi `dp[i]` là độ dài của dãy con tăng dài nhất kết thúc tại phần tử `a[i]`. Công thức truy hồi là: `dp[i] = 1 + max(dp[j])` với mọi `j < i` và `a[j] < a[i]`. Kết quả cuối cùng là giá trị lớn nhất trong mảng `dp`.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <algorithm>
using namespace std;

int lis_n2(const vector<int>& a) {
    int n = a.size();
    if (n == 0) return 0;

    vector<int> dp(n, 1);
    int maxLength = 1;

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (a[i] > a[j]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        maxLength = max(maxLength, dp[i]);
    }
    return maxLength;
}`
    }},
    
    { type: 'heading', level: 4, text: '2. Tối ưu với Tìm Kiếm Nhị Phân - Độ phức tạp O(n log n)' },
    { type: 'paragraph', text: 'Cách tiếp cận này hiệu quả hơn. Ta duy trì một mảng `tails`, trong đó `tails[i]` là phần tử cuối cùng nhỏ nhất của một dãy con tăng có độ dài `i+1`. Khi duyệt qua mảng, với mỗi phần tử `x`, ta tìm vị trí có thể chèn `x` vào `tails` để duy trì tính trật tự của nó bằng tìm kiếm nhị phân. Nếu `x` lớn hơn tất cả các phần tử trong `tails`, ta mở rộng `tails` ra.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <algorithm> // for lower_bound
using namespace std;

int lis_nlogn(const vector<int>& a) {
    if (a.empty()) return 0;
    
    vector<int> tails;
    tails.push_back(a[0]);

    for (size_t i = 1; i < a.size(); i++) {
        if (a[i] > tails.back()) {
            tails.push_back(a[i]);
        } else {
            // Tìm phần tử đầu tiên trong 'tails' không nhỏ hơn a[i]
            // và thay thế nó. Điều này tạo ra một dãy con tăng
            // kết thúc bằng một số nhỏ hơn, có tiềm năng dài hơn.
            *lower_bound(tails.begin(), tails.end(), a[i]) = a[i];
        }
    }
    
    return tails.size();
}`
    }},
  ]
};
