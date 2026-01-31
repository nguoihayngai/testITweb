
export const specialTopics = {
  title: 'Các Chủ Đề Đặc Biệt',
  description: 'Phi hàm Euler, số Fibonacci tính nhanh, và công thức Legendre.',
  icon: '📜',
  content: [
    { type: 'heading', level: 4, text: '1. Phi Hàm Euler (φ)' },
    { type: 'paragraph', text: 'Phi hàm Euler φ(n) đếm số lượng các số nguyên dương nhỏ hơn hoặc bằng n và nguyên tố cùng nhau với n. Công thức: `φ(n) = n * product_{p|n} (1 - 1/p)` với p là các ước nguyên tố phân biệt của n.' },
    { type: 'code', snippets: {
        cpp: `int phi(int n) {
    int result = n;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            while (n % i == 0)
                n /= i;
            result -= result / i;
        }
    }
    if (n > 1)
        result -= result / n;
    return result;
}`
    }},
    { type: 'heading', level: 4, text: '2. Số Fibonacci (Tính nhanh)' },
    { type: 'paragraph', text: 'Để tính số Fibonacci thứ n với độ phức tạp O(log n), ta sử dụng phương pháp nhân ma trận. Dựa trên mối quan hệ ma trận: `[[F(n+1), F(n)], [F(n), F(n-1)]] = [[1, 1], [1, 0]]ⁿ`.' },
    { type: 'code', snippets: {
        cpp: `// Cần cài đặt phép nhân ma trận 2x2 và lũy thừa ma trận
// F(n) có thể được tìm thấy bằng cách tính [[1,1],[1,0]]^(n-1)
// và lấy phần tử [0][0].
// Đây là một ví dụ minh họa, code đầy đủ sẽ dài hơn.
void multiply(long long F[2][2], long long M[2][2]);
void power(long long F[2][2], int n);

long long fib(int n) {
  long long F[2][2] = {{1,1},{1,0}};
  if (n == 0) return 0;
  power(F, n-1);
  return F[0][0];
}`
    }},
    { type: 'heading', level: 4, text: '3. Công Thức Legendre' },
    { type: 'paragraph', text: 'Công thức Legendre dùng để tìm số mũ của một số nguyên tố p trong phân tích thừa số nguyên tố của n! (n giai thừa). Số mũ được tính bằng: `sum(floor(n / p^i))` với `i` chạy từ 1 đến vô cùng.' },
    { type: 'code', snippets: {
        cpp: `int legendre(int n, int p) {
    int count = 0;
    while (n > 0) {
        n /= p;
        count += n;
    }
    return count;
}`
    }},
  ]
};