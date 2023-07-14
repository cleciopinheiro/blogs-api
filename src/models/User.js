const userAttributes = require('../attributes/users');

/**
*
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/
const usersSchema = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('User', userAttributes,
  {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  return usersTable;
};

module.exports = usersSchema;