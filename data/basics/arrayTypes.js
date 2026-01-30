
export const arrayTypes = {
  title: 'Dữ liệu dạng mảng',
  description: 'Lưu trữ và quản lý tập hợp các phần tử với mảng tĩnh (array) và mảng động (vector).',
  icon: '⛓️',
  content: [
    { type: 'paragraph', text: 'Mảng là một cấu trúc dữ liệu dùng để lưu trữ một danh sách các phần tử có cùng kiểu dữ liệu. Các phần tử được truy cập thông qua chỉ số (index), thường bắt đầu từ 0.' },
    { type: 'heading', level: 4, text: 'Mảng tĩnh (Static Array)' },
    { type: 'paragraph', text: 'Kích thước của mảng được xác định tại thời điểm biên dịch và không thể thay đổi. Ví dụ: `int diem[10];` trong C++.' },
    { type: 'heading', level: 4, text: 'Mảng động (Dynamic Array / Vector)' },
    { type: 'paragraph', text: 'Kích thước có thể thay đổi trong quá trình chạy chương trình bằng cách thêm hoặc xóa phần tử. `vector` trong C++ là một ví dụ điển hình.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <iostream>
using namespace std;

int main() {
    // Mảng tĩnh
    int diem[3] = {8, 9, 10}; 
    
    // Mảng động (vector)
    vector<int> soNguyen;
    soNguyen.push_back(5);    // Thêm 5 vào cuối
    soNguyen.push_back(10);   // Dãy số là {5, 10}
    
    // cout << soNguyen[0]; // Truy cập phần tử đầu tiên (5)
    return 0;
}`,
        javascript: `// JavaScript arrays are dynamic by default
let diem = [8, 9, 10];
diem.push(7); // Thêm phần tử vào cuối, diem becomes [8, 9, 10, 7]
// console.log(diem[0]); // 8`,
        python: `# Python lists are dynamic
diem = [8, 9, 10]
diem.append(7) # Thêm phần tử vào cuối, diem becomes [8, 9, 10, 7]
# print(diem[0]) # 8`,
        java: `// Static array
int[] diem = {8, 9, 10};

// For dynamic arrays, use ArrayList
import java.util.ArrayList;
ArrayList<Integer> soNguyen = new ArrayList<>();
soNguyen.add(5);
soNguyen.add(10);
// System.out.println(soNguyen.get(0)); // 5`
    }},
  ]
};