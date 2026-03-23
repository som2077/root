import React from "react"
import ReactDOM from "react-dom/client"
import Layout from "../../components/Layout"
import "../../App.css"

function MainApp() {
  return (
    <Layout>
      <h1 className="text-white text-2xl font-bold">Welcome to Goplexa 👋</h1>
      <p className="text-white/50 mt-2">AI Super App</p>
    </Layout>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
)