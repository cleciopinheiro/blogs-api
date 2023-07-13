const categoriesPostsAttributes = require('../attributes/categoriesPosts');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
    const postsCategoriesTable = queryInterface.createTable('posts_categories', categoriesPostsAttributes);

    return postsCategoriesTable;
  },

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('posts_categories'),
};
