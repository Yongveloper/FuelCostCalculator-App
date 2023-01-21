# 기름값 계산기

## 🌟소개

<p align='center'>
<img width="340px" alt="logo" src="https://user-images.githubusercontent.com/64254228/213861968-9287651b-f5cc-42e4-9c3b-9e3278100b7e.jpg">
</p>

😁현재 리터당 기름비와 연비를 통해 <strong>주유 예상 금액</strong>과 <strong>주유량</strong>을 계산해주는 앱😁

배포: 배포 전

<p align='center'>
    <img src="https://img.shields.io/badge/Typescript-v4.3.5-blue?logo=typescript"/>
    <img src="https://img.shields.io/badge/React Native-v0.69.6-blue?logo=react"/>
    <img src="https://img.shields.io/badge/expo-v~46.0.16-darkgray?logo=expo"/>
</p>

## ❗ What I Earned

- <strong>TypeScript</strong> 기본적인 사용 및 이해
- <strong>공공API(현재 유가)</strong> 사용 및 이해
- <strong>Expo와 React Native의 관계</strong> 이해
- <strong>ReactNative Event</strong>
- <strong>ReactNative Components</strong> 이해
- <strong>ReactNative Navigation (화면이동)</strong>
- <strong>ReactNative env</strong> 적용
- <strong>ReactNative StyleSheet</strong>
- <strong>ReactNative Animation</strong>

## 🌟 주요 기능 및 화면

## 첫 화면

<img width="340" alt="view1" src="https://user-images.githubusercontent.com/64254228/213862335-adfe8c15-c3b1-4126-9cca-3fceb24f30b2.png">

- 앱 로딩 후 첫 화면에서는 유류 가격 메뉴에 대한 직접입력 Input만 활성화 되어 있고, 로딩 버튼이 활성화 되어 있다.
- 유류 가격 배열에 값이 없다면 계산하기 버튼을 비활성화 하고 로딩 버튼이 나타날 수 있게 함.
- 운행할 거리, 차량 평균 연비 Input에는 숫자만 입력이 가능하도록 keyboard type 설정과 정규식을 활용함

## 첫 화면(로딩 버튼 실행)

<img width="340" alt="view2" src="https://user-images.githubusercontent.com/64254228/213862673-c859f159-b41e-4f7b-988d-9da70a519b8a.png">

- 공공 API와 fecth메서드를 활용해서 현재 날짜 기준 평균 유가 가격을 받아옴.
- 유류 종류를 선택하거나 직접입력 Input에 가격을 직접 입력하고, 운행거리, 평균 연비 Input에 값이 있다면 계산하기 버튼이 활성화 됨.
- navigation을 활용하여계산하기 버튼을 누르면 결과 화면으로 이동함.

## 결과 화면

<img width="340" alt="result-view" src="https://user-images.githubusercontent.com/64254228/213862731-13e1d9e5-9dc1-4ee7-bb88-816b0fd339ea.png">

- 첫 화면에서 입력한 내용들을 props로 넘겨준 후 계산된 내용을 표시함.
- 결과 화면으로 넘어오고 예상 주유량, 예상 주유 금액이 표시 될 때 react animate를 활용해서 fadeIn animation으로 표시
- 다시 계산하기 버튼 실행 시 navigator를 활용해 첫 화면으로 돌아감.

## 앱 실행 화면

<img width="340" alt="result-page" src="https://user-images.githubusercontent.com/64254228/213862997-d8dbab2d-e624-4977-b9f3-fff6d631f248.gif">

# 💻 프로젝트 실행 방법

1.gitignore 파일

```
/* .env 파일 */
API_URL = http://www.opinet.co.kr/api/avgAllPrice.do?out=json&code=발급API키
```

2. root Dir: npm i
3. root Dir: npm start or expo start
