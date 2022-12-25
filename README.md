# 스마일게이트 블로그 프로젝트

프로젝트 시작 전 설정한 목표는 [다음](/docs/목표%20설정.md)과 같습니다. 프로젝트를 진행하며 바뀐 목표는 아래와 같습니다.

## 요구사항

- 반응형 디자인
- markdown 기반의 글 쓰기 및 수정 기능
- 글 목록 조회 및 삭제 기능
- 댓글 기능
- 관리자 도구 기능: 댓글순으로 글 정렬, 좋아요순으로 글 정렬 등
- 좋아요 기능

## 기술 스택
- Frontend
    - React
    - Recoil
    - styled-components
    - TOAST UI Editor
- Backend
    - Express.js
    - mongoDB
## 목표
### 프론트

-[ ] 유지보수를 고려한 **클린코드** 작성
-[x] useMemo, useCallback, React.memo을 사용해 **성능 최적화**하기
-[x] styled-components를 활용한 여러 기기에서 유저 경험으로 고려한 **반응형 디자인** 구현
-[x] 상태 관리 라이브러리인 Recoil을 도입해 전역 상태관리하기

### 백엔드

-[x] mongoDB를 통한 데이터베이스 설계
-[x] Express.js를 사용한 **CRUD** 및 **Restful API** 구현
-[ ] **Swagger**을 활용해 문서화하기

### 최종 목표

- React 추가 학습을 통해 **성능 최적화**와 **개발 생산성** 높이기
- 여러 기기에서 최적의 유저 경험을 제공하는 **반응형 디자인** 구현하기
- 추후 백엔드 개발자와 원활한 소통을 위해 기본적인 **CRUD**에 대해 학습하기

## 1차 스프린트 (~12/25)
- 프론트: 반응형 디자인, 메인 페이지, 글 작성 페이지, 댓글을 제외한 글 상세 페이지 구현
- 백: 관리자 도구를 제외한 기능(글 CRUD, 댓글 CR, 좋아요 CRD) 구현
- storybook은 디자인이 완료된 후 atom/molecules/organisms로 디자인을 분류할 때 가장 활용도가 높다고 생각해, 디자인과 개발을 동시에 진행하는 이번 프로젝트에서 제외했습니다.


### 1차 스프린트 후기
- 모바일, 태블릿, pc 환경에서 사용자에게 최적의 경험을 제공하기 위한 반응형 디자인을 우선적으로 개발했습니다.
- 이미지를 첨부할 때, 별도의 이미지 서버에 저장됩니다. 또한 여러 장의 이미지를 첨부할 수 있습니다.
- 다크 모드를 구현했습니다. 아쉬운 점은 `Toast UI Editor Viewer`가 다크 모드를 지원하지 않는다는 점입니다...
- 서버 개발이 처음이었는데 이미지 저장까지 다루게 되어, 백엔드 개발자에게 요구사항 중 어떠한 요구사항이 특히나 까다로운지 알 수 있었습니다.

## 2차 스프린트
### 목표
- [ ] fe: 유지보수를 고려한 **클린코드** 작성
- [ ] fe: Recoil에 대한 완전한 이해
- [ ] fe: 댓글 컴포넌트 및 조회 기능
- [ ] fe: 댓글 작성 컴포넌트 및 기능
- [ ] fe: 글 수정 기능
- [ ] be: Swagger을 통한 문서화 혹은 api 문서 작성
- [ ] 관리자 도구 기능 구체화