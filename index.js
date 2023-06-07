const Joi = require('joi');
const config = require('config');
const express = require('express');
const logger = require('./logger');
const app = express();
const createUser = require('./routes/createUser');

app.use(express.json());
app.use('/api/createUser', createUser);


//PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));
