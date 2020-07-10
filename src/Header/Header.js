import React, {Component} from 'react';
import uuid from 'react-uuid';

import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';

// const categories = ['category 1', 'category 2', 'category 3']

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
      Object.keys(res.sources).forEach(source => {
        const cat = res.sources[source].category;
        if(!categories.includes(cat)){
          categories = [...categories, cat]
        }
      });
      console.log(categories)
      return categories;
    })
   

    return categories;
  }

  render() {
    // console.log(this.state)
    const {classes} = this.props
    return (
      <div className={classes.header}>
        <div className={classes.appTitle}>
          <h2>News App</h2>
        </div>
        <div className={classes.categories}>

          {(this.state.categories).map(category => (
            <div key={uuid()} className={classes.category}>
              {category}
            </div>
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