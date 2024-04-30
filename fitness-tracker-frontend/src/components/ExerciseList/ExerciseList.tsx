import { useState } from 'react';
import { Box, FormControl, Container, Pagination, TextField, InputAdornment } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ExerciseCard from '../ExerciseCard';
import useExercises from '../../hooks/useExercises';
import Loading from '../Loading';
import ErrorAlert from '../ErrorAlert';
import { MuscleGroups } from '../../utils/enums';
import SuccessAlert from '../SuccessAlert';

const ExerciseList = () => {
  const { data: exercises, isLoading, isError, error } = useExercises()

  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [successMessage, setSuccessMessage] = useState(false);

  const handleSuccess = () => {
    setSuccessMessage(true);
  };

  const handleMuscleGroupChange = (event: any) => {
    setSelectedMuscleGroup(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  if(exercises == null) { return null } 

  const filteredExercises = exercises.filter((exercise) => {
    return (
      (selectedMuscleGroup ? exercise.muscleGroup === selectedMuscleGroup : true) &&
      (searchQuery ? exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
    );
  });

  const pageCount = Math.ceil(filteredExercises.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedExercises = filteredExercises.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (_event: any, value: number) => {
    setCurrentPage(value);
  };

  // list of menu items from the enum
  const muscleGroupMenuItems = Object.values(MuscleGroups).map((muscleGroup) => (
    <MenuItem key={muscleGroup} value={muscleGroup}>
      {muscleGroup}
    </MenuItem>
  ));

  return (
    <>
      <Box sx={{ width: '100%', position: 'relative', minHeight: 'calc(100vh - 100px)' }}>
        {
          successMessage &&
          <SuccessAlert message="Exercise added to routine!" />
        }

        <Container sx={{ p: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

          {/* muscle group filter */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%', 
            // mobile screens query
            '@media (max-width: 461px)': {
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }
            }}>
          <FormControl size='small' sx={{ width: 150, backgroundColor: 'white' }}>
            <Select
              value={selectedMuscleGroup}
              onChange={handleMuscleGroupChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">All</MenuItem>
              {muscleGroupMenuItems}
            </Select>
          </FormControl>

          {/* search */}
          <TextField
            placeholder="Search exercises"
            value={searchQuery}
            onChange={handleSearchChange}
            variant="outlined"
            size="small"
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          </Box>

        </Container>

        {
          isLoading &&
          <Loading />
        }

        {
          isError &&
          <ErrorAlert message={error?.message} />
        }

        {/* exercise list */}
        { !isLoading &&
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-around' }}>
          {paginatedExercises.map((exercise, index) => (
            <Box key={index} sx={{ width: { xs: '100%', sm: '48%', md: '30%', lg: '22%' } }}>
              <ExerciseCard exercise={exercise} onSuccess={handleSuccess} />
            </Box>
          ))}
        </Box>
        }

        {/* pagination */}
        {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination 
              count={pageCount} 
              page={currentPage} 
              onChange={handlePageChange} 
              style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
              />
          </Box>
        )}
      </Box>
    </>
  );
};

export default ExerciseList;
