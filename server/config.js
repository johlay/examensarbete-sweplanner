/* Config file that exports environtment variables */
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  db_connection: process.env.MONGO_DB_CONNECTION,
  jwt_access_token_secret: process.env.JWT_ACCESSS_TOKEN_SECRET,
  jwt_access_token_expires: process.env.JWT_ACCESS_TOKEN_EXPIRES || "10h",
  password_hash_saltrounds: parseInt(process.env.PASSWORD_HASH_SALTROUNDS) || 8,
};
