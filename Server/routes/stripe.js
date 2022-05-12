const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
router.post("/payment", async (req, res) => {
  stripe.charges.create(
    {
      amount: req.body.amount,
      currency: "usd",
      source: req.body.tokenId,
      description: "Test charge",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
