import React from 'react'

const Taskbar = ({openApp}) => {
  return (
    <div>
     {openApp || "No App Open"}
    </div>
  );
};

export default Taskbar