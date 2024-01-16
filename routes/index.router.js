'use strict';
module.exports = ()=>{
    const fs = require('fs');
    const path = require('path');
    const basename = path.basename(__filename);

    const routers=[];
    fs
      .readdirSync(__dirname)
      .filter(file => {
        return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-3) === '.js' &&
          file.indexOf('.test.js') === -1
        );
      })
      .forEach(file => {
        const route = require(path.join(__dirname, file));
        routers.push(route);    
      });
    return routers;
}

