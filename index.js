const Joi = require('joi');
const config = require('config');
const express = require('express');
const logger = require('./logger');
const app = express();
const users = require('./routes/user');
const home = require('./routes/home');
//const users = require('./routes/createUser');


app.use(express.json());

app.use(logger);

app.use(express.json());
app.use(users);

app.use('/api/createUser', users);
//app.use('/api/createUser', createUser);


app.set('view engen', 'pug');
app.set('view', './views'); 


//PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));
