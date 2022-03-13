# tabling_homework

#### 🔗 배포 링크 : https://reserve-status.netlify.app/

* [파일 구조](#파일-구조)
* [커밋 컨벤션](#커밋-컨벤션)
* [서비스 시나리오](#서비스-시나리오)
* [실행 방법](#실행-방법)

#### 🖥 Desktop
![screen-recording](https://user-images.githubusercontent.com/56878724/158055294-868706c8-12bd-4d98-893e-30583e37bc67.gif)

#### 📱 Mobile

![screen-recording-_1_](https://user-images.githubusercontent.com/56878724/158055317-7d8d29a3-44a2-45c8-adaf-1c047d0db115.gif)


### 파일 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┗ 📜Header.scss
 ┃ ┣ 📂ReserveView
 ┃ ┃ ┣ 📂ReserveDetail
 ┃ ┃ ┃ ┣ 📜ReserveDetail.js
 ┃ ┃ ┃ ┗ 📜ReserveDetail.scss
 ┃ ┃ ┣ 📂ReserveStatus
 ┃ ┃ ┃ ┣ 📜ReserveStatus.js
 ┃ ┃ ┃ ┣ 📜ReserveStatus.scss
 ┃ ┃ ┃ ┣ 📜ReserveStatusItem.js
 ┃ ┃ ┃ ┗ 📜ReserveStatusItem.scss
 ┃ ┃ ┣ 📜ReserveView.js
 ┃ ┃ ┗ 📜ReserveView.scss
 ┣ 📂scss
 ┃ ┣ 📜_common.scss
 ┃ ┗ 📜_reset.scss
 ┣ 📂utils
 ┃ ┣ 📜getApi.js
 ┃ ┣ 📜statusRegex.js
 ┃ ┗ 📜timeRegex.js
 ┣ 📜App.js
 ┣ 📜index.html
 ┗ 📜index.js
```

* <b>`components`</b> : **컴포넌트로 추상화**한 view 관련 자바스크립트 파일을 관리하는 폴더입니다.
* <b>`scss`</b> : 공통 스타일을 관리하는 폴더입니다.
* <b>`utils`</b> : 반복해서 쓰이는 로직을 보관하는 폴더입니다.


### 커밋 컨벤션

```
docs: 문서 작업
style: 주석 추가, 간단한 코드 추가 및 수정, 스타일링
refactor: 코드 리팩토링 
feat: 기능 구현 및 추가
conf: 프로젝트 환경 설정
chore: package.json 관련
```

### 서비스 시나리오

📌 구현된 사항에 대한 시나리오입니다. 배포 사이트에서 작동할 때 참고하시면 됩니다.

* 페이지 첫 진입 시 디폴트로 첫 번째 리스트의 상세 정보가 오른쪽에 표시됩니다.
* 각 리스트 클릭 시 해당하는 상세 정보가 오른쪽에 표시됩니다.
* 화면 크기 1024px 미만으로 줄일 시 모바일 환경으로 변경됩니다.
* 모바일 환경에서 리스트 클릭 시 예약 상세 정보 팝업 창이 표시됩니다. (slide-up)
* 닫기 버튼 클릭 시 팝업 창이 닫힙니다.
* 화면 크기 1024px 이상으로 늘릴 시 팝업으로 확인한 상세 정보가 오른쪽에 표시되며 초기 화면 구조와 동일해집니다.

### 실행 방법

```
$ git clone https://github.com/bxxmi/tabling_homework.git

$ cd tabling_homework

$ yarn install
$ yarn start
```
