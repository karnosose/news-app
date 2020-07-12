import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../Header/Header';
import Category from '../Category'
import Posts from '../RecentPosts';
import SearchedPosts from '../SearchedPosts';

import './App.style.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/category/:category' component={Category} />

            <Route exact path='/' component={Posts} />

            <Route exact path="/search/:q" component={SearchedPosts} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
