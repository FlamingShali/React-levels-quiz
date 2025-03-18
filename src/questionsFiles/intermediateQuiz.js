const intermediateQuiz = [
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
      "The useRef hook is used to store global state that persists across multiple renders and updates the component when changed",
      "The useRef hook creates a mutable object that persists across renders. It is often used to access or manipulate DOM elements directly and store values that don’t trigger re-renders when changed",
      "It is a required hook for handling form validation and is necessary for every form input in React",
      "The useRef hook replaces Redux for managing application-wide state and automatically re-renders components when the value changes",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "How does React handle forms?",
    options: [
      "React handles forms using controlled components, where form elements like <input> are controlled by React state, making it easier to manage user input form submission",
      "React automatically binds form inputs to variables, removing the need for state management",
      "Forms in React are handled using only class components, as functional components do not support input state management",
      "React does not allow direct form submission and requires Redux to handle form data properly",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Explain the concept of controlled and uncontrolled components",
    options: [
      "Controlled components are managed entirely by the browser, while uncontrolled components are controlled by React state",
      "Controlled components are form elements that are controlled by React state. Uncontrolled components manage their own state internally and are accessed using refs",
      "Uncontrolled components are a replacement for controlled components and should be used in all React applications",
      "Controlled components can only be used inside class components, while uncontrolled components are exclusive to functional components",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What is lazy loading, and how do you implement it in React?",
    options: [
      "Lazy loading is the process of delaying the rendering of all components in an application until the user interacts with the page",
      "React does not support lazy loading, and all components must be loaded at the initial render",
      "Lazy loading is a technique to defer the loading of non-essential resources until they are needed. In React, you can implement lazy loading using React.lazy() and Suspense to load components only when they are needed",
      "Lazy loading is a feature that only works in Next.js and cannot be implemented in a standard React application",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is the difference between useMemo and useCallback hooks?",
    options: [
      "useMemo is used to memorize the result of a computation, avoiding recalculations unless dependencies change. useCallback is used to memorize a function, preventing it from being recreated on every render unless dependencies change",
      "useMemo and useCallback serve the same purpose and can be used interchangeably without any performance differences",
      "useCallback is used to store the result of a computation, while useMemo stores a reference to a function",
      "useMemo is used to manage component lifecycle methods, while useCallback is responsible for handling API requests",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How do you optimize performance of a React application?",
    options: [
      "The best way to optimize a React app is by increasing the number of re-renders to ensure fresh data is always displayed",
      "Removing useEffect and useState hooks can significantly improve performance since they slow down the application",
      "Using multiple instances of Redux and Context API together will always lead to better performance in large applications",
      "Performance can be optimized using techniques like code splitting, memorization (React.memo, useMemo, useCallback), avoiding unnecessary re-renders, using useEffect with dependencies, and using a proper state management strategy",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is server-side rendering (SSR) in React?",
    options: [
      "Server-side rendering means that JavaScript files are generated on the server and then executed on the client-side before rendering the UI",
      "SSR in React is the process of preloading all routes before rendering any component in the browser",
      "With SSR, React applications do not use JavaScript on the client-side at all, relying entirely on static HTML for interactivity",
      ": SSR is a technique where the HTML content is generated on the server for each request, improving performance and SEO. Next.js is a popular framework that enables SSR with React",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "Explain React Router and its use cases",
    options: [
      "React Router is used to fetch data from APIs dynamically and update the UI without making additional HTTP requests",
      "React Router automatically handles state management, making Redux unnecessary in applications using it",
      "React Router is a library for routing in React applications. It allows you to create dynamic routes and manage navigation within single-page applications",
      "It is only useful for multi-page applications and does not work with single-page applications (SPAs)",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is the useReducer hook?",
    options: [
      "Custom hooks are React components that allow you to reuse JSX code across multiple components",
      "The useReducer hook is an alternative to useState for managing complex state logic. It accepts a reducer function and an initial state, returning the current state and a dispatch function",
      "They replace built-in hooks like useState and useEffect and should be used instead of them",
      "A custom hook must always be a class component and cannot contain any logic related to state or effects",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What are custom hooks in React?",
    options: [
      "Custom hooks are user-defined functions that allow you to reuse logic across multiple components. They follow the same rules as React hooks and can encapsulate stateful logic",
      "Custom hooks are React components that allow you to reuse JSX code across multiple components",
      "They replace built-in hooks like useState and useEffect and should be used instead of them",
      "A custom hook must always be a class component and cannot contain any logic related to state or effects",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How do you manage global state in a React application?",
    options: [
      "Global state can be managed using the Context API, Redux or other state management libraries like MobX or Zustand, depending on the complexity and needs of the application",
      "Global state can only be managed using Redux, as React does not provide any built-in global state management solutions",
      "The best way to manage global state is by storing all component states inside local storage and retrieving them when needed",
      "Global state in React is automatically synchronized across all components without requiring any additional configuration",
    ],
    correctOption: 0,
    points: 10,
  },
];

export default intermediateQuiz;
