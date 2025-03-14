const QUESTIONS = [
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
      "Components are equivalent of HTML tags for React",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is a Virtual DOM?",
    options: [
      "JSX allows you to manage states and gives you possibility to manipulate this state",
      "JSX is type of data in Typescript that says function does not return anything",
      "The Virtual DOM is an in-memory representation of the real DOM. React uses it to efficiently update the DOM by comparing the virtual DOM with the previous version and only applying the necessary changes to the real DOM",
    ],
    correctOption: 3,
    points: 10,
  },
];

export default QUESTIONS;
