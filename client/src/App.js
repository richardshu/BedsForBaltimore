import React, { Component } from 'react';
import SheltersList from './Components/User/Pages/SheltersList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homelessShelters : []
    };
  }
  componentDidMount(){
    //database request here
    this.setState({
      homelessShelters : [
        {
          name: "Dummy",
          address: "123 Main",
          phone: "123-123-1234",
          website: "example.com",
          freeBeds: 10
        }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Beds for Baltimore</h1>
        </header>
        <SheltersList homelessShelters={this.state.homelessShelters}/>
      </div>
    );
  }
}

export default App;
