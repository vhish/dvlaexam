import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useConnect } from "../../src/context";
import { types } from "../../src/context/actionTypes";
import Question from "./question";

const QuizView = ({ questions, dispatch, ...props }) => {
  const id = props.match.params.id;
  console.log(id);
  const history = useHistory();
  const [answer, setAnswer] = useState({});
  const [question, setQuestion] = useState({});

  const questionById = id =>
    questions.find(question => question.id === Number(id));

  const next = () => {
    let obj = {
      question: question.id,
      answer: answer.id
    };

    dispatch({
      type: types.SET_ANSWERS,
      payload: obj
    });

    history.push(`/question/${question.id + 1}`);
  };

  useEffect(() => {
    setAnswer({});
    setQuestion(questionById(id));
  }, [id]);

  useEffect(() => {
    console.log("answer", answer);
  }, [answer]);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Quiz Box
          </a>

          <div>
            <span className="timer mr-5 mr-5 font-weight-bold">0:04:52</span>
            <button type="button" className="btn btn-danger rounded">
              Restart
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="quiz-bg">
              <div className="questionnumber">Question 1 of 10</div>

              <div className="quizimage mb-4 text-center">
                <img
                  src="%PUBLIC_URL%/images/avartar-03.jpg"
                  alt=""
                  srcSet=""
                  width="300"
                />
              </div>
              <Question question={question} answer={answer} check={setAnswer} />
              <div className="questionvalue">
                <span>(10 points)</span>
              </div>
              <div className="navigationcontrols">
                <div className="">
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded px-5 mr-2"
                  >
                    Back
                  </button>

                  <a
                    onClick={() => next()}
                    className="btn btn-primary rounded px-5 ml-2"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default useConnect(({ questions }) => ({ questions }))(QuizView);
