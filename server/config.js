/* Config file that exports environtment variables */
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  db_connection: process.env.MONGO_DB_CONNECTION,
  password_hash_saltrounds: parseInt(process.env.PASSWORD_HASH_SALTROUNDS) || 8,
};
