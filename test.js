const sequelize = require('./config/connection');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    sequelize.close(); 
  }
}

testConnection();
