
export const dijkstra = {
  title: 'Thuật Toán Dijkstra',
  description: 'Tìm đường đi ngắn nhất từ một đỉnh nguồn đến tất cả các đỉnh khác trong đồ thị có trọng số không âm.',
  icon: '🗺️',
  content: [
    { type: 'paragraph', text: 'Thuật toán Dijkstra là một thuật toán tham lam, ở mỗi bước, nó chọn đỉnh chưa được thăm có khoảng cách ngắn nhất từ đỉnh nguồn và cập nhật khoảng cách cho các đỉnh kề của nó.' },
    { type: 'heading', level: 4, text: 'Mô tả thuật toán (Pseudo-code)' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <queue>
#include <limits.h>
using namespace std;

// Dùng hàng đợi ưu tiên để tăng hiệu quả
void dijkstra(int src, int V, vector<pair<int, int>> adj[]) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, INT_MAX);

    pq.push({0, src});
    dist[src] = 0;

    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        for (auto& x : adj[u]) {
            int v = x.first;
            int weight = x.second;
            if (dist[v] > dist[u] + weight) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    // Mảng 'dist' bây giờ chứa đường đi ngắn nhất từ src
}`,
        javascript: `// Cài đặt đầy đủ cần thư viện Hàng Đợi Ưu Tiên hoặc tự cài đặt
function dijkstra(graph, startNode) {
  // 1. Khởi tạo khoảng cách là Vô cực, 0 cho nút bắt đầu
  // 2. Dùng Hàng Đợi Ưu Tiên để lưu [khoảng cách, nút]
  // 3. Khi PQ chưa rỗng:
  //    a. Lấy nút có khoảng cách nhỏ nhất
  //    b. Với mỗi nút kề:
  //       - Tính khoảng cách mới
  //       - Nếu khoảng cách mới ngắn hơn, cập nhật và thêm vào PQ
  // 4. Trả về các khoảng cách
}`,
        python: `import heapq

def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    pq = [(0, start)]

    while pq:
        current_distance, current_node = heapq.heappop(pq)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    return distances`,
        java: `// Cài đặt đầy đủ cần một PriorityQueue
// và một cách biểu diễn đồ thị (ví dụ: Danh sách kề)
// Mã giả:
// 1. Tạo mảng dist[], khởi tạo là vô cực.
// 2. Tạo một PriorityQueue chứa các cặp (khoảng cách, đỉnh).
// 3. Thêm (0, nguồn) vào PQ. dist[nguồn] = 0.
// 4. Lặp khi PQ chưa rỗng:
//    a. Lấy đỉnh 'u' có khoảng cách nhỏ nhất.
//    b. Với mỗi đỉnh kề 'v' của 'u':
//       - Nếu dist[u] + trọng số < dist[v], cập nhật dist[v] và thêm vào PQ.`
    }},
  ]
};
