//App starting part, initialization
const express = require('express');
//Native node library for using http requests
const http = require('http');
//Used to parse incoming requests, in this app into json
const bodyParser = require('body-parser');
//Loggin framework (logs incoming requests)
const morgan = require('morgan');
//express setup
const app = express();
//route handlers
const router = require('./router');
const mongoose = require('mongoose');
//DB setup
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
//call route handlers
router(app);

// Server setup
const port = process.env.PORT || 3090;
//create http server and forward on to app
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);