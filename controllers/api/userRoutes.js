const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require("bcrypt");

//Creates a new user
router.post("/signup", (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((newUser) => {
        req.session.user = {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
        };
        res.json(newUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "something went wrong", err: err });
      });
  
    router.get('/dashboard', (req, res) => {
      res.render('dashboard');
    });
  })
  
  //finds user email and password logs them in
  router.post("/login", (req, res) => {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((foundUser) => {
      console.log("foundUser");
      console.log(foundUser);
      if (!foundUser) {
        return res.status(401).json({ message: "login failed" });
      }
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.user = {
          id: foundUser.id,
          email: foundUser.email,
          isUser: true,
        };
        return res.json(foundUser);
      } else {
        return res.status(401).json({ message: "login failed" });
      }
    });
  });
  //logs out the user
  router.get("/logout", (req, res) => {
    req.session.destroy();
    res.json({ message: "logged out!" });
  });

  module.exports = router;