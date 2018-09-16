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
            numberOfAvailableBeds: 23,
            websiteURL: 'https://google.com'
        },
        {
            id: 2,
            name: 'Homeless Shelter 2', 
            address: 'Address 2',
            phoneNumber: '222-222-2222',
            numberOfAvailableBeds: 17,
            websiteURL: 'https://bing.com'
        },
        {
            id: 3,
            name: 'Homeless Shelter 3', 
            address: 'Address 3',
            phoneNumber: '333-333-3333',
            numberOfAvailableBeds: 32,
            websiteURL: 'https://yahoo.com'
        },{
            id: 4,
            name: 'Homeless Shelter 4', 
            address: 'Address 4', 
            phoneNumber: '444-444-4444',
            numberOfAvailableBeds: 23,
            websiteURL: 'https://google.com'
        },
        {
            id: 5,
            name: 'Homeless Shelter 5', 
            address: 'Address 5',
            phoneNumber: '555-555-5555',
            numberOfAvailableBeds: 17,
            websiteURL: 'https://bing.com'
        },
        {
            id: 6,
            name: 'Homeless Shelter 6', 
            address: 'Address 6',
            phoneNumber: '666-666-6666',
            numberOfAvailableBeds: 32,
            websiteURL: 'https://yahoo.com'
        }
    ];
    res.json(homelessShelters);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));