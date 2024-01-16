let viewCreate = (nbreRecurso) => {
    return `
extends ../layout/head
block content
    .container
    -var `+`${nbreRecurso}`+` = `+`${nbreRecurso}`+`            
    -var nbreRecurso = nbreRecurso
    -var attr = attr    
        h1 Formulario para crear #{nbreRecurso}
        form(action="", method="post") 
            table.table
                thead
                    each nAttr in Object.keys(attr)
                        th.nAttr=nAttr
                tbody 
                    tr
                        each indice in Object.keys(attr)
                            if attr[indice].type == "ENUM"
                                td(class=attr[indice].type) 
                                    select
                                        each op in attr[indice].values
                                            option(value=op)=op
                                         
                            else if attr[indice].type == "STRING"
                                td(class=attr[indice].type) 
                                    input(type="text" ).value.form-control 
                            else
                                td(class=attr[indice].type) 
                                    input(type="number" ).value.form-control 
    .container.d-flex.justify-content-end.align-items-center
        input.submit(type="button" value="Guardar Datos").btn.btn-outline-success
    script(src="../js/validaciones.js",type="module")  
    script(src="../js/jsCreate`+`${nbreRecurso}`+`.js",type="module")  `
}

module.exports = viewCreate;