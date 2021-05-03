const User = require('./User');
const Subscription = require('./Subscription');

User.hasMany(Subscription, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Subscription.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Subscription };