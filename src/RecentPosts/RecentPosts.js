import React, {Component} from 'react';

import Post from '../Post/Post';

class Posts extends Component{
  state = {
    posts: [],
    fetched: false
  }
  componentDidMount(){
    this.getRecentPosts();
  }

  getRecentPosts = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e82f70b988f04976bc0f0db2f241c521')
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

export default Posts;