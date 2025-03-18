const advancedQuiz = [
  {
    question: "What is React Fiber",
    options: [
      "React Fiber is a new JavaScript framework that replaces React and introduces a completely different approach to handling UI components without using the virtual DOM",
      "React Fiber is a tool designed to improve CSS performance in React applications by dynamically generating styles in real time and reducing the need for inline styles",
      "React fiber is the new reconciliation engine in React 16 and above. It allows React to split rendering work into chunks, improving the responsiveness of applications by pausing and resuming rendering tasks",
      "React Fiber is a state management library similar to Redux, providing global state control and improving component communication without needing a context provider",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Explain the concept of reconciliation in React",
    options: [
      "Reconciliation is the process by which React updates the DOM by comparing the virtual DOM with the previous version and only applying the necessary changes. This helps improve performance by minimizing direct DOM manipulations",
      "Reconciliation is the process where React resets the entire DOM whenever a change occurs, ensuring that the UI always starts from a blank state for better consistency",
      "Reconciliation in React is a manual process where developers must explicitly define which parts of the DOM should be updated whenever a component’s state changes",
      "Reconciliation allows React to store multiple versions of the DOM and switch between them, providing a rollback mechanism if an error occurs during component rendering",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How does React handle error boundaries?",
    options: [
      "Error boundaries in React automatically fix any JavaScript errors in components by re-rendering them without requiring any special handling from the developer",
      "React does not support error handling within components, so developers must use external libraries to catch and log errors in their applications",
      "Error boundaries in React work like Redux reducers, allowing developers to dispatch actions whenever an error occurs to update the global application state accordingly",
      "Error boundaries are React Components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What are React portals, and how do you use them?",
    options: [
      "React portals are a feature that allows developers to create separate React applications inside a single HTML file without any interference between them.",
      "React portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. They are useful for modals, tooltips, and other UI elements that need to be visually separate from the rest of the application",
      "React portals are used exclusively for styling purposes, allowing developers to move components between different parts of the application without modifying the structure of the DOM.",
      "React portals allow developers to create hidden components that do not render in the DOM but still maintain their state and lifecycle within the React application",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "How does concurrent rendering work in React?",
    options: [
      "Concurrent rendering in React enables multiple components to render in parallel by using multiple browser tabs to distribute rendering work and speed up performance",
      "Concurrent rendering forces all updates to happen instantly, ensuring that users never experience any delay or loading time when interacting with the application",
      "Concurrent rendering is an experimental feature in React that allows React to interrupt rendering work to handle high-priority updates, making applications more responsive by allowing the UI to remain interactive while heavy computations are performed in the background",
      "React concurrent rendering is a feature that allows the same UI to be displayed in multiple states simultaneously, giving users different views of the application at once",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "What is Suspense, and how do you use it?",
    options: [
      "React Susepnce is a feature that lets you wait for some code to load and declaratively specify a loading state while waiting. It's often used with React.lazy to handle lazy-loaded components",
      "Suspense is a React hook that automatically retries failed API requests until a successful response is received, preventing any error states from appearing in the UI",
      "Suspense is a built-in React feature that improves animations by delaying component rendering until all CSS transitions and effects are fully loaded and ready",
      "React Suspense allows developers to completely freeze the UI for a fixed amount of time, ensuring that all components finish rendering before anything appears on the screen",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "Explain the difference between static and dynamic routing in React",
    options: [
      "Static routing in React means that routes are always preloaded at build time, while dynamic routing requires the user to manually type the URL for every navigation",
      "Dynamic routing allows pages to be loaded without ever changing the URL, while static routing requires a full page refresh for each new page in the application",
      "Static routing only works with React’s default state system, while dynamic routing requires Redux or another state management tool to function properly",
      "Static routing defines routes at build time and does not change whereas dynamic routing allows routes to be generated dynamically based on application state or user input",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What is the significance of Strict Mode in React?",
    options: [
      "Strict Mode is a React setting that enables dark mode in development tools, making it easier to debug applications in low-light environments",
      "React’s Strict Mode automatically optimizes performance by removing unnecessary state updates and preventing components from re-rendering unless absolutely necessary",
      "StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping to identify unsafe lifecycle methods, legacy API usage, and other issues",
      "Using Strict Mode in React ensures that all API calls are made in a secure way, preventing unauthorized network requests and protecting user data",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "How do you implement authentication in a React application?",
    options: [
      "Authentication can be implemented using strategies like JWT (JSON Web Tokens), OAuth or integrating with third-party services like Firebase or Auth0. This involves managing user sessions, storing tokens, and protecting routes with higher-order components or hooks",
      "Authentication in React is handled by adding a secret token in local storage that never expires, ensuring users always remain logged in without any need for verification",
      "React has a built-in authentication system that automatically encrypts user data and verifies credentials without requiring any third-party services",
      "Authentication in React is done using the useAuth hook, which securely manages user login state across multiple sessions without needing a backend",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Explain the concept of code splitting in React",
    options: [
      "Code splitting in React is a method of merging multiple JavaScript files into a single bundle to make applications load faster and reduce network requests",
      "Code splitting ensures that React components are always loaded in parallel, preventing users from seeing a loading state while the application is being rendered",
      "React’s code splitting feature allows developers to preload all assets before the user even navigates to the page, eliminating the need for any async operations",
      "Code splitting is a technique to split the code into smaller chunks, which are loaded on demand rather than all at once. It improves the load time of the application. React supports code splitting via dynamic import() and tools like Webpack",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question:
      "What are render props, and how do they differ from higher-order components?",
    options: [
      "Render props are special types of React hooks that allow developers to pass data between components without using props or context API",
      "Render props are a pattern where a component's prop is a function that returns a React element. Unlike higher-order components (HOCs), which wrap a component, render props allow you to reuse component logic by passing a function to the child component",
      "Render props are special types of React hooks that allow developers to pass data between components without using props or context API",
      "Higher-order components (HOCs) and render props are identical concepts in React, both allowing components to share logic without changing their behavior or structure",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "How do you handle side effects in React with Redux?",
    options: [
      "Poprawna",
      "Side effects in Redux are automatically handled by React without any need for middleware, as React ensures that state updates occur only when necessary",
      "Redux provides a built-in method called useSideEffect, which allows developers to trigger API calls and manage asynchronous actions inside reducers",
      "Side effects in Redux should always be handled directly inside the reducer function, as this is the most efficient way to manage async actions in React applications",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What is the significance of React’s Strict Mode, and how do you use it?",
    options: [
      "React’s Strict Mode is used in production to optimize performance by blocking all unnecessary re-renders, ensuring that only essential updates are applied",
      "Strict Mode is a debugging tool that prevents components from using props or state, forcing them to rely only on static data for rendering",
      "React’s Strict Mode is enabled by default in every project and cannot be turned off, as it is essential for ensuring compatibility with future React updates",
      "StrictMode is a wrapper component that helps you identify potential problems in your application, such as unsafe lifecycle methods, deprecated APIs, and side effect that may not behave as expected. It doesn;t render any UI but performs checks on the child components within it",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question:
      "How do you implement real-time features like WebSockets in React?",
    options: [
      "WebSockets in React can be implemented by using the useRealTime hook, which automatically manages socket connections and synchronizes data with the server",
      "React natively supports WebSockets, and developers only need to call the useWebSocket() function inside any component to establish a real-time connection",
      "Real-time features can be implemented using WebSockets by connecting to a WebSocket server in a React component (typically in useEffect for functional components). You listen for messages from the server and update the component state accordingly",
      "WebSockets are only supported in class-based components, and functional components must use Redux or another state management library to handle real-time updates",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "What is the difference between shallow rendering and deep rendering in React testing?",
    options: [
      "Shallow rendering renders all components inside a React application, while deep rendering only renders a single component at a time for better performance",
      "Shallow rendering tests a component by rendering only the components itself and not its children, making it faster and more focused on unit testing. Deep rendering, on the other hand, renders the component along with all of its child components, providing a more integrated test but at the cost of speed and complexity",
      "Deep rendering is used for testing functional components, whereas shallow rendering is only useful for testing class-based components in older versions of React",
      "Shallow rendering creates a complete virtual DOM tree, while deep rendering directly modifies the real DOM to simulate a real user interaction",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Explain the concept of React reconciliation",
    options: [
      "Reconciliation in React is a process where React rebuilds the entire application from scratch whenever a state change occurs to ensure that data is always up-to-date",
      "React reconciliation only works for functional components, as class-based components do not support virtual DOM updates and must manually refresh the UI",
      "Reconciliation is the process React uses to update the DOM when the state of a component changes. React compares the new virtual DOM with the old one and determines the minimal set of changes required to update the real DOM, which improves efficiency",
      "React reconciliation prevents any state updates from affecting the UI, ensuring that the component tree remains unchanged no matter how many times state is updated",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question:
      "How do you handle performance bottlenecks in large React applications?",
    options: [
      "The best way to optimize performance in React is to disable all re-renders by preventing state updates, ensuring that components never update unnecessarily",
      "Performance bottlenecks can be handled by using techniques such as memoization (React.memo, useMemo, useCallback), optimizing the rendering of large lists (React.Virtualized), lazy loading components, reducing the number of re-renders, and profiling components to identify slow parts of the application",
      "React applications can be optimized by converting all components into class-based components, as they are faster than functional components when handling large datasets",
      "Performance bottlenecks in React can be resolved by storing all component state in local storage, reducing the need for frequent re-renders and API calls",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question:
      "What are potential downsides of using React’s Context API extensively?",
    options: [
      "Using the Context API extensively can lead to performance issues due to re-renders triggered by context updates. It can also make the codebase harder to maintain and debug if not used carefully, especially in large applications",
      "Context API is slower than Redux because it requires every component to fetch data directly from the database instead of using a centralized state management system",
      "Using Context API extensively may cause components to become completely unresponsive, as the API forces every state update to be processed asynchronously",
      "Context API is not recommended for large applications because it only supports primitive data types like strings and numbers, making it unusable for complex state management",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How do you implement a theme switcher in a React application?",
    options: [
      "A theme switcher in React can be implemented by changing the browser’s default theme settings, which automatically updates all components without needing additional logic",
      "The best way to implement a theme switcher in React is to reload the entire application whenever the user selects a different theme, ensuring a complete UI update",
      "A theme switcher can be implemented using the Context API to store the current theme, and useState to toggle between themes. The context value is provided to the entire application, and components consume it to apply the corresponding theme styles",
      "Theme switching in React requires direct modifications to the React core files, as there is no built-in way to dynamically update styles at runtime",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Explain how React’s Context API differs from Redux",
    options: [
      "The Context API is simpler and is suitable for passing data through the component tree without prop drilling, but it is less powerful than Redux. Redux is a state management library that provides a more structured and scalable solution for managing global state, especially in large applications",
      "Context API and Redux are the same; both provide global state management, but Redux is only used for styling components, while Context API manages data flow",
      "Redux requires every component to have a reducer function, whereas Context API automatically synchronizes all components without needing an additional state provider",
      "Context API is only useful for storing static configuration values, while Redux is designed to handle UI-related state updates like animations and event listeners",
    ],
    correctOption: 0,
    points: 10,
  },
];

export default advancedQuiz;
