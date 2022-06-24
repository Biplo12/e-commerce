const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const JWT = require("jsonwebtoken");

//REGISTER MODULE
router.post("/register", async (req, res) => {
  //FORM VALIDATION
  if (!req.body.username || !req.body.email || !req.body.password)
    return res.status(401).json("Please enter your password or username");
  const user = await User.findOne({
    $or: [{ username: req.body.username, email: req.body.email }],
  });
  if (user) return res.status(400).json("User or email already exists");
  //
  try {
    // GENERATE SALT AND HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
    //
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN MODULE

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json("user not matched");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(404).json("password not matched");
    const accessToken = JWT.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
