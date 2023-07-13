const categoriesAttributes = require('../attributes/categories');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
    const categoriesTable = await queryInterface.createTable('categories', categoriesAttributes);

    return categoriesTable;
  },

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('categories'),
};
