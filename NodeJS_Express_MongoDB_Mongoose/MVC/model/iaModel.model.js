const mongoose = require("mongoose");
const iaSchema = mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
});

const Ia = mongoose.model("ia", iaSchema);

module.exports = Ia;
