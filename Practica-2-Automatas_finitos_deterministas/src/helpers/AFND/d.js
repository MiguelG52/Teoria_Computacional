

const afnd = (string, automata) =>{
    const expresion = Array.from(string);
    let esValida = false;
    const pos = 1;
    const {F, E, states, qInicio} = automata;


    const matrix = [
        [[1,1,0,0],[1,0,1,0]],
        [[0,0,0,1],[0,0,0,0]],
        [[0,0,0,0],[0,0,0,1]],
        [[0,0,0,1],[0,0,0,1]],
    ]

    const isFinal =(state) =>{
        for(let i = 0; i<F.length; i++) if(F[i] === state) return 1;
        return 0;
    }
    const position = (symbol) =>{
        for(let i = 0; i<E.length; i++) if(E[i] === symbol) return i;
        return;
    }
    
    
}

export {afnd};