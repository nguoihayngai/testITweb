
export const rounding = {
  title: 'Làm Tròn Số',
  description: 'Học cách làm tròn số thực lên, xuống hoặc đến số nguyên gần nhất bằng các hàm có sẵn.',
  icon: '🎯',
  content: [
    { type: 'paragraph', text: 'Làm tròn số là một thao tác phổ biến khi làm việc với số thực (floating-point). Việc chọn đúng hàm làm tròn là rất quan trọng để đảm bảo tính chính xác của chương trình.' },
    { type: 'heading', level: 4, text: 'Các Hàm Làm Tròn Phổ Biến' },
    { type: 'paragraph', text: '• floor(x): Làm tròn xuống. Trả về số nguyên lớn nhất không vượt quá x. Ví dụ: floor(3.7) là 3, floor(-3.2) là -4.\n• ceil(x): Làm tròn lên. Trả về số nguyên nhỏ nhất không nhỏ hơn x. Ví dụ: ceil(3.2) là 4, ceil(-3.7) là -3.\n• round(x): Làm tròn đến số nguyên gần nhất. Quy tắc xử lý số có phần thập phân là .5 có thể khác nhau giữa các ngôn ngữ (ví dụ: làm tròn đến số chẵn gần nhất hoặc luôn làm tròn lên).' },
    { type: 'code', snippets: {
        cpp: `#include <iostream>
#include <cmath> // Cần thiết cho các hàm làm tròn
using namespace std;

int main() {
    double x = 3.7;
    double y = 3.2;

    // cout << "floor(3.7) = " << floor(x) << endl;  // 3
    // cout << "ceil(3.2) = " << ceil(y) << endl;    // 4
    // cout << "round(3.7) = " << round(x) << endl;  // 4
    // cout << "round(3.2) = " << round(y) << endl;  // 3
    return 0;
}`,
        javascript: `let x = 3.7;
let y = 3.2;

// console.log("Math.floor(3.7) =", Math.floor(x)); // 3
// console.log("Math.ceil(3.2) =", Math.ceil(y));   // 4
// console.log("Math.round(3.7) =", Math.round(x)); // 4
// console.log("Math.round(3.2) =", Math.round(y)); // 3`,
        python: `import math

x = 3.7
y = 3.2

# print(f"math.floor(3.7) = {math.floor(x)}") # 3
# print(f"math.ceil(3.2) = {math.ceil(y)}")   # 4
# print(f"round(3.7) = {round(x)}")          # 4
# print(f"round(3.2) = {round(y)}")          # 3`,
        java: `public class Rounding {
    public static void main(String[] args) {
        double x = 3.7;
        double y = 3.2;

        // System.out.println("Math.floor(3.7) = " + Math.floor(x)); // 3.0
        // System.out.println("Math.ceil(3.2) = " + Math.ceil(y));   // 4.0
        // System.out.println("Math.round(3.7) = " + Math.round(x)); // 4
        // System.out.println("Math.round(3.2) = " + Math.round(y)); // 3
    }
}`
    }},
  ]
};
