

const evaluateString = (string, automata) =>{
    const expresion = Array.from(string);
    let esValida = false;
    
    const {qInicio,F} = automata;
    let i = 0, actualState = '';

    actualState = qInicio;

    while(i<expresion.length){
        
        actualState = delta(expresion[i], actualState);
        i++;
    }
    
    if(typeof(actualState) === 'string' ? true:false){
        esValida = F.includes(actualState) ? true: false;
    }
    return esValida;
    
}
const delta = (symbol, state) =>{
    switch(state){
        case '0':
            if( symbol === '0') state = '3';
            else if( symbol === '1') state = '1';
            else return;
        break
        
        case '1':
            if( symbol === '0') state = '3';
            else if( symbol === '1') state = '2';
            else return;
        break

        case '2':
            if( symbol === '0') state = '2';
            else if( symbol === '1') state = '2';
            else return;
        break

        case '3':
            if( symbol === '0') state = '4';
            else if( symbol === '1') state = '3';
            else return;
        break

        case '4':
            if( symbol === '0') state = '3';
            else if( symbol === '1') state = '5';
            else return;
        break

        case '5':
            if( symbol === '0') state = '3';
            else if( symbol === '1') state = '1';
            else return;
        break
    }
    return state;
}
export {evaluateString};