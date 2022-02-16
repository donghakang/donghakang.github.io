여러가지의 애니메이션 비법을 알아가는 도중에 그나마 제일 편리하고, 그나마 제일 많은 일을 할 수 있는 것을 알아보고 있다. 그 중하나가 framer-motion 인것 같다. (현재, gsap, react-reveal, react-spring, wowjs, 등을 써봤다)

## 🚀 Installation

```bash
yarn add framer-motion
```

## 😀 기-본-

```jsx
...
import { motion } from 'framer-motion';

const Page = () => {
  return (
  <motion.div
    animate={{x: 100}}
  >
    Hello, Framer Motion
  </motion.div>
  )
}

```

위의 코드는 Hello, Framer Motion이 있는 div를 첫 시작 위치에서 x: 100 인 곳에 자연스럽게 animation을 이용해준다. 아무 설정이 없다면 x: 0에서 x: 100으로 자연스럽게 이동 한다.

## 😁 초깃값

```jsx
<motion.div
  animate={{x: 100}}
  initial={{x: -100}}
>
  Hello, Framer Motion
</motion.di>
```

초기 위치를 설정해줄수도 있다. 저렇게 작성할 경우 initial 값이 -100 이기 때문에 x: -100 에서 x: 100으로 자연스럽게 이동한다.

## 😅 Transition

```jsx
<motion.div
  animate={{ x: 100 }}
  initial={{ x: -100 }}
  transition={{ delay: 1.5, duration: 1.5, type: "spring" }}
>
  Hello, Framer Motion
</motion.div>
```

transition은 애니메이션의 설정값을 바꿔준다. 위 코드 같은 경우 1.5초뒤 1.5초 동안 스프링 애니메이션이 진행이된다.

✨ Tip: `x: [0, -20, -40, -50]` 이런식으로 배열로 생성하면, keyframe이 생성이 되는데

## 😅 Hover

```jsx
<motion.div whileHover={{ scale: 1.1 }}>Hello, Framer Motion</motion.div>
```

만약 div에 마우스를 가져다 대면 animation이 실행된다.

## 😋 Variants

initial, animate, transition이 많아지면 많아질수록 코드가 길어지고 더러워 질수도 있다. 그래서 Variant를 사용한다.

```jsx
const containerVariants = {
  hidden : {
  opacity: 0,
  x: '100vw'
  },
  visible: {
  opacity: 1,
  x: 0
  }
}
...

const Page = () => {
  return (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"   // transition은 visible에 임베드 되어있어서 선언 안해도 됨
  >
    Hello, Framer Motion
  </motion.div>
  )
}
```

이런 식으로 variant만 빼놓은 파일을 import해서 모든 애니메이션들이 같은 애니메이션을 사용할 수 있게끔 코드를 클린할수 있다!

더 나아가 parent motion의 variant 변수의 이름이 같다면 아무리 variant 종류가 다르더라도 이름을 선언 안해도 된다. 무슨 말이냐면...

```jsx
const parentVariant = {
  hidden : {
  opacity: 0,
  x: '100vw'
  },
  visible: {
  opacity: 1,
  x: 0
  }
}

const childVariant = {
  hidden : {
  opacity: 1,
  x: 0
  },
  visible: {
  opacity: 0,
  x: '100vw'
  }
}
...

const Page = () => {
  return (
  <motion.div
    variants={parentVariant}
    initial="hidden"
    animate="visible"
  >
    Hello, Framer Motion
    <motion.div
    variants={childVariant} // # code clean
    >
    Children
    </motion.div>
  </motion.div>
  )
}
```

위에 코드 처럼, variant들 안에 hidden 과 visible값이 곂치기 때문에 아무리 그 안에 있는 animation 속성들의 값이 달라도 child는 자동으로 그의 알맞는 variant의 initial 과 animate을 자동으로 연결 시켜준다.

즉, `initial=’hidden’ animate=’visible’` 을 생략해도 같은 값이 나온다.

## 🥸 Yoyo

```jsx
const containerVariants = {
  hover : {
  opacity: 0,
  x: '100vw'
  transition: {
    yoyo: 10     // Infinity
  }
  }
}
```

정해진 수만큼 (Infinity 같은 경우 무제한으로) variants를 반복한다.

## 🤣 AnimatePresence

Route이 바뀌거나 Component의 현황이 바뀔때 유용하다.

1. 변경시 component중 일부가 삭제되거나 추가 될 때,
2. React router dom을 이용해서 페이지에서 페이지로 이동될때

본인은 2번을 더 많이 사용할것 같으니, 2번을 제대로 알아보자.

```jsx
// App.js
...
<AnimatePresence>
  <Routes>
  <Route path='/' element={<Home/>}/>
  /* ... */
  </Routes>
</AnimatePresence>
```

AnimatePresence를 묶어 줌으로서 Animation이 진행되고 여기서 transition이 해당되는것을 알려준다.

```jsx
// App.js
const App = () => {
  const location = useLocation()

  ...
  return (
  <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.key}>
    <Route path='/' element={<Home/>}/>
    /* ... */
    </Routes>
  </AnimatePresence>
  )
}
```

`location={location}, key={location.key}` 을 넘겨 줌으로서 현 페이지의 위치를 미리 미리 알수 있고 나중에 이 location값이 변경되면 (화면이 옮겨지면), exit과 transition을 이용하여 애니메이션을 진행할 수 있다.

이제 variants 를 한번 추가해보자.

```jsx
const containerVariant = {
...
  exit: {
  x: '-100vw',
  transition: { ease: 'easeInOut' }
  }
}
```