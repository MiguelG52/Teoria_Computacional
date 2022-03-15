import React, {useState} from 'react';
import { useLenguaje } from '../hooks/useLenguaje';
import Input from '../components/Input'
import { esCadenaValida } from '../helpers/evaluaCadenas';
import { useAlert, Alert } from '../components/Alert';

const EvaluarPalabras = () => {
    
    const {alfabeto} = useLenguaje();
    const [palabra, setPalabra] = useState('');
    const [palabra2, setPalabra2] = useState('');
    const [typeAlert1,turnOnAlert1] = useAlert();
    const [typeAlert2,turnOnAlert2] = useAlert();

    const handleInputChangeP1 = (e) => setPalabra(e.target.value);
    const handleInputChangeP2 = (e) => setPalabra2(e.target.value);


    const handleSubmitEvaluaPalabra = (e) =>{
        e.preventDefault();
        //Validamos las cadenas 1 y 2
        //El primer parametro debe ser string, la segunda un array-alfabeto
        const isCadValida1 = esCadenaValida(palabra, alfabeto);
        const isCadValida2 = esCadenaValida(palabra2, alfabeto);
        turnOnAlert1(isCadValida1 ? "La cadena 1 pertenece al alfabeto":"La cadena 1 no pertenece al alfabeto", !isCadValida1);
        turnOnAlert2(isCadValida2 ? "La cadena 2 pertenece al alfabeto":"La cadena 2 no pertenece al alfabeto", !isCadValida2);
        
    }
    
    return (
    <>
        { !alfabeto.length ? <></>:(
            <section className='bg-slate-600 p-3 rounded-xl text-center'>
                <h2>Evalua Palabra</h2>
                <form 
                    onSubmit={handleSubmitEvaluaPalabra}
                >
                    <div className='flex gap-2 justify-center'>
                        <Input
                            value={palabra}
                            onChange={handleInputChangeP1} 
                            id="inputPalabra" name="palabra" type="text" placeholder='Palabra 1'
                        /><Input
                            value={palabra2}
                            onChange={handleInputChangeP2} 
                            id="inputPalabra2" name="palabra2" type="text" placeholder='Palabra 2'
                        />
                    </div>
                    <button className='w-full p-3 bg-slate-500 rounded-full hover:bg-slate-800'>Evaluar Palabra</button>
                    {typeAlert1.msg && <Alert alert={typeAlert1}/>}
                    {typeAlert2.msg && <Alert alert={typeAlert2}/>}

                </form>
            </section>
        )}
    </>
  )
}

export default EvaluarPalabras