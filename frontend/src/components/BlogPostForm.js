import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography, IconButton, Alert } from '@mui/material';
import { Upload, Close, Save, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BlogPostForm = ({ onSubmit, initialData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    file: null
  });
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size should not exceed 10MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        file: file
      }));
      setFileName(file.name);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Title and content are required');
      return;
    }
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('content', formData.content);
      if (formData.file) {
        data.append('file', formData.file);
      }
      await onSubmit(data);
      navigate('/');
    } catch (err) {
      setError('Failed to save the post. Please try again.');
    }
  };

  const clearFile = () => {
    setFormData(prev => ({
      ...prev,
      file: null
    }));
    setFileName('');
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        maxWidth: 800, 
        mx: 'auto', 
        mt: 4,
        borderRadius: 2,
        backgroundColor: 'white'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton 
          onClick={() => navigate('/')}
          sx={{ mr: 2 }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {initialData ? 'Edit Post' : 'Create New Post'}
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
        <TextField
          fullWidth
          label="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          margin="normal"
          required
          multiline
          rows={6}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
        
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="outlined"
            component="label"
            startIcon={<Upload />}
            sx={{
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            Upload File
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {fileName && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              bgcolor: 'grey.100',
              borderRadius: 2,
              px: 2,
              py: 1
            }}>
              <Typography variant="body2" sx={{ mr: 1 }}>
                {fileName}
              </Typography>
              <IconButton 
                size="small" 
                onClick={clearFile}
                sx={{ ml: 1 }}
              >
                <Close fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>

        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<Save />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            {initialData ? 'Update Post' : 'Create Post'}
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default BlogPostForm;
