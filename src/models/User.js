/**
*
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

const userAttributes = require('../attributes/users');

const { meuSchema } = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('User', userAttributes, {
      tableName: 'Users',
      underscored: true,
      timestamps: false,
    });

  
    { nameTable }.associate = (models) => {
      { nameTable }.belongsTo(models.{ nome do models }, {
        as: '{ nome da tabela geralmente no singular}',
        foreignKey: '{ colocar a chave estrangeira "idExample"}'
      })
    }

  return { nameTable };
};

module.exports = { meuSchema };