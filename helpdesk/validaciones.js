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

        case "ENUM":   let expresion4 = /\b[0-9]{0,}/;let expresion5 = /\b[a-zA-Z]{3,50}/;
                        return (!expresion4.test(value) || value === "")&&!expresion5.test(value);

        case "NAME": 
                    let expresion6 = /\b[a-z]{3,255}/; 
                    return !expresion6.test(value);
    }
        
}

module.exports = validaciones;