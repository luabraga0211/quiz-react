import React from 'react';

const questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['Brasília', 'Rio de Janeiro', 'São Paulo'],
  },
  {
    question: 'Qual é o maior planeta do sistema solar?',
    options: ['Terra', 'Júpiter', 'Saturno'],
  },
  {
    question: 'Qual é o nome do criador do React?',
    options: ['Mark Zuckerberg', 'Jordan Walke', 'Linus Torvalds'],
  },
];

const App = () => {
  let currentQuestion = 0;

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => currentQuestion++}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Fim do questionário!</h2>
        </div>
      )}
    </div>
  );
};

export default App;