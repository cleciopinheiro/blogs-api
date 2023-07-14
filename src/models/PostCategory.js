/**
*
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

const categoriesPostsAttributes = require('../attributes/categoriesPosts');

const postCategoriesSchema = (sequelize, DataTypes) => {
  const postCategoriesTable = sequelize.define('PostCategory', categoriesPostsAttributes,
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  postCategoriesTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategoriesTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: postCategoriesTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postCategoriesTable;
};

module.exports = postCategoriesSchema;