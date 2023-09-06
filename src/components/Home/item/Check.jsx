import React from 'react'
import { BsCheck2 } from 'react-icons/bs'

const Check = ({isCompleted}) => {
  return (
    <div className={`border-2 rounded-lg border-pink-400 
    ${ isCompleted ? 'bg-pink-400' : '' } w-6 h-6 mr-3 flex items-center justify-center`}>
      {  isCompleted &&
      <BsCheck2 size={24} className='text-gray-900'/>
      }
    </div>
  )
}

export default Check