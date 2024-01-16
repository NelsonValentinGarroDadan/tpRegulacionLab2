let validaciones = (type,value) =>{
    switch (type) {
        case "INTEGER": 
                        let expresion1 = /\b[0-9]{0,}/;
                        return !expresion1.test(value) || value === "";

        case "BOOLEAN": 
                        let expresion2 = /\b[0-1]{1}/;
                        return !expresion2.test(value);

        case "STRING":  
                        let expresion3 = /\b[a-zA-Z]{3,50}/;
                        return !expresion3.test(value);

        case "ENUM":   
                        return !Array.isArray(value) || value.length == 0;

        case "NAME": 
                    let expresion4 = /\b[a-z]{3,255}/; 
                    return !expresion4.test(value);
        case "EMAIL":
                    let expresion5 =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    return !expresion5.test(value);
        case "PSW":
                    let expresion6 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ ;
                    return !expresion6.test(value);
    }
        
}
export default validaciones;