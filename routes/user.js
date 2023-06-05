/*
const Joi = require('joi');
const express = require('express');
const router = express.Router();

const users = [
    {id: 1, name: ' Francis', email: 'Mingo', phoneNumber: '904483'}
  
];

router.post('/', (req, res) => {
    const {error} = validateUser(req.body);//=> object destructing
    if(error ) return res.status(400).send(error.details.message);
        
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    };
    users.push(user);
    res.send(user);
   
});

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Request for the given ID NOT found');
    res.send(user);
});

router.put('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('Request for the given ID not found');

    const {error} = validateUser(req.body);//=> object destructing
    if(error ) return  res.status(400).send(error.details[0].message);
        
     user.name = req.body.name;
     res.send(user);

});

router.delete('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Request for the given ID not found');

    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send(user);
});

function validateUser(user){
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        phoneNumber: Joi.string().min(3).required()
    };
    return Joi.validate(user, schema);

};

module.exports = router;


*/
