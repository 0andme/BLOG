---
layout: post
current: post
cover: assets/built/images/postcover/react-logo.png
navigation: True
title: 리액트 입문 - 실습(1)
date: 2021-11-18 00:00:02
tags: [react]
class: post-template
subclass: "post"
author: 0andme
---

{% include react-table-of-contents.html %}

---

<!-- excerpt-start -->

### 실습 내용

[실습 1 - 화면에 글씨 출력하기](#실습-1---화면에-글씨-출력하기)

[실습 2 - 요소에 클래스 적용하기](#실습-2---요소에-클래스-적용하기)

[실습 3 - 부모에서 자식으로 문자열 전달하기](#실습-3---부모에서-자식으로-문자열-전달하기)

[실습 4 - props 데이터-타입 지정하기](#실습-4-props-데이터-타입-지정하기)

[실습 5 - 가능한 모든 props 데이터 타입들](#실습-5-가능한-모든-props-데이터-타입들)

[실습 6 - boolean 값 내려보내기](#실습-6---boolean-값-내려보내기)

---

### 실습 전에 기본 구조 살펴보기

<br/>
아래는 실습 전에 기본 적인 폴더 구조에 대해 살펴볼 필요가 있어 간단히 정리한 이미지이다.
<img src="/assets/built/images/react/react실습폴더구조상세.png" alt="실습폴더구조화" style="width:50%">

---

### 실습 (1) - 화면에 글씨 출력하기

1. `C1_Sample` 컴포넌트 생성

   src/component/C1_Sample.js 파일 생성

   ```jsx
   import React, { Component } from "react";
   // 컴포넌트 정의
   function C1_Sample() {
     //return 값에 해당되는 부분이 화면에 렌더링 된다
     return <div>C1_Sample</div>;
   }

   export default C1_Sample;
   ```

2. App.js에 `C1_Sample` 컴포넌트 연결

   ```jsx
   // 컴포넌트 가져오기
   import C1_Sample from "./component/C1_Sample";

   function App() {
     // 컴포넌트 사용하기
     return <C1_Sample />;
   }

   export default App;
   ```

3. 서버에서 확인하기

   ```jsx
   yarn start
   //혹은
   npm start
   ```

   `C1_Sample` 컴포넌트의 `return` 값에 해당되는 부분이 화면에 렌더링 된다.

   <img src="/assets/built/images/react/실습1화면출력.png" alt="실습1번화면에div요소출력">

---

### 실습 (2) - 요소에 클래스 적용하기

1. `C2_AddClassName` 컴포넌트 생성

   src/component/C2_AddClassName.js 파일 생성

   ```jsx
   import React, { Component } from "react";
   function C2_AddClassName() {
     // className 키워드를 사용한다
     return <div className="sample">C2_AddClassName</div>;
   }
   export default C2_AddClassName;
   ```

2. App.js에 연결

   실습 1번의 컴포넌트와 실습 2번 컴포넌트를 나란히 출력하기 위해서는 무조건 부모 요소로 해당 요소들을 아래와 같이 한번 감싸주어야 한다!

   ```jsx
   import C1_Sample from "./component/C1_Sample";
   import C2_AddClassName from "./component/C2_AddClassName";
   function App() {
     return (
       // 부모 요소로 두개의 컴포넌트를 무조건 감싸주어야 두 요소 모두 화면에 렌더링되어 보인다
       <div>
         <C1_Sample />
         <C2_AddClassName />
       </div>
     );
   }
   export default App;
   ```

3. app.css에 스타일 지정

   새로운 css파일을 만들어도 되지만, 기존에 있던 app.css 에 작성했다.

   ```css
   .sample {
     background-color: orange;
   }
   ```

4. 서버에서의 결과

   아래는 클래스를 지정하고 해당 클래스의 css를 작성하여 적용해본 결과이다.
   <img src="/assets/built/images/react/실습2화면출력.png" alt="실습2번의화면출력결과">

---

### 실습 (3) - 부모에서 자식으로 문자열 전달하기

1. `C3_PropsData` 컴포넌트 생성

   src/component/C3_PropsData.js 파일 생성

   ```jsx
   import React from "react";

   class C3_PropsData extends React.Component {
     render() {
       // 부모로부터 받은 name을 name에 저장한다
       // const name은 C3_PropsData컴포넌트에서 사용되는 변수
       // 따라서 name이 아닌 다른 이름을 써도 상관없다
       const name = this.props.name;

       return <span>{name}</span>;
     }
   }

   export default C3_PropsData;
   ```

2. App.js 파일에 연결 및 name 데이터 보내기

   name 데이터를 자식 컴포넌트에 보낸준다.

   ```jsx
   import "./App.css";
   import C1_Sample from "./component/C1_Sample";
   import C2_AddClassName from "./component/C2_AddClassName";
   // 컴포넌트 가져오기
   import C3_PropsData from "./component/C3_PropsData";

   function App() {
     return (
       <div>
         <C1_Sample />
         <C2_AddClassName />
         // 자식 컴포넌트 C3_PropsData에 name 데이터를 보내준다
         <C3_PropsData name="부모로부터 받은 string" />
       </div>
     );
   }
   export default App;
   ```

3. 서버에서 결과 확인

   부모 컴포넌트 App에서 C3_PropsData로 보내준 name데이터의 문자열 "부모로부터 받은 string"이 화면에 잘 출력된다.
   <img src="/assets/built/images/react/실습3화면출력.png" alt="실습3번화면출력결과">

---

### 실습 (4) props 데이터 타입 지정하기

1. `C4_PropsDataString` 컴포넌트 파일 생성

   src/component/C4_PropsDataString.js 파일 생성

   ```jsx
   import React, { Component } from "react";
   // 필수 코드
   import PropTypes from "prop-types";

   class C4_PropsDataString extends Component {
     render() {
       return <div>{this.props.name}</div>;
     }
   }
   // 자료형 선언
   C4_PropsDataString.propTypes = {
     name: PropTypes.string,
   };

   export default C4_PropsDataString;
   ```

2. App.js에 연결 및 데이터 name 데이터 보내기
3. 서버에서 확인

   string이 아닌 데이터를 넘겨주면 에러를 콘솔창에서 확인할 수 있다.

---

### 실습 (5) 가능한 모든 props 데이터 타입들

1. `C5_PropsDataTypes` 컴포넌트 파일 생성

   src/component/C5_PropsDataTypes.js 파일 생성

   ```jsx
   import React, { Component } from "react";
   import PropTypes from "prop-types";
   class C5_PropsDataTypes extends Component {
     render() {
       // props를 객체구조분해해서 데이터추출
       const {
         boolValue,
         numValue,
         arrayValue,
         objValue,
         nodeValue,
         funcValue,
       } = this.props;
       return (
         <div>
           <div> boolValue : {boolValue.toString()}</div>
           <div> numValue {numValue}</div>
           <div> arrayValue :{arrayValue}</div>
           <div>
             objValue :{objValue.name}
             {objValue.age}
           </div>
           <div>nodeValue : {nodeValue}</div>
           <div> funcValue :{funcValue}</div>
         </div>
       );
     }
   }
   // 데이터 타입 지정
   C5_PropsDataTypes.propTypes = {
     // 불린
     boolValue: PropTypes.bool,
     // 숫자
     numValue: PropTypes.number,
     // 배열 (그 중에서 숫자 배열)
     arrayValue: PropTypes.arrayOf(PropTypes.number),
     // 객체
     objValue: PropTypes.object,
     // html
     nodeValue: PropTypes.node,
     // 함수
     funcValue: PropTypes.func,
   };

   export default C5_PropsDataTypes;
   ```

2. App.js 파일에 연결 및 데이터 보내기

   boolean과 number 데이터를 보낼 때는 중괄호 { }를 사용한다.

   ```jsx
   <C5_PropsDataTypes
     boolValue={true}
     numValue={112}
     arrayValue={[1, 2, 3]}
     objValue={{ name: "강강강", age: 30 }}
     nodeValue={<h1>헤더</h1>}
     funcValue={console.log("하하하")}
   />
   ```

3. 서버 열어서 결과 확인

   아래와 같이 데이터가 잘 출력됨을 확인. 함수의 경우 console창에 '하하하'가 출력되었다
   <img src="/assets/built/images/react/실습5화면출력.png" alt="실습5번화면출력결과">

---

### 실습 (6) - Boolean 값 내려보내기

1. `C6_PropsDataBoolean` 컴포넌트 파일 생성

   src/component/C6_PropsDataBoolean.js 파일 생성

   props 데이터 isTrue를 받아 참/거짓에 따라 message의 값이 달라지는 코드

   ```jsx
   import React, { Component } from "react";

   class C6_PropsDataBoolean extends Component {
     render() {
       // props 데이터 isTrue
       const message = this.props.isTrue ? "참" : "거짓";
       return <div>{message}</div>;
     }
   }

   export default C6_PropsDataBoolean;
   ```

2. App.js 파일에 연결 및 isTrue 데이터 보내기

   참/거짓 두가지 경우 모두 출력해보기 위해 컴포넌트를 두 번 추가 했다.

   ```jsx
   <C6_PropsDataBoolean isTrue={false} />
   <C6_PropsDataBoolean isTrue={true} />
   ```

3. 서버 열어서 결과 확인

   보낸 데이터의 참/거짓 여부에 따라 메시지가 다르게 출력되는 것을 확인할 수 있다.
   <img src="/assets/built/images/react/실습6화면출력.png" alt="실습6번화면출력결과">
