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