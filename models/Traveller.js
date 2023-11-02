const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Traveller extends Model {}
// * `id`: primary key
//     * `name`
//     * `email`

Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    traveller_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'traveller',
  }
);


module.exports = Traveller;
