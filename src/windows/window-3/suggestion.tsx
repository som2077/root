import React from "react"
import ReactDOM from "react-dom/client"
import "../../App.css"

function Suggestion() {
  const suggestions = ["Correct Spelling", "Rephrase", "Make Formal"]
  return (
    <div className="w-full h-full bg-[#1a1d27] border border-white/10 rounded-xl p-2 flex flex-col gap-1">
      {suggestions.map((s, i) => (
        <button
          key={i}
          className="text-left text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm transition"
        >
          {s}
        </button>
      ))}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suggestion />
  </React.StrictMode>
)