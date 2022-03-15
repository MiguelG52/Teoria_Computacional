import {useContext} from 'react';
import { LenguajeContext } from '../context/lenguajeProvider';

export const useLenguaje = () =>{
    return useContext(LenguajeContext);
}