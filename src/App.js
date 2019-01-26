import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Panel from './Panel';
import instagramResponse from './photos';
import Gallery from './Gallery';
import FilterDropdown from './FilterDropdown';

class App extends Component {

  render() {
    //const {filter} = this.state;
    return (
      <div className="App container">
        <h1 id="gallery-heading">React Photo Gallery</h1>
        <Gallery filter='none' />
      </div>
    );
  }
}

export default App;
