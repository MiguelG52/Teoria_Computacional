import React, { useState } from 'react'
import { afnd } from '../helpers/AFND/d';

const a = () => {
  
  const [string, setString] = useState("");
  const [valida, setValida] = useState();
  const [msg, setMSG] = useState(false);
  const automata = {
    states: [0,1,2,3],
    qInicio:0,
    F:[3],
    E:['a', 'b']
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const temp = afnd(string, automata);
    setValida(temp);
    setMSG(true);
  }
  
  return (
    <div className='card mt-16'>
      
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5 '>
        <label>d) AFND </label>
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