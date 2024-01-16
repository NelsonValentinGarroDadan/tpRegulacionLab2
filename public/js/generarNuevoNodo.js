let generarNuevoNodo = ()=>{
    let nuevoNodo =document.createElement('tr');
        //creo el td del input del nombre del atributo
            let td = document.createElement('td');
            td.setAttribute("class","text-center");
        //creo el input del nombre del atributo
            let input = document.createElement('input');
            input.setAttribute("class","nbre_attr");
            input.setAttribute("type","text");
            input.setAttribute("style","border-color:#dee2e6;")
            input.setAttribute("placeholder","ingrese el nombre");
            input.setAttribute("name","nbre_attr");
            input.setAttribute("class","nbre_attr");
        //agrego el input al td
            td.appendChild(input);
        //agrego el td al nuevo nodo
            nuevoNodo.appendChild(td);
        //creo el select
            td= document.createElement('td');
            td.setAttribute("class","text-center");
            let select = document.createElement('select')
            select.setAttribute("name","tipo_dato");
            select.setAttribute("class","tipo_dato");
        //creo las options
            //creo una option
            let option = document.createElement('option')
            option.setAttribute("value","INTEGER");
            option.setAttribute("select","true");
            option.innerHTML = "int";
            //agrego la option al select
            select.appendChild(option);
            //creo una option
            option = document.createElement('option')
            option.setAttribute("value","STRING");
            option.innerHTML = "varchar(50)";
            //agrego la option al select
            select.appendChild(option);
            //creo una option
            option = document.createElement('option')
            option.setAttribute("value","BOOLEAN");
            option.innerHTML = "bool";
            //agrego la option al select
            select.appendChild(option);
            //creo una option
            option = document.createElement('option')
            option.setAttribute("value","ENUM");
            option.innerHTML = "enum(50)";
            //agrego la option al select
            select.appendChild(option);
        //agrego el select al td
            td.appendChild(select);
        //agrego el td al nuevo nodo
            nuevoNodo.appendChild(td)
        //creo el td del input de la pk
            td = document.createElement('td');
            td.setAttribute("class","text-center");
        //creo el input de la pk
            input = document.createElement('input');
            input.setAttribute("type","checkbox");
            input.setAttribute("name","pk");
            input.setAttribute("class","pk");
        //agrego el input al td
            td.appendChild(input);
        //agrego el td al input
            nuevoNodo.appendChild(td);
        //creo el td del input del A_I
            td = document.createElement('td');
            td.setAttribute("class","text-center");
        //creo el input del A_I
            input = document.createElement('input');
            input.setAttribute("type","checkbox");
            input.setAttribute("name","autoIncrement");
            input.setAttribute("class","A_I");
        //agrego el input al td
            td.appendChild(input);
         //agrego el td al input
         nuevoNodo.appendChild(td);
        //crep el td del input borrar attr
        td = document.createElement('td');
        td.setAttribute("class","text-center");
        //creo el input borrar attr
            input = document.createElement('input');
            input.setAttribute("type","button");
            input.setAttribute("class","btn btn-outline-danger brrAtt");
            input.setAttribute("value","Borrar");
        //agrego el input al td
            td.appendChild(input);
        //agrego el td al nuevo nodo
            nuevoNodo.appendChild(td); 
        //agregp el td al nuevo nodo
            nuevoNodo.appendChild(td);
    return nuevoNodo;
}

export default generarNuevoNodo;