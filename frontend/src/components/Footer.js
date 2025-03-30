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
  Instagram,
  ContactMail as ContactMailIcon,
} from "@mui/icons-material";

const Footer = ({ isAdmin }) => {
  const handleAdminClick = () => {
    window.location.href = "https://youngwriterclubjnvbudgam.in/admin/";
  };

  const handleEmailClick = () => {
    window.open("mailto:contact@clubblog.com", "_blank");
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
          {/* Brand Info */}
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              maxWidth: { xs: "100%", sm: "30%" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <BlogIcon sx={{ color: "#FF9966", fontSize: "2rem" }} />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  background: "linear-gradient(to right, #FF9966, #FFB899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Club Blog
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
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
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                ml: 3.5,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              District Budgam, 191111 (J&K-UT)
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 1,
                justifyContent: { xs: "center", sm: "flex-start" },
                cursor: "pointer",
                "&:hover": {
                  "& .MuiTypography-root": {
                    color: "white",
                    textDecoration: "underline",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#FFB899",
                    transform: "scale(1.1)",
                  },
                },
              }}
              onClick={handleEmailClick}
            >
              <Email
                sx={{
                  color: "#FF9966",
                  transition: "all 0.2s ease",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  transition: "all 0.2s ease",
                }}
              >
                jnvbudgam87@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              maxWidth: { xs: "100%", sm: "30%" },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "white",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Link
                href="/"
                sx={{
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "white",
                    transform: "translateX(5px)",
                    "& .MuiSvgIcon-root": {
                      transform: "scale(1.1)",
                      color: "#FFB899",
                    },
                  },
                }}
              >
                <Home
                  sx={{
                    color: "#FF9966",
                    transition: "all 0.2s ease",
                  }}
                />
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
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "white",
                      transform: "translateX(5px)",
                      "& .MuiSvgIcon-root": {
                        transform: "scale(1.1)",
                        color: "#FFB899",
                      },
                    },
                  }}
                >
                  <AdminPanelSettings
                    sx={{
                      color: "#FF9966",
                      transition: "all 0.2s ease",
                    }}
                  />
                  Admin Panel
                </Link>
              )}
              <Link
                href="/contact"
                sx={{
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "white",
                    transform: "translateX(5px)",
                    "& .MuiSvgIcon-root": {
                      transform: "scale(1.1)",
                      color: "#FFB899",
                    },
                  },
                }}
              >
                <ContactMailIcon
                  sx={{
                    color: "#FF9966",
                    size: "12px",
                    transition: "all 0.2s ease",
                  }}
                />
                Contact Us
              </Link>
            </Box>
          </Box>

          {/* Social Links */}
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              maxWidth: { xs: "100%", sm: "30%" },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "white",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <IconButton
                aria-label="Instagram"
                sx={{
                  color: "#FF9966",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#FF9966",
                    transform: "translateY(-3px) scale(1.1)",
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                sx={{
                  color: "#FF9966",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#FF9966",
                    transform: "translateY(-3px) scale(1.1)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                aria-label="twitter"
                sx={{
                  color: "#FF9966",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#FF9966",
                    transform: "translateY(-3px) scale(1.1)",
                  },
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            pt: 2,
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {"© "}
            {new Date().getFullYear()}
            {" Club Blog - Jawahar Navodaya Vidyalaya, Budgam"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontStyle: "italic",
              textAlign: { xs: "center", sm: "right" },
            }}
          >
            <a
              href="mailto:mirbasharat908@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Created with ❤️ by Basharat Mir
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
