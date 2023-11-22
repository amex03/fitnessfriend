//seed dabase
const sequelize = require('../config/connection');
const seedDashboard = require('./dashboard-seeds');
const seedComment = require('./comment-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({force:true});
    
    await seedUser();
    
    await seedDashboard();
    
    await seedComment();
  
    process.exit(0);
}