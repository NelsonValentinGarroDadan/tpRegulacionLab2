let limpiarBordes = ()=>{
    const nbreR = document.getElementById('nbre_recurso');
    const attr = document.getElementsByClassName('nbre_attr');
    const enumV = document.getElementsByClassName('value');

    nbreR.style.borderColor = "#dee2e6";

    for(let i = 0; i<attr.length; i++){
        attr[i].style.borderColor = "#dee2e6"
    }

    for(let i = 0; i<enumV.length; i++){
        enumV[i].style.borderColor = "#dee2e6"
    }
}

export default limpiarBordes;