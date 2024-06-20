import { useState, useCallback } from 'react';
import Questions from '../questions.js';
import QustionTimer from './QustionTimer.jsx';
import Summery from './Summery.jsx';

const Quiz = () => {

 const [ userAnswers, setUserAnswers ] = useState([]);
 
 const questionNumber = userAnswers.length;

 const quizCompleted = questionNumber === Questions.length;


const handleQuestion = useCallback(function handleQuestion(answer){
  setUserAnswers(prevState => {
      return [...prevState, answer]
  })
}, [])

const handleSkipAnswer = useCallback(() => handleQuestion(null), [handleQuestion]);


if(quizCompleted){
  return <Summery userAnswers={userAnswers} />
}

const shuffledAnswers = [...Questions[questionNumber].answers];
shuffledAnswers.sort(() => Math.random() - 0.5);
 
  return (
    <div className='quiz'>
            <div>
                <div className='question'>{Questions[questionNumber].text}</div>
                  <QustionTimer timeout={10000} onTimeout={handleSkipAnswer} key={questionNumber} />
                    <div className='answers'>
                    <div className='answer-wrapper'>{shuffledAnswers.map(answer => (
                       <button onClick={() => handleQuestion(answer)} className='answer-button' key={answer}>{answer}</button>
                    ))}</div>
                </div>
            </div>
    </div>
  )
}

export default Quiz