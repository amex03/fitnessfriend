const{Dashboard, Comment} = require('../models');

const HomepageController = {
    getHomepage: async(req,res)=>{
        try{
            const dashboardData = await Dashboard.findAll({
                include:[{
                    model:Comment,
                    attributes:['content','date_created'],
                }],
            });
            const dashboards = dashboardData.map((dashboard) =>
            dashboard.get({plain:true})
            );
            res.render('homepage',{
                dashboards,
                loggedIn:req.session.loggedIn,
            });

        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
};


module.exports = HomepageController;