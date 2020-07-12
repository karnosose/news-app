import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import TogglableMenu from '../TogglableMenu/TogglableMenu'

import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';

class Header extends Component {
  state = {
    categories: [],
    toggleMenu: {
      visible: false
    },
    windowWidth: window.innerWidth,
  }
  async componentDidMount(){
    this.updateDimensions();

    window.addEventListener('resize', this.updateDimensions)

    const categories = await this.getCategories();   
    this.setState({
      categories: categories,
    })
  }

  componentDidUpdate(){
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.updateDimensions)
  }
  
  updateDimensions = () => {
    this.setState({...this.state, windowWidth: window.innerWidth})
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
    const newCategories = categories.splice(2, 5)
    return newCategories
    
  }

  // handleSearchInputChange = query => {
  //   this.props.handleChange(query);
  // }
  onKeyDownHandler = query => {
    this.props.handleKeyDown(query);
  }

  render() {

    const {classes} = this.props
    return (
      <div className={classes.header}>
        {    console.log(this.state.windowWidth)
}
        <div className={classes.appTitle}>
          <Link to="/">
            <h2>News App</h2>
          </Link>
        </div>
        <TogglableMenu 
          categories={this.state.categories}
          handleKeyDown={this.onKeyDownHandler}
          handleChange={this.handleSearchInputChange}
        />
        <div className={classes.menuIcon}>
          <MenuIcon />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);