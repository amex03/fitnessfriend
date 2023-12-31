const router = require('express').Router();
 const { Dashboard, Comment, User } = require('../models');

//
router.get('/', async (req, res) => {
    try{
        const isLogged = req.session.loggedIn;
              const dashboardData = await Dashboard.findAll({
                include:[{
                    model:Comment,
                    attributes:['content','date_created'],
                }],
            });
            const dashboards = dashboardData.map((dashboard) =>
            dashboard.get({plain:true})
            );
         const postThreshold = 4;
            if (!isLogged && dashboards.length > postThreshold){
                res.redirect('/login');
                return;
            } 
            res.render('homepage',{
                dashboards,
                loggedIn:req.session.loggedIn,
            });

        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
);

module.exports = router;