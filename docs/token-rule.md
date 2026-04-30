# Token Rule

## 개요

이 문서는 디자인 토큰의 구조와 사용 규칙을 정의합니다.

## 토큰 분류

디자인 토큰은 크게 Primitive Token과 Semantic Token으로 구분합니다.

## Primitive Token

Primitive Token은 가장 기본이 되는 원시 값입니다.

예시:

```text
color.blue.500
color.gray.100
spacing.16
radius.8
font.size.14
```

Primitive Token은 직접 컴포넌트에 사용하는 것보다 Semantic Token을 통해 사용하는 것을 권장합니다.

## Semantic Token

Semantic Token은 실제 UI 의미를 가진 토큰입니다.

예시:

```text
color.button.primary.background
color.button.primary.text
color.input.border.warning
color.card.background
spacing.button.paddingX
radius.card
```

Semantic Token은 컴포넌트나 화면에서 직접 사용하는 것을 권장합니다.

## 권장 사용 방식

```text
Primitive Token
→ Semantic Token
→ Component
```

예시:

```text
color.blue.500
→ color.button.primary.background
→ Primary Button background
```

## 색상 토큰 규칙

| 유형 | 예시 |
|---|---|
| Primitive | `color.blue.500` |
| Semantic | `color.button.primary.background` |
| Component | `button.primary.background` |

## 간격 토큰 규칙

| 유형 | 예시 |
|---|---|
| Primitive | `spacing.4`, `spacing.8`, `spacing.16` |
| Semantic | `spacing.button.paddingX` |
| Component | `button.padding.horizontal` |

## Radius 토큰 규칙

| 유형 | 예시 |
|---|---|
| Primitive | `radius.4`, `radius.8`, `radius.16` |
| Semantic | `radius.button`, `radius.card`, `radius.input` |

## 토큰 변경 시 주의사항

- Primitive Token 변경은 여러 Semantic Token에 영향을 줄 수 있습니다.
- Semantic Token 변경은 연결된 컴포넌트 UI에 직접 영향을 줍니다.
- 큰 변경 전에는 어떤 컴포넌트가 영향을 받는지 확인해야 합니다.

## 개발 전달 메모

- 개발에서는 Semantic Token 기준으로 사용하는 것이 좋습니다.
- Primitive Token을 직접 코드에 사용하는 것은 최소화합니다.
- 토큰 변경 이력은 Git commit message에 명확히 남깁니다.
