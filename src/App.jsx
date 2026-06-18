import React from 'react'
import "./App.css";
import Icon from "./components/Icon";
const App = () => {
     const Icons=[
     { emoji: "👩", name: "About Me" },
      {emoji:"💻" , name: "Projects" },
      { emoji:"📊", name: "Placement Tracker" },
      { emoji:"📝", name:"Notes"},
      { emoji:"⏰", name:"Reminder" },
      {emoji:"🎵" ,name:"Music Player" },
        ];
  return (
    <>
   
    <div className="bg-red-500 text-white h-screen flex flex-col bg-slate-100
bg-slate-800 font-semibold  pt-4 pb-4 pl-4 pr-4 text-lg">
      <div>Saniya Os</div>
      <br/>
  
      <div className="flex-1">
  {
    Icons.map((item) => (
      <Icon
      key={item.name}
      emoji={item.emoji}
      name={item.name}
      />
    ))
  }
</div>
     <div>Taskbar</div>
     </div>
    </>
  )
}

export default App