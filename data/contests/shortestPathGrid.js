
export const shortestPathGrid = {
  title: 'Đường Đi Ngắn Nhất Lưới',
  description: 'Tìm đường đi ngắn nhất từ điểm bắt đầu đến điểm kết thúc trên một lưới 2D có các chướng ngại vật.',
  icon: '🏁',
  content: [
    { type: 'paragraph', text: 'Cho một lưới nhị phân m x n, trong đó 0 đại diện cho ô trống và 1 đại diện cho chướng ngại vật. Tìm chiều dài của đường đi ngắn nhất từ ô trên cùng bên trái (0,0) đến ô dưới cùng bên phải (m-1, n-1). Nếu không có đường đi, trả về -1.' },
    { type: 'heading', level: 4, text: 'Phân Tích - Tìm Kiếm Theo Chiều Rộng (BFS)' },
    { type: 'paragraph', text: 'Vì mỗi bước đi (lên, xuống, trái, phải) đều có chi phí là 1, bài toán tìm đường đi ngắn nhất này có thể được giải quyết hiệu quả bằng BFS. BFS đảm bảo rằng chúng ta sẽ tìm thấy ô đích với số bước ít nhất có thể vì nó khám phá lưới theo từng lớp một.' },
    { type: 'paragraph', text: 'Ta sử dụng một hàng đợi để lưu các ô cần duyệt và một mảng `visited` (hoặc sửa trực tiếp lưới) để đánh dấu các ô đã đi qua. Hàng đợi sẽ lưu cả tọa độ và khoảng cách từ điểm xuất phát.' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
    int n = grid.size();
    if (grid[0][0] == 1 || grid[n-1][n-1] == 1) return -1;
    
    queue<pair<int, int>> q;
    q.push({0, 0});
    grid[0][0] = 1; // Đánh dấu đã thăm và lưu khoảng cách
    
    int dr[] = {-1, -1, -1, 0, 0, 1, 1, 1};
    int dc[] = {-1, 0, 1, -1, 1, -1, 0, 1};

    while (!q.empty()) {
        auto [r, c] = q.front();
        q.pop();

        if (r == n - 1 && c == n - 1) return grid[r][c];

        for (int i = 0; i < 8; i++) { // Kiểm tra 8 hướng
            int nr = r + dr[i];
            int nc = c + dc[i];

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 0) {
                q.push({nr, nc});
                grid[nr][nc] = grid[r][c] + 1; // Cập nhật khoảng cách
            }
        }
    }
    return -1; // Không tìm thấy đường đi
}`
    }},
  ]
};
