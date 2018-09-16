import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <h1 id="logo_text">Beds for Baltimore</h1>
        <Button color="primary">Logout</Button>
      </div>
    );
  }
}

export default Navbar;
