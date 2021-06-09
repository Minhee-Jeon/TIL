문제: https://leetcode.com/problems/invert-binary-tree/solution/   
            
문제 요약: 주어진 이진 트리를 좌우 반전 시켜서 트리의 루트를 반환하기  
         
주어진 노드의 `left`와 `right` 포인터가 가리키는 값을 교환하는 재귀함수를 작성하였다.             

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void switchChildNode(TreeNode* node) {
        if (node == NULL) return;
        TreeNode *tmpNode = node->left;
        node->left = node->right;
        node->right = tmpNode;
        switchChildNode(node->left);
        switchChildNode(node->right);
    }
    TreeNode* invertTree(TreeNode* root) {
        switchChildNode(root);
        return root;
    }
};

// Runtime: 4 ms, faster than 53.19% of C++ online submissions for Invert Binary Tree.
// Memory Usage: 9.5 MB, less than 97.39% of C++ online submissions for Invert Binary Tree.
```
