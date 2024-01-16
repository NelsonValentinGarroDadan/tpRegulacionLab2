'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class usuarios extends Model {
        /*
        * Helper method for defining associations.
        * This method is not a part of Sequelize lifecycle.
        * The `models/index` file will call this method automatically.
        */
        static associate(models) {
        }
    }
    usuarios.init({id: {type: DataTypes.INTEGER, allowNull:false, primaryKey:true,autoIncrement: true, unique: true},
        nombre: {type: DataTypes.STRING, allowNull:false},
        pasw: {type: DataTypes.STRING, allowNull:false},
        mail: {type: DataTypes.STRING, allowNull:false, unique: true}}
    ,{ 
    sequelize,
    modelName: 'usuarios',
    });
    return usuarios;
};
        