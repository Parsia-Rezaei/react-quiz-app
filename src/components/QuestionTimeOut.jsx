import { useEffect, useState } from "react";

const QuestionTimeOut = ({timeout , onTimeout , mode}) => {
    const [remainingTime , setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('setting timeout')
        const timerOut = setTimeout(onTimeout , timeout);

        return () => {
            clearTimeout(timerOut);
        }
    }  , [ timeout , onTimeout])

    useEffect(() => {
        console.log('setting interval')
        const timer = setInterval(() =>{
            setRemainingTime(prev => prev - 100)
        } , 100)

        return() => {
            clearInterval(timer);
        }
    } , []);

  return (
   <progress className={mode} max={timeout} value={remainingTime} id="question-time" />
  )
}

export default QuestionTimeOut;
