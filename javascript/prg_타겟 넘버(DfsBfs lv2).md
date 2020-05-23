<<<<<<< HEAD
## 문제 설명
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.   
각 숫자는 1 이상 50 이하인 자연수입니다.   
타겟 넘버는 1 이상 1000 이하인 자연수입니다.   
## 입출력 예
|numbers|target|return|
|---|---|---|
|[1, 1, 1, 1, 1]|3|5|
## Code
numbers[]를 이진 트리에 대입해서 생각했다.   
leaf node에서 첫번째 인덱스 값부터를 자식 노드로 내리면서 재귀함수를 이용해 내려간다.(dfs)   
왼쪽 노드는 다음 수를 더하고, 오른쪽 노드는 다음 수를 빼가면서 numbers.length와 같아질 때까지 반복한다.   
이 중 target과 같은 결과값이 있을 때마다 answer를 더해갔다.
```javascript
function solution(numbers, target) {
    var answer = 0;
    
    //처음 시작은 더할 수 0개와 합계 0으로 시작, 모든 경우를 DFS로 탐색하자!
    recur(0,0);
    
    return answer;
    
    function recur(idx, sum){
        if(idx === numbers.length){
            //+ - 연산의 결과가 주어진 수와 일치한다면 answer++
            if(sum === target){
                answer += 1;
            }
            return;
        }
        else{
            //왼쪽 자식 노드는 +연산
            recur(idx+1, sum + numbers[idx]);
            //오른쪽 자식 노드는 -연산
            recur(idx+1, sum - numbers[idx]);
        }
    
    }
}

```
=======
## 문제 설명
n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.   
각 숫자는 1 이상 50 이하인 자연수입니다.   
타겟 넘버는 1 이상 1000 이하인 자연수입니다.   
## 입출력 예
|numbers|target|return|
|---|---|---|
|[1, 1, 1, 1, 1]|3|5|
## Code
numbers[]를 이진 트리에 대입해서 생각했다.   
leaf node에서 첫번째 인덱스 값부터를 자식 노드로 내리면서 재귀함수를 이용해 내려간다.(dfs)   
왼쪽 노드는 다음 수를 더하고, 오른쪽 노드는 다음 수를 빼가면서 numbers.length와 같아질 때까지 반복한다.   
이 중 target과 같은 결과값이 있을 때마다 answer를 더해갔다.
```javascript
function solution(numbers, target) {
    var answer = 0;
    
    //처음 시작은 더할 수 0개와 합계 0으로 시작, 모든 경우를 DFS로 탐색하자!
    recur(0,0);
    
    return answer;
    
    function recur(idx, sum){
        if(idx === numbers.length){
            //+ - 연산의 결과가 주어진 수와 일치한다면 answer++
            if(sum === target){
                answer += 1;
            }
            return;
        }
        else{
            //왼쪽 자식 노드는 +연산
            recur(idx+1, sum + numbers[idx]);
            //오른쪽 자식 노드는 -연산
            recur(idx+1, sum - numbers[idx]);
        }
    
    }
}

```
>>>>>>> algorithms/master
