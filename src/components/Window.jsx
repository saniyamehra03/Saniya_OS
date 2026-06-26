import React from 'react'

const Window = ({title,onClose, children}) => {
  return (
      <div className="absolute top-20 left-40 bg-white text-black p-4 rounded-lg w-96 shadow-xl z-10">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-lg">{title}</h1>

        <button onClick={onClose}>
          ❌
        </button>
      </div>

      {children}
    </div>
  )
}

export default Window