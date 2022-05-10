const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("MongoDB is working"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
