import { Routes, Route } from "react-router-dom";
import ListadoPantalla from "./components/ListadoPantalla";
import AgregarPantalla from "./components/AgregarPantalla";
import Header from "./components/Header";

function App() {
  return (
    <div style={{backgroundColor: "#F0F2F5"}}>
      <Header />
      <Routes>
        <Route exact path="/" element={<ListadoPantalla />}/>
        <Route path="/agregar-tarea" element={<AgregarPantalla />}/>
      </Routes>
    </div>
  );
}

export default App;
