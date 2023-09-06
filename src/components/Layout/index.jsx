import React from 'react'


const Layout = ({ children }) => {
  return (
    <div className='bg-[#111111] h-screen py-10'>
      {children}
    </div>
  )
}

export default Layout