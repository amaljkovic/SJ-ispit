'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JeloSastojak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JeloSastojak.init({
    sastojak_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: false
    },
    jelo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: false
    }
  }, {
    sequelize,
    modelName: 'JeloSastojak',
  });
  return JeloSastojak;
};