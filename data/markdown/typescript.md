## **What is TypeScript?**

> *TypeScript is JavaScript superset.*
> 
- A language building up on JavaScript to give more features and more advantages.
- However, TypeScript Can't be executed like JavaScript in browser. TypeScript will compile to JavaScript
- TypeScript has a **type** feature on top of the JavaScript :arrow_right: can find error earlier and make code cleaner

## **Why TypeScript?**

```jsx
// javascript

function add(num1, num2) {
  return num1 + num2;
}

console.log(add('2', '3'))
```

Since, those '2', '3' are string, the return value is '23'. However, the user might wanted '5'.

With **TypeScript** we can specify the type of the values and make sure that code is working properly.

*Also,*

- Types
- Non-JavaScript features like Interfaces or Generics
- Next-generation JavaScript features (compiled down for older Browsers)
- Meta-Programming features (decorators)
- Rich configuration options
- Modern tooling that helps even in non-TypeScript projects

## **Install**

```jsx
npm install -g typescript
```

## **Compile**

```jsx
tsc helloworld.ts
```

## Example

```jsx
//javascript
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

// the input's type is number
function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(input1.value, input2.value));
});
```

```tsx
// typescript
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // ! ==> this will never be null
                                   // as HTMLInputElement ==> type is HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement; 

// the input's type is number
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
```

> **It forces us to write cleaner and better code !**
> 

For more info ... [Click here](https://github.com/donghakang/practice-typescript)