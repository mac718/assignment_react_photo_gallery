import React from 'react';

const Row = ({panel1, panel2, panel3, onFilterChange}) => {
  var panels = [panel1, panel2, panel3];
  console.log(panels)
  panels = panels.filter(panel => (panel != undefined));

  panels = panels.map((panel, index) => (
    <div className="col-sm-4" key={index}>{panel}</div>
  ));
  return (
  <div className="row" onChange={onFilterChange}>
    {panels}
  </div>
  )
}

export default Row;