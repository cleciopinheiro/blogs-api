const { DataTypes } = require('sequelize');

/**
 * @type {import('sequelize').ModelAttributes}
 */

const blogPostAttributes = {
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
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
  },
};

module.exports = blogPostAttributes;