

export const divideString = (stringInicial, tipo) =>{
    
    //si no esta seleccionada alguna opcion del radio  button
    //detiene la ejecucion
    if(!tipo) return;

    //Crea un arraglo con los elememtos separados por comas
    if(tipo === 1){
        if(stringInicial.includes('-')) return;
        const nuevoAlfabeto = stringInicial.split(",");
        return(nuevoAlfabeto)
    }
    //Crea un nuevo arreglo en rango
    if(tipo === 2){
        if(stringInicial.includes(',')) return;
        const rango = stringInicial.split('-');
        
        //Evalua si el rango inicial-final son numeros
        let re = /[0-9]/
        if(re.test(rango[0]) && re.test(rango[1])){
          let inicio = parseInt(rango[0]);
          let final = parseInt(rango[1]);
          
          const nuevoAlfabeto = [];
          for(let i = inicio; i <= final; i++){
              nuevoAlfabeto.push(i);
          }
          return(nuevoAlfabeto)
        }

        //Evlaua si el rango inicial-final son mayusculas
        let reMayus = /[A-Z]/
        if(reMayus.test(rango[0]) && reMayus.test([rango[1]])){
            
            //convertimos las letras en valor ascii
            let inicio = rango[0].charCodeAt(0);
            let final = rango[1].charCodeAt(0);
            const nuevoAlfabeto = [];

            for(let i = inicio; i <= final; i++){
                nuevoAlfabeto.push(String.fromCharCode(i))
            }
            return(nuevoAlfabeto)
        }

        //Evlaua si el rango inicial-final son minusculas
        let reMin = /[a-z]/
        if(reMin.test(rango[0]) && reMin.test([rango[1]])){
            
            //convertimos las letras en valor ascii
            let inicio = rango[0].charCodeAt(0);
            let final = rango[1].charCodeAt(0);
            const nuevoAlfabeto = [];

            for(let i = inicio; i <= final; i++){
                nuevoAlfabeto.push(String.fromCharCode(i))
            }
            return(nuevoAlfabeto);
        }
    }
}