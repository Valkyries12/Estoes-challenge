import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado";
import Agregar from "./components/Agregar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Listado />}/>
        <Route path="/agregar-tarea" element={<Agregar />}/>
      </Routes>
    </>
  );
}

export default App;
