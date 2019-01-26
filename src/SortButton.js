import React from 'react';

const SortButton = ({onClick}) => {
  return (
    <div id="sort-button-div">
      <h5>Oldest-->Newest/Newest-->Oldest</h5>
      <button className="btn btn-primary" id="sort-button" onClick={onClick}>Sort</button>
    </div>
  )

}

export default SortButton;