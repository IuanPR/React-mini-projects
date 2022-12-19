import React from "react";
import { useState } from "react";
const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];
function Result({ corrects }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="Happy!"
      />
      <h2>
        Вы отгадали {corrects} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClickVariant(index)} key={variant}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}
function Quiz() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const question = questions[step];
  function onClickVariant(index) {
    setStep(step + 1);
    if (index === question.correct) {
      return setCount(count + 1);
    }
  }
  return (
    <div>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result corrects={count} />
      )}
    </div>
  );
}
export default Quiz;
