
export const pointers = {
  title: 'Con Trỏ & Quản Lý Bộ Nhớ',
  description: 'Hiểu cách con trỏ hoạt động, tham chiếu bộ nhớ và ứng dụng trong các cấu trúc dữ liệu.',
  icon: '👉',
  content: [
    { type: 'paragraph', text: 'Con trỏ là một biến lưu trữ địa chỉ bộ nhớ của một biến khác. Trong các ngôn ngữ như Java, Python, JavaScript, khái niệm này được trừu tượng hóa thành "tham chiếu".' },
    { type: 'heading', level: 4, text: 'Ví dụ: Con trỏ (C++) vs Tham chiếu (JS)' },
    { type: 'code', snippets: {
        cpp: `#include <iostream>
using namespace std;

int main() {
    int var = 20;
    int* ptr = &var; // ptr lưu địa chỉ của var
    
    // cout << "Giá trị của var: " << *ptr;
    *ptr = 30; // Thay đổi giá trị tại địa chỉ
    // cout << "Giá trị mới của var: " << var;
    return 0;
}`,
        javascript: `let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 tham chiếu đến cùng một đối tượng

obj2.name = "Bob";

console.log(obj1.name); // Kết quả: "Bob"`,
        python: `list1 = [1, 2, 3]
list2 = list1 # Cả hai biến cùng tham chiếu đến một danh sách

list2.append(4)

print(list1) # Kết quả: [1, 2, 3, 4]`,
        java: `class Main {
    public static void main(String[] args) {
        StringBuilder str1 = new StringBuilder("Hello");
        StringBuilder str2 = str1; // Cả hai cùng tham chiếu đến một đối tượng
        
        str2.append(" World");
        
        System.out.println(str1); // Kết quả: Hello World
    }
}`
    }},
  ]
};
