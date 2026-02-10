
export const io = {
  title: 'Nhập/Xuất Dữ Liệu',
  description: 'Học cách đọc dữ liệu đầu vào (input) và in kết quả ra màn hình (output).',
  icon: '⌨️',
  content: [
    { type: 'paragraph', text: 'Trong lập trình thi đấu, việc đọc đúng dữ liệu đầu vào và in ra kết quả theo đúng định dạng là bước đầu tiên và quan trọng nhất.' },
    { type: 'heading', level: 4, text: 'Nhập/Xuất trong C++' },
    { type: 'paragraph', text: 'Sử dụng `cin` để đọc và `cout` để in. Cần `#include <iostream>` và `using namespace std;`.' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cout << "Nhap mot so nguyen: ";
    cin >> n;
    int ketQua = n * 2;
    cout << "So do nhan 2 la: " << ketQua << endl;
    return 0;
}`,
        javascript: `// JavaScript trong môi trường trình duyệt dùng prompt/alert
// hoặc thao tác với DOM. Trong Node.js dùng process.stdin.
// Ví dụ mô phỏng:
const n = prompt("Nhập một số nguyên:");
alert("Số đó nhân 2 là: " + (parseInt(n) * 2));`,
        python: `n = int(input("Nhap mot so nguyen: "))
ket_qua = n * 2
print("So do nhan 2 la:", ket_qua)`,
        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhap mot so nguyen: ");
        int n = scanner.nextInt();
        int ketQua = n * 2;
        System.out.println("So do nhan 2 la: " + ketQua);
        scanner.close();
    }
}`
    }},
    { type: 'heading', level: 4, text: 'Tăng tốc Nhập/Xuất (C++)' },
    { type: 'paragraph', text: 'Đối với các bài toán có lượng input/output lớn, thêm các dòng sau vào đầu hàm `main` để tăng tốc độ.' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // ... code của bạn ...
    return 0;
}`,
        javascript: `// Không áp dụng trực tiếp`,
        python: `// Không áp dụng trực tiếp, nhưng có thể dùng sys.stdin.readline`,
        java: `// Có thể sử dụng BufferedReader và PrintWriter để tăng tốc`
    }},
  ]
};
