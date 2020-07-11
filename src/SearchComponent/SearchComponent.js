import React, { Component } from 'react';

class SearchComponent extends Component{
  handleChange = e => {
    this.props.handleChange( e.target.value);
  }

  render(){
    return (
      <div>
        <input 
          type="text" 
          placeholder="Search.." 
          name="search"
          onChange={e => this.handleChange(e)}
        >
        </input>
      </div>
    )
  }
}

export default SearchComponent;