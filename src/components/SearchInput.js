import React from 'react';

const SearchComponent = (props) => {

  const onKeyDownHandler =  e => {
    if (e.keyCode === 13) {
      window.location.href=`${window.location.origin}/search/${e.target.value}`
    }
  }
  
  return (
      <input 
        type="text" 
        placeholder="Search.." 
        name="search"
        onKeyDown={e => onKeyDownHandler(e)}
      >
      </input>
  )
}

export default SearchComponent;