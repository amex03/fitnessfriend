const {Dashboard} = require('../models')
//create dashboard
const DashboardController = {
    createDashboard: async (req, res) => {
        try{
        const dbDashboardData = await Dashboard.create({
            title: req.body.title,
            content: req.body.content,
            user_name: req.body.user_name,
            date_created: req.body.date_created,
        });
            res.json(newDashboard);
        }catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateDashboard: async (req, res) => {
        try{
            const dbDashboardData= await Dashboard.update(req.body,{
                where: {
                    id: req.params.id,
                },
            });
            if (!dbDashboardData[0]) {
                res.status(404).json({message: 'No dashboard found with this id'});
                return;
            }
        res.status(200).json(dbDashboardData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    };
    

        module.exports = DashboardController;