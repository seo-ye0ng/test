# SIEM Design Tokens

SIEM 디자인 시스템에서 사용하는 Design Token 저장소입니다.

이 저장소는 **Figma(Tokens Studio)** 에서 관리하는 토큰을 기준으로 하며,
디자이너와 퍼블리셔/개발자가 동일한 기준으로 UI를 구현할 수 있도록
제공합니다.

------------------------------------------------------------------------

# 구성

    .
    ├── Primitives.json
    ├── Semantic.json
    ├── $metadata.json
    └── $themes.json

## Primitives

UI를 구성하는 **기본 값(Raw Value)** 입니다.

포함 항목

-   Color
-   Typography
-   Spacing
-   Radius
-   Sizing

예시

    Blue.60
    Neutral.10
    Spacing.8
    Radius.4
    Fontsize.14

> Primitives는 직접 사용하는 것보다 Semantic Token을 통해 사용하는 것을
> 권장합니다.

------------------------------------------------------------------------

## Semantic

Primitives를 의미 단위로 조합한 토큰입니다.

예시

    Text.Light.Primary
    Background.Light.Default
    Border.Light.Default
    Component.Button.Primary.Strong
    Component.Input.Background.Default

퍼블리싱 시에는 가능한 **Semantic Token을 우선 사용**합니다.

------------------------------------------------------------------------

# 토큰 구조

    Primitives
        ↓
    Semantic
        ↓
    Component
        ↓
    UI

예시

    Blue.60
        ↓
    Text.Light.Brand
        ↓
    Component.Button.Text.Brand
        ↓
    Primary Button

------------------------------------------------------------------------

# 컴포넌트 토큰

현재 포함되어 있는 주요 컴포넌트입니다.

-   Navigation
-   Icon Rail
-   Breadcrumb
-   Tab
-   Button
-   Input
-   Dropdown
-   TextField
-   Checkbox
-   Toggle
-   Tree Toggle
-   Chip
-   Pagination

------------------------------------------------------------------------

# 사용 원칙

-   가능한 Primitive 대신 Semantic Token을 사용합니다.
-   Component Token은 Semantic Token을 참조하여 구성합니다.
-   동일한 UI는 동일한 Token을 사용하여 일관성을 유지합니다.
-   새로운 UI를 추가할 때는 기존 Token을 우선 검토한 후 필요한 경우에만
    추가합니다.

------------------------------------------------------------------------

# 관리 기준

-   Source of Truth : Figma Tokens Studio
-   Token Export : JSON
-   Token Set : Primitives / Semantic

------------------------------------------------------------------------

문의 및 수정 사항은 디자인 시스템 관리 담당자에게 전달해주세요.
