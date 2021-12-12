const { jwt_access_token_secret } = require("../config");
const jwt = require("jsonwebtoken");

const validateJwtAccessToken = (req, res, next) => {
  const { authorization } = req.headers;

  // Remove "Bearer " from authorization header
  const jwt_access_token = authorization.replace("Bearer", "").trim();

  if (!jwt_access_token)
    res
      .status(500)
      .json({ status: "error", message: "No token was found in HTTP request" });
  try {
    // verify user's access token
    jwt.verify(
      jwt_access_token,
      jwt_access_token_secret,
      function (err, decoded) {
        if (err) {
          return res
            .status(401)
            .json({ status: "error", message: "Access token is not valid" });
        }

        // If access token was successfully decoded, proceed by adding the data to "req.user"
        if (decoded) {
          req.user = decoded;
        }

        next();
      }
    );
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error exception thrown while trying to validate access token",
    });
  }
};

module.exports = { validateJwtAccessToken };
