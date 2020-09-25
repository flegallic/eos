const db = require("../models/consumption");
const azConsumption = db.consumption;
const Op = db.Sequelize.Op;

exports.findOne = (req, res) => {
  const reference = req.params.reference;

  var condition = reference ? { reference: { [Op.like]: `${reference}` } } : null;

  azConsumption.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving azConsumption with reference=" + reference
      });
    });
};