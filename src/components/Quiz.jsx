import QUESTIONS from "../questions.js";

console.log(QUESTIONS);
const Quiz = () => {
  
  return (
    <div>
      
      {QUESTIONS.map((question, index) => {
        return <div key={index}>{question.question}</div>;
      })}
    </div>
  );
};

export default Quiz;
