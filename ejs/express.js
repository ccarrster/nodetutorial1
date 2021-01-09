const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Middleware
app.use('/example', (req, res, next)=>{
    console.log(req.url, req.method);
    req.banana = 'banana';
    next();
});
app.set('view engine', 'ejs');

app.get('/:userQuery', (req, res) => {
    res.render('index', {data : {userQuery: req.params.userQuery, searchResults: ['carrot', 'ice cream', 'hats'], loggedIn: true, username: 'Willy'}});
    console.log(req.banana);
});



app.listen(3000);