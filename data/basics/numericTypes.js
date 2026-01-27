
export const numericTypes = {
  title: 'Các kiểu dữ liệu số',
  description: 'Hiểu về số nguyên (int, long long) và số thực (float, double) để xử lý các con số một cách chính xác.',
  icon: '🔢',
  content: [
    { type: 'paragraph', text: 'Dùng để lưu trữ các giá trị số. Lựa chọn kiểu dữ liệu phù hợp giúp tối ưu bộ nhớ và tránh các lỗi tính toán không mong muốn (tràn số, mất độ chính xác).' },
    { type: 'heading', level: 4, text: 'Số Nguyên (Integer)' },
    { type: 'paragraph', text: 'Dùng để lưu trữ các con số không có phần thập phân. Các kiểu phổ biến bao gồm:\n• int: Dùng cho số nguyên trong phạm vi vừa phải (thường là 32-bit).\n• long (C++): Có kích thước ít nhất là 32-bit, thường dùng cho các số lớn hơn `int`.\n• long long (C++): Dùng cho số nguyên rất lớn (ít nhất là 64-bit).\n• unsigned int/long/long long: Dùng khi chỉ cần lưu trữ số không âm (>= 0), giúp tăng gấp đôi phạm vi giá trị dương.\n• int_fast64_t (C++): Một kiểu dữ liệu có ít nhất 64 bit, được tối ưu hóa cho tốc độ trên hệ thống cụ thể.' },
    { type: 'code', snippets: {
        cpp: `#include <cstdint> // Cần thiết cho int_fast64_t

int soHocSinh = 30;
long danSoQuocGia = 100000000L; // Ít nhất 32-bit
long long soNguoiTrenTraiDat = 8000000000LL;

// Unsigned cho phép lưu giá trị dương lớn hơn
unsigned int danSoThanhPho = 4000000000; 
unsigned long long soSaoTrongThienHa = 100000000000ULL;

// Kiểu dữ liệu được tối ưu cho tốc độ
int_fast64_t soTinhToanNhanh = 9000000000000000000LL;`,
        javascript: `// JavaScript không có các kiểu int, unsigned hay fast riêng biệt.
// Tất cả các số đều là dạng 64-bit float.
let soHocSinh = 30;
let soNguoiTrenTraiDat = 8000000000;`,
        python: `# Python có thể xử lý số nguyên với độ chính xác tuỳ ý, 
# không cần lo về unsigned hay long long.
so_hoc_sinh = 30
so_nguoi_tren_trai_dat = 8000000000`,
        java: `// Java 8+ có phương thức để xử lý số unsigned,
// nhưng không có kiểu dữ liệu unsigned nguyên thủy.
int soHocSinh = 30;
long soNguoiTrenTraiDat = 8000000000L; // long trong Java là 64-bit`
    }},
    { type: 'heading', level: 4, text: 'Số Thực (Floating-Point)' },
    { type: 'paragraph', text: 'Dùng để biểu diễn các số có phần thập phân. Các kiểu phổ biến bao gồm:\n• float: Số thực có độ chính xác đơn, tốn ít bộ nhớ hơn.\n• double: Số thực có độ chính xác kép, là lựa chọn mặc định cho hầu hết các trường hợp vì độ chính xác cao hơn.' },
    { type: 'code', snippets: {
        cpp: `// Nên dùng double cho độ chính xác cao hơn
float pi_approx = 3.14f;
double diemTrungBinh = 8.75;`,
        javascript: `let pi_approx = 3.14;
let diemTrungBinh = 8.75;`,
        python: `# Python mặc định coi số có dấu phẩy là số thực
pi_approx = 3.14
diem_trung_binh = 8.75`,
        java: `float piApprox = 3.14f;
double diemTrungBinh = 8.75;`
    }},
  ]
};
