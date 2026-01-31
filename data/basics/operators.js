
export const operators = {
  title: 'Các Phép Toán Tử',
  description: 'Tìm hiểu về các toán tử số học, so sánh và logic để thực hiện tính toán và ra quyết định.',
  icon: '🧮',
  content: [
    { type: 'paragraph', text: 'Toán tử là các ký hiệu đặc biệt thực hiện các phép toán trên các biến và giá trị. Việc nắm vững chúng là nền tảng để viết bất kỳ chương trình nào.' },
    { type: 'heading', level: 4, text: 'Toán tử số học' },
    { type: 'paragraph', text: 'Dùng để thực hiện các phép tính toán học cơ bản.\n* **Cộng (+)**, **Trừ (-)**, **Nhân (*)**, **Chia (/)**.\n* **Chia lấy dư (%)**: Trả về phần dư của một phép chia.' },
    { type: 'code', snippets: {
        cpp: `int a = 10, b = 3;
int tong = a + b;   // 13
int hieu = a - b;   // 7
int tich = a * b;   // 30
int thuong = a / b; // 3 (chia số nguyên)
int du = a % b;     // 1`,
        javascript: `let a = 10, b = 3;
let tong = a + b;   // 13
let hieu = a - b;   // 7
let tich = a * b;   // 30
let thuong = a / b; // 3.333...
let du = a % b;     // 1`,
        python: `a, b = 10, 3
tong = a + b    # 13
hieu = a - b    # 7
tich = a * b    # 30
thuong = a / b  # 3.333...
du = a % b      # 1`,
        java: `int a = 10, b = 3;
int tong = a + b;   // 13
int hieu = a - b;   // 7
int tich = a * b;   // 30
int thuong = a / b; // 3
int du = a % b;     // 1`
    }},
    { type: 'heading', level: 4, text: 'Toán tử so sánh' },
    { type: 'paragraph', text: 'Dùng để so sánh hai giá trị, kết quả trả về là `true` (đúng) hoặc `false` (sai).' },
    { type: 'code', snippets: {
        cpp: `int x = 5, y = 10;
bool ketQua1 = (x == 5); // đúng
bool ketQua2 = (x != y); // đúng
bool ketQua3 = (y > x);  // đúng`,
        javascript: `let x = 5, y = 10;
let ketQua1 = (x === 5); // đúng (=== so sánh cả giá trị và kiểu)
let ketQua2 = (x !== y); // đúng
let ketQua3 = (y > x);   // đúng`,
        python: `x, y = 5, 10
ket_qua1 = (x == 5)  # Đúng
ket_qua2 = (x != y)  # Đúng
ket_qua3 = (y > x)   # Đúng`,
        java: `int x = 5, y = 10;
boolean ketQua1 = (x == 5); // đúng
boolean ketQua2 = (x != y); // đúng
boolean ketQua3 = (y > x);  // đúng`
    }},
    { type: 'heading', level: 4, text: 'Toán tử logic' },
    { type: 'paragraph', text: 'Dùng để kết hợp các biểu thức điều kiện.\n* **AND (`&&`)**: `true` nếu tất cả đều `true`.\n* **OR (`||`)**: `true` nếu ít nhất một biểu thức là `true`.\n* **NOT (`!`)**: Đảo ngược giá trị logic.' },
    { type: 'code', snippets: {
        cpp: `bool troiDep = true;
bool coThoiGian = false;
// (troiDep && coThoiGian) -> sai
// (troiDep || coThoiGian) -> đúng
// !troiDep -> sai`,
        javascript: `let troiDep = true;
let coThoiGian = false;
// (troiDep && coThoiGian) -> false
// (troiDep || coThoiGian) -> true
// !troiDep -> false`,
        python: `# Python dùng 'and', 'or', 'not'
troi_dep = True
co_thoi_gian = False
# (troi_dep and co_thoi_gian) -> Sai
# (troi_dep or co_thoi_gian) -> Đúng
# not troi_dep -> Sai`,
        java: `boolean troiDep = true;
boolean coThoiGian = false;
// (troiDep && coThoiGian) -> false
// (troiDep || coThoiGian) -> true
// !troiDep -> false`
    }},
  ]
};