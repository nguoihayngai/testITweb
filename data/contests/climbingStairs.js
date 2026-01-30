
export const climbingStairs = {
  title: 'Leo Cầu Thang',
  description: 'Một bài toán nhập môn quy hoạch động, tìm số cách để leo lên đỉnh cầu thang.',
  icon: '🪜',
  content: [
    { type: 'paragraph', text: 'Bạn đang leo một cầu thang có n bậc. Mỗi lần bạn có thể leo 1 hoặc 2 bậc. Hỏi có bao nhiêu cách khác nhau để leo lên đến đỉnh?' },
    { type: 'heading', level: 4, text: 'Phân Tích' },
    { type: 'paragraph', text: 'Để đến bậc thứ `i`, bạn có thể đến từ bậc `i-1` (bước 1 bậc) hoặc từ bậc `i-2` (bước 2 bậc). Vì vậy, tổng số cách để đến bậc `i` là tổng số cách đến bậc `i-1` và bậc `i-2`. Đây chính là công thức của dãy Fibonacci.' },
    { type: 'paragraph', text: 'Gọi `dp[i]` là số cách để leo đến bậc thứ `i`. Ta có: `dp[i] = dp[i-1] + dp[i-2]`. Điều kiện cơ sở là `dp[1] = 1` (1 cách) và `dp[2] = 2` (2 cách: 1+1 hoặc 2).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
using namespace std;

int climbStairs(int n) {
    if (n <= 2) return n;
    vector<int> dp(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}`
    }},
     { type: 'paragraph', text: 'Tương tự bài Fibonacci, ta cũng có thể tối ưu không gian lưu trữ xuống O(1).' },
  ]
};
