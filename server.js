const express = require('express');
const app = express();
const port = 3000;
app.listen(port, function(){
    console.log('Node js Express js Tutorial');
})

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });

 const CoinRouter = require('./routes/CoinRouter');
app.use('/coins', CoinRouter);

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/expressdemo');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());