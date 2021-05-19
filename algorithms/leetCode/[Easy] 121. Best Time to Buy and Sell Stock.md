문제: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/      
         
문제 요약: 주어진 리스트에서 순서대로 오늘의 주식 가격이 주어진다. 주어진 리스트의 최저 가격에 사서 최고 가격에 팔면 벌 수 있는 최고 이익을 구해보자.

날이 갈수록 달라지는 가격에서 최저 가격을 비교하며 구해둔 다음, 구한 최저 가격의 뒤에 오는 최고 가격을 또 비교하며 구한다.    
구해둔 최고가격 - 최저가격이 원하는 최고 이익이다.          

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int profitSum = 0;
        int minPrice = prices.at(0);
        for(int i=1; i<prices.size(); ++i){
            minPrice = min(minPrice, prices.at(i));
            profitSum = max(profitSum, prices.at(i) - minPrice);
        }
        return profitSum;
    }
};

// Runtime: 116 ms, faster than 53.51% of C++ online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 93.3 MB, less than 38.77% of C++ online submissions for Best Time to Buy and Sell Stock.
```
