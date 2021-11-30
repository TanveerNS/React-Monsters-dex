import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({placeholder, onTextChanged}) => {
  function textChanged(event) {
    onTextChanged(event.target.value);
  }

  return(
    <input type="search" 
      className="search"
      placeholder={placeholder} 
      onChange={textChanged} />
  );
}