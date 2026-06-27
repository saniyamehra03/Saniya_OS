import React from 'react'

const Icon = ({emoji,name,onClick,isActive}) => {
  return (
    <div onClick={onClick} 
 className={`
  flex flex-col items-center
  cursor-pointer
  rounded-lg
  p-2
  transition
  w-fit
  hover:bg-white/10
  ${isActive ? "bg-white/20" : ""}
`}>
     <div className="text-4xl" >{emoji}</div>

   <p className="text-sm mt-1">{name}</p>
    </div>
  )
}

export default Icon