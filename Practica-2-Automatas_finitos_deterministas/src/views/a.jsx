import React, { useState } from 'react'
import { evaluateString } from '../helpers/AFD/a';

const a = () => {
  
  const [string, setString] = useState("");
  const [valida, setValida] = useState();
  const [msg, setMSG] = useState(false);
  const automata = {
    qInicio:"0",
    F:['2','4','7'],
    E:{
      number:["0","1","2","3","4","5","6","7","8","9"],
      float: '.',
      int: ['+','-'],
      exponent:['e','E']
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const temp = evaluateString(string, automata);
    setValida(temp);
    setMSG(true);
  }
  
  return (
    <div className='card'>
      
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
        <label>a) Tengo que guardar los cambios</label>
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