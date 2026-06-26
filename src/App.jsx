import React, { useState } from "react";
import "./App.css";
import Icon from "./components/Icon";
import Window from "./components/Window";

const App = () => {
  const Icons = [
    { emoji: "👩", name: "About Me" },
    { emoji: "💻", name: "Projects" },
    { emoji: "📊", name: "Placement Tracker" },
    { emoji: "📝", name: "Notes" },
    { emoji: "⏰", name: "Reminder" },
    { emoji: "🎵", name: "Music Player" },
  ];

const [openApp, setOpenApp] = useState(null);
const appContent={
  "About Me" : <p>Hello, I'm Saniya</p>,
  "Projects": <p>My projects will be shown here.</p>,
  "Notes": <textarea />,
  "Reminder":<p>Reminder app coming soon.</p>,
  "Music Player":<p>🎵 Music app coming soon...</p>
}
  return (
    <div className="h-screen flex flex-col text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-4 relative">
      <div className="text-2xl font-bold mb-4">
        Saniya OS
      </div>

      <div className="flex-1">
        {Icons.map((item) => (
          <Icon
            key={item.name}
            emoji={item.emoji}
            name={item.name}
            onClick={() => setOpenApp(item.name)}
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

      <div className="absolute bottom-0 left-0 right-0 h-14 bg-black/40 backdrop-blur-md flex items-center justify-between px-4">
        <div>🚀 Start</div>

        <div>
          {openApp || "No App Open"}
        </div>

        <div>
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default App;