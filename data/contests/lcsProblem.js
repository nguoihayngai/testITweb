
export const lcsProblem = {
  title: 'Dãy Con Chung Dài Nhất',
  description: 'Tìm dãy con chung dài nhất của hai chuỗi. Một ứng dụng quan trọng trong tin sinh học và so sánh file.',
  icon: '🧬',
  content: [
    { type: 'paragraph', text: 'Cho hai chuỗi, tìm chiều dài của dãy con chung dài nhất (Longest Common Subsequence - LCS). Một dãy con được tạo ra bằng cách xóa không hoặc nhiều ký tự từ chuỗi ban đầu.' },
    { type: 'paragraph', text: 'Ví dụ: LCS của "AGGTAB" và "GXTXAYB" là "GTAB", có chiều dài 4.' },
    { type: 'heading', level: 4, text: 'Phân Tích Quy Hoạch Động' },
    { type: 'paragraph', text: 'Gọi `dp[i][j]` là độ dài LCS của hai chuỗi con `text1[0...i-1]` và `text2[0...j-1]`.' },
    { type: 'paragraph', text: '* Nếu `text1[i-1] == text2[j-1]`, thì ký tự này thuộc LCS. Ta có: `dp[i][j] = 1 + dp[i-1][j-1]`.\n* Nếu `text1[i-1] != text2[j-1]`, thì ký tự này không cùng thuộc LCS. Ta phải bỏ qua một trong hai ký tự và lấy kết quả tốt nhất: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.' },
    { type: 'code', snippets: {
        cpp: `#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int longestCommonSubsequence(string text1, string text2) {
    int m = text1.length();
    int n = text2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}`
    }},
  ]
};