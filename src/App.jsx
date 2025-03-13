import { useContext } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { QuizContext } from "./context/quizContext";

const App = () => {
  const { quizLevel } = useContext(QuizContext);
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-950">
      {quizLevel === "" && <Header />}
      <Quiz />
    </div>
  );
};

export default App;
