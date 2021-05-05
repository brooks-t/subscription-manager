const router = require("express").Router();
const userRoutes = require('./userRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');

router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoutes);

module.exports = router;
