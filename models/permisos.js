'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     permisos.belongsToMany(models.recursos,{through: "RecursoPermiso", foreignKey: "nombre_recurso"})
     permisos.belongsToMany(models.tipos_de_permisos,{through: "TDPPermiso", foreignKey: "id_tipo_permiso"})
     permisos.belongsToMany(models.usuarios,{through: "UsuarioPermiso", foreignKey: "id_usuario"})
    }
  }
  permisos.init({
    id: {type: DataTypes.INTEGER,autoIncrement: true, primaryKey: true, allowNull: false},
    id_tipo_permiso: {type: DataTypes.INTEGER, allowNull: false, },
    id_usuario: {type: DataTypes.INTEGER, allowNull: false},
    id_recurso: {type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'permisos',
  });
  return permisos;
};
