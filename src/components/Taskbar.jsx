import React from 'react'

const Taskbar = ({openApp}) => {
  return (
     <div className="absolute bottom-0 left-0 right-0 h-14 bg-black/40 backdrop-blur-md flex items-center justify-between px-4">
      <div>🚀 Start</div>
     {openApp || "No App Open"}
    <div>{new Date().toLocaleTimeString()}</div>
    </div>
  );
};

export default Taskbar