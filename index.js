const config = require('config');
const express = require('express');
const logger = require('./logger');
const app = express();
const users = require('./routes/user');
const home = require('./routes/home');


app.use(express.json());

app.use(logger);

app.use(express.json());
app.use(users);

app.use('/api/users', users);


app.set('view engen', 'pug');
app.set('view', './views'); //

const mongoose = require('mongoose');

mongoose.connect('mongodb//:localhost:27017/appdb')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to mongoDB...' , err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    date: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

async function createUser(){
    const user = new User({
        name: 'Francis',
        email: 'ming@mail',
        phoneNumber: '904'
    });
    
    const result = await user.save();
    console.log(result);
}

createUser();



//PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));
