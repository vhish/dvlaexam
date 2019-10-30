import React from 'react';
import {Link } from 'react-router-dom';
import Answer from './answer';

const Question = ({question}) => {
  const nextQuestion = question.id + 1;
    return (
        <> 
          <div>
             <p>{question.content}</p>
             {question.choices.map(choice => 
              <Answer 
                key={choice.id}
                choice={choice}/>)}
             <div>
                <Link to={`/question/${nextQuestion}`}>Next</Link>
             </div>
          </div>

        </>
    )
}

export default Question;