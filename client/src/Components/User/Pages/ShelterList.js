import { Component } from 'react';

class ShelterList extends Component {
  render() {
    let shelters = this.props.shelters;
    return (
      <div className="shelter-list">
        {
          shelters.map((shelter, i) => {
            return (
            <li key={i}>
              <Shelter {...shelter}/>
            </li>
            )
          })
        }
      </div>
    );
  }
}

ShelterList.defaultProps = {
  shelters : [],
};