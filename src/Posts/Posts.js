import React, {Component} from 'react';

import Post from '../Post/Post';

import {styles} from './Posts.style';
import { withStyles } from '@material-ui/styles';

class Posts extends Component{
  state = {
    posts: [],
    fetched: false
  }
  componentDidMount(){
    if(this.props.match.params.q){
      this.getSearchResult(this.props.match.params.q)
    } 
    else if(this.props.match.params.category){
      this.getCategoryPosts(this.props.match.params.category)
    }
    else {
      this.getRecentPosts();
    }

  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.q !== prevProps.match.params.q){
      // this.getRecentPosts();
    } 
    else if(this.props.match.params.category !== prevProps.match.params.category){
      this.getCategoryPosts(this.props.match.params.category)
    } 
  }

  getSearchResult = query => {
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=e82f70b988f04976bc0f0db2f241c521`)
    .then(res => res.json())
    .then(res => {
        this.setState({
          posts: res.articles,
          fetched: true,
        })
    })
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

  getCategoryPosts = category => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e82f70b988f04976bc0f0db2f241c521`)
    .then(res => res.json())
    .then(res => res.articles)
    .then(articles => {
      this.setState({
          posts: articles,
          fetched: true,
      }) 
    })
  }

  render(){
      
    // const {classes} = this.props;
    
    return (
      <Post 
        fetched={this.state.fetched} 
        articles={this.state.posts} 
      />
      )
      
  }
}

export default withStyles(styles)(Posts);