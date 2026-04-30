# Harness Engineering Repository

이 저장소는 디자인 자료, 디자인 토큰, 컴포넌트 명세, 에셋, 문서 규칙을 관리하기 위한 하네스 엔지니어링 저장소입니다.

## 목적

- 디자인 토큰을 GitHub에서 버전 관리합니다.
- 컴포넌트별 사용 규칙과 상태를 문서화합니다.
- 아이콘, 이미지, 로고 등 에셋을 정리합니다.
- 디자이너와 개발자가 같은 기준으로 UI를 이해할 수 있도록 합니다.
- AI가 저장소를 읽고 구조 분석, 문서 정리, 코드 변환을 도와줄 수 있도록 합니다.

## 폴더 구조

```text
.
├─ tokens/
│  ├─ primitives.json
│  └─ semantic.json
├─ components/
│  ├─ button.md
│  ├─ input.md
│  └─ card.md
├─ docs/
│  ├─ naming-rule.md
│  ├─ token-rule.md
│  └─ ai-guide.md
└─ assets/
   ├─ icons/
   └─ images/
```

## 폴더 설명

### tokens

색상, 폰트, 간격, radius, shadow 등 디자인 토큰을 관리합니다.

### components

버튼, 인풋, 카드 등 UI 컴포넌트의 구조, 상태, 사용 규칙을 문서화합니다.

### docs

네이밍 규칙, 토큰 사용 규칙, AI 분석 가이드 등 프로젝트 공통 문서를 관리합니다.

### assets

아이콘, 이미지, 로고 등 UI에 사용되는 시각 자료를 관리합니다.

## AI에게 요청할 수 있는 작업

- 전체 저장소 구조 분석
- 디자인 토큰 구조 분석
- 컴포넌트 명세서 정리
- 토큰 기반 CSS 변수 생성
- React 컴포넌트 초안 생성
- Figma와 개발 코드 간 매핑 구조 제안
- 네이밍 규칙 정리
