import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizContextProvider from "./context/quizContext";

const App = () => {
  return (
    <QuizContextProvider>
      <div className="w-screen h-screen flex flex-col items-center bg-amber-200">
        <Header />
        <Quiz />
      </div>
    </QuizContextProvider>
  );
};

export default App;
