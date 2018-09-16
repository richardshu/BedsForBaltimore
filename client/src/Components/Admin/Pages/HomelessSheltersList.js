import React, { Component } from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';
import HomelessShelter from './HomelessShelter';

import './HomelessSheltersList.css';

class HomelessSheltersList extends Component {
    
    editShelter() {
        console.log("Editing shelter");
    }

    deleteShelter() {
        console.log("Deleting shelter");
    }

    render() {
        return (
            <Container>
                <h1 id="title">Your homeless shelters (admin)</h1>
                <Row>
                    { this.props.homelessShelters.map((shelter, i) => {
                        return (
                            <Col sm="4" key={i}>
                                <HomelessShelter shelter={shelter} />
                            </Col>
                        )}
                    )}
                </Row>
                <Button id="add_shelter_button" href="AddHomelessShelter">Add Shelter</Button>
            </Container>
        );
    }
}

export default HomelessSheltersList;
