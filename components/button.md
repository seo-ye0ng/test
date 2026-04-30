# Button Component

## 개요

Button은 사용자의 주요 행동을 실행하기 위한 컴포넌트입니다.  
예: 저장, 다음, 확인, 삭제, 제출

## 사용 목적

- 사용자가 명확한 액션을 수행해야 할 때 사용합니다.
- 화면 내 주요 CTA(Call To Action)를 강조할 때 사용합니다.
- 동일 화면에 너무 많은 Primary Button을 사용하지 않습니다.

## Variant

| Variant | 설명 |
|---|---|
| Primary | 화면에서 가장 중요한 액션 |
| Secondary | 보조 액션 |
| Tertiary | 낮은 강조도의 액션 |
| Danger | 삭제, 탈퇴 등 주의가 필요한 액션 |
| Disabled | 사용할 수 없는 상태 |

## Size

| Size | 설명 |
|---|---|
| Large | 주요 CTA 또는 하단 고정 버튼 |
| Medium | 일반적인 폼 액션 |
| Small | 카드 내부나 보조 액션 |

## State

| State | 설명 |
|---|---|
| Default | 기본 상태 |
| Hover | 마우스를 올린 상태 |
| Pressed | 버튼을 누른 상태 |
| Focused | 키보드 포커스 상태 |
| Loading | 요청 처리 중 상태 |
| Disabled | 비활성 상태 |

## 토큰 매핑 예시

| 속성 | 토큰 |
|---|---|
| Background | `semantic.color.button.primary.background` |
| Text Color | `semantic.color.button.primary.text` |
| Border Radius | `semantic.radius.button` |
| Padding X | `semantic.spacing.button.paddingX` |
| Padding Y | `semantic.spacing.button.paddingY` |
| Font | `semantic.typography.button` |

## 사용 예시

```text
Primary Button:
- 회원가입 완료
- 저장하기
- 다음으로

Secondary Button:
- 취소
- 이전으로

Danger Button:
- 삭제하기
- 탈퇴하기
```

## 사용 시 주의사항

- 한 화면에 Primary Button은 가능한 1개만 사용합니다.
- Disabled 상태에서는 이유를 함께 안내하는 것이 좋습니다.
- Loading 상태에서는 중복 클릭을 방지해야 합니다.
- Danger Button은 사용자가 실수하지 않도록 확인 절차와 함께 사용합니다.

## 개발 전달 메모

- Button은 variant, size, state를 props로 받을 수 있어야 합니다.
- Loading 상태에서는 텍스트 또는 spinner 처리가 필요합니다.
- Disabled 상태에서는 클릭 이벤트가 실행되지 않아야 합니다.
