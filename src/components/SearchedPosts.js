import React, { Component } from 'react';

import Post from './Post/Post';

class SearchedPosts extends Component{

  state = {
    posts: [],
    fetched: false
  }

  componentDidMount(){
    if(this.props.match.params.q){
      this.getSearchResult(this.props.match.params.q)
    } 
  }

  getSearchResult = () => {
    fetch(`https://newsapi.org/v2/everything?q=${this.props.match.params.q}&apiKey=e82f70b988f04976bc0f0db2f241c521`)
    .then(res => res.json())
    .then(res => {
        this.setState({
          posts: res.articles,
          fetched: true,
        })
    })
  }

  render(){
    return (
      <Post 
        fetched={this.state.fetched}
        articles={this.state.posts}
      />
    )
  }
}

export default SearchedPosts;