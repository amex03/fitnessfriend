const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-route');
const dashboardRoutes = require('./api/dashboard/dashbdashboardRoutes');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;