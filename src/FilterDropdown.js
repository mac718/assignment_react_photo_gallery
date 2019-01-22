import React from 'react';

const FilterDropdown = ({name, filters, onChange}) => {
  let options = filters.map((option, i) => (
        <option key={i}>{option}</option>
      ));

  return(
    <select id="filter-search" name={name} onChange={onChange}>
      {options}
    </select>
  )
}

export default FilterDropdown;
