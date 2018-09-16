import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

import SheltersList from './Components/User/Pages/SheltersList';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import AddHomelessShelter from './Components/Pages/AddHomelessShelter';

const client = Stitch.initializeDefaultAppClient('homelesshaven-tcmuc');
const collection = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Shelters').collection("TestData");

class App extends Component {

  constructor() {
    super();
    this.state = {
      homelessShelters : []
    };
  }

  componentDidMount(){
    if (Stitch.defaultAppClient.auth.isLoggedIn) {
      this.getShelterData();
    } else {
      Stitch.defaultAppClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        console.log(`Logged in as anonymous user with id: ${user.id}`);
        this.getShelterData();
      }).catch(console.error);
    }
  }

  getShelterData(){
    const query = {};
    const params = {sort: {"freeBeds" : -1 }};
    collection.find(query, params).asArray().then(docs => {
      const newState = {
        homelessShelters : docs,
        collection : collection
      };
      this.setState(newState);
      console.log(docs);
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
