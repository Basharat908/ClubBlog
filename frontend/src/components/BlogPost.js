// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Avatar,
//   Box,
//   Button,
//   Link,
// } from "@mui/material";
// import { formatDistanceToNow } from "date-fns";
// import { AttachFile } from "@mui/icons-material";

// const BlogPost = ({ post }) => {
//   // Safely handle author data
//   const authorName = post?.author?.username || "Anonymous";
//   const authorInitial = authorName.charAt(0) || "A";
//   const createdDate = post?.created_at ? new Date(post.created_at) : new Date();

//   const handleDownload = () => {
//     if (post?.file) {
//       window.open(post.file, "_blank");

//       //for private file

//       // window.open(
//       //   `${post.file}?response-content-disposition=attachment`,
//       //   "_blank"
//       // );
//     }
//   };
//   const fileName = post?.file ? post.file.split("/").pop() : "";

//   return (
//     <Card
//       elevation={2}
//       sx={{
//         "&:hover": {
//           boxShadow: 6,
//           transform: "translateY(-2px)",
//           transition: "all 0.2s ease-in-out",
//         },
//       }}
//     >
//       <CardContent>
//         <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//           <Avatar
//             sx={{
//               bgcolor: "#FF9966",
//               width: 40,
//               height: 40,
//               mr: 2,
//             }}
//           >
//             {authorInitial}
//           </Avatar>
//           <Box>
//             <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//               {authorName}
//             </Typography>
//             <Typography variant="caption" color="text.secondary">
//               {formatDistanceToNow(createdDate, { addSuffix: true })}
//             </Typography>
//           </Box>
//         </Box>
//         <Typography
//           variant="h5"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontWeight: 600,
//             color: "#1e3c72",
//           }}
//         >
//           {post?.title || "Untitled Post"}
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             whiteSpace: "pre-line",
//             color: "text.primary",
//             mb: 2,
//           }}
//         >
//           {post?.content || "No content available"}
//         </Typography>
//         {post?.file && (
//           <Box sx={{ mt: 2 }}>
//             <Button
//               startIcon={<AttachFile />}
//               onClick={handleDownload}
//               variant="outlined"
//               sx={{
//                 color: "#FF9966",
//                 borderColor: "#FF9966",
//                 "&:hover": {
//                   color: "#FFB899",
//                   borderColor: "#FFB899",
//                   backgroundColor: "rgba(255, 153, 102, 0.1)",
//                 },
//               }}
//             >
//               Download File
//             </Button>
//             <Typography
//               variant="caption"
//               color="text.secondary"
//               sx={{ display: "block", mt: 1 }}
//             >
//               {fileName}
//             </Typography>
//           </Box>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default BlogPost;

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  styled,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import {
  AttachFile,
  ArrowRightAlt,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  transition: "all 0.3s ease",
  border: "none",
  borderRadius: "16px",
  boxShadow: theme.shadows[2],
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[8],
  },
}));

const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #FF9966 30%, #FF5E62 90%)",
  border: 0,
  borderRadius: "50px",
  color: "white",
  padding: "10px 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .2)",
  fontWeight: 600,
  letterSpacing: "0.5px",
  "&:hover": {
    boxShadow: "0 6px 10px 2px rgba(255, 105, 135, .3)",
    transform: "translateY(-2px)",
  },
});

const HeroSection = styled(Box)({
  position: "relative",
  height: "70vh",
  minHeight: "500px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "60px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(255,153,102,0.4) 0%, rgba(30,60,114,0.8) 100%)",
    zIndex: 1,
  },
});

const HeroImage = styled("img")({
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

const HeroContent = styled(Container)({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  color: "white",
});

const BlogPostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const authorName = post?.author?.username || "Anonymous";
  const authorInitial = authorName.charAt(0) || "A";
  const createdDate = post?.created_at ? new Date(post.created_at) : new Date();
  const contentPreview =
    post?.content?.substring(0, 150) +
    (post?.content?.length > 150 ? "..." : "");
  const hasLongContent = post?.content?.length > 150;

  const handleDownload = () => {
    if (post?.file) {
      window.open(post.file, "_blank");
    }
  };

  const fileName = post?.file ? post.file.split("/").pop() : "";

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: "#FF9966",
                width: 40,
                height: 40,
                mr: 2,
                fontWeight: "bold",
              }}
            >
              {authorInitial}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {authorName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formatDistanceToNow(createdDate, { addSuffix: true })}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#1e3c72",
              mb: 2,
              fontSize: "1.4rem",
            }}
          >
            {post?.title || "Untitled Post"}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-line",
              color: "text.secondary",
              mb: 2,
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            {expanded ? post?.content : contentPreview}
          </Typography>

          {hasLongContent && (
            <Button
              onClick={() => setExpanded(!expanded)}
              size="small"
              endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
              sx={{
                color: "#FF9966",
                fontWeight: 600,
                mb: 2,
              }}
            >
              {expanded ? "Show Less" : "Read More"}
            </Button>
          )}

          {post?.file && (
            <Box sx={{ mt: 2 }}>
              <Button
                startIcon={<AttachFile />}
                onClick={handleDownload}
                variant="outlined"
                sx={{
                  color: "#FF9966",
                  borderColor: "#FF9966",
                  "&:hover": {
                    color: "#FFB899",
                    borderColor: "#FFB899",
                    backgroundColor: "rgba(255, 153, 102, 0.1)",
                  },
                }}
              >
                Download Attachment
              </Button>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 1 }}
              >
                {fileName}
              </Typography>
            </Box>
          )}
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.shape({
      username: PropTypes.string,
    }),
    created_at: PropTypes.string,
    file: PropTypes.string,
  }).isRequired,
};

const BlogPost = ({ posts = [], loading = false, error = null }) => {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", pb: 8 }}>
      <HeroSection>
        <HeroImage
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Blog Hero"
        />
        <HeroContent maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              mb: 3,
              textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Discover Our Latest Stories
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: 400,
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Insights, ideas and inspiration from our team
          </Typography>
          <GradientButton
            endIcon={<ArrowRightAlt />}
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Explore More
          </GradientButton>
        </HeroContent>
      </HeroSection>

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: "#1e3c72",
            textAlign: "center",
          }}
        >
          Recent Articles
        </Typography>

        {posts.length > 0 ? (
          <Grid container spacing={4}>
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </Grid>
        ) : (
          <Paper elevation={0} sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h6" color="textSecondary">
              No blog posts available yet
            </Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

BlogPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.shape({
        username: PropTypes.string,
      }),
      created_at: PropTypes.string,
      file: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

BlogPost.defaultProps = {
  posts: [],
  loading: false,
  error: null,
};

export default BlogPost;
