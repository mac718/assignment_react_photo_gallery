import React from 'react';

const SearchField = ({onSearchClick}) => {

  return (
    <div id="SearchField">
      <input type='text' />
      <input id='search-button' type='submit' value='Submit' className='btn btn-primary' onClick={onSearchClick}/>
    </div>
  )
}

export default SearchField;