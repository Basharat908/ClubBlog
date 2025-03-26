import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Link,
} from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { AttachFile } from "@mui/icons-material";

const BlogPost = ({ post }) => {
  // Safely handle author data
  const authorName = post?.author?.username || "Anonymous";
  const authorInitial = authorName.charAt(0) || "A";
  const createdDate = post?.created_at ? new Date(post.created_at) : new Date();

  const handleDownload = () => {
    if (post?.file) {
      window.open(post.file, "_blank");

      //for private file

      // window.open(
      //   `${post.file}?response-content-disposition=attachment`,
      //   "_blank"
      // );
    }
  };
  const fileName = post?.file ? post.file.split("/").pop() : "";

  return (
    <Card
      elevation={2}
      sx={{
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-2px)",
          transition: "all 0.2s ease-in-out",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: "#FF9966",
              width: 40,
              height: 40,
              mr: 2,
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
            fontWeight: 600,
            color: "#1e3c72",
          }}
        >
          {post?.title || "Untitled Post"}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            color: "text.primary",
            mb: 2,
          }}
        >
          {post?.content || "No content available"}
        </Typography>
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
              Download File
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
    </Card>
  );
};

export default BlogPost;
