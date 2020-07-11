import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class SearchComponent extends Component{
  handleChange = e => {
    this.props.handleChange( e.target.value);
  }
  
  onKeyDownHandler =  e => {
    if (e.keyCode === 13) {
      this.props.handleKeyDown(e.target.value);
      window.location.href=`search/${e.target.value}`
    }
 
  }

  render(){
    return (
      <div>
        <input 
          type="text" 
          placeholder="Search.." 
          name="search"
          onChange={e => this.handleChange(e)}
          onKeyDown={e => this.onKeyDownHandler(e)}
        >
        </input>
      </div>
    )
  }
}

export default SearchComponent;