let jsCreate = (nbreRecurso)=>{
    return `"use strict"
    const attr = document.getElementsByClassName('nAttr');
    const td = document.querySelectorAll('td');
    const btn = document.querySelector('.submit');
    
    import validaciones from "./validaciones.js";

    btn.addEventListener("click",async()=>{
           let {isConfirmed} = await Swal.fire({ 
               title: `+"``"+`,
               text: "¿Estas seguro de crear el siguiente recurso?",
               icon: "question",
               footer: `+"`<span class="+`"text-danger"`+">Revisa bien la informacion</span>`"+`,
               backdrop:true,
               allowOutsideClick: false,
               allowEscapeKey: false,
               allowEnterKey:false,
               stopKeydownPropagation: false,
               showConfirmButton:true,
               confirmButtonText: "Crear",
               confirmButtonAriaLabel: 'Confirmar',
               confirmButtonColor: '#198754',
               showCancelButton: true,
               cancelButtonText:"Revisar",
               cancelButtonAriaLabel: 'Revisar',
    
           })
           if(isConfirmed){
               let newAttr = {};
               limpiarBordes();
               try{
                   for(let i=0;i<attr.length;i++){
                        let nbreAtributo = attr[i].innerHTML;
                        switch (td[i].className){
                            case "ENUM":   
                                        let value = td[i].children[0].value;
                                        newAttr[nbreAtributo] = value;
                                        break;
                            case "INTEGER":
                                        if(validaciones("INTEGER",td[i].children[0].value)){
                                            td[i].children[0].style.borderColor = "red"  
                                            throw "Debe ser de tipo entero"  
                                        } 
                                        newAttr[nbreAtributo] = td[i].children[0].value;
                                        break;
                            case "BOOLEAN":
                                        if(validaciones("BOOLEAN",td[i].children[0].value)){
                                            td[i].children[0].style.borderColor = "red"  
                                            throw "Debe ser booleano, (0 o 1)"  
                                        } 
                                        newAttr[nbreAtributo] = td[i].children[0].value;
                                        break;
                            case "STRING":
                                        if(validaciones("STRING",td[i].children[0].value)){
                                            td[i].children[0].style.borderColor = "red"  
                                            throw "Debe ser varchar(50), string de no mas de 50 caracteres, por lo menos 3 letras (sin numeros)"  
                                        } 
                                        newAttr[nbreAtributo] = td[i].children[0].value;
                                        break;
                        }
                    }
                    console.log(newAttr)
                    Swal.fire({
                        title: `+"`"+`<h1 class="text-info">Procesando</h1>`+"`"+`,
                        text: "...",
                        icon: "info",
                        backdrop:true,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey:false,
                        stopKeydownPropagation: false,
                        showConfirmButton:false
                    })
                    let res = await axios.post(`+"`/"+`${nbreRecurso}/`+"`"+`,{attr: newAttr});
                    Swal.close();
                    let {isConfirmed} = await Swal.fire({
                        title: `+"`<h1 class="+`"text-success"`+">Realizado!</h1>`"+`,
                        text: `+"`${res.data}`"+`,
                        icon: 'success',
                        backdrop:true,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey:false,
                        stopKeydownPropagation: false,
                        showConfirmButton:true,
                        confirmButtonAriaLabel: 'Aceptar'
                    }) 
                    if(isConfirmed){
                        location.reload()
                    } 
                }catch(err){
                    console.log(err)
                    Swal.fire({
                        title: `+"`<h1 class="+`"text-danger"`+">Error!</h1>`"+`,
                        text: `+"`${err.response? err.response.data : err }`,"+`
                        icon: 'error',
                        backdrop:true,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey:false,
                        stopKeydownPropagation: false,
                        showConfirmButton:true,
                        confirmButtonAriaLabel: 'Aceptar'
                    }) 
                }
           }
    
        })
    //funciones

    let limpiarBordes = ()=>{
        for(let i = 0; i< td.length; i++){
            if(td[i].className == "ENUM"){
                for(let j = 0; j<td[i].children.length;j++){
                    td[i].children[j].style.borderColor = "#dee2e6"
                }
            }
            else{
                td[i].children[0].style.borderColor = "#dee2e6"
            }
        }
    }
    `
}

module.exports = jsCreate;