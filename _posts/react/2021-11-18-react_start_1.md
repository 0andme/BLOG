---
layout: post
current: post
cover: #assets/built/images/postcover/gitgithub.png
navigation: True
title: 리액트 입문 - 시작하기
date: 2021-11-18 00:00:01
tags: [react]
class: post-template
subclass: "post"
author: 0andme
---

{% include react-table-of-contents.html %}

---

<!-- excerpt-start -->

### 실습 환경 만들기

<br/>

**1. 설치**

```jsx
npm i -g create-react-app
```

위의 명령어를 입력하여
react 프로젝트를 만들기 위한 기본 셋팅을 시작한다.
<span style="color:gray">vue를 공부할 때는 필요한 패키지들을 하나 하나 다운 받고 설정을 했는데 이번에는 아래 명령어를 사용하여 react 사용을 위한 기본 셋팅이 전부 되어있는 프로젝트를 만들어보았다.</span>

**2. 프로젝트 만들기**

```jsx
npx create-react-app 프로젝트명

npx create-react-app 프로젝트명 --use-npm
```

위의 명령어 중 하나를 터미널에 입력한다. 명령어를 입력하면 명령어를 수행한 폴더 바로 아래에 `프로젝트명`으로 폴더가 하나 생긴다. 아래와 같은 파일들이 들어있으면 된다.

<span style="color:gray"> 아래는 `211118` 이라는 프로젝트를 생성했을 때 최초 생성된 폴더의 구조이다</span>
<img src="/assets/built/postImages/react/react최초생성폴더.png" alt="프로젝트 생성시 최초 폴더 구조">

**3. yarn 설치**

```jsx
npm i -g yarn
```

필수는 아니지만 `yarn` 도 글로벌로 설치하였다

**4. 실습 파일 저장 폴더 만들기**

Src 폴더 아래 `component` 폴더를 만든 후 그 아래에 파일이나 폴더를 넣어 실습을 진행하였다. <span style="color:gray"> node버전은 14 버전</span>

**5. 서버 열기**

```jsx
npm start
yarn start
```

위의 명령어를 중 하나를 입력해 로컬 서버를 연다.프로젝트 생성 후 파일 변경 없이 그대로 서버를 열었다면 아래와 같은 서버가 열린다. 이제 프로젝트를 시작하면 된다!
<img src="/assets/built/postImages/react/react최초서버.png" alt="react 프로제긑 서버 최초 실행시 서버이미지">
