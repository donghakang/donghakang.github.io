컴포넌트가 props를 자식에게 넘겨주고 그 자식은 그 자식에게 props를 넘겨주며 그 props는 그 자식ㅇ...... 이 자식 global하게 선언을 못하는 건가 싶을때

## 👨🏻‍💻 예시

useContext를 제일 많이 사용한다고 느낀 곳은 바로 dark mode, light 모드를 설정 할 때였다. props로 색 값을 다 넘겨 줄 필요 없이, useContext를 이용하여 context의 모든 자식들이 같은 값을 공유 하도록 설정 해보자

```jsx
const themes = {
  light: {
  foreground: "#000000",
  background: "#eeeeee"
  },
  dark: {
  foreground: "#ffffff",
  background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

// 최상위 부모 컴포넌트
function App() {
  return (
  <ThemeContext.Provider value={themes.dark}>
    <Toolbar />
  </ThemeContext.Provider>
  );
}

// 첫번째 자식 컴포넌트
function Toolbar(props) {
  return (
  <div>
    <ThemedButton />
  </div>
  );
}

// 최하위 컴포넌트
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
  <button style={{ background: theme.background, color: theme.foreground }}>
    I am styled by theme context!
  </button>
  );
}
```

### 🚀 1. createContext

```jsx
const ThemeContext = React.createContext(themes.light);
```

위의 코드는 ThemeContext 라는 context를 처음으로 설정하는 초기 설정 단계 입니다.

### 🚀 2. ThemeContext.Provider

```jsx
// 최상위 부모 컴포넌트
function App() {
  return (
  <ThemeContext.Provider value={themes.dark}>
    <Toolbar />
  </ThemeContext.Provider>
  );
}
```

위의 코드는 ThemeContext.Provider 안에 속해있는 모든 children들이 같은 state를 공유한다는 것을 알려줍니다. value는 theme.dark로 변경 되었습니다.

### 🚀 3. useContext

```jsx
// 최하위 컴포넌트
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
  <button style={{ background: theme.background, color: theme.foreground }}>
    I am styled by theme context!
  </button>
  );
}
```