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
            const dashboard

    

        module.exports = DashboardController;