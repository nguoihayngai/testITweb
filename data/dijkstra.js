
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

// Using a priority queue for efficiency
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
    // 'dist' array now contains shortest paths from src
}`,
        javascript: `// A full implementation requires a Priority Queue library or custom implementation
function dijkstra(graph, startNode) {
  // 1. Initialize distances with Infinity, 0 for startNode
  // 2. Use a Priority Queue to store [distance, node]
  // 3. While PQ is not empty:
  //    a. Get node with smallest distance
  //    b. For each neighbor:
  //       - Calculate new distance
  //       - If new distance is shorter, update and add to PQ
  // 4. Return distances
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
        java: `// A full implementation requires a PriorityQueue
// and a graph representation (e.g., Adjacency List)
// Pseudo-code:
// 1. Create a dist[] array, initialized to infinity.
// 2. Create a PriorityQueue of pairs (distance, vertex).
// 3. Add (0, source) to PQ. dist[source] = 0.
// 4. Loop while PQ is not empty:
//    a. Extract vertex 'u' with minimum distance.
//    b. For each adjacent vertex 'v' of 'u':
//       - If dist[u] + weight < dist[v], update dist[v] and add to PQ.`
    }},
  ]
};