var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller/customer-controller');
    morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var logger = require("./util/logging/winston-logger");

app.use(morgan('combined',{ "stream": logger.stream }));
logger.debug("Overriding 'Express' logger");


var routes = require('./router/routes-customer.js');
routes(app);

var accountRoutes = require('./router/routes-account');
accountRoutes(app);

var transactionRoutes = require('./router/routes-transaction');
transactionRoutes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);