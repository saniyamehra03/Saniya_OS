import React,{useState}from 'react'
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
      const[openApp,setOpenApp]=useState(null);
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
      name={item.name }
      onClick={() => setOpenApp("about")} 
      />
    ))}
</div>
{openApp === "About Me" && (
  <div className="bg-white text-black p-4 rounded-lg w-80">
    <h2>About Me</h2>
    <p>Hello, I'm Saniya.</p>
  </div>
)}

{openApp === "Projects" && (
  <div className="bg-white text-black p-4 rounded-lg w-80">
    <h2>Projects</h2>
    <p>My projects will be shown here.</p>
  </div>
)}

{openApp === "Notes" && (
  <div className="bg-white text-black p-4 rounded-lg w-80">
    <h2>Notes</h2>
    <textarea
      className="border w-full p-2"
      rows="5"
      placeholder="Write your notes..."
    />
  </div>
)}

{openApp === "Music Player" && (
  <div className="bg-white text-black p-4 rounded-lg w-80">
    <h2>Music Player</h2>
    <p>🎵 Music app coming soon...</p>
  </div>
)}
     <div>Taskbar</div>
     </div>
    </>
  )
}
export default App;