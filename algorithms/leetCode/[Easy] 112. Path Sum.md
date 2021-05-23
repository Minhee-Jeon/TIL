문제: https://leetcode.com/problems/path-sum/        
         
문제 요약: 트리의 루트노드 `root`와 정수 `targetSum`이 주어진다.      
`root`에서 더이상 자식노드를 갖지 않는 리프 노드까지의 경로의 노드값들을 모두 더했을 때 `targetSum`과 동일한 수가 존재하면
true를, 아니라면 false를 리턴하자.       
           
node의 `left`와 `right` 노드를 재귀적으로 탐색하며 값을 누적하는 함수 `addNode()`를 만들었다.    
`targetSum`과 비교될 수는 리프 노드에서 결정되어야 하기에 `left`나 `right` 둘 중 하나가 NULL이어도 다른쪽 노드 또한 존재하지 않아야 한다.     
그래서 bool형 변수 `isAnotherNodeNotNULL`로 다른쪽 노드가 존재하는지 여부도 입력받고 이 값이 false이고 `node`가 NULL일 때 `targetSum`과 비교해볼 후보 수들을 저장할 `m_sumList`에 담는다.        
`addNode()`로 모든 노드를 탐색해 후보 수들이 `m_sumList`에 담겼다면 이들 수 중 `targetSum`과 일치하는 수가 있는지 여부를 리턴한다.       
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
    vector<int> m_sumList;
    void addNode(TreeNode* node, int tmpSum, bool isAnotherNodeNotNULL) {
        if (node == NULL) {
            if (!isAnotherNodeNotNULL) m_sumList.push_back(tmpSum);
            return;
        }
        tmpSum += node->val;
        addNode(node->left, tmpSum, node->right);
        addNode(node->right, tmpSum, node->left);
    }
    bool hasPathSum(TreeNode* root, int targetSum) {
        addNode(root, 0, true);
        for(int i=0; i<m_sumList.size(); ++i){
            if (m_sumList.at(i) == targetSum) return true;
        }
        return false;
    }
};

// Runtime: 16 ms, faster than 17.38% of C++ online submissions for Path Sum.
// Memory Usage: 21.5 MB, less than 17.77% of C++ online submissions for Path Sum.
```
