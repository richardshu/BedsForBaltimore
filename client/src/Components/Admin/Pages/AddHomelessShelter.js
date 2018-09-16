import React, { Component } from 'react';
import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';

import './AddHomelessShelter.css';

class AddHomelessShelter extends Component {

    submitForm(e) {
        e.preventDefault();

        var apartment = '';
        apartment = document.getElementById("aptNum").value + ' ';
        var web = '';
        web = document.getElementById("website").value;

        this.props.coll.insertOne({
            Name: document.getElementById("name").value,
            Address: document.getElementById("streetAddress").value + ' ' + apartment +
                document.getElementById("city").value + ' ' + document.getElementById("state").value,
            Phone: document.getElementById("phone").value,
            Website: web,
            FreeBeds: document.getElementById("freeBeds").value,
        });
        document.getElementById("submitForm").reset();
        window.alert("Data Submitted!");
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <Container>
                <Form className="form" id="submitForm" onSubmit={(e) => this.submitForm(e)}>
                    <FormGroup>
                        <Input required type="text" name="name" id="name" placeholder="Shelter Name"
                            onChange={(e) => { this.handleChange(e) }} />
                    </FormGroup>
                    <FormGroup>
                        <Input required type="text" name="streetAddress" id="streetAddress"
                            placeholder="Street Address" onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="aptNum" id="aptNum" placeholder="Apartment Number"
                            onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Input required type="text" name="city" id="city" placeholder="City"
                            onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Input required type="text" name="state" id="state" placeholder="State"
                            onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Input required type="number" name="freeBeds" id="freeBeds" placeholder="Number of Free Beds"
                            onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Input required type="tel" name="phone" id="phone" placeholder="Phone Number"
                            onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="website" id="website" placeholder="Website"
                            onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <Button id="submit_button">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default AddHomelessShelter;