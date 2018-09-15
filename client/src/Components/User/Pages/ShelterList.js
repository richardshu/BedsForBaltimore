import React, { Component } from 'react';
import Shelter from "./Shelter";

class ShelterList extends Component {
  render() {
    return (
      <div className="shelter-list">
        {
          this.props.shelters.map((shelter, i) => {
            return (
            <li key={i}>
              <Shelter shelter={shelter}/>
            </li>
            )
          })
        }
      </div>
    );
  }
}

export default ShelterList;