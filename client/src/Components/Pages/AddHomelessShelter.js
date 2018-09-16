import React, { Component } from 'react';
import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";
import { Button, Form, FormGroup, Input } from 'reactstrap';

const client = Stitch.initializeDefaultAppClient('homelesshaven-tcmuc');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Shelters');
client.auth.loginWithCredential(new AnonymousCredential());
const data = db.collection('TestData');


class AddHomelessShelter extends Component {

    submitForm(e) {
        e.preventDefault();
        console.log('Hello submission');
        data.insertOne({
            Name: document.getElementById("shelterName").value,
            Address: document.getElementById("shelterStreetAddress").value + ' ' + document.getElementById("aptNum").value + 
            ' ' + document.getElementById("city").value + ' ' + document.getElementById("state").value,
            Phone: document.getElementById("phone").value,
            FreeBeds: document.getElementById("freeBeds").value
        });
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
    }

    render() {
        return (
            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
                <FormGroup>
                    <Input type="text" name="name" id="name" placeholder="Shelter" 
                    onChange={ (e) => {
                        this.handleChange(e)
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="streetAddress" id="shelterStreetAddress"
                    placeholder="123 Main Street" onChange={ (e) => this.handleChange(e) }/>
                </FormGroup>
                <FormGroup>
                    <Input type="number" name="aptNum" id="aptNum" placeholder="Apartment 404"
                    onChange={ (e) => this.handleChange(e) }/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="city" id="city" placeholder="Baltimore"
                    onChange={ (e) => this.handleChange(e) }/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="state" id="state" placeholder="Maryland"
                    onChange={ (e) => this.handleChange(e) }/>
                </FormGroup>
                <FormGroup>
                    <Input type="number" name="freeBeds" id="freeBeds" placeholder="42"
                    onChange={ (e) => this.handleChange(e) }/>
                </FormGroup>
                <FormGroup>
                    <Input type="tel" name="phone" id="phone" placeholder="800-867-5309"
                    onChange={ (e) => this.handleChange(e) }/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddHomelessShelter;