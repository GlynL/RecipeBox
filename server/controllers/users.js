const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res) => {
  User.create(req.body)
    .then(result => {
      let { id, username } = result;
      let token = jwt.sign(
        {
          id,
          username
        },
        process.env.SECRET_KEY
      );
      return res
        .status(200)
        .json({ message: "User created successfully", id, username, token });
    })
    .catch(err => {
      console.log("something went wrong");
      console.log(err);
    });
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const isMatch = await user.comparePassword(req.body.password);
    console.log(user);
    if (isMatch) {
      let token = jwt.sign(
        {
          id: user.id,
          username: user.username
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id: user.id,
        username: user.username,
        token
      });
    }
  } catch (err) {
    console.log(err);
  }
};
