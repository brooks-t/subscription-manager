const { User } = require('../models');

const userdata = [
  {
    username: 'Hingle McCringleberry',
    email: 'hingle.mccringleberry@gmail.com',
    password: 'ilovemycat2000',
  },
  {
    username: 'JDinklage Morgoone',
    email: 'jdinkles.morgooners@yahoo.com',
    password: 'ilovemydog2021',
  },
  {
    username: 'LeCarpetron Dookmariot',
    email: 'lecarpatroops@hotmail.com',
    password: 'ihatecovid2020',
  },
  {
    username: 'Cartoons Plural',
    email: 'cartoonsingular@live.com',
    password: 'mickeymouse1000',
  },
  {
    username: 'Depez Poopsie',
    email: 'depepsie@gmail.com',
    password: 'drinkingpepsi81',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;