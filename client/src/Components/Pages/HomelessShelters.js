import React, { Component } from 'react';
import './HomelessShelters.css';

class HomelessShelters extends Component {
    constructor() {
        super();
        this.state = {
            homelessShelters: []
        }
    }

    componentDidMount() {
        fetch('api/homelessShelters')
            .then(res => res.json())
            .then(homelessShelters => this.setState({homelessShelters}, () => 
            console.log('Homeless shelters fetched...', homelessShelters)
        ));
    }

    render() {
        return (
            <div>
                <h1>Homeless shelters near you</h1>
                <ul>
                    {this.state.homelessShelters.map(homelessShelter =>
                        <li key={homelessShelter.id}> { homelessShelter.name } { homelessShelter.address } </li> 
                    )}
                </ul>
            </div>
        );
    }
}

export default HomelessShelters;
