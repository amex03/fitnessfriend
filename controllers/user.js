const {User }   = require('../models');
 //create user
const UserController = {
    createUser: async (req, res) => {
        try{
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.sessionsave(() => {
            req.session.loggedIn = true;
            
            res.status(200).json(dbUserData);
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err);
 }
    },
};



module.exports = UserController;