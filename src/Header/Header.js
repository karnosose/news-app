import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import uuid from 'react-uuid';


import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';

class Header extends Component {
  state = {
    categories: []
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

  handleCategoryClick = (category) => {
    this.props.handleCategory(category);
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
              onClick={() => this.handleCategoryClick(category)}
              to={category}
              value={category}
              key={uuid()} 
              className={classes.category} 
            >
              {category}
            </Link>
          ))}
        </div>
        <div className={classes.search}>
          <form>
            <input className={classes.searchInput} type="text" placeholder="Search.." name="search"></input>
            <input type="submit"></input>
          </form>
        </div>
        <div className={classes.contactUs}>
          Contact us
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);