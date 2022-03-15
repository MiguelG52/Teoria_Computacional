import React, { useState } from 'react'
import Checkbox from '../components/Checkbox';
import Input from '../components/Input'
import { divideString } from '../helpers/alfabetos';
import { useLenguaje } from '../hooks/useLenguaje';
import TablaAlfabeto from '../components/TablaAlfabeto';

const LeerLenguaje = () => {
  
    const {setAlfabeto, alfabeto } = useLenguaje();
    const [formaDeLeer, setFormaDeLeer] = useState(null);
    const [inputAlfabeto, setInputAlfabeto ] = useState('')
    const handleInputChange = (e) => setInputAlfabeto(e.target.value);

    const handleInputRadioButton = (e) => setFormaDeLeer(parseInt(e.target.value));
    
    const handleClickBtn = async (e) =>{
        e.preventDefault();
        const nuevoAlfabeto = await divideString(inputAlfabeto, formaDeLeer);
        await setAlfabeto(nuevoAlfabeto);
        console.table(alfabeto)
    }
    
    return (
    <section className='bg-slate-600 p-3 rounded-xl  text-center'>
        <h2>Ingresa elementos del alfabeto</h2>
        <form onSubmit={handleClickBtn}>
            <Checkbox onChange={handleInputRadioButton}/>
            <Input
                value={inputAlfabeto}
                onChange={handleInputChange} 
                text="Ingresa los simbolos pertenecientes al lenguaje &Sigma;" id="inputAlfabeto" name="inputAlfabeto" type="text" placeholder='Ingresa &Sigma;'
            />
            <button className='w-full p-3 bg-slate-500 rounded-full hover:bg-slate-800'>Crear Alfabeto</button>
        </form>
        {alfabeto.length > 0 && <TablaAlfabeto array={alfabeto} title="Alfabeto"/>}
    </section>
  )
}

export default LeerLenguaje