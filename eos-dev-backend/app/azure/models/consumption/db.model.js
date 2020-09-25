module.exports = (sequelize, Sequelize) => {
    const azConsumption = sequelize.define("consumptions", {
      companyName: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      ServiceName: {
        type: Sequelize.STRING
      },
      ServiceType: {
        type: Sequelize.STRING
      },
      ResourceName: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.STRING
      },
      Location: {
        type: Sequelize.STRING
      }
    });
    return azConsumption;
};