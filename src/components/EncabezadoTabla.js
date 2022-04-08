import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const EncabezadoTabla = ({ title, hasButton }) => {
  const navigate = useNavigate();
  const btnStyle = {
    backgroundColor: "#F5222D",
  };

  const fondoColor = {
    backgroundColor: "#fff",
  };

  const handleAdd = () => {
    navigate("/agregar-tarea");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={fondoColor}>
        <Toolbar>
          <Typography color="#262626" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {hasButton && (
            <Button variant="contained" style={btnStyle} onClick={handleAdd}>
              + Add project
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default EncabezadoTabla;
