<<<<<<< HEAD
## 문제 설명
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.    
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.   
   
예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.   
   
|경과 시간|다리를 지난 트럭|다리를 건너는 트럭|대기 트럭|
|---|---|---|---|
|0|[]|[]|[7,4,5,6]|
|1~2|[]|[7]|[4,5,6]|
|3|[7]|[4]|[5,6]|
|4|[7]|[4,5]|[6]|
|5|[7,4]|[5]|[6]|
|6~7|[7,4,5]|[6]|[]|
|8|[7,4,5,6]|[]|[]|   
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.   
   
solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.   
   
## 제한 조건
bridge_length는 1 이상 10,000 이하입니다.   
weight는 1 이상 10,000 이하입니다.   
truck_weights의 길이는 1 이상 10,000 이하입니다.   
모든 트럭의 무게는 1 이상 weight 이하입니다.   
   
## 입출력 예
|bridge_length|weight|truck_weights|return|
|---|---|---|---|
|2|10|[7,4,5,6]|8|
|100|100|[10]|101|
|100|100|[10,10,10,10,10,10,10,10,10,10]|110|
    
## Code
```javascript
function solution(bridge_length, weight, truck_weights) {
  let answer = 0,
    bridge = {
      weight: 0, //다리 위 전체 무게
      list: [] // 진입한 차 리스트 {time:진입시점, val:무게}
    }

  while (true) {
    if (!bridge.list.length && !truck_weights.length) {
      //다리 위에 있는 차도 없고, 진입 대기 중인 차도 없는 경우 answer return
      return answer;
      break;
    }
    answer += 1
    if (bridge.list.length) {
      if (bridge.list[0].time + bridge_length === answer) {
        //다리 위의 가장 첫번째 차가 진입한 시간에서 다리 길이 만큼 시간이 지나갔을 경우
        bridge.weight -= bridge.list.shift().val;
        //해당 차는 제거
      }
    }
    if (truck_weights.length) {
      if (weight >= bridge.weight + truck_weights[0]) {
        //현재 다리에 진입된 무게에 다른 차가 추가돼도 괜찮은 경우
        let weight = truck_weights.shift();
        bridge.list.push({
          time: answer,
          val: weight
        });
        pending.weight += weight;
        //다리 위에 차 한 대 더 추가
      }
    }
  }
}
```
```javascript
function solution(bridge_length, weight, truck_weights) {
    let time = 0, //다리를 건너는 시간을 담는 변수 
        cross_trucks=[], //다리를 건너는 중인 트럭들의 배열({time,weight}, ...)
        copy_trucks = truck_weights.concat(), //truck_weights의 copy하여 대기트럭 배열로 사용(다리 진입 시 배열에서 제거)
        bridge_weight = 0; //현재 다리를 건너는 트럭 무게의 총 합(이 변수는 weight값보다 작거나 같아야한다)
    
    //경과시간을 나타내는 loop(대기 중인 트럭이 있거나 다리를 건너는 트럭이 있는 동안 시간을 체크한다)
    while(copy_trucks.length > 0 || cross_trucks.length > 0) {
        time++;
        const truck = copy_trucks[0]; //다리 진입 대기중인 하나의 트럭
        
        //다리를 지난 트럭 Logic
        if (cross_trucks[0] && (cross_trucks[0].time + bridge_length) === time) {
            bridge_weight -= cross_trucks.shift().weight; //다리를 건너는 트럭배열에서 제거 및 현재 건너는 트럭들의 무게에서 뺀다.
        }
        
        //다리를 건너는 트럭 Logic(현재 다리에 진입할려는 트럭이 건너는 트럭들의 무게와 더했을 때 weight보다 낮은 경우 진입)
        if (weight >= (bridge_weight + truck)) {
            bridge_weight += truck;
            cross_trucks.push({time:time, weight:truck}); //다리를 건너는 트럭 배열에 추가
            copy_trucks.shift(); //대기트럭 배열에서 제거
        }
        
    }
    
    return time;
}
```
=======
## 문제 설명
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.    
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.   
   
예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.   
   
|경과 시간|다리를 지난 트럭|다리를 건너는 트럭|대기 트럭|
|---|---|---|---|
|0|[]|[]|[7,4,5,6]|
|1~2|[]|[7]|[4,5,6]|
|3|[7]|[4]|[5,6]|
|4|[7]|[4,5]|[6]|
|5|[7,4]|[5]|[6]|
|6~7|[7,4,5]|[6]|[]|
|8|[7,4,5,6]|[]|[]|   
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.   
   
solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.   
   
## 제한 조건
bridge_length는 1 이상 10,000 이하입니다.   
weight는 1 이상 10,000 이하입니다.   
truck_weights의 길이는 1 이상 10,000 이하입니다.   
모든 트럭의 무게는 1 이상 weight 이하입니다.   
   
## 입출력 예
|bridge_length|weight|truck_weights|return|
|---|---|---|---|
|2|10|[7,4,5,6]|8|
|100|100|[10]|101|
|100|100|[10,10,10,10,10,10,10,10,10,10]|110|
    
## Code
```javascript
function solution(bridge_length, weight, truck_weights) {
  let answer = 0,
    bridge = {
      weight: 0, //다리 위 전체 무게
      list: [] // 진입한 차 리스트 {time:진입시점, val:무게}
    }

  while (true) {
    if (!bridge.list.length && !truck_weights.length) {
      //다리 위에 있는 차도 없고, 진입 대기 중인 차도 없는 경우 answer return
      return answer;
      break;
    }
    answer += 1
    if (bridge.list.length) {
      if (bridge.list[0].time + bridge_length === answer) {
        //다리 위의 가장 첫번째 차가 진입한 시간에서 다리 길이 만큼 시간이 지나갔을 경우
        bridge.weight -= bridge.list.shift().val;
        //해당 차는 제거
      }
    }
    if (truck_weights.length) {
      if (weight >= bridge.weight + truck_weights[0]) {
        //현재 다리에 진입된 무게에 다른 차가 추가돼도 괜찮은 경우
        let weight = truck_weights.shift();
        bridge.list.push({
          time: answer,
          val: weight
        });
        pending.weight += weight;
        //다리 위에 차 한 대 더 추가
      }
    }
  }
}
```
```javascript
function solution(bridge_length, weight, truck_weights) {
    let time = 0, //다리를 건너는 시간을 담는 변수 
        cross_trucks=[], //다리를 건너는 중인 트럭들의 배열({time,weight}, ...)
        copy_trucks = truck_weights.concat(), //truck_weights의 copy하여 대기트럭 배열로 사용(다리 진입 시 배열에서 제거)
        bridge_weight = 0; //현재 다리를 건너는 트럭 무게의 총 합(이 변수는 weight값보다 작거나 같아야한다)
    
    //경과시간을 나타내는 loop(대기 중인 트럭이 있거나 다리를 건너는 트럭이 있는 동안 시간을 체크한다)
    while(copy_trucks.length > 0 || cross_trucks.length > 0) {
        time++;
        const truck = copy_trucks[0]; //다리 진입 대기중인 하나의 트럭
        
        //다리를 지난 트럭 Logic
        if (cross_trucks[0] && (cross_trucks[0].time + bridge_length) === time) {
            bridge_weight -= cross_trucks.shift().weight; //다리를 건너는 트럭배열에서 제거 및 현재 건너는 트럭들의 무게에서 뺀다.
        }
        
        //다리를 건너는 트럭 Logic(현재 다리에 진입할려는 트럭이 건너는 트럭들의 무게와 더했을 때 weight보다 낮은 경우 진입)
        if (weight >= (bridge_weight + truck)) {
            bridge_weight += truck;
            cross_trucks.push({time:time, weight:truck}); //다리를 건너는 트럭 배열에 추가
            copy_trucks.shift(); //대기트럭 배열에서 제거
        }
        
    }
    
    return time;
}
```
>>>>>>> algorithms/master
