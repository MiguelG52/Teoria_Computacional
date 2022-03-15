import {useState, createContext} from 'react';

export const LenguajeContext = createContext();
export const LenguajeProvider = ({children}) =>{ 

    const [ alfabeto, setAlfabeto ] = useState([]);
    const [l1, setL1] = useState([]);
    const [l2, setL2] = useState([]);
    return(
    <LenguajeContext.Provider value={{
        alfabeto, setAlfabeto,
        l1,l2,setL1,setL2
    }}>
        { children }
    </LenguajeContext.Provider>
    )
}