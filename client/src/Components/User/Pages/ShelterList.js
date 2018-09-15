import { Component } from 'react';

class ShelterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelters: props.shelters
    };
  }
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