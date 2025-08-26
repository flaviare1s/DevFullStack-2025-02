import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/catalogo" element={<div>Catalogo</div>} />
        <Route path="/kanban" element={<div>Kanban</div>} />
      </Routes>
    </>
  )
}

export default App
