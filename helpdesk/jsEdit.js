let jsEdit = (nbreRecurso) => {
    return `"use strict"
    const attr = document.getElementsByClassName('nAttr');
    const value = document.getElementsByClassName('value');
    const btn = document.querySelector('.submit');
    const btnAgrAttr = document.getElementById('agrAtt');
    const id = window.location.pathname.replace("/`+`${nbreRecurso}`+`/","").replace("/edit","");
    
    value[0].disabled = true 
    try{
        btn.addEventListener("click",async()=>{
            let newAttr = {};
    
            for(let i=0;i<attr.length;i++){
                let atributo = attr[i].innerHTML
                if(value[i].value){
                    newAttr[atributo] = value[i].value;
                }else{
                    newAttr[atributo] = value[i].innerHTML;
                }
                
            }
            console.log(newAttr)
            Swal.fire({
                title: `+"`<h1 class="+`"text-info"`+">Procesando</h1>`"+`,
                text: "...",
                icon: "info",
                backdrop:true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey:false,
                stopKeydownPropagation: false,
                showConfirmButton:false
            })
            let res = await axios.put(`+"`/"+`${nbreRecurso}`+"/${id}`"+`,{attr: newAttr});
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
    
        })
    }catch(err){
        console.log(err)
        Swal.fire({
            title: `+"`<h1 class="+`"text-danger"`+">Error!</h1>`"+`,
            text: `+"`${err.response? err.response.data : err }`"+`,
            icon: 'error',
            backdrop:true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey:false,
            stopKeydownPropagation: false,
            showConfirmButton:true,
            confirmButtonAriaLabel: 'Aceptar'
        }) 
    }`
}

module.exports = jsEdit;