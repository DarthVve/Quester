'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('USERS', {
      id: Sequelize.DataTypes.STRING,
      occupation: Sequelize.DataTypes.STRING,
      firstname: Sequelize.DataTypes.STRING,
      lastname: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      username: Sequelize.DataTypes.STRING,
      phonenumber: Sequelize.DataTypes.STRING,
      licenseNo: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      verified: Sequelize.DataTypes.STRING
      // createdAt: Sequelize.DataTypes.DATE,
      // updatedAt: Sequelize.DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('USERS');
  }
};
