const { DataTypes } = require('sequelize');

/**
 * @type {import('sequelize').ModelAttributes}
 */

const categoriesPostsAttributes = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'post_id',
    references: {
      model: 'blog_posts',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
    references: {
      model: 'categories',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
};

module.exports = categoriesPostsAttributes;