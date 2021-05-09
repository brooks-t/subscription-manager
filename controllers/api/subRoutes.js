const router = require("express").Router();
const { Subscription } = require("../../models");
const { User } = require("../../models");
const withAuth = require("../../utils/auth");
//creates a new subscription
router.post("/", withAuth, async (req, res) => {
  try {
    const newSubscription = await Subscription.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newSubscription);
  } catch (err) {
    res.status(400).json(err);
  }
});
//edit subscription
router.put("/:id", async (req, res) => {
  try {
    const subscriptionData = await Subscription.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
      individualHooks: true,
    });
    if (!subscriptionData[0]) {
      res.status(404).json({ message: "No subscription with this id!" });
      return;
    }
    res.status(200).json(subscriptionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete subscription by id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const subscriptionsData = await Subscription.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!subscriptionsData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(subscriptionsData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/chart", withAuth, async (req, res) => {
  try {
    const subData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ["password"]},
      include: [{model: Subscription}],
    } );

    const subs = subData.get({plain: true});

    res.json(subs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
