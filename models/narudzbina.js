'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Narudzbina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({StavkaNarudzbine}) {
      // define association here
      this.hasMany(StavkaNarudzbine,{foreignKey:"narudzbina_id",as:"StavkeNarudzbina"});
      sequelize.sync()

    }

  }
  Narudzbina.init({
    status: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
  }
  
  }, {
    sequelize,
    modelName: 'Narudzbina',
  });
  return Narudzbina;
};