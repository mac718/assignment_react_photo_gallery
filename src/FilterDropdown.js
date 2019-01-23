import React from 'react';
import SortButton from './SortButton';

const FilterDropdown = ({name, filters, onChange}) => {
  let options = filters.map((option, i) => (
        <option key={i}>{option}</option>
      ));

  return(
    <div id="filter-search-div">
      <h5>Filter Photos by Filter</h5>
      <select id="filter-search" name={name} onChange={onChange}>
        <option></option>
        {options}
      </select>
    </div>
  )
}

export default FilterDropdown;
