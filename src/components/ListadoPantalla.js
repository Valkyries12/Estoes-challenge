import { Link } from "react-router-dom";
import EncabezadoTabla from "./EncabezadoTabla";
import Listado from "./Listado";

const ListadoPantalla = () => {
  const colorFondo = {
    backgroundColor: "#F0F2F5",
  };
  return (
    <div style={colorFondo}>
      <EncabezadoTabla title={"My projects"} hasButton={true} />
      <Listado />
    </div>
  );
};

export default ListadoPantalla;
