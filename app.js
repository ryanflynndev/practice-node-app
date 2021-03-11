//Importing the http module to launch a http node server
const http = require('http');

//This function is called everytime a request reaches our server
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});

//MAkes node.js listen for incoming requests
server.listen(3000);
