import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Answer from "./answer";

const Question = ({ question, answer, check, ...props }) => {
  const list = list => {
    if (!list) return;
    return list.map(choice => (
      <Answer answer={answer} check={check} key={choice.id} choice={choice} />
    ));
  };

  useEffect(() => {
    console.log("mounting");
  }, []);

  return (
    <>
      <div className="quiztitle">
        {question.id}
        <h4>{question.content}</h4>
      </div>
      <div className="questionbody">
        <ol>{list(question.choices)}</ol>
      </div>
    </>
  );
};

export default Question;
