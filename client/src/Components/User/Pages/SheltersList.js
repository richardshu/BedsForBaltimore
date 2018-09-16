import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Shelter from './Shelter';

import './SheltersList.css';


class SheltersList extends Component {
    render() {
        return (
            <Container>
                <h1 id="title">Find a homeless shelter near you</h1>
                <Row>
                    { this.props.homelessShelters.map((shelter, i) => {
                        return (
                            <Col sm="4" key={i}>
                                <Shelter shelter={shelter} />
                            </Col>
                        )}
                    )}
                </Row>
            </Container>
        );
    }
}

export default SheltersList;
