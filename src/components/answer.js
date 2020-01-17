import React from "react";

const Answer = ({ choice, answer, check }) => {
  return (
    <>
      <li>
        <div className="form-check">
          <input
            onChange={() => check({ id: choice.id })}
            className="form-check-input"
            type="radio"
            name={choice}
            checked={answer.id === choice.id}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            {choice.content}
          </label>
        </div>
      </li>
    </>
  );
};

export default Answer;
