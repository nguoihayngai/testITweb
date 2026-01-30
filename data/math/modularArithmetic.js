
export const modularArithmetic = {
  title: 'Lũy Thừa & Tổ Hợp Modulo',
  description: 'Tính lũy thừa nhị phân, nghịch đảo modulo và tổ hợp C(n,k) trong các bài toán hiệu năng cao.',
  icon: '⚡️',
  content: [
    { type: 'paragraph', text: 'Các phép toán trong modulo là cực kỳ quan trọng khi phải làm việc với các số rất lớn, thường thấy trong lập trình thi đấu.' },
    { type: 'heading', level: 4, text: '1. Lũy Thừa Nhị Phân (Binary Exponentiation)' },
    { type: 'paragraph', text: 'Tính a^n % M một cách hiệu quả với độ phức tạp O(log n). Thuật toán dựa trên nguyên tắc a^n = (a^(n/2))^2 nếu n chẵn, và a^n = a * a^(n-1) nếu n lẻ.' },
    { type: 'code', snippets: {
        cpp: `long long power(long long base, long long exp, long long mod) {
    long long res = 1;
    base %= mod;
    while (exp > 0) {
        if (exp % 2 == 1) res = (res * base) % mod;
        base = (base * base) % mod;
        exp /= 2;
    }
    return res;
}`
    }},
    { type: 'heading', level: 4, text: '2. Nghịch Đảo Modulo (Modular Inverse)' },
    { type: 'paragraph', text: 'Nghịch đảo modulo của a theo modulo M là một số x sao cho (a * x) % M = 1. Nếu M là số nguyên tố, ta có thể tìm nghịch đảo bằng Định lý nhỏ Fermat: a^(M-2) % M.' },
    { type: 'code', snippets: {
        cpp: `// Dùng hàm power ở trên
long long modInverse(long long n, long long mod) {
    return power(n, mod - 2, mod);
}`
    }},
    { type: 'heading', level: 4, text: '3. Tổ Hợp C(n, k) Modulo M' },
    { type: 'paragraph', text: 'Công thức tổ hợp C(n, k) = n! / (k! * (n-k)!). Khi tính theo modulo M, phép chia trở thành phép nhân với nghịch đảo modulo. C(n, k) % M = (n! * (k!)^-1 * ((n-k)!)^-1) % M. Ta cần tính trước các giai thừa.' },
    { type: 'code', snippets: {
        cpp: `const int MAXN = 100001;
long long fact[MAXN];
long long M = 1e9 + 7;

void precompute_factorials() {
    fact[0] = 1;
    for (int i = 1; i < MAXN; i++) {
        fact[i] = (fact[i - 1] * i) % M;
    }
}

long long nCr_mod_p(int n, int r) {
    if (r < 0 || r > n) return 0;
    long long num = fact[n];
    long long den = (modInverse(fact[r], M) * modInverse(fact[n - r], M)) % M;
    return (num * den) % M;
}`
    }},
  ]
};
