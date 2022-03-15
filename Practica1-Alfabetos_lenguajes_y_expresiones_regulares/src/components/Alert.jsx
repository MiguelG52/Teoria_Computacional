import React, { useState } from 'react'


export const useAlert = () =>{


  const [typeAlert, setTypeAlert] = useState({});
  const turnOnAlert = (txtMsg, isError) =>{
    setTypeAlert({
      msg:txtMsg,
      error: isError,
    })
  }
  return [typeAlert,turnOnAlert];
}


export const Alert = ({alert}) => {
  return (
    <div className={`
        ${alert.error ? 'bg-red-500': 'bg-green-600'}
        text-center p-2 rounded-xl uppercase text-white font-bold text-sm my-5
    `}>
        {alert.msg}
    </div>
  )
}
