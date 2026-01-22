
export const dynamicProgramming = {
  title: 'Quy Hoạch Động',
  description: 'Giải quyết bài toán phức tạp bằng cách chia thành các bài toán con gối nhau và lưu kết quả.',
  icon: '🧩',
  content: [
    { type: 'paragraph', text: 'Quy hoạch động là một kỹ thuật tối ưu hóa bằng cách giải quyết các bài toán con và lưu trữ kết quả của chúng để tránh tính toán lại.' },
    { type: 'heading', level: 4, text: 'Ví dụ: Tính số Fibonacci với Memoization' },
    { type: 'code', snippets: {
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
    }},
  ]
};
