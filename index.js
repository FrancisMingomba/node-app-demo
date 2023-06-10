const Joi = require('joi');
const config = require('config');
const express = require('express');
const logger = require('./logger');
const app = express();
const createUser = require('./routes/createUser');
const auth = require('./routes/auth');

app.use(express.json());
app.use('/api/createUser', createUser);
app.use('/api/auth', auth);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));
