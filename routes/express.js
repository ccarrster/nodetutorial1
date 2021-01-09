const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const people = require('./routes/people');

app.use('/people', people);

app.listen(3000);