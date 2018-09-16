import React, { Component } from 'react';
import SheltersList from './Components/User/Pages/SheltersList';
import Navbar from './Components/Navbar/Navbar';
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
        <Navbar />
        <SheltersList homelessShelters={this.state.homelessShelters} />
      </div>
    );
  }
}

export default App;
