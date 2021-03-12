//Importing the http module to launch a http node server
const http = require('http');

const express = require('express');

const app = express();

//This function is called everytime a request reaches our server
const server = http.createServer(app);

//MAkes node.js listen for incoming requests
server.listen(3000);
