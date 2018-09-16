import React, { Component } from 'react';
import HomelessShelters from './Components/Pages/HomelessShelters';
import './App.css';
import TextFields from './Components/Pages/AddHomelessShelter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Homeless Haven</h1>
        </header>
        <TextFields />
      </div>
    );
  }
}

export default App;
