const Ia = require("../model/iaModel.model");
const getIa = async (req, res) => {
  const ia_data = await Ia.find();
  res.send(ia_data);
};

const postIa = async (req, res) => {
  const payload = req.body;

  await Ia.insertMany([payload]);
  res.send("Ia data created successfully");
};

const IaController = { getIa, postIa };

module.exports = IaController;
