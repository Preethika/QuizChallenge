import React from 'react';

export function Item({ question, correct_answer, incorrect_answers }) {
  const answers = [correct_answer, ...incorrect_answers];
  return (
    <div className="card">
      <p className="title">Question</p>
      <p>{question}</p>
      <p className="title">Answers</p>
      {
        answers.map(answer => (
          <div className="form-check-inline" key={answer}>
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />{answer}
            </label>
          </div>
        ))
      }
    </div>
  )
};

export default function List({ list }) {
  return (
    list.map((item) => {
      const { question, correct_answer, incorrect_answers } = item;
      return <Item key={question} question={question} correct_answer={correct_answer} incorrect_answers={incorrect_answers} />
    })
  );
}