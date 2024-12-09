import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeCurrnetQuestionIndex = userAnswers.length;
  const quizIsCompelte = activeCurrnetQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsCompelte) {
    return (
     <Summary userAnswers={userAnswers} />
    ); 
  }


  return (
    <div id="quiz">
      <Question
        key={activeCurrnetQuestionIndex}
        index={activeCurrnetQuestionIndex}
        onSelectedAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
