const { DataTypes } = require('sequelize');

/**
 * @type {import('sequelize').ModelAttributes}
 */
const blogPostsAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'user_id',
    references: {
      key: 'id',
      model: 'Users',
    },
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    onUpdate: new Date(),
  },
};

module.exports = blogPostsAttributes;