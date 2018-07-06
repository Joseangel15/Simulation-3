const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller');


require('dotenv').config()

//Controllers



const app = express();

app.use( bodyParser.json() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

// Write a POST endpoint in your server for registering.
    //The endpoint should pull the username and password off of the body.
    //The endpoint create a new user in the database.
    //The endpoint should respond with the newly created user.

app.post('/api/auth/register', controller.register);

//Write a POST endpoint in your server for logging in.
    //The endpoint should pull the username and password off of the body.
    //The endpoint should pull the user with the matching username and password out of the database.
    //The endpoint should respond with the user.

app.post('/api/auth/login', controller.login);

const port = 3005;

app.listen( port, () => { console.log(`It's over ${port}.`);
});