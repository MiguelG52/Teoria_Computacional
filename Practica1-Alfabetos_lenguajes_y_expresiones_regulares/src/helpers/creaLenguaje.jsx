
const stringToIntElements = (array) =>{
    const newArray = []
    array.forEach(( char ) =>{
        newArray.push(parseInt(char));
    })
    return newArray;
}

const generaNumeroAleatorio = (rango) => Math.floor((Math.random()*rango));

const generaPalabraAleatoria = (len, alfabeto) =>{
    let palabra = '';

    //Si la longitud de la plabara es 1 returna un elemento aleatorio del alfabeto
    if(len === 1) return palabra = alfabeto[generaNumeroAleatorio(alfabeto.length)];
    else{
        //Concatena n veces un elemento aleatorio del alfabeto
        //hasta que la palabra tenga la misma longitud que el parametro 
        for(let i = 0; i<len; i++){
            //si es el primer elemento, sustituye el espacio en blanco
            if(i === 0) palabra = alfabeto[generaNumeroAleatorio(alfabeto.length)];
            //sino concatena el resto de la palabra
            else{
                palabra = palabra.concat(alfabeto[generaNumeroAleatorio(alfabeto.length)]);
            }
        }
        return palabra;
    }
}

export const creaLenguaje = (nElementos, longitudElementos, alfabeto) =>{
    
    if(nElementos.length === 0 || longitudElementos.length === 0) return;
    const Lenguaje = [];
    //Creamos un array de longitudes quitando las comas
    const longitudes = longitudElementos.split(',');
    
    //Tranforma el array de char a int
    const arrayIntLongitudes = stringToIntElements(longitudes);

    //Recorre el arreglo de longitudes de palabras y genera un lenguaje aleatorio
    arrayIntLongitudes.forEach((longitudDePalabra) =>{
        const nuevaPalabra = generaPalabraAleatoria(longitudDePalabra, alfabeto);
        Lenguaje.push(nuevaPalabra);
    })
    return(Lenguaje);

}