let modelo = (nbreRecurso,attrRecurso) => {
    return `'use strict';
    const {
        Model
    } = require('sequelize');
        module.exports = (sequelize, DataTypes) => {
            let atributosQ = ${attrRecurso};
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
            class ${nbreRecurso} extends Model {
                /*
                * Helper method for defining associations.
                * This method is not a part of Sequelize lifecycle.
                * The `+"`models/index`"+` file will call this method automatically.
                */
            static associate(models) {
                //define association here
            }
        }
        ${nbreRecurso}.init(
            attr
        ,{ 
            sequelize,
            timestamps: false,
            modelName: '${nbreRecurso}',
        });
        return ${nbreRecurso};
                
    };
                `
}

module.exports = modelo