const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://sheelu:Sheelu@cluster0.yjnycxw.mongodb.net/test"
);

module.exports = {
  connection,
};
