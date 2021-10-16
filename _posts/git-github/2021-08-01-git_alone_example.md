---
layout: post
current: post
cover:  assets/built/images/postcover/gitgithub.png
navigation: True
title: 혼자하는 Git/Github 전체적인 흐름 알아보기 - 예시

date: 2021-08-01 00:00:01
tags: [git-github]
class: post-template
subclass: 'post'
author: 0andme
---
{% include gitgithub-table-of-contents.html %}
---

## 예시
<img src="https://images.velog.io/images/0mi/post/044f5d46-0af8-45a9-ac80-a693d95a63a4/image.png"> <a href="https://images.velog.io/images/0mi/post/044f5d46-0af8-45a9-ac80-a693d95a63a4/image.png" target='_blank'>위의 이미지 크게 보기</a>


<!-- excerpt-start -->

위와 같은 흐름대로 진행됩니다.

### 1. Clone 
#### `문서` 폴더의 `dev`폴더에 `gitex` 저장소 복제해오기

1-1. 원격 저장소 gitex의 주소를 복사

<img src="https://images.velog.io/images/0mi/post/5e8ab1ad-7798-4e8c-bcef-6546e3013758/image.png" width="100%">

1-2. 문서/dev폴더에서 마우스 오른쪽 클릭 후 git bash Here 클릭

<img src="https://images.velog.io/images/0mi/post/430a2249-a4cf-4f0f-8033-416fd2a0a645/image.png" width="100%">

1-3. `git clone 원격저장소 gitex의 주소` 입력

<img src="https://images.velog.io/images/0mi/post/51a101a2-c06a-411c-b59d-f3a9cf1e4173/image.png" width="100%">

1-4. `cd`명령어를 이용하여 로컬 저장소 폴더로 이동

<img src="https://images.velog.io/images/0mi/post/861b9392-90b7-4d96-a7a3-01e7e744b5ad/image.png" width="100%">

 
---
   
### 2. branch와 checkout
#### 로컬 저장소에 새로운 branch new branch `생성` 하고 `이동`하기

2-1. 브랜치 생성하기

<img src="https://images.velog.io/images/0mi/post/835c9969-cd43-4127-91b1-804cccc57d8e/image.png" width="100%">


2-2. 브랜치로 이동하기
<img src="https://images.velog.io/images/0mi/post/30239dc1-39a9-470c-b44c-c5726e2c26e3/image.png" width="100%">


---

### 3. add와 commit
#### `README.md` 수정하고 `add`와 `commit`하기

3-1. 파일 수정하기

<span style="color:gray">나의 경우 vim 에디터에서 가볍게 수정하였고 아래의 내용을 작성하였다.</span>

<img src="https://images.velog.io/images/0mi/post/6bdfb83f-031d-4b9b-80ee-77dbf4180314/image.png" width="100%">


3-2. add 하기

<img src="https://images.velog.io/images/0mi/post/fc8ac539-5c6e-4a48-8817-04ca0b0ef0b9/image.png" width="100%">



3-3. commit하기

<img src="https://images.velog.io/images/0mi/post/fb6612f1-96ac-449b-afc1-9a77ade483a5/image.png" width="100%">

    
---
    
### 4. push
#### 원격저장소에 로컬 브랜치 `new`를 `push`하기

4-1. push하기

<img src='https://images.velog.io/images/0mi/post/870353df-6649-4778-9ea0-cbe074d18264/image.png' width="100%">


4-2. 확인해보기

<img src='https://images.velog.io/images/0mi/post/4094aa55-ebc2-4765-89ef-107307b3c37d/image.png' width="100%">

github의 원격저장소로 가서 위의 버튼을 누르면 현재 브랜치들이 나오는데 new브랜치가 있는 것을 확인할 수 있다.

<img src='https://images.velog.io/images/0mi/post/dd2f1a85-0915-48d5-b7be-d3d0dd883783/image.png' width="100%"/>

new 브랜치를 클릭하면 로컬에서 변경한 작업이 원격 저장소에도 반영되었음을 알 수 있다.
<img src='https://images.velog.io/images/0mi/post/a52e2bb8-0f1a-4fea-b017-aeffc240ed08/image.png' width="100%"/>


---

### 5. PR 보내기
5-1. github에서 풀리퀘스트를 생성한다. 어떤 브랜치를 어디에 병합하는지 확인하고 적절한 멘트를 작성한다.

<img src="https://images.velog.io/images/0mi/post/f9505cf3-f628-4bdc-8224-7106d88eca36/image.png" width="100%"/>

5-2. merge를 하고자 하면 아래 이미지의 버튼을 누른다.

<img src="https://images.velog.io/images/0mi/post/65224e53-38af-4158-a8d2-495d72c3ae4f/image.png" width="100%"/>

---

### 6. pull과 fetch+merge로 충돌 해결하기

6.1 로컬에서 push할때의 충돌 해결하기
충돌 상황을 만들기 위해 아래와 같이 github의 new 브랜치에서 README.md파일을 변경하였다.
<img src="https://images.velog.io/images/0mi/post/bcc510d8-3d83-4eb1-a9b4-51969989ad9e/image.png" width="100%">

로컬 new 브랜치에서도 아래와 같이 README.md파일을 변경하고 add, commit, push를 진행하면 충돌이 나며 push가 거절된다.

<img src="https://images.velog.io/images/0mi/post/ce36cbc1-f817-4025-9c21-470571f5f5a8/image.png" width="100%">

아래의 명령어로 원격 저장소의 브랜치 new의 변경사항을 로컬로 가져와 병합까지 진행한다.

<img src="https://images.velog.io/images/0mi/post/38ed34b9-c64c-4a44-8149-a796907fd997/image.png" width="100%">

다시 파일을 열어 수정한 후  add, commit, push를 차례대로 다시 하면 된다. <span style="color:gray">아래는 로컬에서 README.md 파일을 다시 열어 수정한 것이다.</span>

<img src="https://images.velog.io/images/0mi/post/75446f9b-88ff-477d-a19b-3211680d28de/image.png" width="100%">

github으로 돌아가 병합하여 수정한 파일이 제대로 올라갔는지 확인하면 된다.

<img src="https://images.velog.io/images/0mi/post/1145b8e5-36ea-455b-97a5-42b8cc5d39ef/image.png" width="100%">

6.2 PR에서 충돌 해결하기
충돌상황을 만들기 위해 아래와 같이 github의 main브랜치에서 README.md파일을 변경하였다.

<img src="https://images.velog.io/images/0mi/post/d025b2d8-7d13-4efe-a592-f1ad818fc103/image.png" width="100%">

PR을 생성하고 보니 아래와 같이 README.md 파일에서 충돌이 있음을 알 수 있다.

<img src="https://images.velog.io/images/0mi/post/52edfe2b-c373-46ce-8cb4-c98b11b06a47/image.png" width="100%">


이를 해결하기 위해 로컬에서 main의 변경사항을 가져온다.

<img src="https://images.velog.io/images/0mi/post/82d5aaf6-3e52-45c3-9c0a-ea4e4ad3f428/image.png" width="100%">

충돌이 일어났던 README.md 파일을 수정하고 다시 add, commit, push를 차례대로 다시 한다. push할때 main이 아닌 PR을 보낸 브랜치로 보내야 한다.

<img src="https://images.velog.io/images/0mi/post/7534af96-9ff0-4352-a83c-a29723755589/image.png" width="100%">




