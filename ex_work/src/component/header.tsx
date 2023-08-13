import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#4c4848' }}>
        <Toolbar>

          

          <Link to="/movie"><Button color="inherit">login</Button></Link>
          <Link to="/movie"><Button color="inherit">regester</Button></Link>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/movie"><Button color="inherit">logout</Button></Link>
          </Box>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>dsfasdf</Typography>
          <Link to="/about"><Button color="inherit">abute</Button></Link>

          <Link to="/movie"><Button color="inherit">movies</Button></Link>

          <Link to="/"><Button color="inherit">Home</Button></Link>





        </Toolbar>
      </AppBar>
    </Box>
  );
}