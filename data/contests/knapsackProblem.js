
export const knapsackProblem = {
  title: 'Bài Toán Cái Túi (0/1)',
  description: 'Bài toán tối ưu hóa kinh điển: chọn các vật phẩm để tối đa hóa giá trị mà không vượt quá sức chứa của túi.',
  icon: '🎒',
  content: [
    { type: 'paragraph', text: 'Cho một tập hợp các vật phẩm, mỗi vật có trọng lượng và giá trị riêng. Xác định số lượng mỗi vật phẩm để đưa vào một cái túi có sức chứa giới hạn sao cho tổng giá trị là lớn nhất. Trong phiên bản 0/1, bạn chỉ có thể chọn hoặc không chọn một vật phẩm (không thể chọn một phần).' },
    { type: 'heading', level: 4, text: 'Phân Tích' },
    { type: 'paragraph', text: 'Đây là một bài toán quy hoạch động kinh điển. Ta sẽ xây dựng một bảng 2D `dp[i][w]`, trong đó `dp[i][w]` là giá trị lớn nhất có thể đạt được khi sử dụng `i` vật phẩm đầu tiên với sức chứa tối đa là `w`.' },
    { type: 'paragraph', text: 'Công thức truy hồi: Khi xét vật phẩm thứ `i` (có trọng lượng `wt[i]` và giá trị `val[i]`):\n* **Nếu không chọn vật phẩm `i`**: `dp[i][w] = dp[i-1][w]`.\n* **Nếu chọn vật phẩm `i`** (chỉ khi `w >= wt[i]`): `dp[i][w] = val[i] + dp[i-1][w - wt[i]]`.\n\nTa sẽ chọn giá trị lớn hơn giữa hai trường hợp trên.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <algorithm>
using namespace std;

int knapsack(int W, const vector<int>& wt, const vector<int>& val) {
    int n = val.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            // Nếu không lấy vật phẩm thứ i (index i-1)
            dp[i][w] = dp[i-1][w]; 
            
            // Nếu có thể lấy vật phẩm thứ i
            if (w >= wt[i-1]) {
                dp[i][w] = max(dp[i][w], val[i-1] + dp[i-1][w - wt[i-1]]);
            }
        }
    }
    return dp[n][W];
}`
    }},
  ]
};