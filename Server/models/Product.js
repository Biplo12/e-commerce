const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: Array, required: true },
    categories: { type: Array },
    size: { type: Array, required: true },
    color: { type: Array, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
