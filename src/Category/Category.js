import React, {Component} from 'react';

class Category extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      fetched: false,
    }
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

    const Article = () => {
      const post = this.state.posts.map(item => {
      return <div>{item.title}</div>
      })
      return (
        <div>{post}</div>
      )
      }
    
    return (
      <div>
        <Article />
        {this.props.match.params.category}
      </div>
    )
  }
}



export default Category;