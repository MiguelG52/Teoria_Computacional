

const evaluateString = (string, automata) =>{
    const expresion = Array.from(string);
    let esValida = false;
    
    const {qInicio,F,E} = automata;
    let i = 0, actualState = '';

    actualState = qInicio;

    while(i<expresion.length){
        
        actualState = delta(expresion[i], actualState, E);
        i++;
    }
    
    if(typeof(actualState) === 'string' ? true:false){
        esValida = F.includes(actualState) ? true: false;
    }
    return esValida;
    
}

const delta = (symbol, state, E) =>{   

    switch(state){
        case '0':
            if(E.int.includes(symbol)) state = '1';
            else if(E.number.includes(symbol)) state = '2';
            else if(E.float === symbol) state = '3';
            else return;
        break
        
        case '1':
            if(E.float === symbol) state = '3';
            else if(E.number.includes(symbol)) state = '2';
            else break;
        
        case '2':
            if(E.float === symbol) state = '3';
            else if(E.number.includes(symbol)) state = '2';
            else if(E.exponent.includes(symbol)) state = '5';
            else return;
        break
        
        case '3':
            if(E.number.includes(symbol)) state = '4';
            else return;
        break

        case '4':
            if(E.number.includes(symbol)) state = '4';
            else if(E.exponent.includes(symbol)) state = '5';
            else return;
        break
        
        case '5':
            if(E.number.includes(symbol)) state = '7';
            else if(E.int.includes(symbol)) state = '6';
            else return;
        break
        
        case '6':
            if(E.number.includes(symbol)) state = '7';
            else return;
        break

        case '7':
            if(E.number.includes(symbol)) state = '7';
            else return;
        break
    }
    console.log(state);
    return state;

}
export { evaluateString }