import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Posts from '../Posts/Posts';
import Category from '../Category/Category';
import Header from '../Header/Header';

import './App.style.js';

class App extends Component {
  state = {
    currentCategory: '',
    searched: ''
  }
  handlecategoryClick = (category) => {
    this.setState({currentCategory: category})
  }

  handleChange = query => {
    this.setState({...this.state, searched: query})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header 
            handleCategory={this.handlecategoryClick}
            handleChange={this.handleChange}
          />
          <Switch>
            <Route path='/:category' component={Category} />
      
            <Route exact path='/' render={props => <Posts {...props} query={this.state.searched} />} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
