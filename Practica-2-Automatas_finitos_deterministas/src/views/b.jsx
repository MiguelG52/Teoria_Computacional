import React, { useState } from 'react'
import { evaluateString } from '../helpers/AFD/b';

const a = () => {
  
  const [string, setString] = useState("");
  const [valida, setValida] = useState();
  const [msg, setMSG] = useState(false);
  const automata = {
    qInicio:"0",
    F:['4','5'],
    E:['0','1']
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const temp = evaluateString(string, automata);
    setValida(temp);
    setMSG(true);
  }
  return (
    <div className='card mt-16'>
      
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
        <label>b) AFD que reconoce lenguaje formado por cadenas que contengan un numero par de simbolos 0 y sin simbolos sucesivos 1 </label>
        <input type="text" className='border-2 w-full' value={string} onChange={(e)=> setString(e.target.value)}/>
        {
          string.length === 0 ?(
            <p className='msg'>La cadena esta vacía</p>
          ):(
            msg ? (
              <p className={valida ? 'msg-exito': 'msg-error'}>{
                valida ? "La cadena es valida": "La cadena no es valida"}
              </p>
            ):(<></>)
          )
        }

        <button className='btn'>Evaluar</button>

      </form>
    </div>
  )
}

export default a