# Vite

## 기능
- NPM 종속성 해결 및 사전 번들링
  - 페이지 로딩 속도를 개선하고 CommonJS / UMD 모듈을 ESM으로 변환하기 위해 사전 번들로 제공합니다. 
  - 사전 번들링 단계는 esbuild로 수행되며 Vite의 콜드 시작 시간을 JavaScript 기반 번 들러보다 훨씬 빠르게 만듭니다.
- Hot Module Replacement
  - Vite는 네이티브 ESM을 통해 HMR API를 제공합니다. 
  - Vite는 Vue 단일 파일 구성 요소 및 React Fast Refresh에 대한 자사 HMR 통합을 제공합니다.
- Typescript 기본 지원
  - Vite는 esbuild를 사용하여 TypeScript를 vanilla tsc보다 약 20 ~ 30 배 빠른 JavaScript로 변환하고 HMR 업데이트는 50ms 이내에 브라우저에 반영 될 수 있습니다
