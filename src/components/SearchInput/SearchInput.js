import React from 'react';

const SearchComponent = (props) => {

  const handleChange = e => {
    props.handleChange( e.target.value);
  }

  const onKeyDownHandler =  e => {
    if (e.keyCode === 13) {
      console.log(window.location.origin)
      props.handleKeyDown(e.target.value);
      window.location.href=`${window.location.origin}/search/${e.target.value}`
    }
 
  }
  
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search.." 
        name="search"
        onChange={e => handleChange(e)}
        onKeyDown={e => onKeyDownHandler(e)}
      >
      </input>
    </div>
  )
}

export default SearchComponent;