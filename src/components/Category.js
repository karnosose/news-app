import React, {Component} from 'react';
import Post from './Post/Post'

class Category extends Component{
  
    state = {
      posts: [],
      fetched: false,
    }
  
  componentDidMount(){
    this.getCategoryPosts(this.props.match.params.category);
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.category !== prevProps.match.params.category){
      this.getCategoryPosts(this.props.match.params.category);
    }
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
    return (
        <Post 
          category={this.props.match.params.category} 
          fetched={this.state.fetched}
          articles={this.state.posts}
        />
            )
  }
}

export default Category;