import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  MenuItem,
  Button
} from '@mui/material';
import {
  Menu as MenuIcon,
  AdminPanelSettings as AdminIcon,
  AutoStories as BlogIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = ({ isAdmin }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAdminClick = () => {
    window.location.href = 'http://localhost:8000/admin/';
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)',
        boxShadow: '0 3px 5px 2px rgba(30, 60, 114, 0.3)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <BlogIcon 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: '#FF9966'
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              letterSpacing: '.1rem'
            }}
          >
            CLUB BLOG
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ 
                color: '#FF9966',
                '&:hover': {
                  color: '#FFB899'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {isAdmin && (
                <MenuItem onClick={handleAdminClick}>
                  <Typography textAlign="center">Admin Panel</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <BlogIcon 
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              color: '#FF9966'
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              letterSpacing: '.1rem'
            }}
          >
            CLUB BLOG
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isAdmin && (
              <Button
                startIcon={<AdminIcon />}
                onClick={handleAdminClick}
                variant="outlined"
                sx={{ 
                  color: '#FF9966',
                  borderColor: '#FF9966',
                  '&:hover': {
                    color: '#FFB899',
                    borderColor: '#FFB899',
                    backgroundColor: 'rgba(255, 153, 102, 0.1)'
                  },
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2
                }}
              >
                Admin Panel
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
