const AnswerButton = ({
  option,
  index,
  handleSelectAnswer,
  isCorrect,
  isSelected,
}) => {
  const buttonClass = isSelected
    ? isCorrect
      ? "bg-green-500"
      : "bg-red-500"
    : "bg-gray-200";

  return (
    <button
      onClick={() => handleSelectAnswer(index)}
      className={`p-2 m-1 border rounded ${buttonClass}`}
    >
      {option}
    </button>
  );
};

export default AnswerButton;
