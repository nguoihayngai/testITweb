
export const trees = {
  title: 'Cấu Trúc Dữ Liệu Cây',
  description: 'Tìm hiểu về các cấu trúc phân cấp như Cây nhị phân và các phép duyệt cây cơ bản.',
  icon: '🌳',
  content: [
    { type: 'paragraph', text: 'Cây là một cấu trúc dữ liệu phân cấp. Cây tìm kiếm nhị phân (BST) là một dạng đặc biệt nơi giá trị các nút con bên trái luôn nhỏ hơn nút cha, và các nút con bên phải luôn lớn hơn.' },
    { type: 'heading', level: 4, text: 'Ví dụ: Triển khai Cây Tìm Kiếm Nhị Phân' },
    { type: 'code', snippets: {
        cpp: `#include <bits/stdc++.h>
using namespace std;

struct Node {
    int key;
    Node *left, *right;
};
// Hàm tạo một nút BST mới
Node* newNode(int item) {
    Node* temp = new Node;
    temp->key = item;
    temp->left = temp->right = nullptr;
    return temp;
}
// Hàm chèn một nút mới
Node* insert(Node* node, int key) {
    if (node == nullptr) return newNode(key);
    if (key < node->key)
        node->left = insert(node->left, key);
    else if (key > node->key)
        node->right = insert(node->right, key);
    return node;
}`,
        javascript: `class Node {
  constructor(value) { this.value = value; this.left = null; this.right = null; }
}
class BinarySearchTree {
  constructor() { this.root = null; }
  insert(value) { /* ... chi tiết cài đặt ... */ }
}`,
        python: `class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root`,
        java: `class Node {
    int key;
    Node left, right;
    public Node(int item) { key = item; left = right = null; }
}
class BinarySearchTree {
    Node root;
    Node insertRec(Node root, int key) {
        if (root == null) {
            root = new Node(key);
            return root;
        }
        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);
        return root;
    }
}`
    }},
  ]
};
