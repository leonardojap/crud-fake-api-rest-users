/*
    This project no required any type of databases.
    Is just to make test http locaaly as a fake api rest
    you can create users, edit it, delete it, and find it

    Author: Leonardo Alvarado
    email: ing.leonardo92@gmail.com
    Date: 10/05/2019
    Venezuela.

*/

//Dependencies
const express = require('express');
const bodyParser = require('body-parser');

//routes
const routeUser = require('./routes/routes');


// initialize our express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Call routing metodths
app.use('/api', routeUser);

//port to liste our services..
let port = 8000;

//start server
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});