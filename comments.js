//create web server
const express = require('express');
const app = express();

//get request
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//post request
app.post('/', (req, res) => {
    res.send('Got a POST request');
});

//put request
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

//delete request
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});