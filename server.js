const { port, db_connection } = require("./config");
const path = require("path");

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

// If node environment is set to "production" - serve static files to built version of client's app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
}

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
