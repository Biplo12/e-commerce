const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAuthorization,
  verifyTokenAdmin,
} = require("./verifyToken");

//GET ALL PRODUCTS MODULE
router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE CART MODULE
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//EDIT CART MODULE
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CART MODULE
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CART MODULE
router.get("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const Cart = await Cart.find({ userId: req.params.userId });
    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
