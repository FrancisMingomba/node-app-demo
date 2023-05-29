const express = require('express');
const router = express.Router();

const user = require('/router/user');
//const { schema } = require('joi/lib/types/object');


//router.user('/api/users', users);

const users = [
    {id: 1, name: ' Francis'},
    {id: 2, name: ' Mingomba'},
    {id: 3, name: ' Aurelie'},
];

//app.get('/',(req, res) => {
   // res.send(users);
//});

router.post('/', (req, res) => {
    const {error} = validateUser(req.body);//=> object destructing
    if(error ) return res.status(400).send(result.error.details[0].message);
        
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.send(user);
});

router.get('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('Request for the given ID NOT found');
});

router.put('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('Request for the given ID not found');

    //const result = validateUser(req.body);
    const {error} = validateUser(req.body);//=> object destructing
    if(error ) return  res.status(400).send(error.details[0].message);
        
     user.name = req.body.name;
     res.send(user);

});

router.delete(('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('Request for the given ID not found');

    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send();
}))

function validateUser(user){
    const schema = {
        name: Joi.string().min(3).required()
    };s
    return Joi.validate(user, schema);

};

module.exports = router;



