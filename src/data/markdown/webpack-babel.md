CRA는 너무나도 고마운 존재이지만 한계가 있었다. 나같은 경우는 file을 제대로 불러오지 못한다는점과 dev 모드와 production 모드에 포트 넘버를 바꾼다던가 ... 그런 일들과 마주쳤을때 글을 읽었다

> 님 왜 CRA 쓰셈?

# 👨🏻‍💻 Webpack 이란

webpack은 **module bundler** 이다.

html 파일에 들어가는 javascript 파일들을 하나의 자바 스크립트 파일로 만들어 주는 방식을 module bundler 라고 하며, 그것을 도와주는 bundler중 하나가 webpack이라는 것이다.

CRA을 쓰는 이유 중 제일 큰이유는 바로 SPA (single page application) 인데, webpack 을 사용함으로서 html 페이지에 여러가지 javascript파일들을 한 곳에 모아버릴수 있다. 즉, 이게 바로 SPA module bundling 이라는 것이다. 즉, **SPA를 만들기 위해 javascript 파일들을 모을 때 주로 사용한다.**

또한, **파일을 컴파일 하는 시간도 단축**시켜주고 (여러개의 파일들 X), **웹페이지 성능 최적화**도 해준다.

즉,

- Webpack = Module bundler = multiple javascript files ⇒ 1 webpack
- 장점
  - SPA: 한 개의 html 페이지에 여러개의 자바스크립트 파일들
  - 컴파일시 javascript 파일들 모아줌
  - 웹페이지 성능 최적화

단점이라곤... 러닝 커브가 좀 높다는거 ?

## Webpack의 속성

1. **Entry**

   Entry는 최저 자바스크립트 파일경로이다. (대충... `index.js`가 될 듯한데). 이 Entry로 모든 파일들을 하나의 파일로 묶어버린다.

2. **Output**

   Entry에서 찾은 모듈을 하나의 js 파일로 묶어버릴 위치를 설정한다. 대부분 '`./build`', '`./dist`' 와 같은 곳으로 지정한다.

3. **Loader**

   Webpack은 기본적으로 `js` 파일만 지원을 한다. 그래서 `js`뿐만 아니라 `jsx`, `ts`, `tsx` 심지어 `css`까지 읽고 빌드 할 수 있도록 지원 해주는 속성이다.

4. **Plugin**

   웹팩의 기본적인 설정 외 다른 `loader`나 plugin을 설정 해줄수 있다.

# 👨🏻‍💻 Babel 이란?

Babel은 자바스크립트 ES6 문법을 ES5로 변환 시켜주는 transpiler이다.

ES6는 굉장히 신선하고 많은 브라우저들이 호환을 해준다. 근데, 왜 최신 ES6을 안사용하냐고? 아직도 세상에 11%는 익스플로러를 사용하고 있기 때문이다....

# 🚀 React without create-react-app

본격적으로 시작해 볼 예정이다. 우선 react-typescript로 만들계획이다.

```bash
mkdir <react-project> && cd <react-project>
npm init -y                   # package.json 초기 설정
```

```bash
yarn add react react-dom                                # react download
yarn add -D typescript @types/react @types/react-dom    # devDependencies
```

```bash
tsc --init                    # tsconfig.json 초기 설정
```

```bash
# babel 설정
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime
```

```bash
# webpack 설정
yarn add -D webpack-dev-server webpack-cli webpack
```
