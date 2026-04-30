# Card Component

## 개요

Card는 관련 정보를 하나의 묶음으로 보여주는 컨테이너 컴포넌트입니다.

## 사용 목적

- 여러 정보를 시각적으로 구분할 때 사용합니다.
- 목록, 대시보드, 프로필, 체크리스트, 요약 정보 등에 사용합니다.
- 카드 내부에는 제목, 설명, 상태, 버튼, 이미지 등이 포함될 수 있습니다.

## Variant

| Variant | 설명 |
|---|---|
| Default | 일반 정보 카드 |
| Selectable | 선택 가능한 카드 |
| Status | 상태를 강조하는 카드 |
| Action | 버튼이나 액션이 포함된 카드 |
| Empty | 데이터가 없는 상태를 안내하는 카드 |

## 구성 요소

| 요소 | 설명 |
|---|---|
| Header | 카드 제목 영역 |
| Body | 주요 콘텐츠 영역 |
| Footer | 버튼, 링크, 보조 정보 영역 |
| Thumbnail | 이미지 또는 아이콘 |
| Badge | 상태 표시 |
| Action Button | 카드 내 액션 |

## State

| State | 설명 |
|---|---|
| Default | 기본 상태 |
| Hover | 마우스를 올린 상태 |
| Selected | 선택된 상태 |
| Disabled | 선택 또는 액션 불가 상태 |
| Empty | 데이터 없음 상태 |

## 토큰 매핑 예시

| 속성 | 토큰 |
|---|---|
| Background | `semantic.color.card.background` |
| Border | `semantic.color.card.border` |
| Radius | `semantic.radius.card` |
| Shadow | `semantic.shadow.card` |
| Padding | `semantic.spacing.card.padding` |
| Gap | `semantic.spacing.card.gap` |

## 사용 예시

```text
회원 정보 카드
자녀 정보 카드
공지사항 카드
지원 공고 카드
체크리스트 카드
상품 요약 카드
```

## 사용 시 주의사항

- 카드 안에 너무 많은 정보를 넣지 않습니다.
- 클릭 가능한 카드와 단순 정보 카드는 시각적으로 구분합니다.
- 선택 가능한 카드라면 selected 상태가 명확해야 합니다.
- 상태 정보가 중요한 경우 badge나 status text를 함께 사용합니다.

## 개발 전달 메모

- Card는 children을 받을 수 있는 유연한 구조가 좋습니다.
- variant와 selected 상태를 props로 분리합니다.
- 모바일에서는 카드 간 간격과 터치 영역을 충분히 확보합니다.
