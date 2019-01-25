import React from 'react';
import FilterDropdown from './FilterDropdown';
import SortButton from './SortButton';
import SearchField from './SearchField';

const FilterAndSort = ({filters, onChange, onSortClick, onSearchClick}) => {
  return(
    <div id="filter-and-sort">
      <FilterDropdown name='filter' filters={filters} onChange={onChange}/>
      <SortButton onClick={onSortClick} />
      <SearchField onSearchClick={onSearchClick}/>
    </div>
  )
}

export default FilterAndSort;