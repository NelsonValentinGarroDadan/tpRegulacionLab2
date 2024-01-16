let viewEdit = (nbreRecurso) => {
    return `
extends ../layout/head
block content
    .container
        -var `+`${nbreRecurso}`+` = `+`${nbreRecurso}`+`
        -var attr = attr    
        h1 Formulario para editar `+`${nbreRecurso}`+`
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
                                    if attr[indice].primaryKey == true
                                        p(id= "pk" class="value")=personas[indice]
                                    else 
                                        select.value
                                        each op in attr[indice].values
                                            if personas[indice] == op 
                                                option(value=op selected)=op
                                            else 
                                                option(value=op)=op
                                         
                            else if attr[indice].type == "STRING"
                                td(class=attr[indice].type) 
                                    if attr[indice].primaryKey == true
                                        p(class="value")=personas[indice]
                                    else 
                                        input(type="text" placeholder=personas[indice]).value.form-control 
                            else
                                td(class=attr[indice].type) 
                                    if attr[indice].primaryKey == true
                                        p(class="value")=personas[indice]
                                    else
                                        if personas[indice] == "true"
                                            input(type="number" ,placeholder=1).value.form-control 
                                        else 
                                            input(type="number" ,placeholder=0).value.form-control  
                                
        .container.d-flex.justify-content-end.align-items-center
            input.submit(type="button" value="Guardar Datos").btn.btn-outline-success
    script(src="../../js/validaciones.js",type="module")  
    script(src="../../js/jsEdit`+`${nbreRecurso}`+`.js",type="module")`
}

module.exports = viewEdit;