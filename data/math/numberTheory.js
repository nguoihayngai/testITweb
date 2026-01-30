
export const numberTheory = {
  title: 'Số Nguyên Tố & GCD/LCM',
  description: 'Các khái niệm nền tảng: số nguyên tố, sàng Eratosthenes, phân tích thừa số, GCD và LCM.',
  icon: '♾️',
  content: [
    { type: 'paragraph', text: 'Lý thuyết số là nền tảng để giải quyết rất nhiều bài toán trong lập trình thi đấu. Nắm vững các khái niệm cơ bản này là điều kiện tiên quyết.' },
    { type: 'heading', level: 4, text: '1. Số Nguyên Tố' },
    { type: 'paragraph', text: 'Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó. Phương pháp kiểm tra một số `n` có phải số nguyên tố không là thử chia `n` cho các số từ 2 đến `sqrt(n)`.' },
    { type: 'code', snippets: {
        cpp: `bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`
    }},
    { type: 'heading', level: 4, text: '2. Sàng Eratosthenes' },
    { type: 'paragraph', text: 'Là một thuật toán rất hiệu quả để tìm tất cả các số nguyên tố nhỏ hơn hoặc bằng một số `N` cho trước. Thuật toán hoạt động bằng cách loại bỏ các bội số của các số nguyên tố tìm được. Độ phức tạp là O(N log log N).' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
void sieve(int n) {
    std::vector<bool> is_prime(n + 1, true);
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
    { type: 'heading', level: 4, text: '3. Phân Tích Thừa Số Nguyên Tố' },
    { type: 'paragraph', text: 'Mọi số nguyên lớn hơn 1 đều có thể được biểu diễn duy nhất dưới dạng tích của các số nguyên tố. Thuật toán đơn giản là chia lặp lại số đó cho các số từ 2 đến `sqrt(n)`.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <map>
std::map<int, int> primeFactorize(int n) {
    std::map<int, int> factors;
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
    { type: 'heading', level: 4, text: '4. Ước Chung Lớn Nhất (GCD) & Bội Chung Nhỏ Nhất (LCM)' },
    { type: 'paragraph', text: 'GCD của hai số a, b là số lớn nhất cùng chia hết cả a và b. Thuật toán Euclid là cách hiệu quả nhất để tìm GCD. Bội chung nhỏ nhất (LCM) có thể được tính thông qua GCD bằng công thức: `LCM(a, b) = (|a * b|) / GCD(a, b)`.' },
    { type: 'code', snippets: {
        cpp: `#include <numeric> // Cho std::gcd ở C++17
long long gcd(long long a, long long b) {
    while (b) {
        a %= b;
        std::swap(a, b);
    }
    return a;
}
long long lcm(long long a, long long b) {
    if (a == 0 || b == 0) return 0;
    return std::abs(a * b) / gcd(a, b);
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
