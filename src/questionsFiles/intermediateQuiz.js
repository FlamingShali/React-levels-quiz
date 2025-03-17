const QUESTIONS = [
  {
    question: "What is the useEffect hook?",
    options: [
      "useEffect handles special effects in React applications like animations, color swap etc",
      "The useEffect hook is used to perform side effect in functional components, such as data fetching, subscriptions, or manually updating the DOM. It runs after every render by default but can be controlled using dependencies",
      "The useEffect hook is a function that is returned in array when state is created. As a function it is used to manage state",
      "useEffect is special hook that allows you to create custom functions in React",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "How do you fetch data from an API in React?",
    options: [
      "Fetching data in React? Shouldn't backend care for that?",
      "You can use useFetch() hook which takes an url adress as a first argument and variable as a second argument where you store fetched data. It is a feature released with React 16",
      "You can fetch data from an API using the fetch function or a library like Axios within the useEffect hook to ensure the data is fetched after the component mounts",
      "In order to fetch data, you have to copy url with your endpoint and use it as an initial state in useState hook",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "In React, the context API is...",
    options: [
      "The context API is used to manage type of request you send to server in order to get response",
      "The context API is used to handle server responses",
      "The context API is still experimental function",
      "The context API is used to manage global state that needs to be accessible by multiple components without prop drilling. It is often used for theme management, user authentication, and language settings",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is the useContext hook?",
    options: [
      "The useContext is used to take as many states as an argument and manage them directly without using function returned by useState",
      "The useContext can create components dynamically",
      "The useContext allows you to access the value of a context directly in a functional component, making it easier to consume context values without needing a wrapper component",
      "The useContext allows you to properly render content of your page and display it on screen",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What are higher-order components (HOCs)?",
    options: [
      "HOCs are just hoisted components",
      "HOCs are just parent components",
      "HOCs are functions that take a component and return it as a variable with added functionality. They are used to save memory in React applications",
      "HOCs are functions that take a component and return a new component with added functionality. They are used for code reuse, logic and behaviors in React applications",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is the useRef hook, and how is it used?",
    options: [
      "The useRef hook creates a immutable object. It is often used to access or manipulate DOM elements directly and store values that don’t trigger re-renders when changed",
      "The useRef hook creates a mutable object that persists across renders. It is often used to access or manipulate DOM elements directly and store values that don’t trigger re-renders when changed",
      "HOCs are functions that take a component and return it as a variable with added functionality. They are used to save memory in React applications",
      "HOCs are functions that take a component and return a new component with added functionality. They are used for code reuse, logic and behaviors in React applications.",
    ],
    correctOption: 1,
    points: 10,
  },
];

export default QUESTIONS;
