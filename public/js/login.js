const log = document.getElementById('log');
const reg = document.getElementById('reg');
const btnLog = document.getElementById('btnLog');
const btnReg = document.getElementById('btnReg');
//importaciones
import validaciones from './validaciones.js';
//evento
log.addEventListener("click",()=>{
    log.parentNode.parentNode.parentNode.style.display = 'none';
    reg.parentNode.parentNode.parentNode.style.display = 'block';
});

reg.addEventListener("click",()=>{
    reg.parentNode.parentNode.parentNode.style.display = 'none';
    log.parentNode.parentNode.parentNode.style.display = 'block';
});

btnLog.addEventListener("click",async()=>{
    const email = document.getElementById('email');
    const psw = document.getElementById('psw');
    email.style.borderColor = "#dee2e6";
    psw.style.borderColor = "#dee2e6"
    try{
        let data = {};
        
        if(validaciones("EMAIL",email.value)){
            email.style.borderColor = "red";
            throw "El email no es de formato pedido, example@exmple.com";
        } 
        if(psw.value==""){
            psw.style.borderColor = "red";
            throw "Debes introducir una contraseña"
        } 
        data["email"] = email.value;
        data["psw"] = psw.value;
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
        let res = await axios.post('/login',data);
        Swal.close();
                let {isConfirmed} = await Swal.fire({
                    title: `<h1 class="text-success">Realizado!</h1>`,
                    text: `Se logeo con exito`,
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
                    location.href= res.data;
                }
    }catch(err){
        console.log(err);
        Swal.fire({
            title: `<h1 class="text-danger">Error!</h1>`,
            text: `${err.response? err.response.data : err }`,
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
    


});

btnReg.addEventListener("click",async()=>{
    const nbre = document.getElementById('nombreC');
    const email = document.getElementById('emailC');
    const psw = document.getElementById('pswC');
    const psw2 = document.getElementById('pswC2');

    nbre.style.borderColor = "#dee2e6";
    email.style.borderColor = "#dee2e6";
    psw.style.borderColor = "#dee2e6";
    psw.style.borderColor = "#dee2e6";
    try{
        if(validaciones("NAME",nbre.value)){
            nbre.style.borderColor = "red";
            throw "Ingrese un nombre valido (mas de 3 letras), sin espacios"
        }
        if(validaciones("EMAIL",email.value)){
            email.style.borderColor = "red";
            throw "El formato del email no es correcto, example@example.com"
        }
        if(validaciones("PSW",psw.value)){
            psw.style.borderColor = "red";
            throw "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos ni mayusculas."
        }
        if(psw.value != psw2.value){
            psw2.style.borderColor = "red";
            throw "Las contraseñas no coinciden";
        }
        let data = {};
        data["nombre"] = nbre.value;
        data["psw"] = psw.value;
        data["email"] = email.value;
        console.log(data);
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
        let res =await axios.post('/register',data);
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
    }catch(err){
        console.log(err);
        Swal.fire({
            title: `<h1 class="text-danger">Error!</h1>`,
            text: `${err.response? err.response.data : err }`,
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
    
});