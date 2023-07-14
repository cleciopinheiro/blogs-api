const categoriesAttributes = require('../attributes/categories');

/**
*
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/
const categoriesSchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('Category', categoriesAttributes,
  {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });

  return categoriesTable;
};

module.exports = categoriesSchema;