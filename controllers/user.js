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
            req.session.user = dbUserData.get({ plain: true });
            res.status(200).json(dbUserData);
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err);
 }
    },

    login: async (req, res) => {
        try{
            const dbUserData = await User.findOne({
                where:{
                    email: req.body.email,
                },
            });
            if (!dbUserData) {
                res.status(400).json({ message: 'No user with that email address!' });
                return;
            }
            const validPassword = await dbUserData.checkPassword(req.body.password);
             if (!validPassword) {
                 res.status(400).json({ message: 'Incorrect password!' });
                 return;
             }
                req.session.save(() => {
                    req.session.loggedIn = true;
                    req.session.user = dbUserData.get({ plain: true });
                    res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
                });
            }catch(err){
                    console.log(err);
                    res.status(500).json(err);
                }
        },
};
//logout

 logout: async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
},


module.exports = UserController;