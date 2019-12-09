import React from 'react';
import { Link } from 'react-router-dom';
import Answer from './answer';

const Question = ({ question }) => {
  const nextQuestion = question.id + 1;
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="quiz-bg">
              <div className="questionnumber">Question 1 of 10</div>

              <div className="quizimage mb-4 text-center">
                <img src="%PUBLIC_URL%/images/avartar-03.jpg" alt="" srcset="" width="300" />
              </div>
              <div className="quiztitle">
                <h4>{Question.content}</h4>
              </div>
              <div className="questionbody">
              <ul>
              {question.choices.map(choice =>
                <Answer
                  key={choice.id}
                  choice={choice} />)}
              </ul>
              </div>
              <div className="questionvalue">
                <span>(10 points)</span>
              </div>
              <div className="navigationcontrols">



                <div className="">



                  <button type="button"
                    className="btn btn-outline-primary rounded px-5 mr-2">Back</button>

                  <Link to={`/question/${nextQuestion}`} className="btn btn-primary rounded px-5 ml-2">Next</Link>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Question;