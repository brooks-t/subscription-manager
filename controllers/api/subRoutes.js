const router = require("express").Router();
const { Subscription } = require("../../models");
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
router.put("/:id", (req, res) => {
  Subscription.update(req.body, {
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  }).then((subscription) => {
    // find all associated tags from subscriptions
    return Subscription.findAll({ where: { subscription_id: req.params.id } });
  });
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

module.exports = router;
