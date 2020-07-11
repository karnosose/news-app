import React, {Component} from 'react';
import uuid from 'react-uuid';

import {styles} from './Category.style';
import { withStyles } from '@material-ui/styles';

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
    const {classes} = this.props;
    const Article = () => {
      return (
        <div>
          {this.state.fetched ? this.state.posts.map(item => {
            let date = new Date(item.publishedAt);
            date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            return (
              <div className={classes.article} key={uuid()}>
                  <div className={classes.image}>
                    <img src={item.urlToImage} alt={item.source.title} />
                  </div>
                  <div className={classes.content}>
                    <div classsName={classes.title}>
                      <h3>{item.title}</h3>
                    </div>
                    <div className={classes.authorAndDate}>
                      <div className={classes.author}>
                        <span>by <i>{item.author}</i></span>
                      </div>
                      <div className={classes.date}>
                        <span> on <b>{date}</b></span> 
                      </div>
                    </div>
                    <div className={classes.excerpt}>
                      {item.description}
                    </div>
                    <div className={classes.readMore}>
                      <button>read more</button>
                    </div>
                  </div>
              </div>
            ) 
          }) : (
             'loading'
          )
        }
        </div> 
      )
      }
    
    return (
      <div className={classes.articleList}>
        <Article />
      </div>
    )
  }
}

export default withStyles(styles)(Category);