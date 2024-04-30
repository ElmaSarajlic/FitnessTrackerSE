import { useState } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import AddButton from '../AddButton'
import Modal from '@mui/material/Modal'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useAddRoutine from '../../hooks/useAddRoutine';
import { Routine } from '../../utils/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
};

export type RoutineFormData = {
    name: string;
}

const schema = yup.object().shape({
    name: yup.string().required('Routine name is required'),
});


const AddRoutineModal = () => {
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<RoutineFormData>({
        resolver: yupResolver(schema)
    })

    const addRoutine = useAddRoutine();

    const userId = useSelector((state: RootState) => state.auth.userId);

    if(!userId) {
      return null;
    }
    
    // to handle opening and closing of the modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data: RoutineFormData) => {
        let routine: Routine = {
            // by default, the routine will have no exercises, so only the name is needed
            name: data.name,
            userId: userId,
            creationDate: new Date().toISOString()
        }

        addRoutine.mutate({ routine });
        handleClose();
    };

    return (
        <Container maxWidth="xs">
            <AddButton handleClick={handleOpen} sx={{ fontSize: '55px' }}></AddButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="exercise-modal-title"
            >
                <Box sx={modalStyle} component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h5" color="text.secondary" textAlign="center"> Add new routine </Typography>
                    <TextField
                        label="Routine Name"
                        fullWidth
                        margin="normal"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ""}
                    />
                    <Button 
                        type="submit" 
                        size="large" 
                        style={{ marginTop: '30px', backgroundColor: '#72A1BF' }} 
                        fullWidth 
                        variant="contained"
                    >
                        Submit
                    </Button>
                </Box>
            </Modal>
        </Container>
    )
}

export default AddRoutineModal
