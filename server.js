const express = require('express');

const app = express();

app.get('/api/homelessShelters', (req, res) => {
    const homelessShelters = [
        {id: 1, name: 'Homeless Shelter 1', address: 'Address 1'},
        {id: 2, name: 'Homeless Shelter 2', address: 'Address 2'},
        {id: 3, name: 'Homeless Shelter 3', address: 'Address 3'}
    ];
    res.json(homelessShelters);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));