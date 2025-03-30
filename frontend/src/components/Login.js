import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://youngwriterclubjnvbudgam.in/api/auth/login/",
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.is_staff) {
        onLoginSuccess(response.data);
        navigate("/");
      } else {
        setError("Only admin users can log in to manage content.");
      }
    } catch (error) {
      setError("Invalid username or password.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Admin Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<LoginIcon />}
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
