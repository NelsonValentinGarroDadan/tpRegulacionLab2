import validaciones from './validaciones.js';
let extraeDatos = (tAttr,nRecurso,tPer)=>{
    let nbreRecurso = nRecurso.value;
    if(validaciones("NAME",nbreRecurso)){
        nRecurso.style.borderColor = "red";
        throw "El nombre del recurso debe ser una sola palabra en minuscula";
    } 
    
    let atributos = {};
    let permisos = [];
    let pks = false;
    for(let i=0;i<tAttr.children.length;i++){
        if(tAttr.children[i].querySelector('.tipo_dato')){
            if(tAttr.children[i].querySelector('.tipo_dato').value !== "ENUM"){
                let nbreAtributo = tAttr.children[i].querySelector('.nbre_attr').value;
                if(validaciones("NAME",nbreAtributo)){
                    tAttr.children[i].querySelector('.nbre_attr').style.borderColor = "red"
                    throw "El nombre del atributo debe ser una sola palabra en minuscula"  
                } 
                let tipoDato = tAttr.children[i].querySelector('.tipo_dato').value;
                let pk = tAttr.children[i].querySelector('.pk').checked;
                let A_I = tAttr.children[i].querySelector('.A_I').checked;
               
                pks = pks || pk; 
    
                if(A_I && tipoDato!=="INTEGER") throw "El atributo no puede ser autoincremental si no es de tipo int";
                    
                atributos[nbreAtributo] = {type : tipoDato,allowNull: false,primaryKey : pk ,autoIncrement : A_I}
            }else{
                let nbreAtributo = tAttr.children[i].querySelector('.nbre_attr').value;
                if(validaciones("NAME",nbreAtributo)){
                    tAttr.children[i].querySelector('.nbre_attr').style.borderColor = "red";
                    throw "El nombre del atributo debe ser una sola palabra en minuscula"  
                } 
                let tipoDato = tAttr.children[i].querySelector('.tipo_dato').value;
                let pk = tAttr.children[i].querySelector('.pk').checked;
                let A_I = tAttr.children[i].querySelector('.A_I').checked;
    
                let values = [];
                let value
                let trValues = tAttr.children[i].nextSibling;
                for(let j = 0; j<trValues.children.length;j++){
                    value = trValues.children[j].querySelector('.value').value;
                    if(validaciones("STRING",value) && validaciones("INTEGER",value)){
                        trValues.children[j].querySelector('.value').style.borderColor = "red";
                        throw "Los valores del enum deben ser de tipo int o string, no se permiten valores vacios";
                    } 
                    
                    values.push(value); 
                }
                pks = pks || pk; 
    
                if(A_I && tipoDato!=="INTEGER") throw "El atributo no puede ser autoincremental si no es de tipo int";
                    
                if(validaciones("NAME",nbreAtributo)) throw "El nombre del atributo debe ser una sola palabra en minuscula"
    
    
                atributos[nbreAtributo] = {type : tipoDato, values: values, allowNull: false,primaryKey : pk ,autoIncrement : A_I}
            }
            
        };
            if(!pks) throw "Debe haber por lo menos una llave primaria"
            //permisos
            
            for(let i=0;i<tPer.children.length;i++){  
                if(tPer.children[i].querySelector('.read').checked){
                    let idUsuario = tPer.children[i].querySelector('.id_usuario').innerHTML;
                    let permiso = tPer.children[i].querySelector('.read').value;
                    
                    permisos.push({id_usuario : idUsuario, id_tipo_permiso : permiso})
                }
                if(tPer.children[i].querySelector('.delete').checked){
                    let idUsuario = tPer.children[i].querySelector('.id_usuario').innerHTML;
                    let permiso = tPer.children[i].querySelector('.delete').value;
                    
                    permisos.push({id_usuario : idUsuario, id_tipo_permiso : permiso})
                }
                if(tPer.children[i].querySelector('.update').checked){
                    let idUsuario = tPer.children[i].querySelector('.id_usuario').innerHTML;
                    let permiso = tPer.children[i].querySelector('.update').value;
                    
                    permisos.push({id_usuario : idUsuario, id_tipo_permiso : permiso})
                }
                if(tPer.children[i].querySelector('.insert').checked){
                    let idUsuario = tPer.children[i].querySelector('.id_usuario').innerHTML;
                    let permiso = tPer.children[i].querySelector('.insert').value;
                    
                    permisos.push({id_usuario : idUsuario, id_tipo_permiso : permiso})
                }
            };
    };
    return {nombreRecurso : nbreRecurso,atributos : atributos,permisos : permisos};
}

export default extraeDatos;