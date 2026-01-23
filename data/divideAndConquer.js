
export const divideAndConquer = {
  title: 'Chia Để Trị',
  description: 'Phá vỡ một bài toán thành các bài toán con, giải quyết chúng và kết hợp kết quả.',
  icon: '✂️',
  content: [
    { type: 'paragraph', text: 'Chia để trị là một mô hình thiết kế thuật toán mạnh mẽ. Nó hoạt động theo ba bước:\n1. Chia (Divide): Chia bài toán lớn thành các bài toán con nhỏ hơn, dễ giải quyết hơn.\n2. Trị (Conquer): Giải quyết các bài toán con một cách đệ quy. Nếu bài toán con đủ nhỏ, giải quyết trực tiếp.\n3. Tổng hợp (Combine): Kết hợp lời giải của các bài toán con để tạo thành lời giải cho bài toán ban đầu.' },
    { type: 'heading', level: 4, text: 'Ví dụ điển hình' },
    { type: 'paragraph', text: 'Các thuật toán như Merge Sort, Quick Sort (xem trong mục Thuật Toán Sắp Xếp) và Binary Search (xem trong mục Thuật Toán Tìm Kiếm) là những ví dụ kinh điển của chiến lược chia để trị.' },
    { type: 'heading', level: 4, text: 'Ví dụ: Lũy thừa nhanh (Binary Exponentiation)' },
    { type: 'paragraph', text: 'Tính a^n hiệu quả hơn bằng cách chia bài toán thành các phép tính nhỏ hơn. Ví dụ, a⁸ = (a⁴)² = ((a²)²)². Điều này giảm độ phức tạp từ O(n) xuống O(log n).' },
    { type: 'code', snippets: {
        cpp: `long long power(long long base, long long exp) {
    long long res = 1;
    while (exp > 0) {
        if (exp % 2 == 1) res *= base;
        base *= base;
        exp /= 2;
    }
    return res;
}`,
        javascript: `function power(base, exp) {
  let res = 1;
  while (exp > 0) {
    if (exp % 2 === 1) res *= base;
    base *= base;
    exp = Math.floor(exp / 2);
  }
  return res;
}`,
        python: `def power(base, exp):
    res = 1
    while exp > 0:
        if exp % 2 == 1:
            res *= base
        base *= base
        exp //= 2
    return res`,
        java: `public class DNC {
    public static long power(long base, long exp) {
        long res = 1;
        while (exp > 0) {
            if (exp % 2 == 1) res *= base;
            base *= base;
            exp /= 2;
        }
        return res;
    }
}`
    }},
  ]
};
