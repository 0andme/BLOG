---
layout: post
current: post
cover:  assets/built/images/postcover/gitgithub.png
navigation: True
title: 함께하는 Git/Github 팀원과 프로젝트 함께하기

date: 2021-08-10 00:00:01
tags: [git-github]
class: post-template
subclass: 'post'
author: 0andme
---
{% include gitgithub-table-of-contents.html %}

---
> 📌모두가 다음과 같은 흐름으로 작업을 하지 않으며 개인의 작업 흐름을 정리해둔 글입니다.
git/github 사용의 전체적인 흐름을 파악하고 이해해보는 것이 목표입니다

> 📌이 글은 타인의 원격저장소와 나의 저장소(원격,로컬)를 다룹니다.
git 명령어들을 이해하고 있다는 가정하에 작성한 것입니다.

>윈도우 환경에서 실습을 진행 / vim 으로 커밋 메세지를 작성 / CLI 환경만 이용


<!-- excerpt-start -->

## ◼ 전체적인 흐름
전체적인 흐름은 다음과 같다.

간단히 말해 팀장이 프로젝트를 담을 `메인 원격 저장소`를 만들고 이를 팀원들이 `각자의 원격저장소`(서브 저장소)로 복사해서 작업한 후 팀장의 원격 저장소로 모은다고 생각하면 된다.<span style="color:gray"> 팀장을 메인 저장소의 주인이라고 쉽게 생각하면 되고 `메인 원격 저장소`와 `서브 저장소`는 쉬운 구분을 위해 이 글에서 사용하는 단어다.</span>
> 예제와 함께 해보자 
> 
> 혼자해보는 것이라면 두개의 github계정이 있어야 한다.
> 
> 또한 가상머신이나 두 대의 PC가 있어야 로그인과 로그아웃을 반복하지 않을 수 있다.

---

## ◼ 공통 👨‍👧‍👦
### 이슈 생성

프로젝트를 진행하면서 발생하는 모든 작업이 이슈가 될 수 있다. (기능 개발, 버그 수정, 건의사항, 업데이트 등등) 팀장과 팀원 모두가 `메인원격저장소(팀장의 github)`에 이슈를 생성 할 수 있다.

<img src="https://images.velog.io/images/0mi/post/efc3940b-ed05-42fe-b635-589feae6bd8e/image.png" width="100%"/>

---

## ◼ 팀장 🏠
### 1. 프로젝트를 위한 원격 저장소 만들기 

팀장 `0andme`가 다음과 같이 자신의 github에 `git_project`원격 저장소를 만들고 팀원에게 해당 저장소 주소를 공유한다.
<img src="https://images.velog.io/images/0mi/post/e5222613-d888-4aef-83b5-2b10fd59b66b/image.png" width="100%"/>

앞으로 이 저장소는 `메인 저장소`가 되며 개개인이 작업한 결과물을 한 곳에 모으는 곳이 된다. 실습에서는 팀장이 `new` 브랜치를 만들었고 모든 팀원은 해당 브랜치로 PR을 보내는 형태로 진행된다.
### 2. milestone,프로젝트 생성 

팀장은  milestone과 프로젝트를 생성할 수 있다.

+ **Milestone 생성**

이슈들을 그룹화하는 Milestone을 생성하면 이슈들을 묶어 관리할 수 있다.
<img src="https://images.velog.io/images/0mi/post/98abc717-cb6c-4a8e-a713-e09987532ed0/image.png" width ="100%">

+ #### 팀장의 프로젝트 생성
실습에는 템플릿을 `Automated kanban`을 사용했다.
<img src="https://images.velog.io/images/0mi/post/79d4b98b-891a-450c-882b-54328f771b67/image.png" width ="100%">

프로젝트 탭에서 프로젝트가 잘 생성됐는지 확인해보면 아래와 같이 나타날 것이다. 템플릿을 적용한 형태이기 때문에 다른 템플릿을 골랐다면 다르게 나타날 것이다. issue 목록에서 issue 카드를 드래그 앤 드롭으로 To do, Done등으로 옮기며 작업 상황을 변경하면 된다.
<img src="https://images.velog.io/images/0mi/post/6fa3829f-a137-4474-8d78-bba3c470206e/image.png" width ="100%">


### 3. 작업하기
팀장은 메인 저장소가 자신의 저장소이니 자유롭게 파일을 올리면 되는데 실습에서는 팀장이 해당 프로젝트를`new` 브랜치에서 작업하였다.

### 4. 승인하고 merge하기 
팀장은 팀원이 보낸 PR을 확인하여 수정사항이 필요하면 코멘트를 남기거나 바로 merge를 하면 된다.
### 5. 원격 저장소의 변경사항 로컬로 가져오기
팀원의 파일이 자신의 원격저장소에 merge되었음으로 자신의 로컬에서 작업한 내용을 push하기 전에 원격저장소의 변경사항을 받아오는 작업을 해야 충돌이 나지 않는다.
<a href='https://0andme.github.io/git_alone_2' target="_blank"> 참조 링크</a>
> <span style="color:red">git fetch</span><span style="color:blue"> origin</span><span style="color:green"> new</span>
<span style="color:red">git merge</span><span style="color:blue">  FETCH_HEAD</span>

---

## ◼ 팀원 🏠

### 1. 팀장의 원격 저장소 가져오기 fork 

fork란 타겟이 되는 저장소의 사본을 가져오는 것이다. 팀장의 원격저장소에서 fork버튼을 누르고 팀원의 로컬에서 내려받으면 된다. clone과 다른 점은 fork된 저장소를 변경할 수 있다는 점이다.
팀장 `0andme`의 원격 저장소 `git_project`에서 오른쪽 상단의 fork버튼을 누르면 로딩 후 `팀원 이름(0andme2) / 팀장의 원격저장소 이름(git_project)` 형태로 팀원의 원격 저장소가 생긴다. 그리고 그 이름 아래에는 어디서 fork된 저장소인지도 나온다.
<img src="https://images.velog.io/images/0mi/post/ddf77d21-a8bb-4731-ab1d-753a07ce3c29/image.png" width ="100%">


### 2. 새로운 브랜치에서 작업하기 
팀원은 자신의 원격 저장소가 생겼으니 이를 로컬에서 다운 받아 작업을 시작하면 된다.
원격 저장소를 복제하고 작업한 후 결과물을 나의 원격 저장소에 push하는 것까지 아래의 흐름대로 따라 하면 된다. 간단하게 clone하기-> 파일 생성 등의 작업하기-> add하기->commit하기->push하기이다. <a href="https://0andme.github.io/git_alone_1" target='_blank'>참조 링크</a>

팀장은 `new`브랜치에서 작업을 하고 있다. 팀원도 동일한 브랜치에서 작업할 순 있지만 또다른 브랜치를 생성하고 나서 new브랜치로 머지한 후 PR을 보내는 것을 더 권장한다.

### 3. PR 생성 
PR 퀘스트를 보낼 때 한번 더 확인해봐야하는 것은 아래와 같이 팀원의 원격저장소의 어떤 브랜치를 팀장의 원격저장소의 어떤 브랜치로의 merge를 요청하는지이다. 실습에서 팀장의 `new`브랜치로 merge하기로 하였으므로 이를 확인하고 보내면 된다. <span style="color:gray">대부분 잘 정해져있다.</span> **이때 코멘트를 작성하는 부분에 `#`을 작성하면 자동으로 현재 생성된 이슈목록들이 나온다.** 목록 중에서 현재 merge를 요청한 작업이 어떤 이슈에 대한 작업물인지 찾아 클릭하면 된다. 실습에서는 이슈번호가 5였다. <a href='https://0andme.github.io/git_alone_2' target="_blank"> PR 생성 참조 링크</a>

<img src="https://media.vlpt.us/images/0mi/post/65b1e51d-7ecb-4937-b68a-b512f6d74250/image.png" width ="100%">

### 4. 메인 원격 저장소의 변경사항 받아오기 

PR이 승인되면 팀장의 원격저장소의 `new`브랜치의 변경사항이 생기게 된다. 다음 작업을 위해선 팀장과 마찬가지로 팀원도 이를 자신의 로컬저장소로 가져오는 작업이 필요하다.
#### 1.**upstream 추가하기**
PR을 생성하려고 하거나 혹은 생성했는데 충돌로 인해 merge가 되지 않는다고 나온다면 팀장의 원격 저장소의 변경사항을 로컬로 가져와서 작업한 후 PR을 요청했던 나의 원격저장소로 push해주면 된다. 이때 새로운 원격 저장소를 추가해줘야 한다. 이때 나오는 개념이 upstream이다.

<img src="https://images.velog.io/images/0mi/post/8f985894-7282-4cc6-a2a3-509112eb76b5/image.png" width ="100%">

간단히 말하면 나의 로컬 저장소에서 봤을때`fork한 남의 저장소`가`upstream`, `내 원격저장소`가 `origin`인 것이다.

실습예제 상황에서 봤을 때, 팀원`0andme2`의 로컬 저장소 입장에서 팀장`0andme`의 원격 저장소는`upstream`, 팀원의`내 원격저장소`가 `origin`인 것이다.

먼저 아래의 git명령어로 현재 로컬 저장소와 연결된 원격 저장소 목록을 확인해볼 수 있다.
> <span style="color:red">git remote</span><span style="color:blue"> -v </span>

upstream에 해당되는 주소가 없다면 아래의 명령어로 추가하면 된다. 이때 'upstream'은 별칭이기 때문에 다른 별칭을 사용해도 되지만 통상적으로 upstream이라고 이름붙인다.
> <span style="color:red">git remote add upstream </span><span style="color:blue">[타인의 원격저장소 주소]</span>


#### 2. 변경사항 받아오기
팀장의 원격 저장소의 변경사항을 가져오는 것이기 때문에 origin이 아닌 upstream의 new 브랜치에서 변경사항을 가져와야 한다는 것을 알면 된다.

> <span style="color:red">git fetch</span><span style="color:blue"> upstream</span><span style="color:green"> new</span>

> <span style="color:red">git merge</span><span style="color:blue">  FETCH_HEAD</span>

