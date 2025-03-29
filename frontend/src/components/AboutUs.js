import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Divider,
  Chip,
  CardActions,
  IconButton,
} from "@mui/material";

function AboutUs() {
  // Team members data
  const teamMembers = [
    {
      name: "Devendra Kumar",
      role: "School Principal",
      bio: "Visionary leader fostering academic excellence and holistic development at JNV Budgam.",
      image: "/assets/Devendra_Sir.jpeg",
    },
    {
      name: "Nazir Ahmad Hajam",
      role: "Senior Most Teacher",
      bio: "Legendary mentor with 30+ years of inspiring scientific curiosity and shaping generations of learners.",
      image: "/assets/vc.jpeg",
    },
    {
      name: "Mr. Aamir Hanief",
      role: "TGT Urdu",
      bio: "Makes Urdu language and literature come alive through interactive and culturally-rich pedagogy.",
      image: "/assets/TGT-urdu.jpeg",
    },
    {
      name: "Ms. Usha Chaudhary",
      role: "Club Incharge",
      bio: "Cultivates student talents through dynamic extracurricular programs and leadership opportunities.",
      image: "/assets/clubCoordinator.jpeg",
    },

    {
      name: "Arshad Maqbool Lone",
      role: "Alumni Relations",
      bio: "Architect of the JNV Budgam alumni network, creating bridges between past and present students.",
      image: "/assets/alumuni-coordinator.jpeg",
    },
    {
      name: "Aisha Bano",
      role: "IT Coordinator",
      bio: "Tech innovator ensuring cutting-edge digital learning infrastructure for 21st century education.",
      image: "/assets/it-cord.jpeg",
    },
  ];

  // Timeline events
  const timelineEvents = [
    {
      year: "1986",
      event: "JNV Budgam Established",
      description:
        "Our school was founded as part of the Jawahar Navodaya Vidyalaya scheme.",
    },
    {
      year: "1995",
      event: "First State Toppers",
      description: "Produced our first state-level academic achievers.",
    },
    {
      year: "2008",
      event: "New Campus Inaugurated",
      description:
        "Moved to our current spacious campus with modern facilities.",
    },
    {
      year: "2020",
      event: "Digital Initiative",
      description:
        "Launched this platform for sharing student works and resources.",
    },
  ];

  return (
    <Box sx={{ maxWidth: "lg", mx: "auto", p: 3 }}>
      {/* Introduction Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          About JNV Budgam
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the official digital platform of Jawahar Navodaya
          Vidyalaya, Budgam. Established in 1986, our institution has been a
          beacon of excellence in education, nurturing talented students from
          rural areas of Jammu and Kashmir.
        </Typography>
        <Typography variant="body1" paragraph>
          This platform serves as a repository of knowledge where students,
          teachers, and alumni can share educational articles, research papers,
          and study materials. Our mission is to foster collaborative learning
          and make quality educational resources accessible to all.
        </Typography>
      </Paper>

      {/* Team Section */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mt: 6, fontWeight: 600, color: "primary.main" }}
      >
        Our Leadership Team
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                sx={{
                  height: 300,
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
                component="img"
                image={member.image}
                alt={member.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600 }}
                >
                  {member.name}
                </Typography>
                <Chip
                  label={member.role}
                  color="secondary"
                  size="small"
                  sx={{
                    mb: 2,
                    fontWeight: 500,
                    borderRadius: 1,
                    px: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {member.bio}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                {member.socialLinks?.map((link, i) => (
                  <IconButton
                    key={i}
                    href={link.url}
                    target="_blank"
                    color="primary"
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Timeline Section */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mt: 6, fontWeight: 600, color: "primary.main" }}
      >
        Our Journey
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Box sx={{ mb: 6 }}>
        {timelineEvents.map((event, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              mb: 4,
              "&:last-child": { mb: 0 },
            }}
          >
            <Box
              sx={{
                width: 100,
                flexShrink: 0,
                textAlign: "right",
                pr: 2,
                pt: 0.5,
              }}
            >
              <Typography variant="subtitle1" color="text.secondary">
                {event.year}
              </Typography>
            </Box>
            <Box sx={{ position: "relative", pl: 3 }}>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  bgcolor: "primary.main",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: -6,
                  top: 8,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                }}
              />
              <Paper elevation={2} sx={{ p: 2, ml: 2 }}>
                <Typography variant="h6" component="span">
                  {event.event}
                </Typography>
                <Typography>{event.description}</Typography>
              </Paper>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Resources Section */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mt: 6, fontWeight: 600, color: "primary.main" }}
      >
        Platform Resources
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
        <Typography variant="body1" paragraph>
          This platform provides access to:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Student-authored articles and research papers
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Educational PDFs and study materials
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              School announcements and event details
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Alumni success stories and career guidance
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          All resources are freely available for students and educators to
          download and use for educational purposes.
        </Typography>
      </Paper>
    </Box>
  );
}

export default AboutUs;
