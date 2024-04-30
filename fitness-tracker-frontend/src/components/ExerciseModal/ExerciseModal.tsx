import { useState } from 'react';
import { Modal, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Container } from '@mui/material';
import AddButton from '../AddButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// enum for muscle groups field
const MuscleGroups = {
    CHEST: 'Chest',
    BACK: 'Back',
    LEGS: 'Legs',
    ARMS: 'Arms',
    SHOULDERS: 'Shoulders',
    ABS: 'Abs'
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ExerciseModal() {
    const [open, setOpen] = useState(false);
    const [exerciseData, setExerciseData] = useState({
        name: '',
        muscleGroup: '',
        description: '',
        image: null
    });

    // to handle opening and closing of the modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // to handle value changes in inputs
    const handleChange = (event: any) => {
        const { name, value, files } = event.target;
        setExerciseData({
        ...exerciseData,
        [name]: name === 'image' ? files[0] : value
        });
    };

    // to handle form submission
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(exerciseData);
        handleClose();
    };

  return (
  <Container maxWidth="xs">
    <AddButton handleClick={handleOpen}></AddButton>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="exercise-modal-title"
    >
    <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" color="primary" textAlign="center"> Add new exercise </Typography>
        <TextField
        name="name"
        label="Exercise Name"
        value={exerciseData.name}
        onChange={handleChange}
        id="exerciseName"
        fullWidth
        margin="normal"
        />
        <FormControl fullWidth margin="normal">
            <InputLabel>Muscle Group</InputLabel>
            <Select
              name="muscleGroup"
              value={exerciseData.muscleGroup}
              label="Muscle Group"
              onChange={handleChange}
            >
                {Object.values(MuscleGroups).map((group) => (
                    <MenuItem key={group} value={group}>
                        {group}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

        <TextField
            name="description"
            label="Description"
            value={exerciseData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            id="exerciseDescription"
            multiline
        />
        <Button component="label" style={{ marginTop: '10px' }} variant="outlined" startIcon={<CloudUploadIcon />}>
        Upload file
        <input
            type="file"
            name="image"
            onChange={handleChange}
            style={{ 
            opacity: 0,
            position: 'absolute',
            zIndex: -1,
            overflow: 'hidden'
            }}
            accept="image/*"
        />
        </Button>

        <Button type="submit" style={{ marginTop: '30px' }} fullWidth variant="contained">
            Submit
        </Button>
    </Box>
    </Modal>
    </Container>
  );
}

export default ExerciseModal;
