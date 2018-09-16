import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

import Navbar from './Components/Navbar/Navbar';
import AddHomelessShelter from './Components/Admin/Pages/AddHomelessShelter';
import HomelessSheltersList from './Components/Admin/Pages/HomelessSheltersList';
import SheltersList from './Components/User/Pages/SheltersList';

import './App.css';

const client = Stitch.initializeDefaultAppClient('homelesshaven-tcmuc');
const collection = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Shelters').collection("Data");

const client = Stitch.initializeDefaultAppClient('homelesshaven-tcmuc');
const collection = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Shelters').collection("TestData");

class App extends Component {

  constructor() {
    super();
    this.state = {
      homelessShelters: []
    };
  }

  componentDidMount() {
    if (Stitch.defaultAppClient.auth.isLoggedIn) {
      this.getShelterData();
    } else {
      Stitch.defaultAppClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        console.log(`Logged in as anonymous user with id: ${user.id}`);
        this.getShelterData();
      }).catch(console.error);
    }
  }

  getShelterData() {
    const query = {};
    const params = { sort: { "freeBeds": -1 } };
    collection.find(query, params).asArray().then(docs => {
      const newState = {
        homelessShelters: docs,
        collection: collection
      };
      this.setState(newState);
      console.log(docs);
    });
  }

  renderAdminAddHomelessShelter() {
    return <AddHomelessShelter coll={collection} />;
  }

  renderAdminHomelessSheltersList() {
    return <HomelessSheltersList homelessShelters={this.state.homelessShelters} />;
  }

  renderUserHomelessSheltersList() {
    return <SheltersList homelessShelters={this.state.homelessShelters} />;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => this.renderUserHomelessSheltersList()} />
            <Route path="/Admin/AddHomelessShelter" render={() => this.renderAdminAddHomelessShelter()} />
            <Route path="/Admin/HomelessSheltersList" render={() => this.renderAdminHomelessSheltersList()} />
            <Route path="/User/SheltersList" render={() => this.renderUserHomelessSheltersList()} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;