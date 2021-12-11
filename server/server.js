require("dotenv").config();

const port = process.env.PORT || 3000;
const db_connection = process.env.MONGO_DB_CONNECTION;

// Server setup
const express = require("express");
const app = express();

// Mongoose
const mongoose = require("mongoose");
const db = mongoose.connection;

// Cors
const cors = require("cors");
app.use(cors());

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/v1", require("./routes"));

// Server
app.listen(port, (err) => {
  if (err) console.error(err);

  console.log(`Listening to port: ${port}`);
});

// Database connection
mongoose.connect(db_connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`We are connected to MongoDB Atlas!`);
});
