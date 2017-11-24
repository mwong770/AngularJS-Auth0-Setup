const express = require('express');

//executes express to get express server
const app = express();

const path = require('path');

//when user gets to a route of /, serves static content
app.use('/', express.static(__dirname + '/'));

//when user goes directly to a wildcard route, sends them the index.html file
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
})

const hostname = 'localhost';
const port = 3000;

//listens for server
const server = app.listen(port, hostname, () => {
	console.log(`Server is listening at http://${hostname}:${port}`);
})