const {User} = require('../models');

const userData = [  
    {
     
        username: 'John',
        email: 'johmzxcs@gmail.com',
        password: 'Password12+3'
    },
    {
        username: 'Jane',
         email: 'janedoe@example.com', 
         password: 'Password12+3'
     }, 

    {
    
     username: 'Bob', 
    email: 'bobsmith@gmail.com', 
    password: 'Password12+3'
 },
 { username: 'Mikee',
 email: 'mike@example.com',
    password: 'Password12+3'
    },

    { username: 'Joee',
    email: 'joe@example.com',
    password: 'Password12+3'
    },
    { username: 'Joh22n',
    email: 'jany@example.com',
    password: 'Password12+3'
    },
    { username: 'mary123',
    email: 'mary@example.com',
    password: 'Password12+3'
    },
    { username: 'jen22y',
    email: 'jenny@example.com',
    password: 'Password12+3'
    },
   
];
 const seedUsers = () => User.bulkCreate(userData);
 module.exports = seedUsers;