import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  Container,
  CssBaseline,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import HomePage from "./components/HomePage";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
      light: "#ff4081",
      dark: "#9a0036",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://youngwriterclubjnvbudgam.in/api/posts/"
      );
      setPosts(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            bgcolor: "background.default",
          }}
        >
          <Navbar isAdmin={isAdmin} />
          <Container
            sx={{
              mt: 4,
              mb: 4,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <CircularProgress />
              </Box>
            ) : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/blogs"
                  element={
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      {posts.map((post) => (
                        <BlogPost key={post.id} post={post} />
                      ))}
                    </Box>
                  }
                />

                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            )}
          </Container>
          <Footer isAdmin={isAdmin} />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
