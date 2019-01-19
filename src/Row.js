import React from 'react';

const Row = ({panel1, panel2, panel3}) => (
  <div className="row">
    <div className="col-sm-4">{panel1}</div>
    <div className="col-sm-4">{panel2}</div>
    <div className="col-sm-4">{panel3}</div>
  </div>
)

export default Row;