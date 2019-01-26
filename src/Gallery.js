import React from 'react';
import instagramResponse from './photos';
import Panel from './Panel';
import Row from './Row';
import FilterDropdown from './FilterDropdown';
import FilterAndSort from './FilterAndSort';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'All',
      ascending: false,
      searchTerm: ''
    };
  }

  onFilterChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    }, console.log(e.target.name, e.target.value))
  }

  onSortClick = (e) => {
    this.setState({
      ascending: !this.state.ascending
    }, console.log(this.state.ascending))
  }

  onSearchClick = (e) => {
    this.setState({
      searchTerm: [e.target.previousSibling][0].value
    })
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

    const {filter, ascending, searchTerm} = this.state;
    var photoData;

    var allfilters = instagramResponse.data.map(photo => (photo.filter))
    var filters = [...new Set(allfilters)]; //filter out non-unique values from allFilters

    console.log(filter[0])

    if(filter == 'All') {
      photoData = instagramResponse.data;
    } else {
      photoData = instagramResponse.data.filter(photo => (
        photo.filter == filter
      ))
    }

    if(ascending) {
      photoData = photoData.sort((a, b) => {
        return a.created_time - b.created_time;
      })
    } else {
      photoData = photoData.sort((a, b) => {
        return b.created_time - a.created_time;
      })
    }

    if(searchTerm != ''){
      photoData = instagramResponse.data.filter(photo => {
        if(searchTerm.includes(photo.user.username)){
          return photo
        } else if (photo.caption && photo.caption.text.includes(searchTerm)){
          return photo
        }
      })
    }

    var panels = photoData.map((photo, index) => {
      let caption;
      
      if(photo.caption) {
        caption = photo.caption.text
      } else {
        caption = ''
      }
      return (
        <Panel user={photo.user.username} 
          createdAt={photo.created_time} 
          caption={caption}
          likeCount={photo.likes.count} 
          commentCount={photo.comments.count} 
          filter={photo.filter}
          key={index} 
        />
      )
    })

    var rows = this._createPanelRows(panels);

    rows = rows.map((row, index) => (
      <Row panel1={row[0]} panel2={row[1]} panel3={row[2]} onChange={this.onFilterChange} key={index} />
    ))

    return(
      <div id='gallery'>
        <FilterAndSort filters={filters} onChange={this.onFilterChange} onSortClick={this.onSortClick} onSearchClick={this.onSearchClick} />
        {rows}
      </div>
    )
  }
}

export default Gallery;