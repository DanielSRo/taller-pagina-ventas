import * as React from 'react';
//React-router
import { Link } from 'react-router';
//Material icons
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Avatar, Button, Tooltip, MenuItem
} from '@mui/material';
//Material icons
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';


//Opciones de pagina
const pages = ['', 'Categorias', 'Productos'];
//Opciones de usuario
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
const Navbar = () => {

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***  */
  return (
    <AppBar position="static">
      <Container maxWidth="xl">

        <Toolbar disableGutters>

          {/* *** *** *** *** Ventana Grande  *** *** *** *** */}

          {/* *** *** Icono *** *** */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          {/* *** *** Titulo *** *** */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tienda de Ventas
          </Typography>

          {/* *** *** Botonos ventana pequeña *** *** */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            {/* *** *** Icono de menu para ventana pequeña *** *** */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* *** *** Menu de opcciones de ventana pequeña *** *** */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Link to={`/${page}`}
                  key={page}
                  style={{ textDecoration: 'none', color: 'inherit' }} >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {page === "" ? "Inicio" : page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>


          {/* *** *** *** *** Ventana pequeña  *** *** *** *** */}

          {/* *** *** Icono ventana pequeña *** *** */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          {/* *** *** Titulo ventana pequeña *** *** */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ventas
          </Typography>

          {/* *** *** *** *** Menu ventana grande *** *** *** *** */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={`/${page}`}
                key={page}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page === "" ? "Inicio" : page}
                </Button>
              </Link>
            ))}
          </Box>

          {/* *** *** boton de imagen de usuario ventana grande y pequeña *** *** */}
          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            {/* *** *** Menu de usuario ventana grande y pequeña *** *** */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;
