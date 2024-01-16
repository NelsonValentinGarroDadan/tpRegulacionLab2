const session = document.getElementById('session');

session.addEventListener("click",async()=>{
    let {isConfirmed} = await Swal.fire({
        title: ``,
        text: "¿Estas seguro de cerrar tu sesion?",
        icon: "question",
        footer: ``,
        backdrop:true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey:false,
        stopKeydownPropagation: false,
        showConfirmButton:true,
        confirmButtonText: "Confirmar",
        confirmButtonAriaLabel: 'Confirmar',
        confirmButtonColor: '#198754',
        showCancelButton: true,
        cancelButtonText:"Cancelar",
        cancelButtonAriaLabel: 'Revisar',

    }) 
    
    if(isConfirmed){
        Swal.fire({
            title: `<h1 class="text-info">Procesando</h1>`,
            text: "...",
            icon: "info",
            backdrop:true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey:false,
            stopKeydownPropagation: false,
            showConfirmButton:false
        })
        let res = await axios.get('/cerrarSesion');
        Swal.close();
        let {isConfirmed} = await Swal.fire({
            title: `<h1 class="text-success">Realizado!</h1>`,
            text: `${res.data}`,
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
    }
})