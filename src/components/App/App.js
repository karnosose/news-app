import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Category from '../Category'
import Posts from '../RecentPosts';
import SearchedPosts from '../SearchedPosts';
import Header from '../Header/Header';

import './App.style.js';

class App extends Component {
  
  onKeyDownHandler = query => {
    // this.setState({...this.state, searched: query});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header 
            handleChange={this.handleChange}
          />
          <Switch>
            <Route exact path='/category/:category' component={Category} />
      
            {/* <Route exact path='/' render={props => <Posts {...props} query={this.state.searched} />} /> */}
            <Route exact path='/' component={Posts} />

            <Route exact path="/search/:q" component={SearchedPosts} />

          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
