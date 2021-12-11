const bcrypt = require("bcrypt");
const { password_hash_saltrounds } = require("../config");

// Import Model
const User = require("../models/user_model");

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

module.exports = { register };
