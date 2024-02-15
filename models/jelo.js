'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jelo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Kategorija, Sastojak, StavkaNarudzbine}) {
      // define association here
      this.belongsTo(Kategorija, {foreignKey:"kategorija_id", as:"kategorija"});
      this.hasMany(StavkaNarudzbine,{foreignKey:"jelo_id",as:"Stavke"});
      this.belongsToMany(Sastojak, {foreignKey:"jelo_id",as:"Sastojci", through:"JeloSastojak"});
      sequelize.sync()

    }
  }
  Jelo.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
  }, 
  opis: {
      type: DataTypes.STRING,
      allowNull: true
  }, 
  cena: {
      type: DataTypes.INTEGER,
      allowNull: false
  }, 
  kategorija_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
  
  }, {
    sequelize,
    modelName: 'Jelo',
  });
  return Jelo;
};