const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  search_results: [
    {
      type: new Schema({
        from: {
          id: { type: String, trim: true },
          extId: { type: String, trim: true },
          name: { type: String, trim: true },
          lon: { type: Number, trim: true },
          lat: { type: Number, trim: true },
          weight: { type: Number, trim: true },
          products: { type: Number, trim: true },
        },
        to: {
          id: { type: String, trim: true },
          extId: { type: String, trim: true },
          name: { type: String, trim: true },
          lon: { type: Number, trim: true },
          lat: { type: Number, trim: true },
          weight: { type: Number, trim: true },
          products: { type: Number, trim: true },
        },
        created_at: { type: Date, default: Date.now },
      }),
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
