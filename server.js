const express = require('express');

const app = express();

app.get('/api/homelessShelters', (req, res) => {
    //name, address, phone, number of beds, free beds
    const homelessShelters = [
        {
            id: 1, 
            name: 'Homeless Shelter 1', 
            address: 'Address 1', 
            phone: '111-111-1111',
            numberOfBeds: 100,
            numberOfFreeBeds: 23
        },
        {
            id: 2, 
            name: 'Homeless Shelter 2', 
            address: 'Address 2',
            phone: '222-222-2222',
            numberOfBeds: 75,
            numberOfFreeBeds: 17
        },
        {
            id: 3, 
            name: 'Homeless Shelter 3', 
            address: 'Address 3',
            phone: '333-333-3333',
            numberOfBeds: 50,
            numberOfFreeBeds: 32
        }
    ];
    res.json(homelessShelters);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));