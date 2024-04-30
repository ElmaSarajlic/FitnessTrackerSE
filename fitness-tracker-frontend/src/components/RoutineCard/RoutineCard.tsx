import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Routine } from '../../utils/types';
import useDeleteRoutine from '../../hooks/useDeleteRoutine';

type Props = {
    routine: Routine;
};

const RoutineCard = ({ routine }: Props) => {
    const displayedExercises = routine.exercises?.map((exercise) => exercise.exerciseName).join(', ');
    const deleteRoutine = useDeleteRoutine();

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
      navigate(`/routines/${routine.id}`);

      handleClose();
    };

    const handleDelete = () => {
      if (!routine.id) return;
      deleteRoutine.mutate({ id: routine.id });
      handleClose();
    };

    return (
        <Card sx={{ minWidth: 275, minHeight: 140, padding: 2, position: 'relative' }}>
            <IconButton onClick={handleClick} sx={{ position: 'absolute', top: 0, right: 0 }}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {routine.name}
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {routine.exercises?.length === 0 ? 'No exercises added yet' : displayedExercises}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="medium" 
                    variant="contained" 
                    sx={{ 
                        margin: 'auto', 
                        backgroundColor: '#72A1BF',
                        '&:hover': {
                            color: 'white'
                        }
                    }}
                    component={Link}
                    to={`/routines/${routine.id}`}
                >
                    Open Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default RoutineCard;
