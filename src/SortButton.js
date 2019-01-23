import React from 'react';

const SortButton = ({onClick}) => {
  return (
    <button className="btn btn-primary" id="sort-button" onClick={onClick}>Sort</button>
  )

}

export default SortButton;