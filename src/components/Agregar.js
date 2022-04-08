import { Link } from "react-router-dom";
import EncabezadoTabla from "./EncabezadoTabla";

const Agregar = () => {
    return (
        <>
        <EncabezadoTabla title={"My projects"}  hasButton={false} />
        <Link to="/">Volver a listado</Link>
        </>
    )
}

export default Agregar