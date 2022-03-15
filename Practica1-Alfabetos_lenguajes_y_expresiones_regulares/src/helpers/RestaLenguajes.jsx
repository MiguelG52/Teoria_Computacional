
export const restaLenguaje = (l1, l2) =>{

    const ld = [];
    //iteramos por cada elemento de l1
    l1.forEach((elemento) => {
        //si el elemento no se encuentra en l2, entonces incerta el dato
        if(!l2.includes(elemento)) ld.push(elemento);
    });
    return ld;
}