
export const pointers = {
  title: 'Con Trỏ & Quản Lý Bộ Nhớ',
  description: 'Hiểu cách con trỏ hoạt động, tham chiếu bộ nhớ và ứng dụng trong các cấu trúc dữ liệu.',
  icon: '👉',
  content: [
    { type: 'paragraph', text: 'Con trỏ là một biến lưu trữ địa chỉ bộ nhớ của một biến khác. Trong các ngôn ngữ như Java, Python, JavaScript, khái niệm này được trừu tượng hóa thành "tham chiếu".' },
    { type: 'heading', level: 4, text: 'Ví dụ: Con trỏ (C++) vs Tham chiếu (JS)' },
    { type: 'code', snippets: {
        cpp: `#include <iostream>

int main() {
    int var = 20;
    int* ptr = &var; // ptr stores the address of var
    
    // std::cout << "Value of var: " << *ptr;
    *ptr = 30; // Change value at address
    // std::cout << "New value of var: " << var;
    return 0;
}`,
        javascript: `let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references the same object

obj2.name = "Bob";

console.log(obj1.name); // Output: "Bob"`,
        python: `list1 = [1, 2, 3]
list2 = list1 # Both variables reference the same list

list2.append(4)

print(list1) # Output: [1, 2, 3, 4]`,
        java: `class Main {
    public static void main(String[] args) {
        StringBuilder str1 = new StringBuilder("Hello");
        StringBuilder str2 = str1; // Both reference the same object
        
        str2.append(" World");
        
        System.out.println(str1); // Output: Hello World
    }
}`
    }},
  ]
};
