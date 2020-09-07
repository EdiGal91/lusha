const { Schema, model } = require("mongoose");

const requiredString = { type: String, require: true };

const userSchema = new Schema({
  firstName: requiredString,
  lastName: requiredString,
  email: { ...requiredString, unique: true, index: true },
  password: requiredString,
  description: requiredString,
});

module.exports = model("User", userSchema);
