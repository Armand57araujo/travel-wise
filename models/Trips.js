const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Trips extends Model {}
// * `id`: primary key
// * `trip_budget`   
// * `traveller_amount`
// * `traveller_id`: non-unique foreign key that references the `Traveller` model's `id` field (`Traveller.id`)
// * `location_id`: non-unique foreign key that references the `Location` model's `id` field (`Location.id`)


Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'traveller',
        key: 'id'
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'location',
        key: 'id'
      }
      // change product to corresponding path
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);


module.exports = Trips;
