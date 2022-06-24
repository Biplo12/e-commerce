const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const stripeRouter = require("./routes/stripe");

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("MongoDB is working"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

app.use(express.static(path.join(__dirname, "/Client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/Client/build", "index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Backend server is running on port ${process.env.PORT}`);
});
