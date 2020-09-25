module.exports = (sequelize, Sequelize) => {
    const azCustomers = sequelize.define("customers", {
      companyName: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      domainName: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fusion: {
        type: Sequelize.STRING
      }
    });
    return azCustomers;
};