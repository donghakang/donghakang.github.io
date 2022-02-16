> 종종 React 에서 class component를 사용하는 코드를 본적도 있고, function 을 사용해서 컴포넌트를 제작하는 것도 본적이있다. 둘 다 실행은 되지만 요새는 functional 컴포넌트를 사용하여 hook과 함께 react를 사용하는 장면을 많이 목격하는데, 어떤것이 더 좋고 어떤것이 더 비효율적인지, 그리고 어떤 차이점이 있는지 알아보자.

## 😓 당연히 다른것 ?

**둘 다,** JSX로 rendering이 되며, html 코드를 javascript안에 탑재하면서 컴포넌트를 만드는 형식이다 ... 하지만 여러개가 다른데...

- 컴포넌트는 React.Component라는 라이브러리에서 class를 define 한다.
- class component는 `render()`라는 함수를 꼭 불러야하고 그 함수 안에서 html 코드들을 실행시킨다. functional component는 return 안에다가 탑재 한다.
- class component는 class 사용하기 때문에 `this` 도 자주 나타나는 편이다.
- functional component는 데이터를 자식 컴포넌트에 패스할때, props를 필수 적으로 선언 해야한다.
- functional component에게는 hook을 쓰면서 state 와 lifecycle 메소드를 관리해야하고 class 같은 경우는 `componentDidMount`, `componentDidUnmount`등 과 같은 함수로 lifecycle을 관리한다.

```jsx
class App extends React.Component {
  render() {
    return <div>...</div>;
  }
}
```

```jsx
const App = () => {
  return <div>...</div>;
};
```

## Arrow function과 그냥 function 무엇을 사용해야할까?

우선 둘 다 된다. 하지만 두 function간에는 미세한 차이가 있지 않을까 ?

```jsx
function hello(what) {
  return `Hello, ${what}`;
}
```

```jsx
const hello = (what) => `Hello, ${what}`;
```

- arrow function 같은 경우 때에 따라서 return을 생략해도 된다.
- 자바스크립트에서 함수를 호출 할 때 함수가 어떻게 되었는지에 따라서 `this`가 바인딩할 객체를 동적으로 결정하는데, 그로 인해 function 안에 function을 만드는게 어렵다.