import React, { Component } from 'react';
import Header from './components/header/Header'; 
import Jumbotron from './components/jumbotron/Jumbotron'; 

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
