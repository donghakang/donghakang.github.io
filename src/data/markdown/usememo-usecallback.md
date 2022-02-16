`useState`, `useEffect` 를 정말로 많이 쓰지만, 최근에 커뮤니티에 한분과 대화하는 과정에서 현업에서는 useCallback과 useMemo를 정말로 많이 쓴다고 해서 다시한 번 useMemo, useCallback을 잘 설명 할 수 있는 정도의 이해를 하려한다.

## 🦁 useMemo

```jsx
const memoizedResult = useMemo(() => {
  return expensiveFunction(a, b);
}, [a, b]);
```

useMemo는 **메모이제이션**된 값을 변환합니다. useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산할 것입니다. 이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해줍니다.

.. 가 무슨 말일까? 나는 예시가 더 편하다.

factorial을 구하는 코드가 있다고 생각하자.

```jsx
function factorialFn(n) {
  console.log("factorial called");
  return n <= 0 ? 1 : n * factorialFn(n - 1);
}

function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [num, setNum] = useState(0);
  const factorial = factorialFn(number);
  function onChange(e) {
  setNumber(Number(e.target.value));
  }

  return (
  <div>
    <input type="number" value={number} onChange={onChange} />! = {factorial}
    <button onClick={() => setNum((prevState) => prevState + 1)}>
    Re-render..
    </button>
  </div>
  );
}

export default CalculateFactorial;
```

- number: factorial 하는 숫자,
- num: 버튼을 누를때마다 올라가는 숫자

⚠️ React의 특징중 하나는, state값이나 props 값이 변경이 되면 그 component가 re-render되는 특징이 있다.

즉, useState 만 사용한 코드에서는 factorial이랑 관계가 없는 저 버튼! 버튼을 눌러도 factorial 값이 re-rendering 되기 때문에 `factorial called` 라는 문구가 콘솔창에 뜬다.

위 상황에서 처럼 값비싼 function들을 돌릴때에는 매번 re-render를 하게 된다면 굉장히 느려질 것이다.

```jsx
function factorialFn(n) {
  console.log("factorial called");
  return n <= 0 ? 1 : n * factorialFn(n - 1);
}

function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [num, setNum] = useState(0);
  const factorial = useMemo(() => factorialFn(number), [number]);

  function onChange(e) {
  setNumber(Number(e.target.value));
  }

  return (
  <div>
    <input type="number" value={number} onChange={onChange} />! = {factorial}
    <button onClick={() => setNum((prevState) => prevState + 1)}>
    Re-render..
    </button>
  </div>
  );
}

export default CalculateFactorial;
```

하지만 useMemo를 위의 코드처럼 이용하게 된다면, 불필요한 re-rendering이 멈췄다는 것을 알 수 있다.

즉, 위의 코드는 number 값이 바뀔때는 factorialFn이 re-rendering 없이 그 함수만 호출되는 것을 확인 할 수 있다.

## 🐯 useCallback

```jsx
const memoizedFunction = useCallback(() => {
  expensiveFunction(a, b);
}, [a, b]);
```

useMemo는 메모이제이션 값을, useCallback는 **메모이제이션 함수**를 뜻한다.

useCallback은 의존성이 변경되었을 때에만 변경된다. class 에서 사용할때의 shouldComponentUpdate처럼...

은 예시로 보자

```jsx
const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
  setItems(getItems());
  console.log("render lists... ");
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
};

function Parent() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
  return [number, number + 1, number + 2];
  };

  const theme = {
  backgroundColor: dark ? "#333" : "#FFF",
  color: dark ? "#FFF" : "#333",
  };

  const onChange = (e) => {
  setNumber(parseInt(e.target.value));
  };

  const onClick = () => {
  setDark((prevDark) => !prevDark);
  };
  return (
  <div style={theme}>
    <input type="number" value={number} onChange={onChange} />
    <button onClick={onClick}>Toggle Theme</button>
    <List getItems={getItems} />
  </div>
  );
}
```

- number: input type 에서 지정해주는 숫자
- dark: 테마를 변경해주는 boolean 값.

지금 useCallback을 사용하지 않은 경우, 테마를 바꾸는 버튼을 누를시 Parent 컴포넌트가 다시 렌더링 되서 getItems 를 다시 호출 시키는데, 그 과정에서 getItems를 Props로 받던 List 또한 다시 렌더링이 된다.

지금 같은 경우 getItems가 그냥 덧셈 밖에 없지만, 만약에 통신같은 비싼 함수 값이라면 불필요한 로딩 타임이 소요 될 수도 있다. 그러면 getItems 를 한번 바꿔보자

```jsx
const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
  setItems(getItems());
  console.log("render list... ");
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
};

function Parent() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
  return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
  backgroundColor: dark ? "#333" : "#FFF",
  color: dark ? "#FFF" : "#333",
  };

  const onChange = (e) => {
  setNumber(parseInt(e.target.value));
  };

  const onClick = () => {
  setDark((prevDark) => !prevDark);
  };
  return (
  <div style={theme}>
    <input type="number" name="" id="" value={number} onChange={onChange} />
    <button onClick={onClick}>Toggle Theme</button>
    <List getItems={getItems} />
  </div>
  );
}

export default App;
```

이렇게 변경해주면 render list... 라는 문구는 테마가 바뀔 때에는 호출되지 않는다.

useCallback 같은 경우는 통신이 사용 될 시, 혹은 [이 케이스](https://dmitripavlutin.com/dont-overuse-react-usecallback/)처럼 React.memo로 묶인 최적화된 자식 컴포넌트의 함수로 선언해줄때 효율 적이다.

## 💁🏻‍♂️ React.memo

React.memo 로 래핑이 되는 컴포넌트는 메모이징 되는 컴포넌트, props가 변경되기 전까지 리-렌더링을 방지하며 컴포넌트의 렌더링 성능을 최적화 해주는 컴포넌트로 변환 된다

기존에 useMemo는 한 값을 메모이징 했다면, React.memo로 묶음 으로서 component 자체를 메모이징 할 수 있다.

```jsx
function Component(props) {
  return <div>React.memo</div>;
}

export default React.memo(MyBigList);
```

이런 React.memo 컴포넌트를 성공적으로 만들었다면, memoized 컴포넌트에는 useCallback을 보내줌으로서 렌더 최적화를 시킬 수 있다. 아래는 그에 관련된 예시이다.

```jsx
const Parent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = useCallback(() => {
  setIsClicked(true);
  }, []);

  return (
  <>
    <Child onClick={handleClick} />
    <Child onClick={handleClick} />
    <Child onClick={handleClick} />
    ...
  </>
  );
};

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click Me!</button>;
});
```

⚠️ React.memo의 props 가 변경되면 re-rendering 되는 것은 맞지만, 변경 여부는 shallow compare로서 (object 같은 경우 value 값이 한개만 바뀌어도 다시 리-렌더링) 그것을 예방하고 싶으면 React.memo에 다 추가적인 함수를 넣어도 된다.

```jsx
function MyComponent(props) {
  /* 컴포넌트 로직 */
}
function areEqual(prevProps, nextProps) {
  // props 두개가 동일 하면 true.
  // false 인 경우 리렌더링을 시킨다 ==> shouldComponentUpdate 의 정반대
}

export default React.memo(MyComponent, areEqual);
```

## 🤬 이럴땐 쓰지마세요!

useCallback, useMemo 또한 단점이 있다. 두 개 의 함수 같은 경우 Wrapping function, 묶여 있는 함수와 비슷하기 때문에, 메모제이션용 메모리를 추가적으로 사용하게 됩니다.

당 연 히 많이 사용하면 덜 사용한거보다 메모리를 더 사용할 수 있기 때문에 엄청나게 복잡한 function이 아니라면 웬만하면 피하는것이 좋다