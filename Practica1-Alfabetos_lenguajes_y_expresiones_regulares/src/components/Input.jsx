import React from 'react'
import PropTypes from 'prop-types';

const Input = ({value, onChange, id, name, type, placeholder}) => {
  
    return (
    <div className='my-10 text-black'>
        
        <input 
            onChange={onChange}
            value={value}
            name={name}
            id={id}
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            type={type} 
            placeholder={placeholder} 
            required
        />
    </div>
  )
}
Input.propTypes = {
    
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
}
Input.defaultProps = {
    placeholder:'',
}

export default Input