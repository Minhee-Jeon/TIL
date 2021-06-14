문제: https://leetcode.com/problems/implement-queue-using-stacks/       
        
문제 요약: 두 개의 스택으로 FIFO인 큐의 `push`, `peek`, `pop`, `empty` 기능을 모두 수행할 수 있도록 구현하기         

스택은 LIFO, 큐는 FIFO 방식으로 작동한다.    
두 개의 스택으로 큐를 만들려면 `push`는 한 스택에 해 놓되, `pop`이나 `peek` 기능을 구현 시에는 스택과 반대 방향부터 out되는 큐의 특성을 사용해 큐 하나를 더 이용해 먼저 push해둔 스택과 반대의 스택을 만들어 구현다.    

```cpp
class MyQueue {
public:
    stack<int> st1;
    stack<int> st2;
    /** Initialize your data structure here. */
    MyQueue() {
        
    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        st1.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        if(st2.empty()) {
            while(!st1.empty()) {
                int temp = st1.top();
                st2.push(temp);
                st1.pop();
            }
        }
        int temp = st2.top();
        st2.pop();
        return temp;
    }
    
    /** Get the front element. */
    int peek() {
        if(st2.empty()) {
            while(!st1.empty()) {
                int temp = st1.top();
                st2.push(temp);
                st1.pop();
            }
        }
        int temp = st2.top();
        //st2.pop();
        return temp;
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        if(st1.empty() && st2.empty()) return true;
        return false;
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Implement Queue using Stacks.
// Memory Usage: 6.9 MB, less than 70.93% of C++ online submissions for Implement Queue using Stacks.
```
