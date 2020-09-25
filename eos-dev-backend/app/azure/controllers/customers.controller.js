const db = require("../models/customers");
const azCustomers = db.customers;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const companyName = req.query.companyName;
    var condition = companyName ? { companyName: { [Op.like]: `%${companyName}%` } } : null;
  
    azCustomers.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving azCustomers."
        });
      });
};
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    azCustomers.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving azCustomers with id=" + id
        });
      });
};
exports.update = (req, res) => {
  const id = req.params.id;

  azCustomers.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project Manager was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Project Manager with id=${id}. Maybe Project Manager was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Project Manager with id=" + id
      });
    });
};