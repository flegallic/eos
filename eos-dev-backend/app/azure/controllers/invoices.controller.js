const db = require("../models/invoices");
const azInvoices = db.invoices;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const companyName = req.query.companyName;
    var condition = companyName ? { companyName: { [Op.like]: `%${companyName}%` } } : null;
  
    azInvoices.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};
