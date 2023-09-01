import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import InicioSesion from './pages/InicioSesion'
import Registro from './pages/Registro'
import Tareas from './pages/Tareas'
import NoPage from './pages/NoPage'

export default function App () {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element= {<Home />} /> 
            <Route path="/home" element={<Home/>} />
            <Route path="/iniciosesion" element={<InicioSesion/>} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/tareas" element={<Tareas/>} />
            <Route path="*" element={<NoPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}