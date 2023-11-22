const router = require('express').Router();
const dashboardRoutes = require('../dashboard/dashbdashboardRoutes');

router.use('/dashboard', dashboardRoutes);
module.exports = router;
