# DOM (Document Object Model)   
   
## 문서객체   
- HTML에 있는 태그를 객체화하여 자바스크립트에서 다룰 수 있게 한 것   
- 모든 노드객체에 접근할 수 있는 요소와 메소드를 제공한다.
   
### 문서객체 제거하기      
페이지 내 작성된 문서의 객체(태그)를 제거한다.  
|메소드|내용|   
|---|---|   
|document.removeChild(객체명)|body태그 자손 태그 제거|   
|객체명.parentNode.removeChile(객체명)|제거할 객체를 기준으로 그 상위 객체로 가서 해당객체를 삭제|   
***
## 노드   
- HTML에 있는 태그를 트리로 구조화했을 때 각각의 태그 == 노드   
   - 요소노드 : 태그 그 자체   
   - 텍스트노드 : 태그에 기록되어 있는 문자.   
      + **h?, p** 등 텍스트노드를 가지는 태그와    
      **img** 와 같이 가지지 않는 태그가 있다.   
      
### 텍스트 노드 있는 문서객체 생성하기  
요소노드와 텍스트노드를 생성하고 이를 body노드의 자식으로 포함할 수 있다.   
    
|메소드|내용|      
|---|---|   
|document.createElement(태그명)|요소노드 생성|   
|document.createTextNode(내용)|텍스트노드 생성|   
|객체명.appendChild(node)|태그에 자손으로 노드를 추가|   
```javascript
let h3 = document.createElement("h3"); //태그생성
        let txtNode = document.createTextNode("안녕, 반갑습니다!"); //자식노드 생성

        h3.appendChild(txtNode);
        area1.appendChild(h3);

        area.innerHTML = "<h3>안녕, 반갑습니다.</h3>"; //위에꺼랑 동일.
```
   
### 텍스트 노드 없는 문서객체 생성하기   
요소노드를 생성하고 속성을 설정한 후 이를 body노드의 자식으로 포함할 수 있다.   
   
|메소드|내용|   
|---|---|   
|객체명(변수).속성 = 속성값|태그 속성값 설정|   
|객체명.setAttribute(속성명, 속성값)|태그에 속성값 설정|   
|객체명.getAttribute(속성명)|태그 속성확인| 
|객체명.appendChild(node)|태그에 자손으로 노드를 추가|     
```javascript
 let imgNode = document.createElement("img");
        imgNode.src = "https://d.pr/2Wnfza+";
        imgNode.height = "150";

        console.log(imgNode); //<img src ="https://d.pr/2Wnfza+" height="150">
        area2.appendChild(imgNode); //이미지노드 추가
```
   
***
## 문서 스타일 수정   
style 객체를 이용하여 문서의 스타일을 변경한다.   
```
객체명.style.속성명 = 속성값;
```
