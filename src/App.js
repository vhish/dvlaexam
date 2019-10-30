import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/start';
import Question from './components/question';


import {BrowserRouter as Router, Route, Link, Redirect,
        withRouter } from 'react-router-dom';

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
    <div className="App">
      <Router>

        <header className="App-header">

          <p>
            
          </p>
          
        </header>
        
        <Route exact path="/" render={()=> <Start/>}></Route>
        <Route exact path="/question/:id" render={( {match })=> <Question question={questionById(match.params.id)}/>}></Route>
      </Router>
    </div>
  );
}

export default App;
