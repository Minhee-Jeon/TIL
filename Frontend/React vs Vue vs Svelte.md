# 개요
회사에서 새로 시작하는 웹 서비스에 사용할 프론트엔드 스택을 결정하기 위해 가장 핫한 FE 스택 세 개를 비교해본다.                 
[[FE] 프론트엔드 3대장 비교와 주관적인 최신 웹 동향에 대해 (feat. React를 기반으로)](https://velog.io/@longroadhome/FE-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-3%EB%8C%80%EC%9E%A5-%EB%B9%84%EA%B5%90%EC%99%80-%EC%A3%BC%EA%B4%80%EC%A0%81%EC%9D%B8-%EC%B5%9C%EC%8B%A0-%EC%9B%B9-%EB%8F%99%ED%96%A5%EC%97%90-%EB%8C%80%ED%95%B4-feat.-React%EB%A5%BC-%EA%B8%B0%EB%B0%98%EC%9C%BC%EB%A1%9C)            
# React
특정 기능을 모듈화해 둔 **라이브러리** 이며, UI를 렌더링하는 데에 전적으로 관여하는 라이브러리이다.         
- Routing (화면 바꾸기) - react-router-dom 모듈         
- 상태 관리 - redux, mobx, recoil 등의 모듈           
- 빌드 - webpack, vite, vercel, npm, ...        
- 테스트 - Eslint, Jest, ...   
                   
리액트를 사용하기 위해서는 JS에 대한 이해도가 요구되며, (CSS Style 적용도 JS로 하는 편) 리액트 고유 문법도 추가적으로 익혀야 해 세 개 중 러닝 커브가 가장 높다.               
하지만 점유율이 가장 높고 커뮤니티가 잘 형성되어 있어 막힐 때마다 참조할 만한 레퍼런스가 아주 많이 있다.           
[리액트의 장점과 단점](https://velog.io/@dbfudgudals/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%EC%9E%A5%EC%A0%90%EA%B3%BC-%EB%8B%A8%EC%A0%90)      
         
# Vue.js
앱을 만들기 위해 필요한 대부분의 것을 갖춘 **프레임워크**. UI 렌더링과 상태 관리에 필요한 것들을 갖추고 있다.        
React에 영향을 받아 비슷한 부분이 꽤 있으나 (Virtual DOM, 컴포넌트 단위, 코어 라이브러리에만 집중하고 라우팅/전역 상태를 관리하는 타 라이브러리가 있음) JS에 익숙하지 않다면 Vue.js가 더 쓰기 용이하다.            
React 다음으로 점유율이 높으며, Vue.js도 레퍼런스가 많다.              
[카카오가 리액트 냅두고 왜 Vue 쓰는지 알려드림](https://codingapple.com/unit/why-use-vue-over-react/)         

React와 Vue는 Virtual DOM을 이용해 기존의 프론트엔드 라이브러리보다 더 좋은 성능을 보였다.         
[Virtual DOM이 뭐가 좋은가?](https://velog.io/@yesbb/virtual-dom%EC%9D%98-%EC%84%B1%EB%8A%A5%EC%9D%B4-%EB%8D%94-%EC%A2%8B%EC%9D%80%EC%9D%B4%EC%9C%A0)         


           
# Svelte
**컴파일러**        
공식 사이트에서는 다음과 같은 세 가지 특징을 내세우고 있다.      
[적은 양의 코드로 작성](https://svelte.dev/blog/write-less-code)하고 [가상 돔을 사용하지 않으며](https://svelte.dev/blog/virtual-dom-is-pure-overhead) [진짜 반응성(Reactive)을 제공한다](https://svelte.dev/blog/svelte-3-rethinking-reactivity).           
지난 몇 년 간 React와 Vue.js 때문에 가상 돔이 빠르다는 인식이 생겼다. 가상 돔은 diffing 알고리즘으로 변경 사항을 파악하고 실제 돔에 적용한다.      
이 때 가상 돔과 이전 스냅샷을 비교하는 오버헤드가 발생할 수 있다.    

스벨트는 빌드 시 실행되어 돔을 업데이트하는 매우 효율적인 코드로 변환해 뛰어난 성능을 가진 애플리케이션을 작성할 수 있다. 스벨트는 변수와 이에 의존하는 모든 것을 업데이트하는 일련의 과정을 매우 간단하게 처리한다. 별도의 API 없이 변수의 할당만으로 업데이트가 가능합니다. 스벨트는 컴파일러이기 때문에 할당을 계측하여 수행한다.

[Svelte 쓰면서 느낀 장단점](https://blog.ashrimp.dev/posts/personal-svelte-pros-and-cons/index.html)            
        
![performance](https://user-images.githubusercontent.com/58028527/219243167-23d18a5c-8b15-40d9-b3bf-d95c0262c937.PNG)          
![transferSize](https://user-images.githubusercontent.com/58028527/219243194-37ee0a72-122b-4c15-9ecf-81b687e3c6e1.PNG)              
