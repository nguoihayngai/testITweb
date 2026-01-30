
export const recursion = {
  title: 'Đệ Quy',
  description: 'Nắm vững kỹ thuật giải quyết vấn đề bằng cách chia nhỏ bài toán thành các bài toán con tương tự.',
  icon: '🔄',
  content: [
    { type: 'paragraph', text: 'Đệ quy là một kỹ thuật lập trình trong đó một hàm tự gọi lại chính nó để giải quyết một vấn đề.' },
    { type: 'heading', level: 4, text: 'Ví dụ: Tính giai thừa' },
    { type: 'code', snippets: {
        cpp: `long long factorial(int n) {
    // Trường hợp cơ sở
    if (n == 0) {
        return 1;
    }
    // Trường hợp đệ quy
    return n * factorial(n - 1);
}`,
        javascript: `function factorial(n) {
  if (n === 0) {
    return 1; // Trường hợp cơ sở
  }
  return n * factorial(n - 1); // Trường hợp đệ quy
}`,
        python: `def factorial(n):
    if n == 0:
        return 1  # Trường hợp cơ sở
    else:
        return n * factorial(n - 1) # Trường hợp đệ quy`,
        java: `public class Recursion {
    public static long factorial(int n) {
        if (n == 0) {
            return 1; // Trường hợp cơ sở
        } else {
            return n * factorial(n - 1); // Trường hợp đệ quy
        }
    }
}`
    }},
  ]
};
