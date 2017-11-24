// THIS INFO WAS MODIFIED FROM AUTH0 WEBSITE; IT DISPLAYED IMMEDIATELY AFTER CREATING AN API

var express = require('express');
var app = express();
var dotenv = require("dotenv");

//middleware that verifies JSON web tokens
var jwt = require('express-jwt');

//does verification on RS256 signing tokens
var jwks = require('jwks-rsa');

//added so can receive requests from an application that is on a different domain than this server
var cors = require('cors');

var port = process.env.PORT || 8080;

//added so can make requests from a different origin than the one this server api is running on
app.use(cors());

// loads environment variables from .env file into process.env
dotenv.load();

//this behavior will run on any request that comes into the server
//makes sure the request has authorization information for the user
//it checks for an incoming JSON web token and makes sure it is verifiable against the information here
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.AUTH0_JWKSURI //this url displays the info needed to verify token
    }),
    audience: process.env.AUTH0_AUDIENCE,//this is a claim within the token so for token to be good this string must exist in a claim
    issuer: process.env.AUTH0_ISSUER,//also checks that issuer is this string 
    algorithms: ['RS256']
});

app.use(jwtCheck);

//sends back message if verification goes well
app.get('/dog', function (req, res) {
  res.json({favDog: 'Golden Retriever'});
});

app.get('/cat', function (req, res) {
  res.json({favCat: 'Maine Coon'});
});

app.listen(port);

//added
console.log('Server is running on localhost: 8080');