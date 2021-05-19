문제: https://leetcode.com/problems/symmetric-tree/         
         
문제 요약: 주어진 트리가 루트를 기준으로 대칭인지 판별하기
      
트리가 대칭인지 판별하기 위해서는 대칭관계에 있는 두 노드가 있을 때 이 조건들을 확인하면 된다.   
1. 두 노드가 NULL인가? -> `true`   
2. 두 노드 중 한 노드는 있고 한 노드는 NULL인가? -> `false`   
3. 두 노드의 값이 같다면            
  3-1. 1. ~ 3. 까지의 조건들을 왼쪽 노드의 한쪽 자식노드, 오른쪽 노드의 다른쪽 자식노드를 확인하면 된다. 물론 두 쪽끼리를 다 확인해야 한다.     
           
이 확인작업을 트리가 끝날 때까지 반복해주면 되니 회귀를 사용한다.          
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
    bool compare(TreeNode* left, TreeNode* right) {
        if (!left && !right) return true;
        else if ((!left && right) || (left && !right)) return false;
        
        else if (left->val != right->val) return false;
        else return (compare(left->left, right->right) && compare(left->right, right->left));
    }
    
    bool isSymmetric(TreeNode* root) {
        if (!root) return true;
        return compare(root->left, root->right);
    }
};

// Runtime: 8 ms, faster than 28.31% of C++ online submissions for Symmetric Tree.
// Memory Usage: 16.3 MB, less than 78.37% of C++ online submissions for Symmetric Tree.
```
