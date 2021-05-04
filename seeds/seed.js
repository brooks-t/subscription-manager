const sequelize = require('../config/connection');
const seedUsers = require('./userData');
// const seedSubscriptions = require('./subscriptionData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  // await seedSubscriptions();

  process.exit(0);
};

seedAll();