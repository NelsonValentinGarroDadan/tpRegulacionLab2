'use strict';
    const {
        Model
    } = require('sequelize');
        module.exports = (sequelize, DataTypes) => {
            let atributosQ = {"edad":{"type":"INTEGER","allowNull":false,"primaryKey":true,"autoIncrement":false},"pelo":{"type":"BOOLEAN","allowNull":false,"primaryKey":false,"autoIncrement":false}};
            const attr = {};
            for(let indice in atributosQ){
                if(atributosQ[indice]["type"]=="STRING"){
                    attr[indice] = {type: DataTypes.STRING(50), allowNull: atributosQ[indice]["allowNull"], primaryKey: atributosQ[indice]["primaryKey"], autoIncrement: atributosQ[indice]["autoIncrement"]}
                }else if(atributosQ[indice]["type"]=="ENUM"){
                    attr[indice] = {type: DataTypes.ENUM(atributosQ[indice]["values"]), allowNull: atributosQ[indice]["allowNull"], primaryKey: atributosQ[indice]["primaryKey"], autoIncrement: atributosQ[indice]["autoIncrement"]}
                }else{
                    attr[indice] = {type: DataTypes[atributosQ[indice]["type"]], allowNull: atributosQ[indice]["allowNull"], primaryKey: atributosQ[indice]["primaryKey"], autoIncrement: atributosQ[indice]["autoIncrement"]}
                }
                
            }
            class ninios extends Model {
                /*
                * Helper method for defining associations.
                * This method is not a part of Sequelize lifecycle.
                * The `models/index` file will call this method automatically.
                */
            static associate(models) {
                //define association here
            }
        }
        ninios.init(
            attr
        ,{ 
            sequelize,
            timestamps: false,
            modelName: 'ninios',
        });
        return ninios;
                
    };
                