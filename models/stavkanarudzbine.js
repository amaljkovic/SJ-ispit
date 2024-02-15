'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StavkaNarudzbine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Jelo, Narudzbina}) {
      // define association here
      this.belongsTo(Jelo, {foreignKey:"jelo_id", as:"jelo"});
      this.belongsTo(Narudzbina, {foreignKey:"narudzbina_id", as:"narudzbina"});
      sequelize.sync()
    }

  }
  StavkaNarudzbine.init({
    komada: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
  }, {
    sequelize,
    modelName: 'StavkaNarudzbine',
  });
  return StavkaNarudzbine;
};