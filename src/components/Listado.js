import { Link } from "react-router-dom";
import EncabezadoTabla from "./EncabezadoTabla";

const Listado = () => {
  return (
    <>
        <EncabezadoTabla title={"My projects"}  hasButton={true} />
      <Link to="/agregar-tarea">Agregar</Link>
    </>
  );
};

export default Listado;
