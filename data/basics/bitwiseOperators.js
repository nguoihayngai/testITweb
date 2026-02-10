
export const bitwiseOperators = {
  title: 'Toán Tử Bitwise',
  description: 'Thao tác trực tiếp trên các bit của số nguyên để tối ưu hóa và giải quyết các bài toán cụ thể.',
  icon: '⚙️',
  content: [
    { type: 'paragraph', text: 'Toán tử bitwise (thao tác bit) hoạt động trên các số ở cấp độ bit nhị phân. Chúng cực kỳ nhanh và hữu ích trong lập trình thi đấu cho các tác vụ như kiểm tra tính chẵn lẻ, các phép toán tập hợp, và tối ưu hóa nhân/chia cho 2.' },
    { type: 'paragraph', text: 'Ví dụ với `a = 5` (0101) và `b = 3` (0011):' },
    { type: 'heading', level: 4, text: 'AND (&), OR (|), XOR (^)' },
    { type: 'paragraph', text: '* `a & b`: (0101 & 0011) = 0001 (1). Bit kết quả là 1 nếu cả hai bit tương ứng là 1.\n* `a | b`: (0101 | 0011) = 0111 (7). Bit kết quả là 1 nếu ít nhất một trong hai bit tương ứng là 1.\n* `a ^ b`: (0101 ^ 0011) = 0110 (6). Bit kết quả là 1 nếu hai bit tương ứng khác nhau.' },
    { type: 'heading', level: 4, text: 'Dịch Trái (<<) và Dịch Phải (>>)' },
    { type: 'paragraph', text: '* **Dịch trái `x << y`**: Tương đương với `x * 2^y`. Ví dụ: `5 << 1` (0101 << 1) = 1010 (10).\n* **Dịch phải `x >> y`**: Tương đương với `x / 2^y` (chia số nguyên). Ví dụ: `5 >> 1` (0101 >> 1) = 0010 (2).' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a = 5;  // 0101
    int b = 3;  // 0011
    
    int and_result = a & b; // 1  (0001)
    int or_result = a | b;  // 7  (0111)
    int xor_result = a ^ b; // 6  (0110)
    int not_a = ~a;         // -6 (Biểu diễn bù 2)
    int left_shift = a << 1;// 10 (1010)
    int right_shift = a >> 1;// 2  (0010)
    return 0;
}`,
        javascript: `let a = 5;  // 0101
let b = 3;  // 0011

let and_result = a & b; // 1
let or_result = a | b;  // 7
let xor_result = a ^ b; // 6
let not_a = ~a;         // -6
let left_shift = a << 1;// 10
let right_shift = a >> 1;// 2`,
        python: `a = 5  # 0101
b = 3  # 0011

and_result = a & b  # 1
or_result = a | b   # 7
xor_result = a ^ b  # 6
not_a = ~a          # -6
left_shift = a << 1 # 10
right_shift = a >> 1# 2`,
        java: `int a = 5;  // 0101
int b = 3;  // 0011

int andResult = a & b; // 1
int orResult = a | b;  // 7
int xorResult = a ^ b; // 6
int notA = ~a;         // -6
int leftShift = a << 1;// 10
int rightShift = a >> 1;// 2`
    }},
  ]
};
