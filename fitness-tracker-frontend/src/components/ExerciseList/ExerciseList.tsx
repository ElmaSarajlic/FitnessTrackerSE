import { exerciseList } from "../../constants";
import { useState } from 'react';
import ExerciseCard from "../ExerciseCard";
import { Grid } from '@mui/material';

type Props = {};

const ExerciseList = (props: Props) => {
  const [exercises, setExercises] = useState(exerciseList);

  return (
    <Grid container spacing={2}>
      {exercises.map((exercise, i) => (
        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
          <ExerciseCard exercise={exercise} />
        </Grid>
      ))}
    </Grid>
  );

};

export default ExerciseList;
