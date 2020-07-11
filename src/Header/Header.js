import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';


import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';
import SearchComponent from '../SearchComponent/SearchComponent';

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
      // const newCategories = categories.splice(0,5)
      return categories;
    })
   
    return categories
    
  }

  handleSearchInputChange = query => {
    this.setState({...this.state, searched: query})
      console.log(this.state.searched)
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.header}>
              {this.state.searched}

        <div className={classes.appTitle}>
          <Link to="/">
            <h2>News App</h2>
          </Link>
        </div>
        <div className={classes.categories}>
          {(this.state.categories).map(category => (
            <Link 
              to={category}
              value={category}
              key={uuid()} 
              className={classes.category} 
            >
              {category}
            </Link>
          ))}
        </div>
        
        <SearchComponent 
          handleChange={this.handleSearchInputChange}
        />
        
        <div className={classes.contactUs}>
          Contact us
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);