# 📋 To-do List

간단한 TypeScript + React + styled-components 기반 To-do List 애플리케이션입니다.<br>
할 일 추가·편집·삭제·완료 토글 기능과 다중 선택 후 일괄 삭제 기능을 제공합니다.

![Image](https://github.com/user-attachments/assets/8b34db9d-87e8-450c-8c60-eb0cd4ac2115)

## 🔎 주요 기능
할 일 추가: 입력창에 텍스트 입력 후 Enter

인라인 편집: 목록 아이템 클릭 또는 Enter/Escape 키 제어

완료 토글: “완료”/“취소” 버튼으로 상태 전환

개별 삭제: 각 아이템의 “삭제” 버튼

다중 선택 & 일괄 삭제: 체크박스로 여러 항목 선택 → 상단 “선택 삭제” 버튼

## 🛠️ 기술 스택
언어: TypeScript

프레임워크: React

스타일: styled-components

번들러: Vite (또는 Create React App)

상태 관리: React Hooks (useReducer) + 로컬스토리지 동기화

## 🚀 설치 및 실행
```javascript
- 레포지토리 클론
git clone https://github.com/your-username/ts-todo-app.git<br/>
cd ts-todo-app

- 의존성 설치
npm install
또는
yarn

- 개발 서버 실행
npm start
또는
yarn start
