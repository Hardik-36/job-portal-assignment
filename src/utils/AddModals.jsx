import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const AddModal = ({ open, onClose, onSubmit, fields, title }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({});
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>{title}</h2>
        {fields.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            name={field.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default AddModal;
