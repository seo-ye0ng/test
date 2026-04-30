# Naming Rule

## 개요

이 문서는 디자인 파일, 컴포넌트, 아이콘, 에셋, 토큰의 네이밍 규칙을 정의합니다.

## 기본 원칙

- 이름만 보고 역할을 추정할 수 있어야 합니다.
- 같은 유형의 요소는 같은 구조로 이름을 짓습니다.
- 불필요한 축약어는 피합니다.
- 대소문자와 구분자를 일관되게 사용합니다.

## 컴포넌트 네이밍 규칙

컴포넌트는 다음 구조를 사용합니다.

```text
형식_이름_위치
```

예시:

```text
ic_arrow_orderform
btn_submit_login
card_child_childmanagement
section_profile_mypage
```

## 아이콘 네이밍 규칙

```text
ic_기능_위치
```

예시:

```text
ic_arrow_orderform
ic_close_modal
ic_search_header
ic_plus_childmanagement
```

## 이미지 네이밍 규칙

```text
img_내용_위치
```

예시:

```text
img_empty_childmanagement
img_profile_mypage
img_onboarding_home
```

## 버튼 네이밍 규칙

```text
btn_액션_위치
```

예시:

```text
btn_submit_login
btn_next_signup
btn_delete_childmanagement
btn_cancel_modal
```

## 섹션 네이밍 규칙

```text
section_내용_위치
```

예시:

```text
section_profile_mypage
section_notice_home
section_child_childmanagement
```

## 상태 화면 네이밍 규칙

```text
상태_위치_디바이스
```

예시:

```text
empty_childmanagement_tablet
fullseat_childmanagement_tablet
error_login_mobile
success_signup_mobile
```

## 주의사항

- location은 화면명 또는 영역명을 기준으로 작성합니다.
- 같은 화면에서 반복되는 컴포넌트는 역할을 더 구체적으로 작성합니다.
- 임시 이름인 `copy`, `new`, `final`, `real_final` 등은 사용하지 않습니다.
