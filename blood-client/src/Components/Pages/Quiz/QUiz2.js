
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useUser from '../../hooks/useUser';
import './Quiz.css';

const QUiz2 = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const { user } = useUser()
    const currentDateAndTime = new Date();
    const currentDate = currentDateAndTime.toDateString();
    const currentTime = currentDateAndTime.toLocaleTimeString();

  const questions = [
    {
      text: 'What is the capital of America?',
      options: [
        { id: 0, text: 'New York City', isCorrect: false },
        { id: 1, text: 'Boston', isCorrect: false },
        { id: 2, text: 'Santa Fe', isCorrect: false },
        { id: 3, text: 'Washington DC', isCorrect: true },
      ],
    },
    {
      text: 'What year was the Constitution of America written?',
      options: [
        { id: 0, text: '1787', isCorrect: true },
        { id: 1, text: '1776', isCorrect: false },
        { id: 2, text: '1774', isCorrect: false },
        { id: 3, text: '1826', isCorrect: false },
      ],
    },
    {
      text: 'Who was the second president of the US?',
      options: [
        { id: 0, text: 'John Adams', isCorrect: true },
        { id: 1, text: 'Paul Revere', isCorrect: false },
        { id: 2, text: 'Thomas Jefferson', isCorrect: false },
        { id: 3, text: 'Benjamin Franklin', isCorrect: false },
      ],
    },
    {
      text: 'What is the largest state in the US?',
      options: [
        { id: 0, text: 'California', isCorrect: false },
        { id: 1, text: 'Alaska', isCorrect: true },
        { id: 2, text: 'Texas', isCorrect: false },
        { id: 3, text: 'Montana', isCorrect: false },
      ],
    },
    {
      text: 'Which of the following countries DO NOT border the US?',
      options: [
        { id: 0, text: 'Canada', isCorrect: false },
        { id: 1, text: 'Russia', isCorrect: true },
        { id: 2, text: 'Cuba', isCorrect: true },
        { id: 3, text: 'Mexico', isCorrect: false },
      ],
    },
    {
      text: 'Which of the following countries DO NOT border the US?',
      options: [
        { id: 0, text: 'Canada', isCorrect: false },
        { id: 1, text: 'Russia', isCorrect: true },
        { id: 2, text: 'Cuba', isCorrect: true },
        { id: 3, text: 'Mexico', isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = isCorrect => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const handleSUbmit = () => {

    const updateData = {
      correctAnswer: score,
      questions: questions.length,
      percent: parseInt((score / questions.length) * 100),
      name: user?.name,
      email: user?.email,
      img: user?.img,
      date: currentDate,
      time: currentTime,
      quiz: 'Quiz 2',
    };

    fetch(`http://localhost:5000/solve`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(data => {
              toast.success('Submit Successfully ');
       restartGame();
      });
  }
  return (
    <div className="quiz pt-10">
      {/* 1. Header  */}
      <div className="mb-3 text-3xl">
        <h1> Quiz With Us 2</h1>

        {/* 2. Current Score  */}
        <h2>Score: {score}</h2>
      </div>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results text-2xl bg-slate-700">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {parseInt((score / questions.length) * 100)}%)
          </h2>
          <div >
            <button className="button1 mt-4" onClick={() => restartGame()}>
              Restart Quiz
            </button>

            <button onClick={handleSUbmit} className='ml-8 btn  btn-secondary font-bold'>Submit</button>
          </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="ui1">
            {questions[currentQuestion].options.map(option => {
              return (
                <li
                  className="li1 cursor-pointer"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QUiz2;