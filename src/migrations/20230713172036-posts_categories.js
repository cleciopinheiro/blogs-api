const postCategoriesAttributes = require('../attributes/postsCategories');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
    const postsCategoriesTable = queryInterface.createTable('posts_categories', postCategoriesAttributes);

    return postsCategoriesTable;
  },

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('posts_categories'),
};
