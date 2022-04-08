import { Link } from "react-router-dom";
import AgregarForm from "./AgregarForm";
import EncabezadoTabla from "./EncabezadoTabla";

const AgregarPantalla = () => {
    return (
        <>
        <EncabezadoTabla title={"Add project"} hasBackButton={true} hasAddButton={false} />
        <AgregarForm />
        </>
    )
}

export default AgregarPantalla