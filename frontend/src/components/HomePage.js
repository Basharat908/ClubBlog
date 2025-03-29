// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   Container,
//   Divider,
//   Paper,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { PhotoLibrary, School, Event, LibraryBooks } from "@mui/icons-material";

// function HomePage() {
//   // Sample data - replace with your actual content
//   const activities = [
//     {
//       title: "Annual Sports Day",
//       date: "15 March 2023",
//       image: "https://example.com/sports-day.jpg",
//       description: "Students showcasing their athletic talents",
//     },
//     {
//       title: "Science Exhibition",
//       date: "10 February 2023",
//       image: "https://example.com/science-fair.jpg",
//       description: "Innovative projects by our young scientists",
//     },
//     {
//       title: "Cultural Festival",
//       date: "26 January 2023",
//       image: "https://example.com/cultural-fest.jpg",
//       description: "Celebrating India's diverse traditions",
//     },
//   ];

//   const quickLinks = [
//     { icon: <School />, title: "About School", link: "/about" },
//     { icon: <LibraryBooks />, title: "Resources", link: "/resources" },
//     { icon: <Event />, title: "Events", link: "/events" },
//   ];

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* Hero Banner */}
//       <Box
//         sx={{
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://example.com/school-banner.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           color: "white",
//           py: 10,
//           textAlign: "center",
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             variant="h2"
//             component="h1"
//             gutterBottom
//             sx={{ fontWeight: 700 }}
//           >
//             Welcome to JNV Budgam
//           </Typography>
//           <Typography variant="h5" sx={{ mb: 4 }}>
//             Where Excellence Meets Opportunity
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             size="large"
//             component={Link}
//             to="/about"
//           >
//             Learn More About Us
//           </Button>
//         </Container>
//       </Box>

//       {/* Activities Gallery */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Typography
//           variant="h4"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontWeight: 600,
//             display: "flex",
//             alignItems: "center",
//             gap: 2,
//           }}
//         >
//           <PhotoLibrary color="primary" />
//           Student Activities
//         </Typography>
//         <Divider sx={{ mb: 4 }} />

//         <Grid container spacing={4}>
//           {activities.map((activity, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 sx={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={activity.image}
//                   alt={activity.title}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography gutterBottom variant="h5" component="h3">
//                     {activity.title}
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     color="text.secondary"
//                     gutterBottom
//                   >
//                     {activity.date}
//                   </Typography>
//                   <Typography variant="body2">
//                     {activity.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ mt: 4, textAlign: "center" }}>
//           <Button
//             variant="outlined"
//             color="primary"
//             size="large"
//             component={Link}
//             to="/gallery"
//           >
//             View Full Gallery
//           </Button>
//         </Box>
//       </Container>

//       {/* Quick Links */}
//       <Paper elevation={0} sx={{ py: 6, backgroundColor: "background.paper" }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h4"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: 600 }}
//           >
//             Quick Links
//           </Typography>
//           <Divider sx={{ mb: 4 }} />
//           <Grid container spacing={4}>
//             {quickLinks.map((link, index) => (
//               <Grid item xs={12} sm={4} key={index}>
//                 <Button
//                   fullWidth
//                   variant="outlined"
//                   size="large"
//                   component={Link}
//                   to={link.link}
//                   startIcon={link.icon}
//                   sx={{
//                     py: 3,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     gap: 2,
//                   }}
//                 >
//                   <Typography variant="h6">{link.title}</Typography>
//                 </Button>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Paper>

//       {/* Latest Blogs Preview */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Typography
//           variant="h4"
//           component="h2"
//           gutterBottom
//           sx={{ fontWeight: 600 }}
//         >
//           Latest Resources
//         </Typography>
//         <Divider sx={{ mb: 4 }} />
//         <Typography paragraph>
//           Explore our collection of educational resources and student blogs.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           component={Link}
//           to="/blogs"
//           sx={{ mt: 2 }}
//         >
//           View All Resources
//         </Button>
//       </Container>
//     </Box>
//   );
// }

// export default HomePage;
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Divider,
  Paper,
  Avatar,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  PhotoLibrary,
  School,
  Event,
  LibraryBooks,
  SportsSoccer,
  Science,
  MusicNote,
  Groups,
  EmojiEvents,
  Home as HomeIcon,
} from "@mui/icons-material";

// Static image placeholders (replace with your actual images)
const bannerImg = "/assets/school-banner.jpeg";
const sportsImg = "/assets/sports-day.jpeg";
const scienceImg = "/assets/science-expo.jpeg";
const culturalImg = "/assets/cultural-fest-2.jpeg";

function HomePage() {
  // Static activities data
  const activities = [
    {
      title: "Annual Sports Day",
      date: "15 March 2023",
      image: sportsImg,
      description:
        "Students showcasing their athletic talents in various competitions",
      icon: <SportsSoccer color="primary" />,
    },
    {
      title: "Science Exhibition",
      date: "10 February 2023",
      image: scienceImg,
      description: "Innovative projects demonstrating scientific principles",
      icon: <Science color="primary" />,
    },
    {
      title: "Cultural Festival",
      date: "26 January 2023",
      image: culturalImg,
      description:
        "Celebration of India's diverse traditions through performances",
      icon: <MusicNote color="primary" />,
    },
  ];

  const features = [
    {
      title: "Quality Education",
      description: "CBSE curriculum with modern teaching methodologies",
      icon: <School fontSize="large" color="black" />,
    },
    {
      title: "Student Community",
      description: "1,200+ students from diverse backgrounds",
      icon: <Groups fontSize="large" color="black" />,
    },
    {
      title: "Achievements",
      description: "Consistent 100% board results since 2015",
      icon: <EmojiEvents fontSize="large" color="black" />,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Banner with Overlay */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          minHeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label="Established 1986"
            color="secondary"
            sx={{ mb: 2, color: "white", fontWeight: 600 }}
          />
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Jawahar Navodaya Vidyalaya
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Budgam, Jammu & Kashmir
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/about"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Explore More
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={Link}
              to="/contact"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderWidth: 2,
                "&:hover": { borderWidth: 2 },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* School Features */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: 2,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.light",
                    width: 80,
                    height: 80,
                    mb: 3,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Activities Section */}
      <Paper
        elevation={0}
        sx={{ py: 8, backgroundColor: "background.default" }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 6,
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <PhotoLibrary color="primary" />
              Student Life
            </Typography>
            <Chip
              label="View All"
              component={Link}
              to="/gallery"
              clickable
              color="primary"
              sx={{ fontWeight: 600 }}
            />
          </Box>

          <Grid container spacing={4}>
            {activities.map((activity, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={activity.image}
                    alt={activity.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {activity.icon}
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          ml: 1.5,
                          fontWeight: 600,
                        }}
                      >
                        {activity.title}
                      </Typography>
                    </Box>
                    <Chip label={activity.date} size="small" sx={{ mb: 2 }} />
                    <Typography variant="body2">
                      {activity.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>

      {/* Call to Action */}
      <Box
        sx={{
          py: 10,
          backgroundImage: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Ready to Explore More?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Discover our educational resources and student achievements
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/blogs"
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            View Resources
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;

// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   Container,
//   Divider,
//   Paper,
//   Avatar,
//   Chip,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import {
//   PhotoLibrary,
//   School,
//   Event,
//   LibraryBooks,
//   SportsSoccer,
//   Science,
//   MusicNote,
//   Groups,
//   EmojiEvents,
// } from "@mui/icons-material";

// // Static image placeholders - using absolute paths from public folder
// const bannerImg = process.env.PUBLIC_URL + "/assets/school-banner-2.jpg";
// const sportsImg = process.env.PUBLIC_URL + "/assets/sports-day.jpeg";
// const scienceImg = process.env.PUBLIC_URL + "/assets/science-expo.jpeg";
// const culturalImg = process.env.PUBLIC_URL + "/assets/cultural-fest-2.jpeg";

// function HomePage() {
//   // Static activities data
//   const activities = [
//     {
//       title: "Annual Sports Day",
//       date: "15 March 2023",
//       image: sportsImg,
//       description: "Students showcasing their athletic talents",
//       icon: <SportsSoccer color="primary" />,
//     },
//     {
//       title: "Science Exhibition",
//       date: "10 February 2023",
//       image: scienceImg,
//       description: "Innovative projects by our young scientists",
//       icon: <Science color="primary" />,
//     },
//     {
//       title: "Cultural Festival",
//       date: "26 January 2023",
//       image: culturalImg,
//       description: "Celebrating India's diverse traditions",
//       icon: <MusicNote color="primary" />,
//     },
//   ];

//   const features = [
//     {
//       title: "Quality Education",
//       description: "CBSE curriculum with modern teaching methodologies",
//       icon: <School fontSize="large" color="primary" />,
//     },
//     {
//       title: "Student Community",
//       description: "1,200+ students from diverse backgrounds",
//       icon: <Groups fontSize="large" color="primary" />,
//     },
//     {
//       title: "Achievements",
//       description: "Consistent 100% board results since 2015",
//       icon: <EmojiEvents fontSize="large" color="primary" />,
//     },
//   ];
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* Hero Banner with Overlay - Updated with fallback */}
//       <Box
//         sx={{
//           position: "relative",
//           height: "80vh",
//           minHeight: 500,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           textAlign: "center",
//           backgroundColor: "#1e3c72", // Fallback color
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bannerImg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             zIndex: -1,
//           },
//         }}
//       >
//         <Container maxWidth="lg">
//           <Chip
//             label="Established 1986"
//             color="secondary"
//             sx={{ mb: 2, color: "white", fontWeight: 600 }}
//           />
//           <Typography
//             variant="h2"
//             component="h1"
//             gutterBottom
//             sx={{
//               fontWeight: 800,
//               textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//               fontSize: { xs: "2.5rem", md: "3.5rem" },
//             }}
//           >
//             Jawahar Navodaya Vidyalaya
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 4,
//               textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
//               fontSize: { xs: "1.5rem", md: "2rem" },
//             }}
//           >
//             Budgam, Jammu & Kashmir
//           </Typography>
//           <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
//             <Button
//               variant="contained"
//               color="secondary"
//               size="large"
//               component={Link}
//               to="/about"
//               sx={{
//                 px: 4,
//                 py: 1.5,
//                 fontWeight: 600,
//               }}
//             >
//               Explore More
//             </Button>
//             <Button
//               variant="outlined"
//               color="inherit"
//               size="large"
//               component={Link}
//               to="/contact"
//               sx={{
//                 px: 4,
//                 py: 1.5,
//                 fontWeight: 600,
//                 borderWidth: 2,
//                 "&:hover": { borderWidth: 2 },
//               }}
//             >
//               Contact Us
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* School Features */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Grid container spacing={6}>
//           {features.map((feature, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   textAlign: "center",
//                   px: 2,
//                 }}
//               >
//                 <Avatar
//                   sx={{
//                     bgcolor: "primary.light",
//                     width: 80,
//                     height: 80,
//                     mb: 3,
//                   }}
//                 >
//                   {feature.icon}
//                 </Avatar>
//                 <Typography
//                   variant="h5"
//                   component="h3"
//                   gutterBottom
//                   sx={{ fontWeight: 600 }}
//                 >
//                   {feature.title}
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   {feature.description}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Activities Section */}
//       <Paper
//         elevation={0}
//         sx={{ py: 8, backgroundColor: "background.default" }}
//       >
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               mb: 6,
//             }}
//           >
//             <Typography
//               variant="h3"
//               component="h2"
//               sx={{
//                 fontWeight: 700,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <PhotoLibrary color="primary" />
//               Student Life
//             </Typography>
//             <Chip
//               label="View All"
//               component={Link}
//               to="/gallery"
//               clickable
//               color="primary"
//               sx={{ fontWeight: 600 }}
//             />
//           </Box>

//           <Grid container spacing={4}>
//             {activities.map((activity, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card
//                   sx={{
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     transition: "transform 0.3s",
//                     "&:hover": {
//                       transform: "translateY(-8px)",
//                       boxShadow: 6,
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="220"
//                     image={activity.image}
//                     alt={activity.title}
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                       {activity.icon}
//                       <Typography
//                         variant="h5"
//                         component="h3"
//                         sx={{
//                           ml: 1.5,
//                           fontWeight: 600,
//                         }}
//                       >
//                         {activity.title}
//                       </Typography>
//                     </Box>
//                     <Chip label={activity.date} size="small" sx={{ mb: 2 }} />
//                     <Typography variant="body2">
//                       {activity.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Paper>

//       {/* Call to Action */}
//       <Box
//         sx={{
//           py: 10,
//           backgroundImage: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
//           color: "white",
//           textAlign: "center",
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography
//             variant="h3"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: 700 }}
//           >
//             Ready to Explore More?
//           </Typography>
//           <Typography variant="h6" sx={{ mb: 4 }}>
//             Discover our educational resources and student achievements
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             size="large"
//             component={Link}
//             to="/blogs"
//             sx={{
//               px: 6,
//               py: 1.5,
//               fontWeight: 600,
//               fontSize: "1.1rem",
//             }}
//           >
//             View Resources
//           </Button>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// export default HomePage;
