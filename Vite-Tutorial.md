# Vite Tutorial

## 목차
- [1. 프로젝트 생성하기](#1-프로젝트-생성하기)
- [2. 빌드 및 데브서버 실행](#2-빌드-및-데브서버-실행)
- [3. 원격 저장소에 올리기](#3-원격-저장소에-올리기)
- [4. Github 페이지에 배포하기](#4-Github-페이지에-배포하기)

## 1. 프로젝트 생성하기
```shell
npm init @vitejs/app
```

```shell
yarn create @vitejs/app
```

```shell
npm init @vitejs/app [폴더명] --template [템플릿]
```

## 2. 빌드 및 데브서버 실행
```json
{
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview"
}
```

## 3. 원격 저장소에 올리기
```shell
git remote add origin [원격저장소 주소]
git push -u origin main
```

## 4. Github 페이지에 배포하기
in shell
```shell
npm i -D gh-pages 
```
in `package.json`
```json
{
   "homepage" : "https://[깃허브 아이디].github.io/[저장소 이름]",
   "script": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d [빌드폴더]"
   }
}
```
in `vite.config.ts`
```ts
{
    base: '/design-patterns/'
}
```
in shell
```shell
yarn deploy
```

> [Vite Guide](https://vitejs.dev/guide/)