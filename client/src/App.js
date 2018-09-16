import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import HomelessShelters from './Components/Pages/HomelessShelters';
//import ShelterList from './Components/User/Pages/ShelterList';
import './App.css';


const client = Stitch.initializeDefaultAppClient('homelesshaven-tcmuc');
const sheltersCollection = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Shelters').collection("Data");

class App extends Component {
  constructor() {
    super();
    this.state = {
      shelters: []
    };
  }
  getShelterData(){
    const query = {};
    const params = {sort: {"freeBeds" : -1 }};
    sheltersCollection.find(query, params).asArray().then(docs => {
      this.setState({ shelters: docs });
      console.log(docs);
    });
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Homeless Haven</h1>
        </header>
        <HomelessShelters />

        {/* sample implementation*/}
        {/*<ShelterList shelters={this.state.shelters}/>*/}
        
      </div>
    );
  }
}

export default App;
