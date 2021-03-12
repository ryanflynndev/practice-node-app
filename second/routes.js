const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"/> <button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end()
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<body><ul><li>User: Ryan</li></ul></body>');
        res.write('</html>');
        res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
    
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const createdUser = parsedBody.split('=')[1]
            console.log(createdUser)
        })
    }
}

module.exports = requestHandler;