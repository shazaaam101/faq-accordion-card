import React from "react";

const Question = ({ question, answer, id }) => {
  return (
    <div className="Question">
      <div className="field">
        <label htmlFor={id} className="question">
          {question}
        </label>
        <input id={id} className="checkbox" type="checkbox" />
      </div>

      <p className="answer">{answer}</p>
      <hr />
    </div>
  );
};

export default Question;
