const { User } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../helpers");

const registration = async (login, password, mail) => {
  const user = new User({ login, password, mail });
  await user.save();
};

const login = async (login, password) => {
  const user = await User.findOne({ login });

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
