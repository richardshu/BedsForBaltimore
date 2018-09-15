import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

    render() {
        return (
            <div>
                <h1>Your homeless shelters</h1>
                <Grid container spacing={40}>
                    <Grid item xs={2}></Grid>
                    {this.state.homelessShelters.map(homelessShelter =>
                        <Grid item xs key={homelessShelter.id}>
                            <Card>
                                <CardHeader title={homelessShelter.name} />
                                <CardContent>
                                    <Typography>{homelessShelter.address}</Typography>
                                    <Typography>{homelessShelter.phoneNumber}</Typography>
                                    <Typography>{homelessShelter.numberOfBeds}</Typography>
                                    <Typography>{homelessShelter.numberOfAvailableBeds}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>     
                    )}
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        );
    }
}

export default HomelessSheltersList;
