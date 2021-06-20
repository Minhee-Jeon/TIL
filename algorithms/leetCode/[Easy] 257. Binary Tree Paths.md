문제: https://leetcode.com/problems/binary-tree-paths/          

문제 요약: 주어진 이진 트리의 `root`에서 모든 leaf node까지의 경로를 반환하기            
             
재귀를 이용해 leaf node를 만날 때까지 `treePath`에 경로를 추가해두고 `treePaths`에 저장하고 싶었다.           
그런데 처음엔 `["1->2->5","1->3"]` 형태로 반환해야 하는데 정수를 문자열로 저장하지 못해 `["\u0001->\u0002->\u0005","\u0001->\u0003"]` 형태를 만들었다.          
`itoa()`는 지원하지 않았고, `to_string()`을 기억하자!          
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
    void addPathToString(TreeNode* root, string treePath, vector<string> &treePaths) {
        if (root == NULL) {
            return;
        }
        if (root->left == NULL && root->right == NULL) {
            if (treePath != "") treePath += "->";
            treePath += to_string(root->val);
            if (treePath != "") treePaths.push_back(treePath);
            return;
        }
        if (treePath != "") treePath += "->";
        treePath += to_string(root->val);

        addPathToString(root->left, treePath, treePaths);
        addPathToString(root->right, treePath, treePaths);
    }
    vector<string> binaryTreePaths(TreeNode* root) {
        string treePath("");
        vector<string> treePaths;
        addPathToString(root, treePath, treePaths);
        
        return treePaths;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Binary Tree Paths.
// Memory Usage: 13.1 MB, less than 47.34% of C++ online submissions for Binary Tree Paths.
```
