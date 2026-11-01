const {
  Schema,
  model
} = require("mongoose");

const loginSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const loginModel = model("loginDatabase", loginSchema)

module.exports = loginModel