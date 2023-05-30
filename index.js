
const express = require('express');
const Joi = require('joi');
const app = express();
const users = require('/routes/user');
const home = require('./routes/home');

app.set('view engen', 'pug');
app.set('view', './views'); //

app.use(express.json());
app.use('/api/users', users);





//PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));
