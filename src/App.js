import React, { useState } from 'react';
import Start from './components/start';
import Question from './components/question';


import {
  BrowserRouter as Router, Route, Link, Redirect,
  withRouter
} from 'react-router-dom';

const App = () => {

  const [questions, setQuestions] = useState([
    {
      content: "What is this sign called",
      id: 1,
      choices: [
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 1
        },
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 2
        },
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 3
        }
      ]
    },
    {
      content: "Road signs are dope!",
      id: 2,
      choices: [
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 1
        },
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 2
        },
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 3
        }
      ]
    },
    {
      content: "What is this sign called",
      id: 3,
      choices: [
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 1
        },
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 2
        },
        {
          content: "zebra crossing",
          img: "zebra.png",
          id: 3
        }
      ]
    }
  ]);

  const questionById = id =>
    questions.find(question => question.id === Number(id))

  return (
    <div>
      <div className="wrapper">
        <div className="content">
          <Router>
            <Route exact path="/" render={() => <Start />}></Route>
            <nav className="navbar navbar-light bg-light">
              <div className="container">
                <a className="navbar-brand" href="#">Quiz Box</a>

                <div>
                  <span className="timer mr-5 mr-5 font-weight-bold">0:04:52</span>
                  <button type="button" className="btn btn-danger rounded">Restart</button>

                </div>

              </div>

            </nav>


            <Route exact path="/question/:id" render={({ match }) => <Question question={questionById(match.params.id)} />}></Route>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
