import React from "react"
import ReactDOM from "react-dom/client"
import "../../App.css"

function Command() {
  return (
    <div data-tauri-drag-region className="w-full h-full bg-[#1a1d27]/90 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center px-4">
      <span className="text-white/30 text-lg">🔍</span>
      <input
        autoFocus
        type="text"
        placeholder="Type a command..."
        className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30 text-lg px-3"
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Command />
  </React.StrictMode>
)