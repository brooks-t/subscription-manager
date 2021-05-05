const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedSubscriptions = require("./subscriptionData");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedSubscriptions();
  } catch (e) {
    console.log(e);
  }
  process.exit(0);
};

seedAll();
