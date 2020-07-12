import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import TogglableMenu from '../TogglableMenu/TogglableMenu'

import {styles} from './Header.style';
import { withStyles } from '@material-ui/styles';

class Header extends Component {
  state = {
    categories: [],
    visible: false,
    windowWidth: window.innerWidth,
  }
  async componentDidMount(){
    this.updateDimensions();

    window.addEventListener('resize', this.updateDimensions)

    const categories = await this.getCategories();   
    this.setState({
      ...this.state,
      categories: categories,
    })
  }

  componentDidUpdate(){
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

  toggleMenuVisibility = () => {
    this.setState({
      ...this.state,
      visible: !this.state.visible
    })
  }

  render() {

    const {classes} = this.props
    return (
      <div className={classes.header}>
        <div className={classes.togglable}>
          {console.log(this.state.visible)}
          <div className={classes.appTitle}>
            <Link to="/">
              <h2>News App</h2>
            </Link>
          </div>
          {(this.state.windowWidth > 1024 || (this.state.windowWidth < 1024 && this.state.visible))  && (
            <TogglableMenu 
              categories={this.state.categories}
              handleKeyDown={this.onKeyDownHandler}
              handleChange={this.handleSearchInputChange}
            />
          )}

          
          
        </div>
        {this.state.windowWidth < 1024 && (
          <div className={classes.menuIcon}>
            <MenuIcon 
              onClick={() => this.toggleMenuVisibility()}
            />
         </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Header);