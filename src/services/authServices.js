const { User } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../helpers");

const registration = async (email, password) => {
  const user = new User({ email, password });
  await user.save();
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthorizationError(`No user with email ${email} found`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new AuthorizationError("Wrong password");
  }

  const token = jwt.sign(
    {
      _id: user._id,
      createAt: user.createAt,
    },
    process.env.JWT_SECRET
  );

  return token;
};

module.exports = { registration, login };
