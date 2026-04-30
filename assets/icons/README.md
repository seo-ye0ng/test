# Icons

## 개요

이 폴더는 서비스에서 사용하는 아이콘 에셋을 관리합니다.

## 권장 파일 형식

- SVG를 우선 사용합니다.
- PNG는 필요한 경우에만 사용합니다.
- 여러 해상도가 필요한 경우 파일명에 크기를 명시합니다.

## 네이밍 규칙

```text
ic_기능_위치.svg
```

예시:

```text
ic_arrow_orderform.svg
ic_close_modal.svg
ic_search_header.svg
ic_plus_childmanagement.svg
```

## 관리 규칙

- 같은 의미의 아이콘은 중복 저장하지 않습니다.
- 색상이 토큰으로 제어되어야 하는 아이콘은 SVG 구조를 유지합니다.
- 아이콘의 stroke, fill 값이 하드코딩되어 있다면 별도로 표시합니다.
- 사용하지 않는 아이콘은 삭제 전에 사용처를 확인합니다.

## 개발 전달 메모

- 가능하면 SVG를 React Component 또는 Icon Component로 변환합니다.
- 색상은 CSS currentColor 또는 디자인 토큰을 사용할 수 있도록 관리합니다.
