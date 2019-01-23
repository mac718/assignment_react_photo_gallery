import React from 'react';
import instagramResponse from './photos';
import Panel from './Panel';
import Row from './Row';
import FilterDropdown from './FilterDropdown';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: ''
    };
  }

  onFilterChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    }, console.log(e.target.name, e.target.value))
  } 

  _createPanelRows = (panels) => {
    var rows = []
    var row = []
    panels.forEach((panel, index) => {
      if((index == 0 || index % 3 != 0) && index < panels.length - 1) {
        row.push(panel);
      } else if((index == 0 || index % 3 != 0) && index == panels.length - 1){
        row.push(panel);
        rows.push(row);
      } else {
        rows.push(row);
        row = [];
        row.push(panel);
      }
    })
    return rows;
  }

  render() {

    const {filter} = this.state;
    var photoData;

    var allfilters = instagramResponse.data.map(photo => (photo.filter))
    var filters = [...new Set(allfilters)]; //filter out non-unique values from allFilters

    if(filter[0] == null) {
      photoData = instagramResponse.data;
    } else {
      photoData = instagramResponse.data.filter(photo => (
        photo.filter == filter
      ))
    }

    var panels = photoData.map((photo, index) => (
      <Panel user={photo.user.username} 
        createdAt={photo.created_time} 
        likeCount={photo.likes.count} 
        commentCount={photo.comments.count} 
        filter={photo.filter}
        key={index} 
      />
    ))

    var rows = this._createPanelRows(panels);

    rows = rows.map((row, index) => (
      <Row panel1={row[0]} panel2={row[1]} panel3={row[2]} onChange={this.onFilterChange} key={index} />
    ))

    return(
      <div id='gallery'>
        <FilterDropdown name='filter' filters={filters} onChange={this.onFilterChange}/>
        {rows}
      </div>
    )
  }
}

export default Gallery;