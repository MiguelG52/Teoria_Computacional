import React from 'react'

const TablaAlfabeto = ({array, title}) => {
  return (
    <>
        <h2 className='mt-5'>{title}</h2>
        <div className='grid grid-cols-4 m-5 p-2 gap-1 mt-0'>
            {array.map((elemento, index)=>{
                return(
                    <div key={index} className="bg-slate-800 p-2">
                        {elemento}
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default TablaAlfabeto