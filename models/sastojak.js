'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sastojak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Jelo}) {
      // define association here
      this.belongsToMany(Jelo, {foreignKey:"sastojak_id",as:"Jela", through:"JeloSastojak"});
      sequelize.sync()

    }

  }
  Sastojak.init({
    naziv: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }

  }, {
    sequelize,
    modelName: 'Sastojak',
  });
  return Sastojak;
};