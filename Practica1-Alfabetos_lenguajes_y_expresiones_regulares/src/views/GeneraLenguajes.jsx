import React, {useState} from 'react'
import Input from '../components/Input'
import RadioBtn from '../components/radioBtn';
import { creaLenguaje } from '../helpers/creaLenguaje';
import { useLenguaje } from '../hooks/useLenguaje';
import { restaLenguaje } from '../helpers/RestaLenguajes';
import TablaAlfabeto from '../components/TablaAlfabeto';

const GeneraLenguajes = () => {
    
    const [lenguaje, setLenguaje] = useState({
        l:"",
        np:"",
    });
    const {alfabeto, setL1, setL2, l1, l2} = useLenguaje();
    const [nLenguaje, setNLenguaje] = useState();
    const [l3, setL3] = useState([]);

    const handleInputChange = (e) => setLenguaje({...lenguaje,[e.target.name]:e.target.value});
    const handleLenguajeChange = (e) => setNLenguaje(parseInt(e.target.value));


    const handleClickBtn = (e) =>{
        e.preventDefault();
        if(nLenguaje === 1){
            const l = creaLenguaje(lenguaje.l, lenguaje.np, alfabeto);
            setL1(l);
        }
        if(nLenguaje === 2){
            const l = creaLenguaje(lenguaje.l, lenguaje.np, alfabeto);
            setL2(l);
        }
        
    }
    const handleClickRestar = async(e) =>{
        e.preventDefault();
        if(l1.length === 0 || l2.length === 0) return;
        const resta = await restaLenguaje(l1, l2);
        await setL3(resta);
    }

    
  
    return (
    <section className='bg-slate-600 p-3 rounded-xl  text-center'>
        <h2>Genera Lenguajes</h2>
        <RadioBtn onChange={handleLenguajeChange} nameRadio="selectLenguaje" text1="L1" id="l1" text2="L2" id2="l2"/>
        <form>
            <div className=' flex gap-5 justify-center'>
                
                <div>
                    <Input value={lenguaje.l} onChange={handleInputChange} 
                        id="longitudLenguaje" name="l" type="number" placeholder='Longitud'
                    />
                </div>
                    <Input value={lenguaje.np} onChange={handleInputChange} 
                        id="nSimbolos" name="np" type="text" placeholder='Ingresa NP'
                    />
            </div>
            <div className='flex gap-5'>
                <button onClick={handleClickBtn} className='w-full p-3 bg-slate-500 rounded-full hover:bg-slate-800'>Crear Lenguaje</button>
                <button onClick={ handleClickRestar}className='w-full p-3 bg-slate-500 rounded-full hover:bg-slate-800'>Resta Lenguaje</button>
            </div>
        </form>
        {l1.length > 0 && <TablaAlfabeto array={l1} title="Lenguaje 1"/>}
        {l2.length > 0 && <TablaAlfabeto array={l2} title="Lenguaje 2"/>}
        {l3.length > 0 && <TablaAlfabeto array={l3} title="Lenguaje LD"/>}
    </section>
  )
}

export default GeneraLenguajes