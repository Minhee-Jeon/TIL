<<<<<<< HEAD
## 문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.   

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.   

|종류|이름|
|---|---|
|얼굴|동그란 안경, 검정 선글라스|
|상의|파란색 티셔츠|
|하의|청바지|
|겉옷|긴 코트|   
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.  
스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.   
같은 이름을 가진 의상은 존재하지 않습니다.   
clothes의 모든 원소는 문자열로 이루어져 있습니다.   
모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.   
스파이는 하루에 최소 한 개의 의상은 입습니다.   
## 입출력 예
|clothes|return|
|---|---|
|[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]|5|
|[[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]|3|
## 입출력 예 설명
#### 예제 #1
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.   

1. yellow_hat   
2. blue_sunglasses   
3. green_turban   
4. yellow_hat + blue_sunglasses   
5. green_turban + blue_sunglasses   
   
#### 예제 #2
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.   

1. crow_mask   
2. blue_sunglasses   
3. smoky_makeup   

## Code
```clothes``` 배열을 옷의 종류별로 몇개가 들어오는 지 ```cnt``` 배열에 나눠주고 옷 종류별로 아이템이 몇 개가 있는지를 기준으로 가능한 조합을 세면된다. 만약 A, B, C 세 종류가 들어온다면 가능한 모든 조합은 ```(A+1)(B+1)(C+1)``` 이다.   

```ABC + AB + AC + BC + A + B + C = (A+1)(B+1)(C+1)``` 이다.    
여기에서 최소한 한 개의 아이템이라도 걸치고 있어야 하므로 아무것도 안입고 있는 경우 -1을 빼주어야 한다.   
```javascript
function solution(clothes) {
    const category = [];
    const cnt = [];

    clothes.forEach(cloth => {
       if(category.indexOf(cloth[1]) === -1) {
           var idx = category.length;
           category[idx] = cloth[1];
           cnt[idx] = 1;
       } else {
           const idx = category.indexOf(cloth[1]);
           cnt[idx] += 1;
       }
    });

    //마지막 -1은 아무것도 안 입은 경우를 빼주는 것이다.
    return cnt.reduce((acc, curr) => acc * (curr + 1), 1) - 1;

}
```
아래의 ```Object.values()``` 는 전달된 파라미터 객체가 가지는 값들로 이루어진 배열을 리턴한다.    
```Object.values()``` 안에 들어가는 객체는 ```obj[t[1]]``` 로 ```obj``` 에 ```t[1]``` 에 대한 key가 이미 있으면, 이미 있는 ```obj[t[1]]``` value값 + 1을 해주고, ```obj``` 에 ```t[1]``` key가 없으면 value로 1을 넣어준다.
```javascript
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}
```
=======
## 문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.   

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.   

|종류|이름|
|---|---|
|얼굴|동그란 안경, 검정 선글라스|
|상의|파란색 티셔츠|
|하의|청바지|
|겉옷|긴 코트|   
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항
clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.  
스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.   
같은 이름을 가진 의상은 존재하지 않습니다.   
clothes의 모든 원소는 문자열로 이루어져 있습니다.   
모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.   
스파이는 하루에 최소 한 개의 의상은 입습니다.   
## 입출력 예
|clothes|return|
|---|---|
|[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]|5|
|[[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]|3|
## 입출력 예 설명
#### 예제 #1
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.   

1. yellow_hat   
2. blue_sunglasses   
3. green_turban   
4. yellow_hat + blue_sunglasses   
5. green_turban + blue_sunglasses   
   
#### 예제 #2
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.   

1. crow_mask   
2. blue_sunglasses   
3. smoky_makeup   

## Code
```clothes``` 배열을 옷의 종류별로 몇개가 들어오는 지 ```cnt``` 배열에 나눠주고 옷 종류별로 아이템이 몇 개가 있는지를 기준으로 가능한 조합을 세면된다. 만약 A, B, C 세 종류가 들어온다면 가능한 모든 조합은 ```(A+1)(B+1)(C+1)``` 이다.   

```ABC + AB + AC + BC + A + B + C = (A+1)(B+1)(C+1)``` 이다.    
여기에서 최소한 한 개의 아이템이라도 걸치고 있어야 하므로 아무것도 안입고 있는 경우 -1을 빼주어야 한다.   
```javascript
function solution(clothes) {
    const category = [];
    const cnt = [];

    clothes.forEach(cloth => {
       if(category.indexOf(cloth[1]) === -1) {
           var idx = category.length;
           category[idx] = cloth[1];
           cnt[idx] = 1;
       } else {
           const idx = category.indexOf(cloth[1]);
           cnt[idx] += 1;
       }
    });

    //마지막 -1은 아무것도 안 입은 경우를 빼주는 것이다.
    return cnt.reduce((acc, curr) => acc * (curr + 1), 1) - 1;

}
```
아래의 ```Object.values()``` 는 전달된 파라미터 객체가 가지는 값들로 이루어진 배열을 리턴한다.    
```Object.values()``` 안에 들어가는 객체는 ```obj[t[1]]``` 로 ```obj``` 에 ```t[1]``` 에 대한 key가 이미 있으면, 이미 있는 ```obj[t[1]]``` value값 + 1을 해주고, ```obj``` 에 ```t[1]``` key가 없으면 value로 1을 넣어준다.
```javascript
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}
```
>>>>>>> algorithms/master
