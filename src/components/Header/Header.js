import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';


import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';
import SearchInput from '../SearchInput';

class Header extends Component {
  state = {
    categories: [],
    searched: ''
  }
  async componentDidMount(){
    const categories = await this.getCategories();   
    this.setState({
      categories: categories,
    })
  }

  async getCategories () {
    const categories = await fetch('https://newsapi.org/v2/sources?apiKey=e82f70b988f04976bc0f0db2f241c521')
    .then(res => res.json())
    .then(res => {
      let categories = [];
      res.sources.map(source => {
        if(!categories.includes(source.category)){
          categories = [...categories, source.category]
        }
        return categories;
      })
      return categories;
    })
   
    return categories
    
  }

  handleSearchInputChange = query => {
    this.props.handleChange(query);
  }
  onKeyDownHandler = query => {
    this.props.handleKeyDown(query);
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.header}>
        <div className={classes.appTitle}>
          <Link to="/">
            <h2>News App</h2>
          </Link>
        </div>
        <div className={classes.categories}>
          {(this.state.categories).map(category => (
            <Link 
              to={`/category/${category}`}
              value={category}
              key={uuid()} 
              className={classes.category} 
            >
              {category}
            </Link>
          ))}
        </div>
        <div className={classes.searchInput}>
          <SearchInput 
            handleChange={this.handleSearchInputChange}
            handleKeyDown={this.onKeyDownHandler}
          />
        </div>
        
        
        <div className={classes.contactUs}>
          Contact us
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);