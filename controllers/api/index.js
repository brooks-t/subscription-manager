const router = require("express").Router();
const userRoutes = require("./userRoutes");
const subRoutes = require("./subRoutes");

router.use("/users", userRoutes);
router.use("/subscriptions", subRoutes);

module.exports = router;
