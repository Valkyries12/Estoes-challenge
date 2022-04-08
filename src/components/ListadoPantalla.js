import EncabezadoTabla from "./EncabezadoTabla";
import Listado from "./Listado";
import { useSelector } from 'react-redux';

const ListadoPantalla = () => {
  
  const { projects } = useSelector(state => state);

  const colorFondo = {
    backgroundColor: "#F0F2F5",
  };
  return (
    <div style={colorFondo}>
      <EncabezadoTabla title={"My projects"} hasBackButton={false} hasAddButton={true} />
      <Listado data={projects.projects || []}/>
    </div>
  );
};

export default ListadoPantalla;
