import React, { Component } from 'react';
import HomelessShelters from './Components/Pages/HomelessShelters';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Homeless Haven</h1>
        </header>
        <HomelessShelters />
      </div>
    );
  }
}

export default App;
