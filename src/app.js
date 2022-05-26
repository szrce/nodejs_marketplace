//node simple test
const express = require('express');
const app = express();
var http = require('http');


const authRouter = require('./routes/authRoute.js');
app.use('/auth',authRouter);


var port = 8080;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
