import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Article from '../Article/Article';
import Category from '../Category'
import Posts from '../RecentPosts';
import SearchedPosts from '../SearchedPosts';
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

  // handleChange = query => {
  //   this.setState({...this.state, searched: query})
  // }

  onKeyDownHandler = query => {
    // this.setState({...this.state, searched: query});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header 
            handleCategory={this.handlecategoryClick}
            handleChange={this.handleChange}
            handleKeyDown={this.onKeyDownHandler}
          />
          <Switch>
            <Route exact path='/category/:category' component={Category} />
      
            {/* <Route exact path='/' render={props => <Posts {...props} query={this.state.searched} />} /> */}
            <Route exact path='/' component={Posts} />

            <Route exact path="/search/:q" component={SearchedPosts} />
            <Route exact path="/article/:article" component={Article} />

          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
