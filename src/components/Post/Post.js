import React from 'react';
import uuid from 'react-uuid'
import {Link} from 'react-router-dom';
import {styles} from './Post.style';
import {withStyles} from '@material-ui/core';

function Post (props){
const {classes} = props;
  return (
    <div className={classes.articleList}>
      {props.fetched ? props.articles.map(item => {
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
              <span> <i>{item.author} </i></span>
            </div>
            <div className={classes.date}>
              <span> on <b>{date}</b></span> 
            </div>
          </div>
          <div className={classes.excerpt}>
            {item.description}
          </div>
          <div className={classes.readMore}>
            <a 
              href={item.url}
              rel='noopener noreferrer'
              target='_blank'
            >
              read more</a>
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

export default withStyles(styles)(Post)