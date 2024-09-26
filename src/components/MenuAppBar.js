import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null); // För profil-menyn
  const [leftEl, setLeftEl] = React.useState(null); // För hamburger-menyn

  const history = useNavigate(); 

  const handleLogout = () => { 
    localStorage.removeItem('authToken');
    history('/'); 
  }; 

  // Hanterar öppning/stängning av profil-menyn
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLeftEl(null); // Stänger även hamburger-menyn
  };

  // Hanterar öppning/stängning av hamburger-menyn
  const handleLeft = (event) => {
    setLeftEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
  
      <AppBar position="static"  sx={{  zIndex: 1 }}>


        <Toolbar>
          {/* Hamburger-ikon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleLeft}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Skopan
          </Typography>

          {/* Hamburger dropdown */}
          <Menu
            id="hamburger-menu"
            anchorEl={leftEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(leftEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Skopor i närheten</MenuItem>
            <MenuItem onClick={handleClose}>Registrera skopa</MenuItem>
          </Menu>

          {/* Profil-ikon och dropdown */}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profil</MenuItem>
                <MenuItem onClick={handleClose}>Mitt konto</MenuItem>
                <MenuItem onClick={handleLogout}>Logga ut</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
