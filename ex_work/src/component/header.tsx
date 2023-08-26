import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/user';
import { useJwt } from 'react-jwt';

export default function Header() {
  // const users = useSelector((state) => state.auth.user)
  // const token = localStorage.getItem("token");
  // const { isExpired, decodedToken } = useJwt(token)
  // const deferredValue = React.useDeferredValue(decodedToken);
  // console.log(deferredValue,'sdfsadfsaf')
  // const [isPending, startTransition] = useTransition(users);
  
  const islogin = useSelector((state) => state.auth.islogin)
  const dispatch = useDispatch()
  const handlelogout = () => {
    dispatch(authActions.logout())
    console.log('handel clivk')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#4c4848' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {islogin ?
              <>
                {console.log('bbbbbbbbbbb')}

                <Button color="inherit" onClick={handlelogout}>logout</Button>
                <Link to="/movie">
                  <Button color="primary">
                    {} 
                  </Button>
                </Link>
              </>
              :
              <>
                {console.log(islogin, 'gggggggg')}
                <Link to="/movie"><Button color="inherit">regester</Button></Link>
              </>
            }
          </Box>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>dsfasdf</Typography>
          <Link to="/about"><Button color="inherit">abute</Button></Link>
          <Link to="/movie"><Button color="inherit">movies</Button></Link>
          <Link to="/"><Button color="inherit">Home</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}