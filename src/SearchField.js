import React from 'react';

const SearchField = ({onSearchClick}) => {

  return (
    <div id="search-field-div">
      <label htmlFor="search-field"><h5>Enter Search Terms:</h5></label>
      <input id="search-field"type='text' />
      <input id='search-button' type='submit' value='Submit' className='btn btn-primary' onClick={onSearchClick}/>
    </div>
  )
}

export default SearchField;