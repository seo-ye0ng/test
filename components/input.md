# Input Component

## 개요

Input은 사용자가 텍스트, 숫자, 이메일, 비밀번호 등 값을 입력하는 컴포넌트입니다.

## 사용 목적

- 회원가입, 로그인, 검색, 설정 화면에서 사용자 입력을 받을 때 사용합니다.
- 입력값 검증 결과를 상태와 메시지로 명확히 전달합니다.

## Input Type

| Type | 설명 |
|---|---|
| Text | 일반 텍스트 입력 |
| Email | 이메일 입력 |
| Password | 비밀번호 입력 |
| Number | 숫자 입력 |
| Search | 검색어 입력 |
| Tel | 전화번호 입력 |

## State

| State | 설명 |
|---|---|
| Empty | 입력 전 상태 |
| Typing | 입력 중 상태 |
| Complete | 입력 완료 상태 |
| Success | 유효성 검증 성공 |
| Warning | 유효성 검증 실패 또는 주의 |
| Error | 요청 실패 또는 심각한 오류 |
| Disabled | 비활성 상태 |
| Readonly | 읽기 전용 상태 |

## 구성 요소

| 요소 | 설명 |
|---|---|
| Label | 입력 필드의 제목 |
| Input Field | 실제 입력 영역 |
| Placeholder | 입력 전 안내 문구 |
| Helper Text | 보조 설명 |
| Validation Message | 성공/경고/에러 메시지 |
| Clear Button | 입력값 삭제 버튼 |
| Icon | 검색, 비밀번호 보기 등 보조 아이콘 |

## 토큰 매핑 예시

| 속성 | 토큰 |
|---|---|
| Border Color Default | `semantic.color.input.border.default` |
| Border Color Focused | `semantic.color.input.border.focused` |
| Border Color Warning | `semantic.color.input.border.warning` |
| Text Color | `semantic.color.input.text` |
| Placeholder Color | `semantic.color.input.placeholder` |
| Background | `semantic.color.input.background` |
| Radius | `semantic.radius.input` |
| Padding | `semantic.spacing.input.padding` |

## Validation 규칙 예시

```text
아이디:
- 6자 이상 20자 이하
- 영문 소문자, 숫자 사용 가능
- 특수문자 사용 불가

비밀번호:
- 8자 이상
- 영문, 숫자, 특수문자 조합
- 비밀번호 확인 값과 일치해야 함
```

## UX Writing 예시

| 상황 | 메시지 |
|---|---|
| 아이디 조건 불일치 | 아이디는 6자 이상 입력해주세요. |
| 사용 가능한 아이디 | 사용할 수 있는 아이디예요. |
| 비밀번호 불일치 | 비밀번호가 일치하지 않아요. |
| 필수값 미입력 | 필수 입력 항목이에요. |

## 개발 전달 메모

- 입력 중인 상태와 입력 완료 상태를 구분해야 합니다.
- Success/Warning/Error 메시지는 상태에 따라 다르게 노출합니다.
- 비밀번호 확인 필드는 실시간 검증이 필요할 수 있습니다.
- 접근성을 위해 label과 input은 명확히 연결되어야 합니다.
