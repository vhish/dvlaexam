import React, { useState } from "react";
import Start from "./components/start";
import QuizView from "./components/QuizView";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Router>
          <div className="content">
            <Route exact path="/" render={({ match }) => <Start />}></Route>
            {/* <Route
              exact
              path="/question/:id"
              render={({ match }) => (
                <Question question={questionById(match.params.id)} />
              )}
            ></Route> */}
            <Route path="/question/:id" component={QuizView} />
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
