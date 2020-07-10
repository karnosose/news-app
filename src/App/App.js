import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Category from '../Category/Category';
import Header from '../Header/Header';

import './App.style.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
     
            <Route path='/:category' component={Category} />
      

            <Route exact path='/' render={() => (
              <h3>
                Welcome! Select a body of saline water above.
              </h3>
            )} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
