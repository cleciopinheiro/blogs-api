/**
*
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

const userAttributes = require('../attributes/users');

const usersSchema = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('User', userAttributes, {
      tableName: 'Users',
      underscored: true,
      timestamps: false,
    });

  return usersTable;
};

module.exports = usersSchema;