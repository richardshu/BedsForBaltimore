import React, { Component } from 'react';
import HomelessSheltersList from './Components/Admin/Pages/HomelessSheltersList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Beds for Baltimore</h1>
        </header>
        <HomelessSheltersList />
      </div>
    );
  }
}

export default App;
