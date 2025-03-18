const basicQuiz = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is React?",
    options: [
      "React is a javascript library for building user interfaces, primarily used for single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
      "React is a javascript framework for building user interfaces, primarily used for single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
      "React is a java library for building user interfaces, primarily used for single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
      "React is a java framework for building user interfaces, primarily used for single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    ],
    correctOption: 0,
    points: 20,
  },
  {
    question: "What's the fundamental building block of React apps?",
    options: ["Components", "Blocks", "Elements", "Effects"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What are components in React?",
    options: [
      "Components are different type of variables destined to use only with React",
      "Components are reusable arrays of functions which can be used to build react content",
      "Components are the building blocks of a React application. They are reusable, independent pieces of code that represent parts of the user interface. Components can be either class-based or functional.",
      "Components are equivalent of HTML tags for React",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is JSX?",
    options: [
      "JSX allows you to manage states and gives you possibility to manipulate this state",
      "JSX is type of data in Typescript that says function does not return anything",
      "JSX stands for Javascript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within Javascript. React uses JSX to describe what the UI should look like",
      "JSX is Javascript framework which replaces HTML",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is a Virtual DOM?",
    options: [
      "The Virtual DOM is a framework that allows you to write CSS in class selectors in React",
      "Thy Virtual DOM is a React syntax",
      "The Virtual DOM is just the same as real DOM. It is just assigned to React",
      "The Virtual DOM is an in-memory representation of the real DOM. React uses it to efficiently update the DOM by comparing the virtual DOM with the previous version and only applying the necessary changes to the real DOM",
    ],
    correctOption: 3,
    points: 15,
  },
  {
    question:
      "What is a difference between a class component and functional component?",
    options: [
      "There was never class components in React.",
      "Class components are ES6 classes that extend React.Component and have access to lifecycle methods and state. Functional components are simpler, defined as functions, and use hooks like useState and useEffect to manage state and side effect",
      "Class components are ES6 classes that extend React.Component and have access to lifecycle methods and state. Functional components are defined as functions, and just like class components they can use hooks like useState and useEffect to manage state and side effect",
      "There is no difference between class components and functional components",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "What are hooks in React?",
    options: [
      "Hooks are old tools for handling and managing state in React",
      "React Hooks are tools that allow you to use state and other React features with both class and functional components. They're designed to simplify your code and make it easier to share logic across components",
      "React Hooks are tools that allow you to use state and other React features without writing class components. They're designed to simplify your code and make it easier to share logic across components",
      "React Hooks are new feature in React. They are replacement for class and functional components",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is the useState Hook",
    options: [
      "The useState hook is a function that lets you add state to functional components. It returns an array with the current state value and a function to update it",
      "The useState hook is a function that lets you add state to functional components. It returns a variable with the current state value and a function to update it",
      "The useState hook is a function that lets you add state to functional components. It returns only an array with the current state value",
      "The useState hook is a function that lets you add state to functional components. It returns an object with the current state value and a function to update it",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "What are props in React?",
    options: [
      "Props (short for properties) are inputs to components. They are passed from one component to every other components directly. They are used to pass data and event handlers",
      "Props (short for properties) are inputs to state. They are passed to state via function to update state.",
      "Props (short for properties) are inputs to components. They are passed only from context and are used to pass data and event handlers",
      "Props (short for properties) are inputs to components. They are passed from parent components to child components and are used to pass data and event handlers",
    ],
    correctOption: 3,
    points: 15,
  },
  {
    question: "How do you pass data from parent to child components?",
    options: [
      "There is no need for passing data. React components share their data",
      "Data is passed from parent to child components through props. The parent component defines an attribute on the child component and assigns it a value, which the child component can then access via this.props or the props parameter in a functional component",
      "Data is passed via import (e.g import { number, setNumber} from './App.jsx')",
      "You need to use special hook to pass data threw components called usePortal() which takes object with our data as a first argument and component where we want to pass data as a second argument",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "What is State in React?",
    options: [
      "State is an object managed within a component that holds data that can change over time. Just like props, state is private and fully controlled by the component",
      "State is an object managed within a component that holds data that can change over time. Unlike props, state is private and fully controlled by the component",
      "State is an object managed within a component that holds data that can change over time. Unlike props, state is public and not controlled by the component",
      "State is an object managed outside a component that holds data that can change over time. Just like props, state is public and not controlled by the component",
    ],
    correctOption: 1,
    points: 15,
  },
  {
    question: "How do you handle events in React?",
    options: [
      "This is a tricky question. There is no difference between handling events in React and DOM elements.",
      "This is a tricky question. JSX elements exacly know what action should trigger reaction so we pass only a function without parentheses (e.g. <button handleClick>Click me</button>)",
      "Event handling in React is similar to handling events in DOM elements, but with some syntactical differences. For example, React events use camelCase syntax, and you pass the event handler function with parentheses",
      "Event handling in React is similar to handling events in DOM elements, but with some syntactical differences. For example, React events use camelCase syntax, and you pass the event handler function without parentheses",
    ],
    correctOption: 3,
    points: 15,
  },
  {
    question: "What are React Fragments?",
    options: [
      "React fragments allows you to write javascript code in JSX.",
      "React fragments are just like state but with simple difference. Updating state triggers re-render of the component. Updating React fragments does not trigger re-render. React fragments are mutable",
      "React fragments are replacement for <div></div>",
      "React Fragments let you group multiple elements without adding and extra node to the DOM. You can use the <React.Fragment> element or just <Fragment> or even shortest syntax ",
    ],
    correctOption: 3,
    points: 15,
  },
  {
    question: "What is props drilling and how can it be avoided",
    options: [
      "Prop drilling refers to the process of passing data from a parent component to deeply nested child components via props. It has been removed with ES6 released",
      "Prop drilling refers to the importing components with a lot of props to deeply nested another component",
      "Prop drilling refers to the process of passing data from a parent component to deeply nested child components via props. It can be avoided using the Context API, which allows you to pass data without passing props through every level of the component tree",
      "Prop drilling refers to the process of passing data from a parent component to all child components via props (no matter how deeply they are). It can be avoided using the Context API, which allows you to pass data without passing props through every level of the component tree",
    ],
    correctOption: 2,
    points: 15,
  },
  {
    question: "How do you conditionally render components in React?",
    options: [
      "You can conditionally render components using Javascript logical operators like CC, ternary operators, or if statements inside the component’s render method.",
      "You can conditionally render components using useIfElse() hook which takes callback function as first argument and condition as a second",
      "You can conditionally render components using useIfElse() hook which takes an object with Javascript logical operators as first argument and callback function as a second",
      "You can use only if/else statement for better readability",
    ],
    correctOption: 0,
    points: 15,
  },
];

export default basicQuiz;
