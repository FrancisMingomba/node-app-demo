
const express = require('express');
const Joi = require('joi');
const app = express();
const users = require('./router/user');

app.use(express.json());
app.use('/api/users/', users);





//PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));
