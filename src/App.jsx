import { useContext } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { QuizContext } from "./context/quizContext";

const App = () => {
  const { quizLevel } = useContext(QuizContext);
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-linear bg-linear-to-t from-sky-950 to-indigo-800">
      {quizLevel === "" && <Header />}
      <Quiz />
    </div>
  );
};

export default App;
