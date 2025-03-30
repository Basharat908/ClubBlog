import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AdminPanelSettings as AdminIcon,
  AutoStories as BlogIcon,
  Info as AboutIcon,
  ContactMail as ContactMailIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = ({ isAdmin }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAdminClick = () => {
    window.location.href = "https://youngwriterclubjnvbudgam.in/admin/";
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)",
        boxShadow: "0 3px 5px 2px rgba(30, 60, 114, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <BlogIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#FF9966",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              letterSpacing: ".1rem",
            }}
          >
            CLUB BLOG
          </Typography>

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            {/* Hamburger Icon with Animation */}
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#FF9966",
                transition: "all 0.3s ease",
                transform: Boolean(anchorElNav)
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
                "&:hover": {
                  color: "#FF5E62",
                  transform: Boolean(anchorElNav)
                    ? "rotate(90deg) scale(1.1)"
                    : "rotate(0deg) scale(1.1)",
                  backgroundColor: "rgba(255, 153, 102, 0.1)",
                },
              }}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>

            {/* Animated Mobile Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
                transform: "translateX(0)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <BlogIcon
                sx={{
                  color: "#FF9966",
                  marginLeft: "38px",
                  fontSize: "2rem",
                  mr: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#FF5E62",
                    transform: "scale(1.1)",
                  },
                }}
              />

              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  fontWeight: 800,
                  color: "#1e3c72",
                  textDecoration: "none",
                  letterSpacing: ".2rem",
                  fontFamily: "'Montserrat', sans-serif",
                  background: "linear-gradient(to right, #FF9966, #FF5E62)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    letterSpacing: ".25rem",
                  },
                }}
              >
                CLUB BLOG
              </Typography>
            </Box>

            {/* Enhanced Mobile Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  borderRadius: "16px",
                  minWidth: "200px",
                  boxShadow: "0 10px 30px rgba(255, 105, 135, 0.2)",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <MenuItem
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 153, 102, 0.1)",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontWeight: 600,
                    background: "linear-gradient(to right, #FF9966, #1e3c72)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Home
                </Typography>
              </MenuItem>

              <MenuItem
                component={Link}
                to="/blogs"
                onClick={handleCloseNavMenu}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 153, 102, 0.1)",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontWeight: 600,
                    background: "linear-gradient(to right, #FF9966, #1e3c72)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Blogs
                </Typography>
              </MenuItem>

              <MenuItem
                component={Link}
                to="/about"
                onClick={handleCloseNavMenu}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 153, 102, 0.1)",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontWeight: 600,
                    background: "linear-gradient(to right, #FF9966, #1e3c72)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About Us
                </Typography>
              </MenuItem>

              <MenuItem
                component={Link}
                to="/contact"
                onClick={handleCloseNavMenu}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 153, 102, 0.1)",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontWeight: 600,
                    background: "linear-gradient(to right, #FF9966, #1e3c72)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Contact Us
                </Typography>
              </MenuItem>

              {isAdmin && (
                <MenuItem
                  onClick={handleAdminClick}
                  sx={{
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 153, 102, 0.1)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontWeight: 600,
                      background: "linear-gradient(to right, #FF5E62, #1e3c72)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Admin Panel
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                // color: "#FF9966",
                color: "#FFF",
                //borderColor: "#FF9966",
                "&:hover": {
                  color: "#FFB899",
                  borderColor: "#FFB899",
                  backgroundColor: "rgba(255, 153, 102, 0.1)",
                },
                textTransform: "none",
                borderRadius: "8px",
                px: 2,
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/blogs"
              startIcon={<BlogIcon />}
              sx={{
                // color: "#FF9966",
                color: "#FFF",
                //borderColor: "#FF9966",
                "&:hover": {
                  color: "#FFB899",
                  borderColor: "#FFB899",
                  backgroundColor: "rgba(255, 153, 102, 0.1)",
                },
                textTransform: "none",
                borderRadius: "8px",
                px: 2,
              }}
            >
              Blogs
            </Button>
            <Button
              component={Link}
              to="/about"
              startIcon={<AboutIcon />}
              sx={{
                // color: "#FF9966",
                color: "#FFF",
                //borderColor: "#FF9966",
                "&:hover": {
                  color: "#FFB899",
                  borderColor: "#FFB899",
                  backgroundColor: "rgba(255, 153, 102, 0.1)",
                },
                textTransform: "none",
                borderRadius: "8px",
                px: 2,
              }}
            >
              About Us
            </Button>
            <Button
              component={Link}
              to="/contact"
              startIcon={<ContactMailIcon />}
              sx={{
                color: "white",
                "&:hover": {
                  color: "#FFB899",
                  borderColor: "#FFB899",
                  backgroundColor: "rgba(255, 153, 102, 0.1)",
                },
                textTransform: "none",
                borderRadius: "8px",
                px: 2,
              }}
            >
              Contact Us
            </Button>
            {isAdmin && (
              <Button
                startIcon={<AdminIcon />}
                onClick={handleAdminClick}
                variant="outlined"
                sx={{
                  // color: "#FF9966",
                  color: "#FFF",
                  //borderColor: "#FF9966",
                  "&:hover": {
                    color: "#FFB899",
                    borderColor: "#FFB899",
                    backgroundColor: "rgba(255, 153, 102, 0.1)",
                  },
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 2,
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
