import agregarEnum from './agregarEnum.js';
let darAccionEnum = (selects) =>{
    for(let i=0;i<selects.length;i++){
        selects[i].addEventListener('change',(e)=>{
        if(e.target.value==='ENUM'){
            agregarEnum(e.target.parentNode.parentNode);
        }else{
            if(e.target.parentNode.parentNode.nextSibling){
                if(e.target.parentNode.parentNode.nextSibling.className.includes("enumValues") ) e.target.parentNode.parentNode.nextSibling.remove();
            }
        }
    })
}
}

export default darAccionEnum;