
export const backtracking = {
  title: 'Quay Lui (Backtracking)',
  description: 'Thử từng khả năng và quay lại nếu một lựa chọn không dẫn đến giải pháp.',
  icon: '🔙',
  content: [
    { type: 'paragraph', text: 'Quay lui là một kỹ thuật thuật toán để giải quyết các bài toán một cách đệ quy bằng cách thử xây dựng một giải pháp từng bước. Tại mỗi bước, nếu lựa chọn hiện tại không thể dẫn đến một giải pháp hợp lệ, nó sẽ "quay lui" (backtrack) và thử một lựa chọn khác.' },
    { type: 'heading', level: 4, text: 'Ví dụ: Bài toán N-Hậu (N-Queens)' },
    { type: 'paragraph', text: 'Mục tiêu là đặt N quân hậu trên một bàn cờ N×N sao cho không có hai quân hậu nào có thể tấn công lẫn nhau. Quay lui được sử dụng để khám phá các vị trí đặt hậu có thể.' },
    { type: 'code', snippets: {
        cpp: `// Ý tưởng chính: Đặt một quân hậu vào một cột, 
// sau đó đệ quy sang cột tiếp theo.
// Nếu không tìm được vị trí hợp lệ, quay lui.

bool isSafe(int board[N][N], int row, int col) {
    // Kiểm tra hàng, đường chéo
    // ...
    return true;
}

bool solveNQUtil(int board[N][N], int col) {
    if (col >= N) return true;

    for (int i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQUtil(board, col + 1))
                return true;
            board[i][col] = 0; // QUAY LUI
        }
    }
    return false;
}`,
        javascript: `function solveNQueens(n) {
  const board = Array(n).fill(0).map(() => Array(n).fill('.'));
  const solutions = [];

  function isSafe(row, col) {
    // Kiểm tra hàng, và các đường chéo bên trái
    for (let i = 0; i < col; i++) if (board[row][i] === 'Q') return false;
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j] === 'Q') return false;
    for (let i = row, j = col; i < n && j >= 0; i++, j--) if (board[i][j] === 'Q') return false;
    return true;
  }

  function solve(col) {
    if (col === n) {
      solutions.push(board.map(r => r.join("")));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isSafe(i, col)) {
        board[i][col] = 'Q';
        solve(col + 1);
        board[i][col] = '.'; // Quay lui
      }
    }
  }
  solve(0);
  return solutions;
}`,
        python: `def solve_n_queens(n):
    def is_safe(board, row, col):
        # Kiểm tra hàng và các đường chéo bên trái
        # ...
        return True

    def solve(board, col):
        if col >= n:
            return True
        for i in range(n):
            if is_safe(board, i, col):
                board[i][col] = 1
                if solve(board, col + 1):
                    return True
                # Nếu không thành công, quay lui
                board[i][col] = 0
        return False

    board = [[0] * n for _ in range(n)]
    solve(board, 0)
    return board`,
        java: `class NQueen {
    boolean isSafe(int board[][], int row, int col, int N) {
        // ...
        return true;
    }

    boolean solveNQUtil(int board[][], int col, int N) {
        if (col >= N) return true;

        for (int i = 0; i < N; i++) {
            if (isSafe(board, i, col, N)) {
                board[i][col] = 1;
                if (solveNQUtil(board, col + 1, N))
                    return true;
                
                board[i][col] = 0; // BACKTRACK
            }
        }
        return false;
    }
}`
    }},
  ]
};
