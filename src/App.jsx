import Header from "./components/Header";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-amber-200">
      <Header />
      <Quiz />
    </div>
  );
};

export default App;
