'use strict';
const { ReplyInstance } = require('../dist/models/reply');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('REPLY', {
      id: Sequelize.DataTypes.STRING,
      content: Sequelize.DataTypes.STRING,
      postId: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: 'POSTS'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('REPLY');
  }
};
