
export const graphTraversal = {
  title: 'Duyệt Đồ Thị (BFS & DFS)',
  description: 'Các phương pháp duyệt qua tất cả các đỉnh của đồ thị. BFS tìm đường đi ngắn nhất trên đồ thị không trọng số.',
  icon: '🕸️',
  content: [
    { type: 'paragraph', text: 'BFS (Breadth-First Search) và DFS (Depth-First Search) là hai thuật toán duyệt đồ thị cơ bản.' },
    { type: 'heading', level: 4, text: '1. BFS - Tìm kiếm theo chiều rộng' },
    { type: 'paragraph', text: 'Sử dụng một hàng đợi (Queue) để khám phá các đỉnh kề trước khi đi sâu hơn.' },
    { type: 'code', snippets: {
        cpp: `#include <map>
#include <vector>
#include <set>
#include <queue>
using namespace std;

// Giả sử đồ thị được biểu diễn bằng map<int, vector<int>>
void bfs(int startNode, map<int, vector<int>>& graph) {
    set<int> visited;
    queue<int> q;

    visited.insert(startNode);
    q.push(startNode);

    while(!q.empty()) {
        int node = q.front();
        q.pop();
        // Xử lý nút
        for (int neighbor : graph[node]) {
            if (visited.find(neighbor) == visited.end()) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
}`,
        javascript: `function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  visited.add(startNode);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    // Xử lý currentNode
    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`,
        python: `from collections import deque
def bfs(graph, start_node):
    visited = set()
    queue = deque([start_node])
    visited.add(start_node)
    while queue:
        node = queue.popleft()
        # Xử lý nút
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
        java: `// Giả sử đồ thị là Map<Integer, List<Integer>>
void bfs(int startNode, Map<Integer, List<Integer>> graph) {
    Set<Integer> visited = new HashSet<>();
    Queue<Integer> queue = new LinkedList<>();
    
    visited.add(startNode);
    queue.add(startNode);
    
    while (!queue.isEmpty()) {
        int node = queue.poll();
        // Xử lý nút
        for (int neighbor : graph.get(node)) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.add(neighbor);
            }
        }
    }
}`
    }},
    { type: 'heading', level: 4, text: '2. DFS - Tìm kiếm theo chiều sâu' },
    { type: 'paragraph', text: 'Sử dụng đệ quy (hoặc một ngăn xếp - Stack) để đi sâu nhất có thể vào một nhánh trước khi quay lui.' },
    { type: 'code', snippets: {
        cpp: `#include <map>
#include <vector>
#include <set>
using namespace std;

// Giả sử biểu diễn đồ thị
void dfs(int node, map<int, vector<int>>& graph, set<int>& visited) {
    visited.insert(node);
    // Xử lý nút
    for (int neighbor : graph[node]) {
        if (visited.find(neighbor) == visited.end()) {
            dfs(neighbor, graph, visited);
        }
    }
}`,
        javascript: `function dfs(graph, startNode, visited = new Set()) {
  // Xử lý startNode
  visited.add(startNode);
  for (const neighbor of graph[startNode]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`,
        python: `def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    # Xử lý nút
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
        java: `// Giả sử biểu diễn đồ thị
void dfs(int node, Map<Integer, List<Integer>> graph, Set<Integer> visited) {
    visited.add(node);
    // Xử lý nút
    for (int neighbor : graph.get(node)) {
        if (!visited.contains(neighbor)) {
            dfs(neighbor, graph, visited);
        }
    }
}`
    }},
  ]
};
