import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
  Grid,
  Alert,
  Snackbar,
  InputAdornment,
  useTheme,
} from "@mui/material";
import {
  Send as SendIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

function ContactUs() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!/^[0-9]{10,15}$/.test(formData.number))
      newErrors.number = "Invalid phone number";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      e.target.submit();
      setOpenSnackbar(true);
      setFormData({
        name: "",
        email: "",
        number: "",
        country: "",
        message: "",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        maxWidth: "lg",
        mx: "auto",
        p: { xs: 2, md: 3 },
        minHeight: "calc(100vh - 128px)",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 4 },
          background: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: 3,
            textAlign: "center",
          }}
        >
          Contact JNV Budgam
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Our Contact Information
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationIcon color="#FF9966" sx={{ mr: 2 }} />
                <Typography>
                  <strong>Address:</strong> Jawahar Navodaya Vidyalaya,
                  Khanpora, P.O. Budgam, District Budgam, Jammu & Kashmir
                  -191111
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon color="#FF9966" sx={{ mr: 2 }} />
                <Typography>
                  <strong>Phone:</strong> 01951-255540
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon color="#FF9966" sx={{ mr: 2 }} />
                <Typography>
                  <strong>Email:</strong> jnvbudgam87@gmail.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Office Hours
              </Typography>
              <Typography>Monday to Friday: 9:00 AM - 5:00 PM</Typography>
              <Typography>Saturday: 9:00 AM - 1:00 PM</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <form
              target="_blank"
              action="https://formsubmit.co/7b36d1fde7011493360a53f28a2ecf99"
              method="POST"
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="number"
                    type="tel"
                    variant="outlined"
                    value={formData.number}
                    onChange={handleChange}
                    error={!!errors.number}
                    helperText={errors.number}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Country"
                    name="country"
                    variant="outlined"
                    value={formData.country}
                    onChange={handleChange}
                    error={!!errors.country}
                    helperText={errors.country}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting JNV Budgam! We will get back to you soon."
              />
              <input type="hidden" name="_template" value="table" />
            </form>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactUs;
