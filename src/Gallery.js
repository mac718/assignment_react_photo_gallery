import React from 'react';
import instagramResponse from './photos';
import Panel from './Panel';
import Row from './Row';
import FilterDropdown from './FilterDropdown';
import FilterAndSort from './FilterAndSort';
import PageLinks from './PageLinks';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'All',
      ascending: false,
      searchTerm: '',
      currentPage: 1
    };
  }

  onFilterChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  onSortClick = (e) => {
    this.setState({
      ascending: !this.state.ascending
    })
  }

  onSearchClick = (e) => {
    this.setState({
      searchTerm: [e.target.previousSibling][0].value
    })
  }

  onPageClick = (e) => {
    this.setState({
      currentPage: [e.target.innerText]
    })
  } 

  _createPanelRows = (panels, currentPage) => {
    var rows = []
    var row = []
    console.log(panels[currentPage - 1])
    panels[currentPage - 1].forEach((panel, index) => {
      console.log(index)
      if((index < 3 || index % 3 != 0) && index < panels[currentPage - 1].length - 1) {
        row.push(panel);
      } else if((index < 3 || index % 3 != 0) && index == panels[currentPage - 1].length - 1){
        row.push(panel);
        rows.push(row);
      } else {
        rows.push(row);
        row = [];
        row.push(panel);
      }
    })
    console.log(rows)
    return rows;
  }

  _paginatePanels = (panels) => {
      let paginatedPanels = []
      let page = []

      panels.forEach((panel, i) => {
        if(i < 12 || (i % 12 != 0 && i < panels.length - 1)) {
          console.log(i)
          page.push(panel)
        } else if(i % 12 != 0 && i == panels.length - 1){
          page.push(panel)
          paginatedPanels.push(page)
        } else {
          console.log(i + "thing")
          paginatedPanels.push(page)
          page = []
          page.push(panel)
        }
      })
      console.log(paginatedPanels)
      return paginatedPanels
    }

  render() {

    const {filter, ascending, searchTerm, currentPage} = this.state;
    var photoData;

    var allfilters = instagramResponse.data.map(photo => (photo.filter))
    var filters = [...new Set(allfilters)]; //filter out non-unique values from allFilters

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

    var allPanels = photoData.map((photo, index) => {
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

    var paginatedPanels = this._paginatePanels(allPanels); 

    var numberOfPages = paginatedPanels.length;  


    var rows = this._createPanelRows(paginatedPanels, currentPage);

    rows = rows.map((row, index) => (
      <Row panel1={row[0]} panel2={row[1]} panel3={row[2]} onChange={this.onFilterChange} key={index} />
    ))

    return(
      <div id='gallery'>
        <FilterAndSort filters={filters} onChange={this.onFilterChange} onSortClick={this.onSortClick} onSearchClick={this.onSearchClick} />
        {rows}
        <PageLinks numberOfPages={numberOfPages} onPageClick={this.onPageClick} />
      </div>
    )
  }
}

export default Gallery;