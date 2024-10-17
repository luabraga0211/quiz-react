import React, { useState } from 'react';

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
    question: 'Qual é o numero com maior valor?',
    options: ['1', '12', '52', 'Nenhum deles'],
  },
  {
    question: 'Qual é o assunto que você mais considera divertido?',
    options: ['Matemática', 'Ciências', 'Técnico', 'Linguagens'],
  }
];

const App = () => {
  const [Question, setQuestion] = useState(0);

  return (
    <div>
      {Question < questions.length ? (
        <div>
          <h2>{questions[Question].question}</h2>
          <ul>
            {questions[Question].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => setQuestion(Question + 1)}>
                  {option}
                </button>
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