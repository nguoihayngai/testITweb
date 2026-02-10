
export const arithmetic = {
  title: 'Cấp Số & Lũy Thừa',
  description: 'Tìm hiểu các khái niệm cơ bản về cấp số cộng và các phép toán lũy thừa.',
  icon: '📈',
  content: [
    { type: 'heading', level: 4, text: '1. Cấp số cộng' },
    { type: 'paragraph', text: 'Cấp số cộng là một dãy số trong đó hiệu số của hai số hạng liên tiếp là một hằng số. Hằng số này được gọi là công sai (d).\n* **Công thức số hạng tổng quát**: `uₙ = u₁ + (n-1)d`\n* **Công thức tổng n số hạng đầu**: `Sₙ = n/2 * (u₁ + uₙ) = n/2 * (2*u₁ + (n-1)d)`' },
    { type: 'heading', level: 4, text: '2. Lũy thừa' },
    { type: 'paragraph', text: 'Lũy thừa là một phép toán toán học, được viết dưới dạng aⁿ, bao gồm hai số: cơ số `a` và số mũ `n`. Phép toán này có nghĩa là nhân `a` với chính nó `n` lần.\nVí dụ: 2³ = 2 * 2 * 2 = 8.' },
    { type: 'heading', level: 4, text: 'Cách tính lũy thừa trong C++' },
    { type: 'paragraph', text: 'Cách đơn giản nhất là dùng vòng lặp. Tuy nhiên, với số mũ lớn, kỹ thuật "Lũy thừa nhanh" (xem trong mục Lũy thừa & Tổ hợp Modulo) sẽ hiệu quả hơn nhiều.' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

long long power(int base, int exp) {
    long long res = 1;
    for (int i = 0; i < exp; ++i) {
        res *= base;
    }
    return res;
}

int main() {
    // std::cout << power(2, 10); // Kết quả: 1024
    return 0;
}`
    }},
  ]
};
