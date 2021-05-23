문제: https://leetcode.com/problems/binary-tree-preorder-traversal/     
           
문제 요약: 주어진 TreeNode를 preorder traversal 순서대로 노드 값들을 반환하자.    
preorder traversal 순서: 루트노드부터 왼쪽 서브트리를 전위 순회한 후 오른쪽 서브트리를 전위 순회함        


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
    void pTrav(TreeNode* root, vector<int> &ans) {
        if (root == NULL) return;
        ans.push_back(root->val);
        
        pTrav(root->left, ans);
        pTrav(root->right, ans);
    }
    
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> ans;
        pTrav(root, ans);
        
        return ans;
    }
};

// Runtime: 4 ms, faster than 46.06% of C++ online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 8.4 MB, less than 73.56% of C++ online submissions for Binary Tree Preorder Traversal.
```
