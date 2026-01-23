
export const greedy = {
  title: 'Kĩ Thuật Tham Lam (Greedy)',
  description: 'Đưa ra lựa chọn tối ưu cục bộ ở mỗi bước với hy vọng tìm ra giải pháp tối ưu toàn cục.',
  icon: '💰',
  content: [
    { type: 'paragraph', text: 'Kĩ thuật tham lam xây dựng giải pháp từng bước. Ở mỗi bước, nó chọn lựa chọn tốt nhất hiện có mà không xem xét các lựa chọn trong tương lai. Cách tiếp cận này không phải lúc nào cũng cho ra kết quả tối ưu toàn cục nhưng thường hiệu quả và đơn giản.' },
    { type: 'heading', level: 4, text: 'Ví dụ: Bài toán đổi tiền' },
    { type: 'paragraph', text: 'Với một tập hợp các mệnh giá tiền và một số tiền cần đổi, tìm số lượng đồng xu ít nhất để đổi. Giả sử hệ thống tiền tệ là chuẩn (ví dụ: 1, 5, 10, 20), thuật toán tham lam (luôn chọn đồng xu có mệnh giá lớn nhất có thể) sẽ hoạt động.' },
    { type: 'code', snippets: {
        cpp: `#include <vector>
#include <algorithm>

int coinChange(std::vector<int>& coins, int amount) {
    // Sắp xếp mệnh giá giảm dần để tiếp cận tham lam
    std::sort(coins.rbegin(), coins.rend());
    int count = 0;
    for (int coin : coins) {
        if (amount <= 0) break;
        count += amount / coin;
        amount %= coin;
    }
    return (amount == 0) ? count : -1; // -1 nếu không thể đổi
}`,
        javascript: `function greedyCoinChange(coins, amount) {
  coins.sort((a, b) => b - a); // Sắp xếp giảm dần
  let count = 0;
  for (const coin of coins) {
    if (amount <= 0) break;
    let numCoins = Math.floor(amount / coin);
    count += numCoins;
    amount -= numCoins * coin;
  }
  // Lưu ý: Cách tiếp cận này không phải lúc nào cũng tối ưu
  return amount === 0 ? count : -1;
}`,
        python: `def coin_change(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        if amount <= 0:
            break
        num_coins = amount // coin
        count += num_coins
        amount -= num_coins * coin
    return count if amount == 0 else -1`,
        java: `import java.util.Arrays;
import java.util.Collections;

public class Greedy {
    public static int coinChange(Integer[] coins, int amount) {
        Arrays.sort(coins, Collections.reverseOrder());
        int count = 0;
        for (int coin : coins) {
            if (amount <= 0) break;
            int numCoins = amount / coin;
            count += numCoins;
            amount %= coin;
        }
        return (amount == 0) ? count : -1;
    }
}`
    }},
  ]
};
