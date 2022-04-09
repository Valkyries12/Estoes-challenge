import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const iconStyles = {
    marginRight: "5px"
}

const btnStyle = {
    backgroundColor: "#F5222D",
};

const btnBackStyle = {
    backgroundColor: "transparent",
    color: "#262626",
    marginRight: "15px",
    fontSize: "10px"
}


const EncabezadoTabla = ({ title, hasAddButton, hasBackButton }) => {
  const navigate = useNavigate();
 

  const fondoColor = {
    backgroundColor: "#fff",
  };

  const handleAdd = () => {
    navigate("/agregar-proyecto");
  };

  const handleclick = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "5%" }}>
      <AppBar position="static" style={fondoColor}>
        <Toolbar>
          {hasBackButton && (
            
            <Button style={btnBackStyle} onClick={handleclick}>
              <FaArrowLeft style={iconStyles}/> Back
            </Button>
          )}
          <Typography
            color="#262626"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          {hasAddButton && (
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
