import React, { Component } from 'react';
import { 
    Button, Card, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

import './HomelessSheltersList.css';

class HomelessSheltersList extends Component {
    constructor() {
        super();
        this.state = {
            homelessShelters: []
        }
    }

    componentDidMount() {
        fetch('api/homelessShelters')
            .then(res => res.json())
            .then(homelessShelters => this.setState({ homelessShelters }));
    }

    editShelter() {
        console.log("Editing shelter");
    }

    deleteShelter() {
        console.log("Deleting shelter");
    }

    render() {
        return (
            <Container>
                <h1 id="title">Your homeless shelters</h1>
                <Row>
                    {this.state.homelessShelters.map(homelessShelter =>
                        <Col sm="4" key={homelessShelter.id}>
                            <Card className="card">
                                <div id="color_gradient">Hi</div>
                                <CardBody>
                                    <CardTitle>{homelessShelter.name}</CardTitle>
                                    <CardSubtitle> {homelessShelter.address} </CardSubtitle>
                                    <CardText> {homelessShelter.phoneNumber} </CardText>
                                    <CardText> {homelessShelter.numberOfAvailableBeds} beds available</CardText>
                                    <Button color="info" href={homelessShelter.websiteURL} target="_blank">Website</Button>
                                    <Button color="warning" onClick={this.editShelter}>Edit</Button>
                                    <Button color="danger" onClick={this.deleteShelter}>Delete</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Button id="add_shelter_button" color="dark">Add Shelter</Button>
            </Container>
        );
    }
}

export default HomelessSheltersList;
