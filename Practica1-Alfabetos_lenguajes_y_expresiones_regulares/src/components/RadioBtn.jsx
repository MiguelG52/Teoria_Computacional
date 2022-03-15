import React from 'react'

const RadioBtn = ({onChange, text1, text2, nameRadio, id, id2}) => {
  return (
    <div className="flex justify-center mt-10 ">
        <div className='flex gap-5 justify-center'>
            <div >
                <input
                    onChange={onChange}
                    value="1"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name={nameRadio} id={id}/>
                <label className="form-check-label inline-block text-gray-100" htmlFor={id}>
                    {text1}
                </label>
            </div>
            <div >
                <input
                    onChange={onChange}
                    value="2"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name={nameRadio} id={id2}/>
                <label className="form-check-label inline-block text-gray-100" htmlFor={id2}>
                    {text2}
                </label>
            </div>
        </div>
    </div>
  )
}

export default RadioBtn