let agregarEnum = (node)=>{
    let tr = document.createElement('tr');
    tr.setAttribute("class","enumValues")
    //
    let td1 = document.createElement('td');
    let input1 = document.createElement('input');
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","ingrese un valor");
    input1.setAttribute("class","form-control value");
    td1.appendChild(input1)
    //
    let td2 = document.createElement('td');
    let input2 = document.createElement('input');
    input2.setAttribute("type","text");
    input2.setAttribute("placeholder","ingrese un valor");
    input2.setAttribute("class","form-control value");
    td2.appendChild(input2)
    //
    let td3 = document.createElement('td');
    let input3 = document.createElement('input');
    input3.setAttribute("type","text");
    input3.setAttribute("placeholder","ingrese un valor");
    input3.setAttribute("class","form-control value");
    td3.appendChild(input3)
    //
    let td4 = document.createElement('td');
    let input4 = document.createElement('input');
    input4.setAttribute("type","text");
    input4.setAttribute("placeholder","ingrese un valor");
    input4.setAttribute("class","form-control value");
    td4.appendChild(input4)
    //
    let td5 = document.createElement('td');
    let input5 = document.createElement('input');
    input5.setAttribute("type","text");
    input5.setAttribute("placeholder","ingrese un valor");
    input5.setAttribute("class","form-control value");
    td5.appendChild(input5)
    //
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    node.after(tr);
}

export default agregarEnum;
