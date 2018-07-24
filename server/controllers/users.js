const User = require("../models/User");

exports.createUser = (req, res) => {
  User.create(req.body)
    .then(result => {
      return res.json({ message: "User created successfully" });
    })
    .catch(err => {
      console.log("something went wrong");
      console.log(err);
    });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  const isMatch = await user.comparePassword(req.body.password);
  console.log(user);
  return isMatch;
};
