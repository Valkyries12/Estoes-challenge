import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const fondoColor = {
    backgroundColor: "#fff"
}

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={fondoColor}>
        <Toolbar>       
          <img src={process.env.PUBLIC_URL +  "/images/logo.png"} alt="Esto es logo"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header