## 문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.   

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.   

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.   

## 제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.    
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.             
## 입출력 예
|citations|return|
|---|---|
|[3, 0, 6, 1, 5]|3|
## 입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.    
## Code
주어진 논문 배열 {3, 0 , 6, 1, 5} 중 하나에서 답이 나올 것이라고 문제를 잘못 이해했다.
```javascript
function solution(citations) {
    citations.sort((a,b)=>b-a); //논문[] 내림차순 정렬
    var answer = 0,
        cnt = 0;
    
    for(var i in citations){
        if(citations[i] <= citations.length) var standard = citations[i];
        for(var j=0; j<citations.length; j++){
            if(citations[j] >= standard) cnt++;
        }
        if(cnt >= standard){
            for(var i in citations){
                if(citations[i] <= cnt) return citations[i];
            }
        }
        else cnt = 0;
    }
}
```

```javascript
function solution(citations) {
    var answer = 0;
    // h번 이상 인용된 논문의 개수가 h개 이상!!! 그 중 최댓값 구하기
    const arr = citations.sort((a,b) => a - b);  //논문[] 오름차순 정렬
    let result = [];
    for(let i = 0; i < arr.length; i++) {     
       result.push(Math.min(arr[i] , arr.length - i )); //배열값, 배열 길이를 i만큼 줄여나가면서 더 작은 값 뽑아 답 배열에 저장
    }
    return Math.max(...result);   //답 배열 중에서 가장 큰 값 리턴
    /**
    예 )

    n : [ 3 , 0 , 1 , 5 , 6 ]
    i  : [ 0 , 1 , 3 , 2 , 1 ]

    **/
}
```
