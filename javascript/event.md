# Event  
이벤트 속성과 이벤트핸들러(함수)를 연동해 이벤트 발생 시 특정기능을 하도록 이벤트를 활용할 수 있다.   
     
+ 이벤트 설정방법
  - [고전이벤트 모델](### 고전이벤트-모델)    
  - [인라인 이벤트 모델](### 인라인-이벤트-모델)    
  - [표준 이벤트 모델](### 표준-이벤트-모델)    
  - [익스플로러 이벤트 모델](### 익스플로러-이벤트-모델)   
+ [이벤트 전달](## 이벤트-전달)   
  - 이벤트 버블링   
  - 이벤트 캡처   
+ [이벤트 차단](## 이벤트-차단)   
   
   ***
   
## 이벤트 설정방법
### 고전이벤트 모델   
- 요소객체가 가지고 있는 이벤트 속성에 이벤트핸들러를 연결하는 방법   
- 이벤트를 제거할 때는 속성값에 null을 넣어주면 된다.   
- 이벤트발생객체는 핸들러 내부에서 this로 표현 / 스타일 변경 가능 
- 매개변수로 이벤트 정보전달(e, window.event) -> 이벤트객체 전달   
```javascript
var h = document.getElementById("ID명");
h.onclick = function {
    수행기능 설정;
    h(this).onclick = null; //한번만 실행
};
```     
   
### 인라인 이벤트 모델   
- 요소내부에 이벤트를 작성하는 방법   
- <script> 태그에 있는 함수를 호출하는 방식  
```javascript
<h1 onclick='스크립트 내 함수호출'></h1>
``` 
   
### :heavy_check_mark:표준 이벤트 모델   
- 한번에 여러가지 이벤트핸들러 설정이 가능하다.   
- this키워드는 이벤트발생 객체를 의미한다.   
|메소드|내용|   
|---|---|   
|addEventListener(이벤트이름, 핸들러, 확장)|확장: 버블링/캡쳐링|   
|removeEventListener(이벤트이름, 핸들러)|이벤트 삭제|   
```javascript   
var h = document.getElementById("ID명");
h.addEventListener('click', function(){
  수행기능 설정;
});
```
    
### 익스플로러 이벤트 모델   
- 익스플로러 브라우저 적용 모델   
- 한번에 여러가지 이벤트핸들러 설정이 가능하다.   
- this키워드가 이벤트발생 객체가 아니라 window객체를 의미한다.  
|메소드|내용|   
|---|---|   
|attachEvent(이벤트이름, 핸들러)|익스플로러에만 존재하는 메소드|
|detachEvent(이벤트이름, 핸들러)|이벤트 삭제|   
```javascript   
var h = document.getElementById("ID명");
h.attachEvent('onclick', function(){ 
    수행기능 설정;
});
```
***
## 이벤트 전달   
### 이벤트 버블링 (Event Bubbling)   
특정 화면 요소에서 이벤트가 발생했을 때 더 상위의 화면 요소들로 전달되어 가는 특성.   
```html
<body>
	<div class="one">
		<div class="two">
			<div class="three">
			</div>
		</div>
	</div>
</body>
```
```javascript
var divs = document.querySelectorAll('div');
divs.forEach(function(div) {
	div.addEventListener('click', logEvent);
});

function logEvent(event) {
	console.log(event.currentTarget.className);
}
```
여기에서 ``` <div class="three"></div> ``` 를 클릭하면 log에 three, two, one이 찍힌다.   
브라우저는 특정 화면 요소에서 이벤트가 발생했을 때 그 이벤트를 최상위에 있는 화면요소까지 이벤트를 전파시키기 때문이다.   
   
### 이벤트 캡쳐 (Event Capture)   
이벤트 버빌링과 반대방향으로 진행되는 이벤트 전파 방식. 특정 이벤트가 발생했을 때 최상위 요소인
body 태그에서 해당 태그를 찾아 내려간다.  
```html
<body>
	<div class="one">
		<div class="two">
			<div class="three">
			</div>
		</div>
	</div>
</body>
```
```javascript
var divs = document.querySelectorAll('div');
divs.forEach(function(div) {
	div.addEventListener('click', logEvent);
    capture: true;  //옵션 객체 설정하면 이벤트버블링과 반대방향으로 탐색!

function logEvent(event) {
	console.log(event.currentTarget.className);
}
```
``` <div class="three"></div> ``` 를 클릭하면 log에 one, two, three 찍힌다.
   
## 이벤트 차단   
```javascript
function logEvent(event) {
  event.stopPropagation();
}
```
이 API는 해당 이벤트가 전파되는 것을 방해한다.   
이벤트 버블링의 경우, 클릭 요소의 이벤트만 발생시키고 상위요소로 이벤트 전달하는 것을 방해한다.   
이벤트 캡쳐의 경우에는 클릭 요소의 최상위 요소 이벤트만 동작시키고 하위 요소들로 이벤트를 전달하지 않는다.   
```javascript
//이벤트 버블링 예제
divs.forEach(function(div) {
	div.addEventListener('click', logEvent);
});

function logEvent(event) {
  event.stopPropagation();
	console.log(event.currentTarget.className);  //three
}
```
```javascript
//이벤트 캡쳐 예제
divs.forEach(function(div) {
	div.addEventListener('click', logEvent);
    capture: true;  

function logEvent(event) {
  event.stopPropagation();
	console.log(event.currentTarget.className);  //one
}
```
***
## 이벤트 위임 (Event Delegation)   
하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식을 말한다.   

   
