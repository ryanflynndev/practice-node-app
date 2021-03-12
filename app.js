const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const rootDir = require('./helpers/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);


//Notes
//Middleware is just a bunch of functions that are called on a request before sending a response
//Next makes the request go to the next piece of middleware