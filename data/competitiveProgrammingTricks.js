
export const competitiveProgrammingTricks = {
  title: 'Kỹ Thuật Thi Đấu C++',
  description: 'Các kỹ thuật quan trọng thường dùng: Mảng cộng dồn, Hai con trỏ, Sàng SPF, Tối ưu I/O.',
  icon: '🏆',
  content: [
    { type: 'heading', level: 4, text: '1. Tối ưu hóa Nhập/Xuất (Fast I/O)' },
    { type: 'paragraph', text: 'Trong các bài thi có giới hạn thời gian chặt chẽ, tốc độ nhập xuất dữ liệu là yếu tố sống còn. Thêm các dòng sau vào đầu hàm `main` để tăng tốc độ `cin` và `cout`.' },
    { type: 'code', snippets: { cpp: `#include <iostream>
using namespace std;

int main() {
    // Tắt đồng bộ hóa giữa luồng I/O của C++ (iostream) và C (stdio)
    ios_base::sync_with_stdio(false);
    // Hủy liên kết giữa cin và cout, giúp cin không cần đợi cout xử lý xong
    cin.tie(NULL);

    // Code của bạn ở đây...
    
    return 0;
}`}},
    { type: 'heading', level: 4, text: '2. Mảng Cộng Dồn (Prefix Sum)' },
    { type: 'paragraph', text: 'Kỹ thuật này giúp giảm độ phức tạp khi phải tính tổng của nhiều đoạn con trong một mảng. Tổng của đoạn [L, R] có thể được tính trong O(1) sau khi tiền xử lý mảng trong O(N).' },
    { type: 'paragraph', text: 'Công thức: `sum(L, R) = prefix[R] - prefix[L-1]`' },
    { type: 'code', snippets: { cpp: `// Mảng cộng dồn 1 chiều
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> a = {2, 8, 3, 9, 6, 5, 4};
    int n = a.size();
    vector<long long> prefix(n, 0);

    prefix[0] = a[0];
    for (int i = 1; i < n; ++i) {
        prefix[i] = prefix[i-1] + a[i];
    }

    // Tính tổng từ chỉ số 2 đến 5 (3+9+6+5)
    int L = 2, R = 5;
    long long sum_L_R = prefix[R] - (L > 0 ? prefix[L-1] : 0);
    // cout << "Tổng: " << sum_L_R << endl; // Kết quả: 23
    return 0;
}`}},
    { type: 'heading', level: 4, text: '3. Kỹ Thuật Hai Con Trỏ (Two Pointers)' },
    { type: 'paragraph', text: 'Kỹ thuật này dùng hai con trỏ (thường là chỉ số mảng) di chuyển qua dữ liệu để tìm kiếm các cặp hoặc dãy con thỏa mãn điều kiện. Nó thường giúp giảm độ phức tạp từ O(N²) xuống O(N) cho các bài toán trên mảng đã sắp xếp.' },
    { type: 'code', snippets: { cpp: `// Tìm một cặp có tổng bằng X trong mảng đã sắp xếp
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

void findPair(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left < right) {
        int current_sum = arr[left] + arr[right];
        if (current_sum == target) {
            // cout << "Tìm thấy cặp: " << arr[left] << " và " << arr[right] << endl;
            return;
        } else if (current_sum < target) {
            left++;
        } else {
            right--;
        }
    }
    // cout << "Không tìm thấy cặp nào." << endl;
}`}},
    { type: 'heading', level: 4, text: '4. Sàng SPF (Smallest Prime Factor)' },
    { type: 'paragraph', text: 'Đây là một biến thể của sàng Eratosthenes. Thay vì chỉ đánh dấu số nguyên tố, ta lưu lại ước nguyên tố nhỏ nhất (Smallest Prime Factor - SPF) của mỗi số. Điều này cho phép phân tích một số ra thừa số nguyên tố trong thời gian O(log N) sau khi sàng.' },
    { type: 'code', snippets: { cpp: `#include <vector>
using namespace std;

const int MAXN = 100001;
int spf[MAXN];

// Sàng SPF trong O(N log log N)
void sieve() {
    for (int i = 1; i < MAXN; i++) spf[i] = i;

    for (int i = 2; i * i < MAXN; i++) {
        if (spf[i] == i) { // i là số nguyên tố
            for (int j = i * i; j < MAXN; j += i) {
                if (spf[j] == j) { // Chỉ cập nhật nếu chưa có ước nhỏ hơn
                    spf[j] = i;
                }
            }
        }
    }
}

// Phân tích thừa số nguyên tố trong O(log N)
vector<int> getFactorization(int x) {
    vector<int> ret;
    while (x != 1) {
        ret.push_back(spf[x]);
        x = x / spf[x];
    }
    return ret;
}`}},
    { type: 'heading', level: 4, text: '5. Chặt Nhị Phân trên Tập Kết Quả' },
    { type: 'paragraph', text: 'Đây là một kỹ thuật mạnh mẽ áp dụng tìm kiếm nhị phân cho các bài toán tối ưu (tìm giá trị nhỏ nhất/lớn nhất thỏa mãn một điều kiện). Ý tưởng là thay vì tìm kiếm trên một mảng, ta tìm kiếm câu trả lời trong một khoảng giá trị [low, high]. Với mỗi giá trị `mid` trong khoảng, ta có một hàm `check(mid)` để kiểm tra xem có thể đạt được kết quả `mid` hay không. Hàm kiểm tra này phải có tính đơn điệu (monotonic).' }
]
};
