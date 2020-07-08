import React, {Component} from 'react';
import uuid from 'react-uuid';

import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';

const categories = ['category 1', 'category 2', 'category 3']

class Header extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.header}>
        <div className={classes.appTitle}>
          <h2>News App</h2>
        </div>
        <div className={classes.categories}>
          {categories.map(category => (
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