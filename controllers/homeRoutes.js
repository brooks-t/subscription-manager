const router = require("express").Router();
const User = require("../models/User");
const Subscription = require("../models/Subscription");
const bcrypt = require("bcrypt");
const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

router.get('/signup', (req, res) => {

  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Subscription }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/addsub", (req, res) => {
  res.render("addsub");
});

router.get("/editsub/:id", async (req, res) => {
  try {
    const subData = await Subscription.findByPk(req.params.id, {});

    const sub = subData.get({ plain: true });

    res.render("editsub", {
      ...sub,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/chart", (req, res) => {
  res.render("chart");
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
