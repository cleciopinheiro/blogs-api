const blogPostAttributes = require('../attributes/blogPosts');

/**
*
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/
const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define('BlogPost', blogPostAttributes,
  {
    tableName: 'BlogPosts',
    underscored: true,
    timestamps: false,
  });

  blogPostsTable.associate = (models) => {
    blogPostsTable.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return blogPostsTable;
}

module.exports = blogPostsSchema;