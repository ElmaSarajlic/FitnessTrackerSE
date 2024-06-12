import { Box, Container, TextField, Typography } from '@mui/material'
import ExerciseDetailList from '../components/ExerciseDetailList';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { ExerciseDetail, Routine } from '../utils/types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useParams } from 'react-router-dom';
import { useRoutine, useUpdateRoutine } from '../hooks';
import Loading from '../components/Loading';
import ErrorAlert from '../components/ErrorAlert';
import useMarkRoutineDone from '../hooks/useMarkRoutineDone';
import SuccessAlert from '../components/SuccessAlert';

const RoutineDetails = () => {
    const { id } = useParams();

    const validId = id ?? ''; // empty string if id undefined, bc ts null checks
    const { data, isLoading, isError, error } = useRoutine(validId);

    const [routine, setRoutine] = useState<Routine | null>(null);
    const [isChanged, setIsChanged] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
    const [deletedExercises, setDeletedExercises] = useState<string[]>([]);
    const [successMessage, setSuccessMessage] = useState(false);

    const updateRoutine = useUpdateRoutine();
    const markDone = useMarkRoutineDone();

    useEffect(() => {
        if (data) setRoutine(data);
    }, [data]);
    
    const handleExerciseDetailsChange = (updatedList: ExerciseDetail[]) => {
      setRoutine(routine => routine ? { ...routine, exercises: updatedList } : null);
      setIsChanged(true);
    };

    const handleRoutineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoutine(routine => routine ? { ...routine, name: event.target.value } : null);
        setIsChanged(true);
    };

    const handleSuccess = () => {
      setSuccessMessage(true);
    }

    const handleSaveChanges = () => {
      if (routine && id && routine.exercises) {
          const updatedExercises = routine.exercises.filter(exercise => 
            !deletedExercises.includes(exercise.detailId ?? '')
          );
  
          const updatedRoutine = { ...routine, exercises: updatedExercises };
  
          updateRoutine.mutate({ id, data: updatedRoutine });
      }
      setIsChanged(false);
    };  
  
    const handleCompleteRoutine = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => setOpenDialog(false);

    const handleConfirmCompletion = () => {
      const formattedDate = new Date(selectedDate).toISOString();
      
      if (!id) return;
      markDone.mutate({id: id, dateCompleted: formattedDate }, 
        { 
          onSuccess: () => {
            handleSuccess();
          }
        }
      );
      setOpenDialog(false);
    };

    const handleDateChange = (event: any) => {
      // keep the time constant and change only the date
      const newDateTime = new Date(selectedDate);
      const newSelectedDate = new Date(event.target.value + 'T00:00:00');
  
      newDateTime.setFullYear(newSelectedDate.getFullYear(), newSelectedDate.getMonth(), newSelectedDate.getDate());
      setSelectedDate(newDateTime.toISOString());
    };

    

    const handleDeleteExercise = (exerciseDetailId: string) => {
      setDeletedExercises(prev => [...prev, exerciseDetailId]);
      setIsChanged(true);
    };
  
    return (
      <>
        <Container sx={{ 
          mt: 12, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          }}>
          <Typography variant="h4" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
            Workout Plan
          </Typography>

          { 
            successMessage &&
            <SuccessAlert message="Successfully marked as completed" />
          }

          {
            isLoading &&
            <Loading />
          }

          {
            isError &&
            <ErrorAlert message={error?.message} />
          }

          {/* name of routine */}
          { 
            routine &&
            <Box>
              <Box>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontSize: '25px' }}>
                  Name
                </Typography>
                <TextField
                  type="text"
                  value={routine.name}
                  onChange={handleRoutineChange}
                  variant="outlined"
                  size="medium"
                  InputProps={{ style: { color: 'text.secondary' } }}
                  sx={{ minWidth: '300px', backgroundColor: 'white' }}
                />
              </Box>

              {/* exercises */}
              <Box>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontSize: '25px' }}>
                  Exercises
                </Typography>
                <ExerciseDetailList 
                  exerciseDetailList={routine.exercises ?? []} 
                  onExerciseDetailsChange={handleExerciseDetailsChange}
                  onDeleteExercise={handleDeleteExercise}
                />
              </Box>
          </Box>
          }

          {/* handle changes or complete the routine */}
          <Box sx={{ 
            mt: 2, 
            mb: 5, 
            display: 
            'flex', 
            width: '70%', 
            justifyContent: 'space-between',
            // media query for smaller screens
            '@media (max-width: 600px)': {
                width: '100%'
            }


            }}>
            <Button 
              variant="contained" 
              disabled={!isChanged} 
              color="success"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
            <Button 
              variant="contained" 
              color="success" 
              onClick={handleCompleteRoutine}
            >
              Complete Routine
            </Button>
          </Box>
        </Container>

        {/* dialog for completing routine */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle sx={{mb: 1, minWidth: '300px'}}>Complete Routine</DialogTitle>
          <DialogContent>
          <TextField
              label="Completion Date"
              type="date"
              value={selectedDate.split('T')[0]} // extract only the date part for this field
              onChange={handleDateChange}
              InputLabelProps={{ shrink: true }}
              margin="dense"
              fullWidth
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleConfirmCompletion}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </>
    );
};
  

export default RoutineDetails
