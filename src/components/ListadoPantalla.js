import EncabezadoTabla from "./EncabezadoTabla";
import Listado from "./Listado";
import { useSelector } from 'react-redux';

const ListadoPantalla = () => {
  
  const { projects } = useSelector(state => state);

  const colorFondo = {
    backgroundColor: "#F0F2F5",
  };

  const projectsData = projects.projects || projects;
  return (
    <div style={colorFondo}>
      <EncabezadoTabla title={"My projects"} hasBackButton={false} hasAddButton={true} />
      <Listado data={projectsData || []}/>
    </div>
  );
};

export default ListadoPantalla;
