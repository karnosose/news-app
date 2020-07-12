import React, { Component } from 'react'
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import SearchInput from '../SearchInput';
import {styles} from './TogglableMenu.style';
import {withStyles} from '@material-ui/core';

class TogglableMenu extends Component{

  handleSearchInputChange = query => {
    this.props.handleChange(query);
  }
  onKeyDownHandler = query => {
    this.props.handleKeyDown(query);
  }

  render(){
    const {classes} = this.props
    return (
      <div className={classes.toggleMenu}>
      <div className={classes.categories}>
        {(this.props.categories).map(category => (
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

export default withStyles(styles)(TogglableMenu);