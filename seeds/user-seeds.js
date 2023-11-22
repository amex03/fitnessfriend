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
 { username: 'Mike',
 email: 'mike@example.com',
    password: 'Password12+3'
    },

    { username: 'Joe',
    email: 'joe@example.com',
    password: 'Password12+3'
    },
    { username: 'John',
    email: 'jany@example.com',
    password: 'Password12+3'
    },
    { username: 'mary',
    email: 'mary@example.com',
    password: 'Password12+3'
    },
    { username: 'jeny',
    email: 'jenny@example.com',
    password: 'Password12+3'
    },
   
];
 const seedUsers = () => User.bulkCreate(userData);
 module.exports = seedUsers;