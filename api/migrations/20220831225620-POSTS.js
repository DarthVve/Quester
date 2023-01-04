'use strict';
const { UserInstance } = require('../dist/models/user');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('POSTS', {
      id: Sequelize.DataTypes.STRING,
      content: Sequelize.DataTypes.STRING,
      userId: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: 'USERS'
          },
          foreignKey: 'id'
        },
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('POSTS');
  }
};
