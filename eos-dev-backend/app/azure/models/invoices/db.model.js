module.exports = (sequelize, Sequelize) => {
    const azInvoices = sequelize.define("invoices", {
      companyName: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      billLineStartDate: {
        type: Sequelize.STRING
      },
      billLineEndDate: {
        type: Sequelize.STRING
      },
      totalRetail: {
        type: Sequelize.STRING
      }
    });
    return azInvoices;
};