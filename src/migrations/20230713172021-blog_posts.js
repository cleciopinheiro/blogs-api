const blogPostAttributes = require('../attributes/blogPosts');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
    const blogPostsTable = queryInterface.createTable('blog_posts', blogPostAttributes);

    return blogPostsTable;
  },

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('blog_posts'),
};
