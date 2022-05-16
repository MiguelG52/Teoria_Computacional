import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-screen min-h-screen bg-gray-200 grid grid-cols-5 p-10'>
      {children}
    </div>
  )
}

export default Layout