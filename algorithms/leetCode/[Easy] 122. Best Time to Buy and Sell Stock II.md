문제: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/       
       
문제 요약: 정수로 이루어진 배열이 있다. 하루가 지나야 다음 배열의 숫자가 되는데, 싼 숫자에 사서 비싼 숫자에 파는 이득 중 가장 큰 합은?     
     
현재 날짜의 가격보다 다음날의 가격이 높으면 항상 샀다가 팔면 된다는 점에 착안해 그리디로 풀었다.    
처음에는 `[1, 5, 7, 6]`에서 가장 싼 가격과 가장 비싼 가격을 인덱스가 증가될 때마다 조건식으로 판별해 계산했으나, 풀면서 생각해보니 1에 사서 7에 파나, 1에 사서 5에 팔고 다시 5에 사서 7에 팔아도 같은 결과가 나온다는 사실을 깨달았다.
       
```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int profit = 0;
        std::vector<int>::size_type sz = prices.size();

        for (int i=0; i<sz-1; ++i) {
            if(prices[i] < prices[i+1]) {
                profit += prices[i+1] - prices[i];
            } 
        }
        return profit;    
    }
};
```
