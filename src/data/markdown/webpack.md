<!-- ![스크린샷 2021-12-29 오후 3.12.49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c2838b13-249c-4117-9109-a06c9f13a7bb/스크린샷_2021-12-29_오후_3.12.49.png) -->

> **Webpack**은 여러개의 파일들을 하나의 파일로 합쳐주는 module bundler 입니다.
> 

## Installation

```bash
npm init
npm install --save-dev webpack webpack-cli
```

package.json

```json
...
"scripts": {
    "start": "webpack"
}
...
"devDependencies": {
    "webpack": "...",
    "webpack-cli": "..."
}
```

---

기존 방법은 아래와 같이 모든 파일들을 `html` 파일에 때려박아야 했다. 그래야지 서로 서로가 필요한 `function`들이나 필요한 코드들을 인용/사용할수 있었다.

```html
<html>
...
    <script src="..."></script>
    <script src="..."></script>
    <script src="..."></script>
    <script src="..."></script>
</html>
```

하지만 `npx create-react-app`을 사용해봐서 알겠지만, 그거는 정말로 안좋은 구성에 코드이며 순서가 상관이 있기 때문에 에러 또한 잘 날 수 밖에 없었다.

즉, Webpack을 사용하게 되면 import / export를 이용해서 다른 파일에서 수식이나 파일을 가져와서 사용할 수 있다.

---

## 🚀 Webpack Configuration

Webpack configuration을 하지 않았던 지금은 `index.js` 을 찾았었고 그 파일이 있으면 최초 진입 파일을 index.js 로, 없다면 error가 발생했다는 것을 확인 했었을것이다. 또한, webpack을 실행시키면, dist라는 폴더에 main.js라는 파일에 모듈화 된 파일을 저장했었다.

이 기본 설정을 바꾸기 위해서 webpack.config.js를 생성해주자.

```jsx
// webpack.config.js
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}
```

- mode: 어떤 방식으로 배포(?) 할 건지도 고를 수 있다. production 이 default 이다. (production, development, none)
- entry: 최초의 시작 code. entrypoint
- output: 배포시 생성되는 결과물
    - filename: 결과물, 파일 이름
    - path: 경로 (`__dirname`은 현재 `webpack.config.js`가 있는 폴더라고 생각하면 편하다. 실제로는 full path. 이것은 `const path = require(”path”)`가 꼭 있어야지 작동한다

`webpack.config.js`를 실행시키기 위해 package.json 도 수정한다.

```json
...
"scripts": {
    "start": "webpack --config webpack.config.js"
}
...
```

---

## 🚀 Loaders

loaders 는 js 파일 뿐만 아니라 다른 파일들을 import 할 수 있게끔 도와준다. (css, sass, svg 등등..) 

loaders는 다양한 종류들이 있는데, style-loader, file-loader 등등... 그것은 [여기](https://webpack.js.org/loaders/)에서 확인하면 된다.

css 를 한번 넣어보자!

우선 1, style-loader와 css-loader를 다운로드 받는다.

```jsx
npm install --save-dev style-loader css-loader
```

그 다음, 아래와 같이`webpack.config.js` 에 추가적으로 css-loader와 style-loader를 .css로 정확하게 끝나는 파일들에 한에서 사용해주자.

```jsx
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}
```

⚠️

**css-loader**: css 코드를 가지고 javascript 파일에서도 eval 할 수 있게끔 도와준다. 

**style-loader**: 변환된 javascript 파일을 이용해서 style을 해준다. Inject styles into DOM

순서도 상관있다. (뒤에부터 읽는다, css-loader를 읽고 style-loader로 적용한다)

당연히 sass는 sass-loader `([”style-loader”, “css-loader”, “sass-loader”])`

---

## 🚀 Cache Busting & Plugins

웹사이트를 들어갈때마다, 새로고침을 하던, 하드 새로고침을 해보면 Network 에 Cache가 저장된거를 가끔씩 본 적이 있을 것이다. 

만약에 그 Cache가 업데이트 된 뒤에도 이전 Cache를 사용된다면 업데이트가 된 이후로도 예전 버전의 css 나 js 파일을 가지고 있을 것이다. 그 outdate 버전을 보여주는것을 방지하기 위해서 *content hash*를 사용해보자!

Cache busting을 사용함으로서 실제 코드를 바꾸면 output file을 새로운 파일 이름으로 지정해준다!

```jsx
// webpack.config.js
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    }
}
```

`main.[contentHash].js` 로 filename 을 바꿨기 때문에 cached version을 불러오지 않고 새로운 파일을 (main.jaiudvjic12390.js)을 불러온다.

하지만 문제는 `index.html` 에 script로 추가 되었던 파일 이름은 예전처럼 main.js일텐데... 매번 main.contentHash.js로 바꾸어 주는것이 아니라 Plugins을 사용해서 index.html에 매번 바꿔준다.

---

## 🚀 Plugins

방금 Cache Busting 에서 언급된 index.html에서 script를 자동으로 불러 오는 기능은 `html-webpack-plugin`을 사용해주면 해결이 가능하다.

```bash
npm install --save-dev html-webpack-plugin
```

사용 방법은 아래와 같다. 

```jsx
// webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/template.html"
            }
        )
    ]
}
```

`plugins: [new HtmlWebpackPlugin()]`  를 넣어 주고 dist (out directory)폴더를 보면 새로운 `index.html`이 생긴것을 확인 할 수 있다. 

argument인 `template.html` 은 index.html와 비슷한 이미지 이고 그 이미지를 토대로 새로운 index.html을 dist 폴더 안에 넣어준다.

즉, plugin을 사용해서 index.html을 새롭게 만들어 줄수 있다. 

미래에 CRA 형식 처럼 public 폴더, src 폴더를 따로 만들었다면 `template.html`은 `./public/index.html`로 변경 가능하다.

---

## Dev mode and Prod mode

webpack.config.js / webpack.common.js : General Configuration file

webpack.dev.js: Developement mode

webpack.prod.js: Production mode

곂치는 부분이 있을 수 있고 그것을 Production mode나, development에서 공유 할 수 있다. 그 공유되는 configuration파일을 합치는 방법이 있는데, 바로 webpack-merge를 사용하는 것이다.

```bash
npm install --save-dev webpack-merge
```

```jsx
// dev.js or prod.js
const common = require('./webpack.common');
const merge = require('weback-merge');

module.exports = merge(common, {
	...
});
```

prod.js 나 dev.js 파일을 가지고 있는 것만으로도 npm start, npm run build로 dev 모드, production 모드를 지정할 수 있다.

```json
// package.json
{
    ...,
    "scripts": {
        "start": "webpack --config webpack.dev.js",
        "build": "webpack --config webpack.prod.js",
    }	
}
```

### server

```jsx
npm install --save-dev webpack-dev-server
```

```json
// package.json
{
    ...,
    "scripts": {
        "start": "webpack-dev-server --config webpack.dev.js --open",
        "build": "webpack --config webpack.prod.js",
    }	
}
```

`webpack-dev-server`: 개발 서버로서 수정이 된 파일들을 실시간으로 업데이트 해주는 기능을 가지고 있다. (`npm run build`처럼 새로운 파일을 생성 하지 않는다)

`—-open`: default 브라우저를 열어준다.

---

## 🚀 Html-loader, file-loader

이미지와 다른 형식의 파일들은 지금 까지 배운 정보로는 dist, build 폴더에 저장이 되지 않아서 build를 실행 했을때, 이미지/파일을 확인 할 수 가 없다. 물론 dist, build에 파일을 그대로 복사하는 방법도 있지만 어떻게 일일이 다 복붙을 할 수 있겠는가..

그래서 assets, img, 그런 폴더들을 build나 dist 폴더에 복사를 하는 방법을 알아보자.

### html-loader

예를 들어, `<img src=”image.png”>` 가 있다면 `require(’./image.png’)`를 무조건 실행시키고 그 파일을 어떻게 작동 할 건지 결정하는 역할을 한다.

```bash
npm install --save-dev html-loader
```

```jsx
// webpack.common.js
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
}
```

이 상태에서 만약 `index.html`이 `<img src=”./assets/image.png”/>` 가 있었고, build를 한다면 어떤 일이 일어날까? ⇒ 바로 import를 하고, loader를 찾으라는 에러가 나온다.

그 의 알맞는 loader가 무엇일까?

### file-loader

file-loader는 각종 다양한 파일들 (png, jpeg ...)를 읽어주는 것을 도와주는 loader이다.

```bash
npm install --save-dev file-loader
```

```jsx
// webpack.common.js
module.exports = {
    ...
    module: {
        rules: [
            ...,
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]"
                        outputPath: "imgs",
                    }
                }
            }
        ]
    }
}
```

`name: “[name].[hash].[ext]”` : test에서 곧장 use를 쓰는 방법도 있지만, 다른 option들도 추가할 수 있다. 현재 option 같은 경우는 export할 때의 파일이름이 어떻게 달라지는지를 컨트롤한다.

`outputPath`: build를 하면 이름들도 바뀌고, 그 파일들을 지정 폴더에 넣는다.

즉, `npm run build` 를 하면,

`./dist/imgs/webpack.jiaovjcio23e4890.svg` 이라는 파일이 생성된다.

---

## Clean-webpack

hash 나 contentHash를 사용한다면 hash를 포함한 파일들이 계속해서 생성된다. 그래서 한번 정리해주는 plugin도 존재한다.

```bash
npm install --save clean-webpack-plugin
```

production 모드에만 사용하는 plugin이니, webpack.prod.js에 넣어보자

```jsx
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	...
	plugins: [new CleanWebpackPlugin()]
}
```

---

## Multiple Entry

```jsx
module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    }
}
```

Tip: 생성되는 파일이름을 `main.[hash].js` 에서 `[name].[hash].bundle.js`로 변경 해주자.

`[name]`은 vendor가 생성될 수 도 있기 때문에,

`bundle`은 여러개의 entry가 합쳐졌기 때문에

예시 에서는 `vendor.js` 에 `import “bootstrap”` 한줄 만 넣었다, 그 줄 하나만 넣어도 `index.html`에서는 당연히 main 뿐만 아니라 vendor도 같은 entry 에 있기 때문에 `index.html`에서 `import “bootstrap”`을 소환 할 수 있었던 것이다.

---

## Extract CSS and Minify html/javascript/css

지금 까지의 방식이라면 javascript로 불러올때, css가 javascript화 된 상태에서 css 데이터들을 불러온다. 즉 build 폴더에는 css 파일이 생성이 되지 않고 javascript안에서 해결한다.

이 것의 단점은 바로 처음 불러올때이다. 물론 속도가 빠르겠지만, 처음에 load를 할 때는 style이 되어있지 않은 javascript와 html을 뱉어버린다 🤮

### mini-css-extract-plugin

```jsx
npm install --save-dev mini-css-extract-plugin
```

```jsx
// webpack.prod.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
        ...
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}
```

이렇게 사용한다면 build 폴더에 모든게 합쳐져 있는 1개의 hash css 파일도 생성이 되며, `index.html` 에는 그것이 포함되어 있는 코드가 생성이 되어있다.

💡 다 좋은데, css 파일이 너어어어어무 길다면 ? **optimize-css-assets-webpack-plugin** (css 파일을 minify 해주는 Plugin.)

```jsx
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin**");**
module.exports = {
    ...
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    }
    ...
}
```

⚠  하지만, 이것을 사용한다면 기존에 minify 되었던 javascript가 이제는 Minify가 안된다는것을 확인 할 수 있다. 그래서 **terser-webpack-plugin**도 추가해야한다.

```jsx
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin**");**
const TerserPlugin = require("terser-webpack-plugin"**);**
module.exports = {
    ...
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    }
    ...
}
```

자, 그러면 html은 어떻게 minify 할까 ? `HtmlWebpackPlugin` 을 사용하면 된다.

```jsx
module.exports = {
    ...
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }})]}
```

> 확실히 CRA는 편리하게 시작할 수 있지만, Web 상에서 더 많은 관리와 내가 원하는 입 맛으로 설정을 하고 싶다면 무조건 webpack & babel을 써야한다고 생각한다. 
본인 같은 경우는 markdown 파일을 CRA에서 읽으려고 할때 마음대로 되지 않았는데, webpack이라는 것을 알게 되고 문제를 한방에 해결할 수 있었다..

잘가라, CRA...
>