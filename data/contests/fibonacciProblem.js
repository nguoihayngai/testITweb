
export const fibonacciProblem = {
  title: 'Tính Số Fibonacci',
  description: 'Một bài toán kinh điển để minh họa các kỹ thuật từ đệ quy đơn giản đến tối ưu hóa quy hoạch động.',
  icon: '🌀',
  content: [
    { type: 'paragraph', text: 'Bài toán yêu cầu tính số Fibonacci thứ n. Dãy Fibonacci được định nghĩa: F(0) = 0, F(1) = 1, và F(n) = F(n-1) + F(n-2) với n > 1.' },
    { type: 'heading', level: 4, text: 'Phân Tích' },
    { type: 'paragraph', text: 'Cách tiếp cận tự nhiên là dùng đệ quy, nhưng sẽ dẫn đến việc tính toán lại nhiều lần các giá trị đã biết. Quy hoạch động (sử dụng memoization hoặc tabulation) là giải pháp tối ưu hơn để tránh lãng phí này.' },
    { type: 'heading', level: 4, text: 'Giải Pháp Quy Hoạch Động (Tabulation)' },
    { type: 'paragraph', text: 'Ta tạo một mảng `dp` kích thước n+1. Khởi tạo `dp[0]=0` và `dp[1]=1`. Sau đó, ta điền vào mảng bằng vòng lặp: `dp[i] = dp[i-1] + dp[i-2]`. Cách này có độ phức tạp O(n) về thời gian và O(n) về không gian.' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

long long fib(int n) {
    if (n <= 1) return n;
    vector<long long> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; ++i) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}`
    }},
    { type: 'heading', level: 4, text: 'Tối ưu Không Gian' },
    { type: 'paragraph', text: 'Vì `dp[i]` chỉ phụ thuộc vào `dp[i-1]` và `dp[i-2]`, ta không cần lưu trữ toàn bộ mảng. Ta chỉ cần 2 biến để lưu 2 giá trị trước đó, giảm không gian xuống O(1).' },
     { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

long long fib_optimized(int n) {
    if (n <= 1) return n;
    long long a = 0, b = 1, c;
    for (int i = 2; i <= n; ++i) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}`
    }},
  ]
};
