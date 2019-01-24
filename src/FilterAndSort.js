import React from 'react';
import FilterDropdown from './FilterDropdown';
import SortButton from './SortButton';

const FilterAndSort = ({filters, onChange, onClick}) => {
  return(
    <div id="filter-and-sort">
      <FilterDropdown name='filter' filters={filters} onChange={onChange}/>
      <SortButton onClick={onClick} />
    </div>
  )
}

export default FilterAndSort;