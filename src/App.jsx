import React, { useState } from "react";
import "./App.css";
import Icon from "./components/Icon";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
const App = () => {
  const Icons = [
    {   id: 1,emoji: "👩", name: "About Me" },
    {   id: 2, emoji: "💻", name: "Projects" },
    {   id: 3 ,emoji: "📊", name: "Placement Tracker" },
    {  id: 4,emoji: "📝", name: "Notes" },
    {  id: 5 ,emoji: "⏰", name: "Reminder" },
    {  id: 6 ,emoji: "🎵", name: "Music Player" },
  ];

const [openApp, setOpenApp] = useState(null);
const appContent={
  "About Me" : <p>Hello, I'm Saniya</p>,
  "Projects": <p>My projects will be shown here.</p>,
  "Notes": <textarea />,
  "Reminder":<p>Reminder app coming soon.</p>,
  "Music Player":<p>🎵 Music app coming soon...</p>,
  "Placement Tracker": <p>Placement tracking coming soon.</p>
}
  return (
   <div className="h-screen flex flex-col text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-4 relative">
      <div className="text-2xl font-bold mb-4">
        Saniya OS
      </div>

      <div className="flex-1 grid grid-cols-2">
        {Icons.map((item) => (
          <Icon
            key={item.id}
            emoji={item.emoji}
            name={item.name}
            onClick={() => setOpenApp(item.name)}
            isActive={openApp === item.name}
          />
        ))}
      </div>
     {
      openApp &&(
        <Window title={openApp}
        onClose={()=> setOpenApp(null)}
        >
          {appContent[openApp]}
        </Window>
      )
     }
    </div>
  );
};

export default App;