import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';



const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>       
          <img src="images/logo.png" alt="Esto es logo"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header