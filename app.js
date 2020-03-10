const express=require("express");
const bodyParser = require('body-parser');
const path = require('path');

const productRoutes = require('./routes/admin');

const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs'),

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mycss', express.static(path.join(__dirname, 'public', 'css')));

app.use(productRoutes);


app.get(function (err, req, res, next) {
    res.status(500).send('Error occures!');
});




    

    mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
         app.listen(555, function(){
            console.log('Listening port 555')
        });    }).catch(err => console.error(err));
