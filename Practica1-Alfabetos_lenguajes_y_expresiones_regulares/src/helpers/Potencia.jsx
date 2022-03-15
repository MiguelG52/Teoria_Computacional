
const invierteCadena = (string) =>{
    const cadenaInvertida = string.split('').reverse().join('');
    return cadenaInvertida;
}

const concatenaArreglo = (alfabeto, potencia, len) =>{
    
    for(let i = 1; i<potencia; i++){
        for(let j = 0; j<len+1; j++){
            for(let k = 0; j<len+1; k++){
                console.log(alfabeto[j], alfabeto[k]);
            }
        }
    } 


    /*
    for(let i=0; i<len; i++){
        for(let j = 0; j<len+1; j++){
            if(i === 0 || alfabeto[j] === 'lambda') continue;
            else{
                const str = alfabeto[i].concat(alfabeto[j]);
                alfabeto.push(str);
            }
        }
    }
    */
}

export const potenciaDeAlfabeto = (alfabeto, potencia) =>{


    const potenciaInt = parseInt(potencia);
    const alfabetoPotencia = [];

    if(potenciaInt === 0){
        const lambda = 'lambda';
        alfabetoPotencia.push(lambda);
    }
    if(potenciaInt < 0){
        alfabetoPotencia.push("lambda");
        alfabeto.forEach((w)=> alfabetoPotencia.push(invierteCadena(w)));
        if(potenciaInt === -1) return alfabetoPotencia;
        else{
            concatenaArreglo(alfabetoPotencia, potenciaInt, alfabeto.length);
            console.log(alfabetoPotencia);
        }
    }
    else{
        alfabetoPotencia.push("lambda");
        alfabeto.forEach((w)=> alfabetoPotencia.push(w));
        if(potenciaInt === 1) return alfabetoPotencia;
        else{
            concatenaArreglo(alfabetoPotencia, potenciaInt, alfabeto.length);
            console.log(alfabetoPotencia);
        }
    }

}