import React from 'react';
import image from '../images/complete.png';
import Questions from '../questions.js'

const Summery = ({userAnswers}) => {

  const skippedAnswers = userAnswers.filter((skippedAnswer) => skippedAnswer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === Questions[index].answers[0]);

  const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div className='summery'>
      <h3>The summery that determines your score</h3>
      <img src={image} alt='completed image' />
      <div className='stats'>
        <span>
          <h3>{skippedAnswersShare}%</h3>
          <p>Skipped</p>
        </span>
        <span>
          <h3>{correctAnswersShare}%</h3>
          <p>Answered correctly</p>
        </span>
        <span>
          <h3>{wrongAnswersShare}%</h3>
          <p>Answered incorrect</p>
        </span>
      </div><hr />
      <div className='quiz-info'>
        {userAnswers.map((answer, index) => (
          <div key={index} className='quiz-results'>
             <h2>{index + 1}</h2>
             <h3>{Questions[index].text}</h3>
          <p className={userAnswers[index] === Questions[index].answers[0] ? 'correct-answer' : 'wrong-answer'}>
            {userAnswers[index] === null ? 'SKIPPED' : userAnswers[index]}
          </p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Summery