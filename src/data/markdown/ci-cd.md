# CI/CD란 ?

- CI (Continuous Integration): 지속적인 통합, 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트 되어 공유 레포지토리에 통합되는 것을 의미 합니다.
  - 다수의 개발자가 커밋과 빌드/테스트/병합을 지속적으로 사용하며 공유하여 사용하는 환경
  - 작은 기능/서비스/컴포넌트 별로 나누어서 개발하는 환경 (Agile)
- CD (Continuous Delivery/Deployment): 지속적인 서비스 제공 / 지속적인 서비스 배포
  - 개발자의 변경 사항들을 레포지토리 뿐만 아니라 프로덕션 환경까지 배포 되는 것
  

결국 DevOps의 영역은 맞지만 어째 나는 Fullstack이 되려하는 사람 아닌가.

아무튼

## Github Actions

CI/CD의 예시로는 많은 플랫폼이 있다. Jenkins, Travis CI, Circle Ci 등등... 하지만 나는 제일 새로운 Github의 기능인 Github Actions를 사용하려 한다.

Github Actions는 Github 자체에서 개발한 CI/CD 도구라고 생각하면 되고 Github 저장소를 사용하며 소프트웨어 개발 흐름 (workflow)를 정해서 자동화 해주는 도구라고 생각하시면 됩니다.

```yaml
# Github actions 예제

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
  branches: [ master ]
  pull_request:
  branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
  # The type of runner that the job will run on
  runs-on: ubuntu-latest

  # Steps represent a sequence of tasks that will be executed as part of the job
  steps:
    # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
    - uses: actions/checkout@v2

    # Runs a single command using the runners shell
    - name: Run a one-line script
    run: echo Hello, world!

    # Runs a set of commands using the runners shell
    - name: Run a multi-line script
    run: |
      echo Add other actions to build,
      echo test, and deploy your project.
```

---

# 테스트란?

테스트는 코드가 잘 작동이 되는지 안되는지를 확인하는 것을 일컫는데, 리액트 같은 경우에는 컴포넌트에 버튼이 잘 눌리는지, 키보드 입력이 잘되는지 일일히 확인하는것이 아니라 미리 만들어 놓는 테스트 코드를 돌려서 코드가 잘 작동되는지 자동화 작업을 하는 것을 말한다. 이는 테스트 자동화이다. 

# 유닛 테스트 / 통합 테스트

유닛 테스트는 제일 기본적이고 작은 단위의 테스팅이다

- 컴포넌트가 잘 렌더링 되는가?
- 컴포넌트의 특정 함수를 실행하면 원하는 상태로 바뀌는가?
- 리덕스의 액션 생성 함수가 액션 객체를 잘 만들어 내는가?
- 리덕스의 리듀서 상태와 액션 객체를 넣어서 호출하면 새로운 상태를 잘 만들어 주는가?

등, 컴포넌트와 리덕스의 테스팅을 여기에서 유닛 테스팅을 이용하여 확인하면 좋다.

통합테스트는 기능들이 전체적으로 잘 작동하는지 확인하는 전체적인 테스팅이다.

- 여러 컴포넌트들이 렌더링도 잘 되고 서로 상호작용을 잘 하고 있는가
- DOM 이벤트를 발생 시켰을때 UI 변화가 잘 이루어 지는가 ?
- 리덕스와 연동된 컨테이너 컴포넌트의 DOM 특정 이벤트를 발생시켰을때 원하는 액션이 잘 디스패치 되는가?

# 리액트 테스팅 방법

우선 create-react-app을 하면 제일 기본적인 테스팅은 dependencies로 package.json에 저장이 된다. 

```bash
@testing-library/jest-dom       # jest를 이용한 테스팅
@testing-library/react          # 리액트 테스팅
@testing-library/user-event
```

본인 같은 경우 처음으로 snapshot이라는 테스팅 기술도 알게되었는데, 그 것을 사용하려면 따로 `react-test-renderer`를 install 해야한다.

예를 들어 **Button** 이라는 컴포넌트를 만들었다고 가정하며 그 Button이라는 컴포넌트가 잘 작동이 되는지 테스트를 할 때 폴더 스트럭쳐는 이렇게 된다

```bash
components
└── button
  ├── __test__               # __test__ 폴더 생성
  │   └── button.test.js     # jest로 테스트 할때는 항상 폴더 이름이 이런식으로 쓰여야한다.
  ├── button.css
  └── button.js
```

## 기본적인 테스팅

button.test.js 을 한번 살펴 보면...

```jsx
import React from "react";
import { render } from "@testing-library/react";

it ('renders without crashing', () => {
    render( <Button /> )
})
```

- `it` : 제일 많이 쓰이는 것은 `describe, it, test` 이 세 가지 인것 같다. 이 커맨드는 테스트를 한개로 감싸주는 역할을 하는데 특히 `describe` 은 큰 그룹을 묶어 주고, `it`는 테스트를 뜻한다. 즉 미래에 더 복잡한 테스팅에서는 `describe`안에 여러개의 `it`를 넣어도 좋다.
- `'renders without crashing'` : 테스트 이름이라고 생각하면 된다.
- `() ⇒ { ... }` : 테스트 코드

위 코드는 Button 이라는 컴포넌트가 제대로 렌더링 되는지 안되는지 테스팅 하는 코드이다. 작은 컴포넌트 하나만 테스팅 하기 때문에 Unit Testing 이다.

## 랜더링 접근 방식

렌더링된 요소를 접근 하는 방법은  query를 사용하는 방법인데 이는  3가지가 있다

- getBy: (`getByTestId`, `getByText`, `getByRole`) 동기적으로 실행되며 DOM 안에 이가 있는지 확인.
- findBy: 비동기적으로 실행되며 요소를 찾을때까지 기다리고 그 후에도 찾을 수 없으면 에러
- queryBy: getBy와 비슷하지만 에러를 발생시키지 않고 안에 없으면 null 로 리턴한다.

먼저 button.js 를 업데이트 해보자

```jsx
import React from "react";
import './button.css';

function Button({ label }) {
  return <div data-testid="button">{label}</div>;
}
```

위에 코드처럼 작성 할 시 test 할 때 간단히 `getByTestId('button')` 을 이용하여 접근 할 수 있다. 

```jsx
it("renders button correctly 1", () => {
  const { getByTestId } = render(<Button label="click me please"></Button>);

  // if I get test id button, it should have "click me please"
  expect(getByTestId('button')).toHaveTextContent("click me please")
})
```

> getByTestId 는 최악의 상황에서만 사용하고 사용자들이 더 접근을 많이 하는 순으로 제대로 testing 을 하는 priority 규칙이 있는데 이것은 [여기를 참고](https://testing-library.com/docs/queries/about/#priority)하자
> 

## Snapshot

스냅샷은 테스팅의 한 방식인데 좀 신기하고 해서 여기에 담는다.

```jsx
it ("matches snapshot", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
```

이 테스트를 실행할시 현재 디렉토리에서 `__snapshot__` 이라는 디렉토리가 생성되고, 그안에 `button.test.js.snap`이라는 코드가 생성이된다. 

그 파일을 열어보면... 

```jsx
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`matches snapshot 1`] = `
<div
  className="button-style"
  data-testid="button"
>
  save
</div>
`;
```

이런 코드가 생성이 된다. 이건 실제 렌더링 되는 코드가 되는데, 나중에 테스트 할때 변경사항이 있거나 렌더링이 잘 못되거나 일치하지 않다면 에러가 발생한다. 

업데이트 하는데에도 새로운 방식이 있는데 이것은 나중에 이 [링크](https://jestjs.io/docs/snapshot-testing)에 더 자세히 설명 되어있다.