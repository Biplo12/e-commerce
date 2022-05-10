const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("MongoDB is working"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
