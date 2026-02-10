
export const stringTypes = {
  title: 'Dữ liệu dạng xâu',
  description: 'Làm việc với văn bản, chuỗi ký tự và các thao tác xử lý xâu phổ biến.',
  icon: '🔡',
  content: [
    { type: 'paragraph', text: 'Xâu (string) là một chuỗi tuần tự các ký tự, được sử dụng để lưu trữ và xử lý văn bản.' },
    { type: 'heading', level: 4, text: 'Các thao tác cơ bản' },
    { type: 'paragraph', text: '* **Nối xâu**: Ghép hai hay nhiều xâu lại với nhau.\n* **Lấy độ dài**: Đếm số ký tự trong xâu.\n* **Truy cập ký tự**: Lấy ký tự tại một vị trí (chỉ số) cụ thể.\n* **Cắt xâu con**: Trích xuất một phần của xâu.' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    string loiChao = "Xin chào";
    string ten = "Văn Lang";
    string full = loiChao + ", " + ten + "!"; // Nối xâu
    
    // cout << "Độ dài: " << full.length() << endl; // 19
    // cout << "Ký tự đầu tiên: " << full[0] << endl; // X
    // cout << "Xâu con: " << full.substr(0, 8) << endl; // Xin chào
    return 0;
}`,
        javascript: `let loiChao = "Xin chào";
let ten = "Văn Lang";
let full = loiChao + ", " + ten + "!";

// console.log("Độ dài:", full.length); // 19
// console.log("Ký tự đầu tiên:", full[0]); // X
// console.log("Xâu con:", full.substring(0, 8)); // Xin chào`,
        python: `loi_chao = "Xin chào"
ten = "Văn Lang"
full = loi_chao + ", " + ten + "!"

# print(f"Độ dài: {len(full)}") # 19
# print(f"Ký tự đầu tiên: {full[0]}") # X
# print(f"Xâu con: {full[0:8]}") # Xin chào`,
        java: `String loiChao = "Xin chào";
String ten = "Văn Lang";
String full = loiChao + ", " + ten + "!";

// System.out.println("Độ dài: " + full.length()); // 19
// System.out.println("Ký tự đầu tiên: " + full.charAt(0)); // X
// System.out.println("Xâu con: " + full.substring(0, 8)); // Xin chào`
    }},
  ]
};
