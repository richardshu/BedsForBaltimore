import React, { Component } from 'react';
import { 
    Button, Card, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

import './SheltersList.css';

class Shelter extends Component {
    render() {
        const shelter = this.props.shelter;
        const buttonClass = shelter.website ? "" : "disabled";
        return (
            
                <Card className="card">
                    <div id="color_gradient">Hi</div>
                    <CardBody>
                        <CardTitle>{shelter.name}</CardTitle>
                        <CardSubtitle> {shelter.address} </CardSubtitle>
                        <CardText> {shelter.phone} </CardText>
                        <CardText> {shelter.freeBeds} beds available</CardText>
                        <Button className={buttonClass} color="info" href={shelter.website} target="_blank">Website</Button>
                    </CardBody>
                </Card>
        );
    }
}

export default Shelter;
