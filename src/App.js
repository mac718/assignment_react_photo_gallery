import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './Panel';
import instagramResponse from './photos';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Gallery />
      </div>
    );
  }
}

export default App;
