

export const esCadenaValida = (string, alfabeto) =>{
    //Evalua si la los parametros son una cadena y un array, sino detiene
    //la ejecucion
    
    if(typeof(string) != 'string'|| !Array.isArray(alfabeto)) return;
    if(alfabeto.length === 0 || string.length === 0) return;

    //Crea un array con los elementos de la cadena;
    //Solo aplica si es de un elemento
    const arrayStringElements = Array.from(string);
    let esValida = true;

    for(let i = 0; i<arrayStringElements.length; i++){
        
        let elemento = arrayStringElements[i]; 
        if(!alfabeto.includes(elemento)){
            esValida = false;
            break;
        }
    }
    return esValida;
}

