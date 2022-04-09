import EncabezadoTabla from "./EncabezadoTabla";
import ListadoTable from "./ListadoTable";
import { useSelector } from 'react-redux';

const ListadoPantalla = () => {
  
  const { projects } = useSelector(state => state);

  const colorFondo = {
    backgroundColor: "#F0F2F5",
    height: "100vh"
  };

  const projectsData = projects.projects || projects;
  return (
    <div style={colorFondo}>
      <EncabezadoTabla title={"My projects"} hasBackButton={false} hasAddButton={true} />
      <ListadoTable data={projectsData || []}/>
    </div>
  );
};

export default ListadoPantalla;
