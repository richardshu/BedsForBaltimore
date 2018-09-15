const express = require('express');

const app = express();

app.get('/api/homelessShelters', (req, res) => {
    //name, address, phone, number of beds, free beds
    const homelessShelters = [
        {
            id: 1,
            name: 'Homeless Shelter 1', 
            address: 'Address 1', 
            phoneNumber: '111-111-1111',
            numberOfBeds: 100,
            numberOfAvailableBeds: 23,
            websiteURL: 'https://google.com'
        },
        {
            id: 2,
            name: 'Homeless Shelter 2', 
            address: 'Address 2',
            phoneNumber: '222-222-2222',
            numberOfBeds: 75,
            numberOfAvailableBeds: 17,
            websiteURL: 'https://bing.com'
        },
        {
            id: 3,
            name: 'Homeless Shelter 3', 
            address: 'Address 3',
            phoneNumber: '333-333-3333',
            numberOfBeds: 50,
            numberOfAvailableBeds: 32,
            websiteURL: 'https://yahoo.com'
        }
    ];
    res.json(homelessShelters);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));