const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required()
    });
    Joi.validate(req.body, schema, (err, result) =>{
        console.log(result);
    });

});



app.listen(3000);