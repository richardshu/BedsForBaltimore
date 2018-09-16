import React, { Component } from 'react';
import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const client = Stitch.initializeDefaultAppClient('homelesshaven-tcmuc');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Shelters');
const data = db.collection('TestData');


class AddHomelessShelter extends Component {

    _onButtonClick() {
        console.log("Arrived");
        console.log(document.getElementById("shelterName").nodeValue);
        data.insertOne({
            Name: document.getElementById("shelterName"),
            Address: document.getElementById("shelterStreetAddress"), //+ document.getElementById("aptNum") + 
            //document.getElementById("city") + document.getElementById("state"),
            Phone: document.getElementById("phone"),
            FreeBeds: document.getElementById("freeBeds")
        }).then(res => console.log(res));
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="shelterName">Shelter Name</Label>
                    <Input type="name" name="name" id="shelterName" placeholder="Shelter" />
                </FormGroup>
                <FormGroup>
                    <Label for="shelterStreetAddress">Street Address</Label>
                    <Input type="streetAddress" name="streetAddress" id="shelterStreetAddress" placeholder="123 Main Street" />
                </FormGroup>
                <FormGroup>
                    <Label for="shelterApartmentNumber">Apartment Number</Label>
                    <Input type="aptNum" name="aptNum" id="aptNum" placeholder="Apartment 404" />
                </FormGroup>
                <FormGroup>
                    <Label for="shelterCity">City</Label>
                    <Input type="city" name="city" id="city" placeholder="Baltimore" />
                </FormGroup>
                <FormGroup>
                    <Label for="shelterState">State</Label>
                    <Input type="state" name="state" id="state" placeholder="Maryland" />
                </FormGroup>
                <FormGroup>
                    <Label for="numFreeBeds">Number of Free Beds</Label>
                    <Input type="freeBeds" name="freeBeds" id="freeBeds" placeholder="42" />
                </FormGroup>
                <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input type="phone" name="phone" id="phone" placeholder="800-867-5309" />
                </FormGroup>
                <Button onClick={this._onButtonClick} id="submitButton">Submit</Button>
            </Form>
        );
    }
}

// class AddShelter extends Component {
//     render() {
//         return;
//     }

//     newSingleEntry(sName, sAddress, sPhone, sBeds, sFree) {
//         data.insertOne({
//             Name: sName,
//             Address: sAddress,
//             Phone: sPhone,
//             TotalBeds: sBeds,
//             FreeBeds: sFree
//         });
//     }
// }

export default AddHomelessShelter;