const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: { type: Array, required: true },
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    size: { type: Array, required: true },
    color: { type: Array, required: true },
    stylingDesc: { type: String, required: true },
    compositionDesc: { type: String, required: true },
    categories: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
