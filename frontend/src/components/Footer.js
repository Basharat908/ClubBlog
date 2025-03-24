import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Twitter,
  AdminPanelSettings,
  LocationOn,
  Email,
  Home,
  AutoStories as BlogIcon,
} from "@mui/icons-material";

const Footer = ({ isAdmin }) => {
  const handleAdminClick = () => {
    window.location.href = "http://localhost:8000/admin/";
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        background: "linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)",
        color: "white",
        boxShadow: "0 3px 5px 2px rgba(30, 60, 114, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: 3,
          }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <BlogIcon sx={{ color: "#FF9966" }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                Club Blog
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <LocationOn sx={{ color: "#FF9966" }} />
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Jawahar Navodaya Vidyalaya, Budgam
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.8)", ml: 3.5 }}
            >
              District Budgam, 191111 (J&K-UT)
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <Email sx={{ color: "#FF9966" }} />
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                contact@clubblog.com
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/"
                sx={{
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": {
                    color: "white",
                    "& .MuiSvgIcon-root": {
                      transform: "scale(1.1)",
                      color: "#FFB899",
                    },
                  },
                }}
              >
                <Home sx={{ color: "#FF9966" }} />
                Home
              </Link>
              {isAdmin && (
                <Link
                  component="button"
                  onClick={handleAdminClick}
                  sx={{
                    textDecoration: "none",
                    color: "rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: 0,
                    "&:hover": {
                      color: "white",
                      "& .MuiSvgIcon-root": {
                        transform: "scale(1.1)",
                        color: "#FFB899",
                      },
                    },
                  }}
                >
                  <AdminPanelSettings sx={{ color: "#FF9966" }} />
                  Admin Panel
                </Link>
              )}
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <IconButton
                aria-label="github"
                sx={{
                  color: "#FF9966",
                  transition: "all 0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                sx={{
                  color: "#FF9966",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "#FFB899",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                aria-label="twitter"
                sx={{
                  color: "#FF9966",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: "#FFB899",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            {"© "}
            {new Date().getFullYear()}
            {" Club Blog - Jawahar Navodaya Vidyalaya, Budgam"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
