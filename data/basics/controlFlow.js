
export const controlFlow = {
  title: 'Luồng Điều Khiển',
  description: 'Điều khiển chương trình của bạn với các câu lệnh điều kiện (if/else) và vòng lặp (for, while).',
  icon: '🔀',
  content: [
    { type: 'paragraph', text: 'Luồng điều khiển cho phép chương trình của bạn đưa ra quyết định và lặp lại các hành động, tạo nên logic phức tạp hơn.' },
    { type: 'heading', level: 4, text: 'Câu Lệnh Điều Kiện (if-else)' },
    { type: 'paragraph', text: 'Thực thi một khối mã nếu một điều kiện là đúng, và một khối mã khác nếu điều kiện đó là sai.' },
    { type: 'code', snippets: {
        cpp: `int tuoi = 18;
if (tuoi >= 18) {
    // "Du tuoi bau cu."
} else {
    // "Chua du tuoi bau cu."
}`,
        javascript: `let tuoi = 18;
if (tuoi >= 18) {
  // "Du tuoi bau cu."
} else {
  // "Chua du tuoi bau cu."
}`,
        python: `tuoi = 18
if tuoi >= 18:
    # "Du tuoi bau cu."
else:
    # "Chua du tuoi bau cu."`,
        java: `int tuoi = 18;
if (tuoi >= 18) {
    // "Du tuoi bau cu."
} else {
    // "Chua du tuoi bau cu."
}`
    }},
    { type: 'heading', level: 4, text: 'Vòng Lặp `for`' },
    { type: 'paragraph', text: 'Lặp lại một hành động một số lần xác định. Rất hữu ích khi duyệt qua các phần tử của một mảng.' },
    { type: 'code', snippets: {
        cpp: `// In ra các số từ 0 đến 4
for (int i = 0; i < 5; i++) {
    // cout << i << endl;
}`,
        javascript: `// In ra các số từ 0 đến 4
for (let i = 0; i < 5; i++) {
  // console.log(i);
}`,
        python: `# In ra các số từ 0 đến 4
for i in range(5):
    # print(i)`,
        java: `// In ra các số từ 0 đến 4
for (int i = 0; i < 5; i++) {
    // System.out.println(i);
}`
    }},
     { type: 'heading', level: 4, text: 'Vòng Lặp `while`' },
    { type: 'paragraph', text: 'Lặp lại một hành động chừng nào một điều kiện còn đúng. Hữu ích khi không biết trước số lần lặp.' },
     { type: 'code', snippets: {
        cpp: `int count = 0;
while (count < 5) {
    // cout << count;
    count++;
}`,
        javascript: `let count = 0;
while (count < 5) {
  // console.log(count);
  count++;
}`,
        python: `count = 0
while count < 5:
    # print(count)
    count += 1`,
        java: `int count = 0;
while (count < 5) {
    // System.out.println(count);
    count++;
}`
    }},
  ]
};
