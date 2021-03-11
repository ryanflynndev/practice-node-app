//Importing the http module to launch a http node server
const http = require('http');
const fs = require('fs')

//This function is called everytime a request reaches our server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST'){
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', message);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>Hello!</body>');
    res.write('</html>');
    res.end();

});

//MAkes node.js listen for incoming requests
server.listen(3000);
