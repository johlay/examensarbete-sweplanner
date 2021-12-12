const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  jwt_access_token_secret,
  jwt_access_token_expires,
  password_hash_saltrounds,
} = require("../config");

// Import Model
const User = require("../models/user_model");

// POST - login an user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).exec();

    // Checks if user exists, return error messsage if authentication was unsuccessful
    if (!user) {
      return res
        .status(403)
        .json({ status: "error", message: "Authentication was unsuccessful" });
    }

    // Validating password by comparing with stored hash in database.
    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(403)
        .json({ status: "error", message: "Authentication was unsuccessful" });
    } else {
      // clean out user's password
      user.password = undefined;

      // payload
      const payload = user;

      // use JWT to sign payload and get access token
      const jwt_access_token = jwt.sign({ payload }, jwt_access_token_secret, {
        expiresIn: jwt_access_token_expires,
      });

      // return jwt token as a response.
      return res.status(200).json({
        status: "success",
        message: "Authentication was successful",
        data: { access_token: jwt_access_token, user: payload },
      });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ status: "error", message: "Authentication was unsuccessful" });
  }
};

// POST - register a new user
const register = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;

  try {
    let hashedPassword;

    // hashing password
    try {
      hashedPassword = await bcrypt.hash(password, password_hash_saltrounds);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Error occured while hashing the password",
      });
    }

    // Checks if email is already registered in database.
    const emailExists = await User.exists({ email: email });

    // If email does not already exists in database, proceed to inserting user to database.
    if (!emailExists) {
      await User.create(
        {
          email,
          password: hashedPassword,
          first_name,
          last_name,
        },
        function (err, result) {
          if (err) {
            res.status(500).json({ status: "error", message: err });
          } else {
            return res.status(201).json({
              status: "success",
              message: "Successfully created a new user.",
              data: result,
            });
          }
        }
      );
    } else {
      return res.status(409).json({
        status: "error",
        message: `Email already exists`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to create a new user",
    });
  }
};

module.exports = { login, register };
