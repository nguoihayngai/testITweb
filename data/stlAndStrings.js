
export const stlAndStrings = {
  title: 'STL & Xử lý Xâu Nâng Cao',
  description: 'Làm chủ các cấu trúc STL quan trọng như pair, set, và các kỹ thuật xử lý xâu với getline, stringstream.',
  icon: '🛠️',
  content: [
    { type: 'paragraph', text: 'Thư viện mẫu chuẩn (STL) trong C++ cung cấp các cấu trúc dữ liệu và thuật toán được tối ưu hóa sẵn. Nắm vững chúng là chìa khóa để viết code ngắn gọn và hiệu quả.' },
    { type: 'heading', level: 4, text: '1. pair' },
    { type: 'paragraph', text: '`std::pair` là một cấu trúc dùng để lưu trữ hai giá trị có thể khác kiểu nhau thành một đối tượng duy nhất. Nó rất hữu ích khi bạn cần trả về hai giá trị từ một hàm hoặc lưu trữ các cặp dữ liệu (ví dụ: tọa độ (x, y), cạnh đồ thị (u, v)).' },
    { type: 'code', snippets: { cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    pair<int, string> p1;
    p1.first = 1;
    p1.second = "Học sinh A";

    pair<int, int> p2 = make_pair(10, 20);

    // cout << p2.first << ", " << p2.second << endl; // In ra: 10, 20
    return 0;
}`}},
    { type: 'heading', level: 4, text: '2. set' },
    { type: 'paragraph', text: '`std::set` là một container lưu trữ các phần tử *duy nhất* và *đã được sắp xếp* (mặc định là tăng dần). Nó cực kỳ hiệu quả cho các thao tác tìm kiếm, chèn, xóa (độ phức tạp O(log N)) và kiểm tra sự tồn tại của một phần tử.' },
    { type: 'code', snippets: { cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    set<int> s;
    s.insert(10);
    s.insert(30);
    s.insert(20);
    s.insert(10); // Sẽ không được thêm vào vì 10 đã tồn tại

    // In các phần tử (sẽ tự động được sắp xếp): 10 20 30
    // for (int x : s) {
    //     cout << x << " ";
    // }

    if (s.count(20)) {
        // cout << "\\nTìm thấy 20 trong set." << endl;
    }

    s.erase(10); // Xóa phần tử 10
    return 0;
}`}},
    { type: 'heading', level: 4, text: '3. Nhập Xâu Có Dấu Cách (getline)' },
    { type: 'paragraph', text: 'Khi sử dụng `cin`, nó sẽ dừng đọc khi gặp khoảng trắng. Để đọc cả một dòng văn bản (bao gồm cả dấu cách), hãy dùng `getline(cin, ten_bien_xau)`. Lưu ý: sau khi dùng `cin` để đọc số, bộ đệm có thể còn lại ký tự xuống dòng. Ta cần dùng `cin.ignore()` để xóa nó trước khi dùng `getline`.' },
    { type: 'code', snippets: { cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    string s;

    // cout << "Nhập số: ";
    cin >> n;

    // Vấn đề: cin để lại ký tự '\\n' trong buffer
    // Giải pháp: Xóa ký tự thừa trước khi đọc xâu
    cin.ignore(); 

    // cout << "Nhập xâu: ";
    getline(cin, s);

    // cout << "Số đã nhập: " << n << endl;
    // cout << "Xâu đã nhập: " << s << endl;
    return 0;
}`}},
    { type: 'heading', level: 4, text: '4. Tách Từ Dùng stringstream' },
    { type: 'paragraph', text: '`stringstream` là một công cụ mạnh mẽ để xử lý xâu. Nó cho phép bạn đọc từ một xâu giống như cách bạn đọc từ `cin`. Điều này rất hữu ích để tách các từ hoặc số trong một dòng.' },
    { type: 'code', snippets: { cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    string line = "day la mot vi du ve stringstream";
    stringstream ss(line);
    string word;
    vector<string> words;

    while (ss >> word) {
        words.push_back(word);
    }

    // Vector 'words' bây giờ chứa: {"day", "la", "mot", "vi", "du", "ve", "stringstream"}
    // for(const auto& w : words) {
    //     cout << w << endl;
    // }
    return 0;
}`}},
  ]
};
