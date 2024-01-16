"use strict"

//importaciones

import darAccionBtnBrr from './darAccionBtnBrr.js';
import generarNuevoNodo from './generarNuevoNodo.js';
import extraeDatos from './extraeDatos.js';
import darAccionEnum from './daAccionEnum.js';
import limpiarBordes from './limpiarBordes.js';


//declaraciones

const btnAgrAttr = document.getElementById('agrAtt');
const btnSend = document.querySelector('.submit');
const tAttr = document.getElementsByClassName('atributos')[0];
const nRecurso = document.getElementById('nbre_recurso');
const selects = document.getElementsByClassName('tipo_dato');
const tPer = document.getElementsByClassName('permisos')[0];
const session = document.getElementById('session');
//funciones

darAccionBtnBrr();
darAccionEnum(selects);

//manejadores de eventos

btnAgrAttr.addEventListener("click",(e)=>{
        tAttr.appendChild(generarNuevoNodo());
        darAccionBtnBrr();
        darAccionEnum(tAttr.lastChild.querySelectorAll('.tipo_dato'));
        
    });

btnSend.addEventListener("click",async()=>{
    limpiarBordes();
    let attrVacio;
    for(let i=0;i<tAttr.getElementsByClassName('nbre_attr').length;i++){
        if(tAttr.getElementsByClassName('nbre_attr')[i].value==''){
            attrVacio=tAttr.getElementsByClassName('nbre_attr')[i];
            break;
        }
    } 
    if(nRecurso.value==''){
        await Swal.fire({
            title: `<h1 class="text-danger">Error!</h1>`,
            text: "No se puede crear un recurso sin nombre",
            icon: "error",
            backdrop:true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey:false,
            stopKeydownPropagation: false,
            showConfirmButton:true,
            confirmButtonAriaLabel: 'Aceptar',
            confirmButtonText: "Aceptar"
        })
    }else if(tAttr.children.length==0){
        Swal.fire({
            title: `<h1 class="text-danger">Error!</h1>`,
            text: "No se puede crear un recurso sin ningun atributo",
            icon: "error",
            backdrop:true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey:false,
            stopKeydownPropagation: false,
            showConfirmButton:true,
            confirmButtonAriaLabel: 'Aceptar',
            confirmButtonText: "Aceptar"
        })
    }else if(attrVacio){
        await Swal.fire({
            title: `<h1 class="text-danger">Error!</h1>`,
            text: "No se puede crear un recurso con atributos sin nombre",
            icon: "error",
            backdrop:true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey:false,
            stopKeydownPropagation: false,
            showConfirmButton:true,
            confirmButtonAriaLabel: 'Aceptar',
            confirmButtonText: "Aceptar"
        })
        attrVacio.style.borderColor="red";
    }else{
       let {isConfirmed} = await Swal.fire({
            title: ``,
            text: "¿Estas seguro de crear el siguiente recurso?",
            icon: "question",
            footer: `<span class="text-danger">Revisa bien la informacion</span>`,
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
            try{
                let data = extraeDatos(tAttr,nRecurso,tPer);
                console.log(data)
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
                let res = await axios.post('/generarCRUD',data);
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
                console.log(err)
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
                            
        }
    }
});

session.addEventListener("click",()=>{
    location.href= '/login';
})