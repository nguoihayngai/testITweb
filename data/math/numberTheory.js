
export const numberTheory = {
  title: 'Lý Thuyết Số Cơ Bản',
  description: 'Các khái niệm nền tảng: ước, bội, số nguyên tố, phân tích thừa số, GCD và LCM.',
  icon: '♾️',
  content: [
    { type: 'paragraph', text: 'Lý thuyết số là nền tảng để giải quyết rất nhiều bài toán trong lập trình thi đấu. Nắm vững các khái niệm cơ bản này là điều kiện tiên quyết.' },
    { type: 'heading', level: 4, text: '1. Ước và Bội' },
    { type: 'paragraph', text: 'Nếu số nguyên a chia hết cho số nguyên b, thì a được gọi là bội của b, và b được gọi là ước của a. Ví dụ: 12 là bội của 3, và 3 là ước của 12. Để liệt kê tất cả các ước của một số n, ta có thể duyệt từ 1 đến sqrt(n). Nếu i là ước của n, thì n/i cũng là ước của n.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

vector<int> getDivisors(int n) {
    vector<int> divisors;
    for (int i = 1; i <= sqrt(n); i++) {
        if (n % i == 0) {
            divisors.push_back(i);
            if (i * i != n) {
                divisors.push_back(n / i);
            }
        }
    }
    sort(divisors.begin(), divisors.end());
    return divisors;
}`
    }},
    { type: 'heading', level: 4, text: '2. Số Nguyên Tố' },
    { type: 'paragraph', text: 'Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó. Phương pháp kiểm tra một số `n` có phải số nguyên tố không là thử chia `n` cho các số từ 2 đến sqrt(n).' },
    { type: 'code', snippets: {
        cpp: `bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`
    }},
    { type: 'heading', level: 4, text: '3. Sàng Eratosthenes' },
    { type: 'paragraph', text: 'Là một thuật toán rất hiệu quả để tìm tất cả các số nguyên tố nhỏ hơn hoặc bằng một số `N` cho trước. Thuật toán hoạt động bằng cách loại bỏ các bội số của các số nguyên tố tìm được. Độ phức tạp là O(N log log N).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
using namespace std;

void sieve(int n) {
    vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int p = 2; p * p <= n; p++) {
        if (is_prime[p]) {
            for (int i = p * p; i <= n; i += p)
                is_prime[i] = false;
        }
    }
    // is_prime[i] == true thì i là số nguyên tố
}`
    }},
    { type: 'heading', level: 4, text: '4. Phân Tích Thừa Số Nguyên Tố' },
    { type: 'paragraph', text: 'Mọi số nguyên lớn hơn 1 đều có thể được biểu diễn duy nhất dưới dạng tích của các số nguyên tố. Thuật toán đơn giản là chia lặp lại số đó cho các số từ 2 đến sqrt(n).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <map>
using namespace std;

map<int, int> primeFactorize(int n) {
    map<int, int> factors;
    for (int i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            factors[i]++;
            n /= i;
        }
    }
    if (n > 1) {
        factors[n]++;
    }
    return factors;
}`
    }},
    { type: 'heading', level: 4, text: '5. Ước Chung Lớn Nhất (GCD) & Bội Chung Nhỏ Nhất (LCM)' },
    { type: 'paragraph', text: 'GCD của hai số a, b là số lớn nhất cùng chia hết cả a và b. Thuật toán Euclid là cách hiệu quả nhất để tìm GCD. Kể từ C++17, thư viện `<numeric>` cung cấp sẵn các hàm `std::gcd` và `std::lcm`. Bội chung nhỏ nhất (LCM) cũng có thể được tính thông qua GCD bằng công thức: `LCM(a, b) = (|a * b|) / GCD(a, b)`.' },
    { type: 'code', snippets: {
        cpp: `#include <numeric> // Cần thiết cho std::gcd và std::lcm
#include <iostream>
#include <cmath> // Cần cho std::abs
#include <utility> // Cần cho std::swap
using namespace std;

// Cách tự cài đặt (thuật toán Euclid)
long long custom_gcd(long long a, long long b) {
    while (b) {
        a %= b;
        swap(a, b);
    }
    return a;
}
long long custom_lcm(long long a, long long b) {
    if (a == 0 || b == 0) return 0;
    return abs(a * b) / custom_gcd(a, b);
}

// Sử dụng hàm có sẵn (từ C++17)
void use_builtin_functions() {
    long long a = 48, b = 18;
    // cout << "GCD cua " << a << " va " << b << " la: " << gcd(a, b) << endl; // Kết quả: 6
    // cout << "LCM cua " << a << " va " << b << " la: " << lcm(a, b) << endl; // Kết quả: 144
}`,
        javascript: `function gcd(a, b) {
  while (b) { [a, b] = [b, a % b]; }
  return a;
}
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}`
    }},
  ]
};