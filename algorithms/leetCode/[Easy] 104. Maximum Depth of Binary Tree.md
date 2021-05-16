문제: https://leetcode.com/problems/maximum-depth-of-binary-tree/    
           
문제 요약: 주어진 트리의 루트부터 가장 최심단 리프까지의 깊이는 몇 단계인지 리턴하기. 루트가 존재하면 1부터 세어나가면 된다.    
           
재귀함수로 모든 가지의 경우를 탐색하며 1을 더한 깊이를 나타내는 수 중 가장 큰 수를 리턴하도록 구현했다.       
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
    int maxDepth(TreeNode* root) {
        if(root == NULL){
            return 0;
        }
        
        return max(maxDepth(root->left) + 1, maxDepth(root->right) + 1);
    }
};

// Runtime: 12 ms, faster than 24.55% of C++ online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 18.9 MB, less than 11.49% of C++ online submissions for Maximum Depth of Binary Tree.
```
