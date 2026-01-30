
export const dynamicProgramming = {
  title: 'Quy Hoạch Động',
  description: 'Giải quyết bài toán phức tạp bằng cách chia thành các bài toán con gối nhau và lưu kết quả.',
  icon: '🧩',
  content: [
    { type: 'paragraph', text: 'Quy hoạch động là một kỹ thuật tối ưu hóa bằng cách giải quyết các bài toán con và lưu trữ kết quả của chúng để tránh tính toán lại.' },
    { type: 'heading', level: 4, text: 'Ví dụ 1: Dãy số Fibonacci (Memoization)' },
    { type: 'code', snippets: {
        cpp: `#include <iostream>
#include <map>
using namespace std;

map<int, long long> memo;

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
    }},
    { type: 'heading', level: 4, text: 'Ví dụ 2: Bài Toán Đổi Tiền (Tối Ưu)' },
    { type: 'paragraph', text: 'Khác với phương pháp tham lam (luôn chọn đồng xu lớn nhất), quy hoạch động đảm bảo tìm ra số lượng đồng xu ít nhất cho mọi hệ thống mệnh giá. Ta sẽ xây dựng một mảng `dp` trong đó `dp[i]` là số đồng xu nhỏ nhất để tạo thành tổng `i`. Công thức là `dp[i] = min(dp[i], dp[i - coin] + 1)`.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <algorithm>
using namespace std;

int coinChange(const vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (i >= coin) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`,
        javascript: `function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}`,
        python: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
        java: `import java.util.Arrays;

public class DP {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (i >= coin) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}`
    }},
  ]
};
