import {useState} from 'react'
import Input from '../components/Input'
import {evaluaCadena} from '../helpers/regex'
import { useAlert, Alert } from '../components/Alert';


const Regex = () => {
  
    const [regex, setRegex] = useState('');
    const [typeAlert1,turnOnAlert1] = useAlert();

    const handleInputChange = (e) => setRegex(e.target.value);
    const handleClickPotencia = async(e)=>{
        e.preventDefault();
        const isCadValida1 = await evaluaCadena(regex);
        turnOnAlert1(isCadValida1 ? "La cadena 1 es una expresión regular":"La cadena no es una expresión regular", !isCadValida1);
        
    }
    
    return (
    <section className='bg-slate-600 p-3 rounded-xl  text-center'>
        <h2>Expresion regular</h2>
        <p>
        Todas las cadenas de letras en minúsculas (a-z) que contengan las cinco vocales en orden.
        </p>
        <p>
        Las vocales pueden estar repetidas (siempre que mantengan el orden),
        </p>
        <form>
            <div className=' flex gap-5 justify-center'>
                
                <div>
                    <Input value={regex} onChange={handleInputChange} 
                        id="regex" name="regex" type="text" placeholder='Ingrese cadena a evaluar'
                    />
                </div>
            </div>
            <div className='flex gap-5'>
                <button onClick={ handleClickPotencia}className='w-full p-3 bg-slate-500 rounded-full hover:bg-slate-800'>Evaluar Palabra</button>
            </div>
            {typeAlert1.msg && <Alert alert={typeAlert1}/>}
        </form>
    </section>
  )
}

export default Regex