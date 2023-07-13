const { DataTypes } = require('sequelize');

/**
 * @type {import('sequelize').ModelAttributes}
 */
const postsCategoriesAttributes = {
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
    primaryKey: true,
    references: {
      key: 'id',
      model: 'categories',
    },
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'post_id',
    primaryKey: true,
    references: {
      key: 'id',
      model: 'blog_posts',
    },
  },
};

module.exports = postsCategoriesAttributes;