import React, { useState } from "react";
import "./App.css";
import Icon from "./components/Icon";

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

      {openApp === "About Me" && (
        <div className="absolute top-20 left-40 bg-white text-black p-4 rounded-lg w-96 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">About Me</h2>
            <button onClick={() => setOpenApp(null)}>❌</button>
          </div>

          <p>Hello, I'm Saniya.</p>
          <p>Frontend Developer & AI Enthusiast.</p>
        </div>
      )}

      {openApp === "Projects" && (
        <div className="absolute top-20 left-40 bg-white text-black p-4 rounded-lg w-96 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Projects</h2>
            <button onClick={() => setOpenApp(null)}>❌</button>
          </div>

          <p>My projects will be shown here.</p>
        </div>
      )}

      {/* Placement Tracker */}
      {openApp === "Placement Tracker" && (
        <div className="absolute top-20 left-40 bg-white text-black p-4 rounded-lg w-96 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Placement Tracker</h2>
            <button onClick={() => setOpenApp(null)}>❌</button>
          </div>

          <p>Placement tracking coming soon.</p>
        </div>
      )}

      {openApp === "Notes" && (
        <div className="absolute top-20 left-40 bg-white text-black p-4 rounded-lg w-96 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Notes</h2>
            <button onClick={() => setOpenApp(null)}>❌</button>
          </div>

          <textarea
            className="border w-full p-2 rounded"
            rows="6"
            placeholder="Write your notes..."
          />
        </div>
      )}

      {openApp === "Reminder" && (
        <div className="absolute top-20 left-40 bg-white text-black p-4 rounded-lg w-96 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Reminder</h2>
            <button onClick={() => setOpenApp(null)}>❌</button>
          </div>

          <p>Reminder app coming soon.</p>
        </div>
      )}

      {openApp === "Music Player" && (
        <div className="absolute top-20 left-40 bg-white text-black p-4 rounded-lg w-96 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Music Player</h2>
            <button onClick={() => setOpenApp(null)}>❌</button>
          </div>

          <p>🎵 Music app coming soon...</p>
        </div>
      )}
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