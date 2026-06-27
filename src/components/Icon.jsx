import React from 'react'

const Icon = ({emoji,name,onClick}) => {
  return (
    <div onClick={onClick} 
    className =" flex flex-col items-center
     cursor-pointer hover:bg-white/10 rounded-lg p-2
     transition w-fit" >
   
     <div>{emoji}</div>

   <p>{name}</p>
    </div>
  )
}

export default Icon