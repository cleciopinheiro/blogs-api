const userAttributes = require('../attributes/users');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
    const usersTable = await queryInterface.createTable('users', userAttributes);

    return usersTable;
  },

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('users'),
};
