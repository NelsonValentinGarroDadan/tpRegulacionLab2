let migration = (nbreRecurso, attr) => {
    return `'use strict';
    let at = (Sequelize) => {
      let atributosQ = ${attr};
      const attr = {};
      for(let indice in atributosQ){
        if(atributosQ[indice]["type"]=="STRING"){
                attr[indice] = {type: Sequelize.STRING(50), allowNull: atributosQ[indice]["allowNull"], primaryKey: atributosQ[indice]["primaryKey"], autoIncrement: atributosQ[indice]["autoIncrement"]}
        }else if(atributosQ[indice]["type"]=="ENUM"){
                attr[indice] = {type: Sequelize.ENUM('pendiente','pendiente','pendiente','pendiente','pendiente'),defaultValue: 'pendiente', allowNull: atributosQ[indice]["allowNull"], primaryKey: atributosQ[indice]["primaryKey"], autoIncrement: atributosQ[indice]["autoIncrement"]}
        }else{
                attr[indice] = {type: Sequelize[atributosQ[indice]["type"]], allowNull: atributosQ[indice]["allowNull"], primaryKey: atributosQ[indice]["primaryKey"], autoIncrement: atributosQ[indice]["autoIncrement"]}
        }
                
      }
      attr.createdAt = {
        allowNull: false,
        type: Sequelize.DATE
      };
      attr.updatedAt = {
        allowNull: false,
        type: Sequelize.DATE
      }
      console.log(attr);
      return attr;
    }
    
    
    module.exports = {
      /** @type {import('sequelize-cli').Migration} */
      async up(queryInterface, Sequelize) {
        await queryInterface.createTable('`+`${nbreRecurso}`+`', at(Sequelize));
      },
      async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('`+`${nbreRecurso}`+`');
      }
    };`
}

module.exports = migration;