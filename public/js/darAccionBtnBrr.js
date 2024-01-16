let darAccionBtnBrr = ()=>{
    let btnsBrrAttr = document.getElementsByClassName('brrAtt');
    
    for(let i=0;i<btnsBrrAttr.length;i++){
        btnsBrrAttr[i].addEventListener("click",(e)=>{
            if(e.target.parentNode.parentNode.nextSibling){
                if(e.target.parentNode.parentNode.nextSibling.className.includes("enumValues") ) e.target.parentNode.parentNode.nextSibling.remove();
            }
            e.target.parentNode.parentNode.remove();
        })
    }
    
}

export default darAccionBtnBrr;