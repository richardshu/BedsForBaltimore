import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomelessSheltersList from './Components/Admin/Pages/HomelessSheltersList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomelessSheltersList />
      </div>
    );
  }
}

export default App;
