import React from 'react'

const Icon = ({emoji,name,onClick}) => {
  return (
    <div onClick={onClick}>
      {emoji}{name}
    </div>
  )
}

export default Icon