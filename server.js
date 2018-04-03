// server.js

const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./config/DB'),
movieRoutes = require('./expressRoutes/movieRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, './static')));
// app.use(express.static(__dirname + "/static"));

const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err) }
);

app.use('/movies', movieRoutes);

const server = app.listen(port, function(){
  	console.log('Listening on port ' + port);
});